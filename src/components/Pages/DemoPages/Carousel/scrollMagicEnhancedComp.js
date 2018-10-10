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
      this.createScenne();
    }
    window.addEventListener('resize', this.recalculateDurations);
  }

  createScene(){


    this.sceneCreated = true;
  }

  destroyParallax(){
    if(this.controller) this.controller.destroy(true);
    this.controller = null;
    this.scenes.forEach(scene => scene.destroy(true));
    this.scenes = [];
    this.tweens.forEach(tween => tween.kill());
    this.tweens = [];
    this.sceneCreated = false;
  }

  componentWillUnmount(){
    this.destroyParallax();
    window.removeEventListener('resize', this.recalculateDurations);
  }

  recalculateDurations(){

    if(this.sceneCreated && !this.shouldEnable()){
      return this.destroyParallax();
    }else if(!this.sceneCreated && this.shouldEnable()){
      return this.createScene();
    }

    let options = this.getOptions();

  }

  render(){
    const className = `${this.props.className ? '' + this.props.className : ''}`;
    const style = this.props.style;
    const id = this.props.id || undefined;
    return <div id={id}  className={className} style={style} onLoad={this.recalculateDurations}>
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