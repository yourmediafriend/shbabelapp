import React from 'react';
import ReactDOM from 'react-dom';
import verge from 'verge';
import ScrollMagic from 'scrollmagic-with-ssr';
import 'AnimationGsap';
import 'debug.addIndicators';

import { getOr, assign } from 'lodash/fp';
import S from "camel-case-selector";

let globalOptions = {
  offset: 0,
  container: 'body',
};

function withSubscription(WrappedComponent, selectData) {

  return class extends React.Component {

    constructor() {
      super(...arguments);
      this.myRef = React.createRef();
      this.state = {
        activeSceneId:0,
        heroActive:false};
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
        // addIndicators: true,
        // loglevel: 2,
      });

      this.addSectionScene();

      this.sceneCreated = true;

    }

    componentDidUpdate() {
      let $hero = document.getElementById("home-hero");
      console.log($hero.getBoundingClientRect().height);
    }

    addSectionScene() {

      let $hero = document.getElementById("home-hero");
      let sectionCnt = $hero.querySelectorAll('.section').length;

      //console.log('section', $hero.querySelectorAll('.section'));

      // add Sections
      for (let i = 0; i < (sectionCnt-1); i++) {
        this.scenes.push(new ScrollMagic.Scene({
          offset: window.innerHeight * i,
          duration: window.innerHeight,
        })
          .on("enter", function (i, event) {
            this.setState({activeSceneId:i});
            console.log('enter - start this now', i);
          }.bind(this, i))
          .on("leave", function (i, even) {
            /*    this.setState({title:'title'});
                console.log('leave - stop it now', i);*/
          }.bind(this, i))
          .addTo(this.controller));
      }

      //console.log($hero.getBoundingClientRect().height);

      this.scenes.push(new ScrollMagic.Scene({
        triggerHook: 0,
        trigger: 0,
    /*    triggerElement: $hero,*/
        offset: 0,
        duration: 2392 +  window.innerHeight  // $hero.getBoundingClientRect().height // get height of main page  $parent.offsetHeight
      })
        .on("enter", function (event) {
          console.log('enter');
          this.setState({heroActive:true});
        }.bind(this))
        .on("leave", function (event) {
          console.log('leave');
          this.setState({heroActive:false});
        }.bind(this))
        .addTo(this.controller));

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
x
    recalculateDurations() {

      if(this.sceneCreated && !this.shouldEnable()){
        return this.destroyScene();
      }else if(!this.sceneCreated && this.shouldEnable()){
        return this.createScene();
      }

      let options = this.getOptions();
      let firstScene = this.scenes[0];
      let otherScenes = this.scenes.slice(1);

      this.scenes.forEach((scene, index) => {
        scene.offset( window.innerHeight * index );
        scene.duration( window.innerHeight );
      });

      // if(firstScene){
      //   firstScene.duration($firstHolder.clientHeight + options.offset + 'px');
      //   firstScene.setTween(this.firstSceneExit($firstHolder, options));
      // }
      //
      // otherScenes.forEach((scene, index) => {
      //   scene.duration($otherHolders[holderIndex].clientHeight + options.offset + 'px');
      // });

    }

    render() {
      const { extraProp } = this.props;
      return <WrappedComponent
        ref={this.myRef}
        heroActive={this.state.heroActive}
        activeSceneId={this.state.activeSceneId}
      />;
    }
  }
}

export default withSubscription;