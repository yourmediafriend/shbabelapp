import React, { Component } from 'react';
import verge from 'verge';
import S from 'camel-case-selector';
import PropTypes from 'prop-types';
import ParallaxContent from './ParallaxContent';
import { TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic-with-ssr';
import 'AnimationGsap';
//import 'debug.addIndicators';

let globalOptions = {
  offset: 0,
  power: 0.2,
  ease: Linear.easeNone,
  disableMobile: false,
  disable: false,
/*  container: '.parallax-scroll',*/
  defaultMobileWidth: 600
};

class ScrollMagicEnhanced extends Component {

  constructor(){
    super(...arguments)
    this.scenes = [];
    this.tweens = [];
    this.controller = null;
    this.recalculateDurations = this.recalculateDurations.bind(this);
  }

  getOptions(){
    let offset = this.props.offset || globalOptions.offset;
    let power = this.props.power || globalOptions.power;
    let easeExit, easeEnter;
    let ease = this.props.ease || globalOptions.ease;
    easeEnter = ease.enter === undefined ? ease : ease.enter;
    easeExit = ease.exit === undefined ? ease : ease.exit;
    let container = this.props.container || globalOptions.container;
    return {offset, power, ease: {enter: easeEnter, exit: easeExit}, container: container};
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

  componentDidMount(){
    if(this.shouldEnable()){
      this.createParallax();
    }
    window.addEventListener('resize', this.recalculateDurations);
  }

  createParallax(){

    let options = this.getOptions();

  //  console.log('PB Container',options.container);


    this.controller = new ScrollMagic.Controller({
      container: options.container,
/*     loglevel: 2,
      addIndicators: true*/
    });

    let $holders = S(this.refs.parallax).queryAll.parallaxContentHolder;

    let $firstHolder = $holders[0];
    let $firstContent = $firstHolder.query.parallaxContent;


   // console.log('PB $firstHolder',$firstHolder);


    // console.log('container', options.container);
    // console.log('controller', this.controller);
    // console.log($firstHolder);
    // console.log($firstContent);

    //first exit scene
    let firstExitTween = this.firstSceneExit($firstContent, options);

    this.tweens.push(firstExitTween);

    // debugger;
    // console.log($firstHolder.clientHeight + options.offset + 'px');

    this.scenes.push(new ScrollMagic.Scene({
        offset: -options.offset + 'px',
        triggerElement: $firstHolder,
        triggerHook: 0.0,
        duration: $firstHolder.clientHeight + options.offset + 'px'
      }).setTween(firstExitTween)
        .addTo(this.controller)
    );


/*    $holders.slice(1).forEach($holder => {
      let $content = $holder.query.parallaxContent;
      //other enter scene
      let enterTween = this.otherSceneEnter($content, options);
      this.tweens.push(enterTween);
      this.scenes.push(new ScrollMagic.Scene({
          offset: -options.offset + 'px',
          triggerElement: $holder,
          triggerHook: 1.0,
          duration: $holder.clientHeight + options.offset + 'px'
        }).setTween(enterTween)
          .addTo(this.controller)
      );

      //other exit scene
      let exitTween = this.otherSceneExit($content, options);
      this.tweens.push(exitTween);
      this.scenes.push(new ScrollMagic.Scene({
          offset: -options.offset + 'px',
          triggerElement: $holder,
          triggerHook: 0.0,
          duration: $holder.clientHeight + options.offset + 'px'
        }).setTween(exitTween)
          .addTo(this.controller)
      );
    });*/
    this.parallaxCreated = true;
  }

  destroyParallax(){
    if(this.controller) this.controller.destroy(true);
    this.controller = null;
    this.scenes.forEach(scene => scene.destroy(true));
    this.scenes = [];
    this.tweens.forEach(tween => tween.kill());
    this.tweens = [];
    this.parallaxCreated = false;
  }

  firstSceneExit($firstContent, options){
   // console.log('firstSceneExit', $firstContent.clientHeight * options.power + 'px');
    //$firstContent.clientHeight * options.power + 'px'
    let tranformSize = 100;
    return TweenMax.fromTo($firstContent, tranformSize, {y: '0px'}, {y: tranformSize + 'px', z: '-0.01px', force3D: true, ease: Linear.easeNone})
  }

  otherSceneEnter($content, options){
    return TweenMax.fromTo($content, 1.0, {y: -$content.clientHeight * options.power + 'px'}, {y: '0px', z: '-0.01px', force3D: true, ease: options.easeEnter});
  }

  otherSceneExit($content, options){
    return TweenMax.fromTo($content, 1.0, {y: '0px'}, {y: $content.clientHeight * options.power + 'px', z: '-0.01px', force3D: true, ease: options.easeExit});
  }

  componentWillUnmount(){
    this.destroyParallax();
    window.removeEventListener('resize', this.recalculateDurations);
  }

  recalculateDurations(){

    if(this.parallaxCreated && !this.shouldEnable()){
      return this.destroyParallax();
    }else if(!this.parallaxCreated && this.shouldEnable()){
      return this.createParallax();
    }

    let options = this.getOptions();

    let $holders = S(this.refs.parallax).queryAll.parallaxContentHolder;

    let firstScene = this.scenes[0];
    let $firstHolder = $holders[0];
    let otherScenes = this.scenes.slice(1);
    let $otherHolders = $holders.slice(1);

    if(firstScene){
      firstScene.duration($firstHolder.clientHeight + options.offset + 'px');
      firstScene.setTween(this.firstSceneExit($firstHolder, options));
    }
    otherScenes.forEach((scene, index) => {
      let holderIndex = parseInt(index/2, 10);
      scene.duration($otherHolders[holderIndex].clientHeight + options.offset + 'px');
    });
  }

  render(){
    const className = `parallax${this.props.className ? " " + this.props.className : ''}`;
    const style = this.props.style;
    const id = this.props.id || undefined;
    return <div id={id} ref="parallax" className={className} style={style} onLoad={this.recalculateDurations}>
      {this.props.children}
    </div>
  }

}

ScrollMagicEnhanced.setGlobalOptions = (options) => {
  PropTypes.checkPropTypes(Object.assign(ScrollMagicEnhanced.propTypes, {
    defaultMobileWidth: PropTypes.number
  }), options, 'prop', 'Parallax global settings');
  globalOptions = Object.assign(globalOptions, options);
}

ScrollMagicEnhanced.propTypes = {
  offset: PropTypes.number,
  power: PropTypes.number,
  ease: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      enter: PropTypes.object.isRequired
    }),
    PropTypes.shape({
      exit: PropTypes.object.isRequired
    }),
    PropTypes.shape({
      enter: PropTypes.object.isRequired,
      exit: PropTypes.object.isRequired
    })
  ]),
  disableMobile: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.number
  ]),
  disable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.number
  ]),
  container: PropTypes.string
}

export default ScrollMagicEnhanced;
export {ParallaxContent};