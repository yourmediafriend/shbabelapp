import React from 'react';
import verge from 'verge';
import { getOr } from 'lodash/fp';
import S from 'camel-case-selector';
import { TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic-with-ssr';
import 'AnimationGsap';
//import 'debug.addIndicators';


let globalOptions = {
  offset: 0,
  container: 'body',
  power: 0.3,
  ease: Linear.easeNone,
  disableMobile: false,
  disable: false,
  defaultMobileWidth: 600
};

function withScrollMagic(WrappedComponent, selectData) {

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
      let offset = this.props.offset || globalOptions.offset;
      let power = this.props.power || globalOptions.power;
      let easeExit, easeEnter;
      let ease = this.props.ease || globalOptions.ease;
      easeEnter = ease.enter === undefined ? ease : ease.enter;
      easeExit = ease.exit === undefined ? ease : ease.exit;
      let container = this.props.container || globalOptions.container;
      return {offset, power, ease: {enter: easeExit, exit: easeEnter}, container: container};
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

      this.controller = new ScrollMagic.Controller({
        container: options.container,
/*        loglevel: 2,
        addIndicators: true*/
      });

      let $holders = S(this.refs.scene).queryAll.parallaxContentHolder;

      $holders.forEach(function(el,i){

        let $parallaxContent =  S(el).query.parallaxImage
        let firstExitTween = this.firstSceneExit($parallaxContent, options);

        this.scenes.push(
          new ScrollMagic.Scene({
            triggerElement: el,
            triggerHook: 'onEnter',
            duration: '150%',
          }).setTween(firstExitTween)
            .addTo(this.controller)
        );
      }.bind(this));

    }

    firstSceneExit($firstContent, options){
      return TweenMax.fromTo($firstContent, 1.0, {y: '-50%'}, {y: $firstContent.clientHeight * options.power + 'px', z: '-0.01px', force3D: true, ease: options.easeExit})
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

      //let options = this.getOptions();

      // let $holders = S(this.refs.scene).queryAll.sceneContentHolder;
      // let $holder = $holders[0];
      // let firstScene = this.scenes[0];
      //
      // if(firstScene){
      //   firstScene.duration($holder.clientHeight + options.offset + 'px');
      // }


    }

    render() {
      const {extraProp, ...passThroughProps} = this.props;
      return <WrappedComponent
        ref={this.myRef}
        {...passThroughProps}
        sceneActive={getOr(false, 'sceneActive', this.state)}
      />;
    }
  }

}

export default withScrollMagic;