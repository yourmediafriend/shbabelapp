import React from 'react';
import ReactDOM from 'react-dom';
import verge from 'verge';
import ScrollMagic from 'scrollmagic-with-ssr';
import 'AnimationGsap';
import 'debug.addIndicators';

import { getOr } from 'lodash/fp';

let globalOptions = {
  offset: 0,
  container: 'body',
};

function withSubscription(WrappedComponent, selectData) {

  return class extends React.Component {

    constructor() {
      super(...arguments);
      this.myRef = React.createRef();
      this.state = {};
      this.scenes = [];
      this.tweens = [];
      this.controller = null;
      this.recalculateDurations = this.recalculateDurations.bind(this);

    }

    getOptions() {
      let container = this.props.container || globalOptions.container;
      let offset = this.props.offset || globalOptions.offset;
      return {offset, container};
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
      let $el = ReactDOM.findDOMNode(this.myRef.current);
      this.controller = new ScrollMagic.Controller({
        container: options.container,
        // loglevel: 2,
        // addIndicators: true
      });

      this.scenes.push(new ScrollMagic.Scene({
        offset: ($el.clientHeight * 5)+'px',
        triggerHook: 0,
      })
        .on("enter", function (event) {
          this.myRef.current.toggleCompactHeader();
        }.bind(this))
        .on("leave", function (event) {
          this.myRef.current.toggleCompactHeader();
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
    }

    render() {
      const {extraProp, ...passThroughProps} = this.props;
      return <WrappedComponent
        ref={this.myRef}
        {...passThroughProps}

      />;
    }
  }
}

export default withSubscription;