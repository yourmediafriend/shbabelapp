import React from 'react';
import ReactDOM from 'react-dom';
import verge from 'verge';
import ScrollMagic from 'scrollmagic-with-ssr';
import 'AnimationGsap';
import 'debug.addIndicators';

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

      // let $hero = document.getElementById("home-hero");
      // console.log('Home-hero height',$hero.getBoundingClientRect().height);

      if (this.shouldEnable()) {
        this.createScene();
      }
      window.addEventListener('resize', this.recalculateDurations);
    }

    componentDidUpdate() {
      // let $hero = document.getElementById("home-hero");
      // console.log('componentDidUpdate Home-hero height',$hero.getBoundingClientRect().height);
    }


    createScene() {
      let options = this.getOptions();
      this.controller = new ScrollMagic.Controller({
        container: options.container,
        // addIndicators: true,
        // loglevel: 2,
      });

      this.addSectionScene()
      this.sceneCreated = true;

    }

    addSectionScene() {
      let $el = ReactDOM.findDOMNode(this.myRef.current);

      this.scenes.push(new ScrollMagic.Scene({
        triggerHook: 1,
        triggerElement: $el,
        offset: 0
      })
        .on("enter", function (event) {
          console.log('enter showCarousel');
          this.setState({showCarousel:true});
        }.bind(this))
        .on("leave", function (event) {
          this.setState({showCarousel:false});
        }.bind(this))
        .addTo(this.controller));




    }

    updateScene() {

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
      const {extraProp, ...passThroughProps} = this.props;
      return <WrappedComponent
        ref={this.myRef}
        {...passThroughProps}
        showCarousel={this.state.showCarousel}
      />;
    }
  }
}

export default withSubscription;