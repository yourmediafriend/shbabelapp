import React, { Component } from 'react';


import verge from 'verge';
import S from 'camel-case-selector';
import PropTypes from 'prop-types';

import ScrollMagic from 'scrollmagic-with-ssr';
//import 'AnimationGsap';
//import 'debug.addIndicators';

import {get, getOr} from 'lodash/fp';

let globalOptions = {
  offset: 0,
  container: 'body',
  triggerElement: 0
};

function withSubscription(WrappedComponent, selectData) {

  return class extends React.Component {

    constructor() {
      super(...arguments);
      this.state = {};
      this.scenes = [];
      this.tweens = [];
      this.controller = null;
      this.recalculateDurations = this.recalculateDurations.bind(this);
    }

    getOptions() {
      let container = this.props.container || globalOptions.container;
      let offset = this.props.offset || globalOptions.offset;
      let triggerElement = this.props.triggerElement || globalOptions.triggerElement;

      return {offset, container, triggerElement};
    }

    shouldEnable(){
      let w = verge.viewportW();
      let disable = this.props.disable !== undefined ? this.props.disable : globalOptions.disable;
      let disableMobile = this.props.disableMobile !== undefined ? this.props.disableMobile : globalOptions.disableMobile;

      if(typeof disable === 'function'){
        return !disable();
      }else if(typeof disable === 'boolean' && disable){
        return !disable;
      }else if(typeof disableMobile === 'function'){
        disableMobile = disableMobile();
        if(typeof disableMobile === 'boolean' && disableMobile && w <= globalOptions.defaultMobileWidth){
          return false;
        }else if(typeof disableMobile === 'number' && w <= disableMobile){
          return false;
        }
      }else if(typeof disableMobile === 'boolean' && disableMobile && w <= globalOptions.defaultMobileWidth){
        return false;
      }else if(typeof disableMobile === 'number' && w <= disableMobile){
        return false;
      }
      return true;
    }

    componentDidMount() {
      if (this.shouldEnable()) {
        this.createScene();
      }
      window.addEventListener('resize', this.recalculateDurations);
    }

    createScene() {

      let options = this.getOptions();

      // I could do with optimising this bit  as I am not suing it in the same way as the PAralax Mixin
      let $holders = S(this.refs.scene).queryAll.sceneContentHolder;
      let $holder = $holders[0];

      this.controller = new ScrollMagic.Controller({
        container: options.container,
/*        loglevel: 2,
        addIndicators: true*/
      });

      this.scenes.push(new ScrollMagic.Scene({
        offset: -options.offset + 'px',
        triggerElement: $holder,
        triggerHook: options.triggerElement,
        duration: $holder.clientHeight + 'px'
      })
      .on("enter", function (event) {
        this.setState({sceneActive: true});
      }.bind(this))
      .on("leave", function (event) {
        this.setState({sceneActive: false})
      }.bind(this))
      .on("update", function (event) {
        // this is change the state too often
        if(event.scrollPos%20 === 0) {
          if (event.scrollPos >= event.startPos && event.scrollPos <= event.endPos) {
            this.setState({scenePosition: (event.scrollPos - event.startPos)})
          }
        }
      }.bind(this))
      .addTo(this.controller));

      this.sceneCreated = true;
    }

    destroyScene() {
      if(this.controller) this.controller.destroy(true);
      this.controller = null;
      this.scenes.forEach(scene => scene.destroy(true));
      this.scenes = [];
      this.sceneCreated = false;
    }

    componentWillUnmount() {
      this.destroyScene();
      window.removeEventListener('resize', this.recalculateDurations);
    }

    recalculateDurations() {
      if(this.sceneCreated && !this.shouldEnable()){
        return this.destroyScene();
      }else if(!this.sceneCreated && this.shouldEnable()){
        return this.createScene();
      }

      let options = this.getOptions();

      let $holders = S(this.refs.scene).queryAll.sceneContentHolder;
      let $holder = $holders[0];
      let firstScene = this.scenes[0];

      if(firstScene){
        firstScene.duration($holder.clientHeight + options.offset + 'px');
      }
    }

    render() {
      const {extraProp, ...passThroughProps} = this.props;
      return <WrappedComponent
        {...passThroughProps}
        sceneActive={getOr(false, 'sceneActive', this.state)}
        scenePosition={getOr(0, 'scenePosition', this.state)}
      />;
    }
  }

}

export default withSubscription;