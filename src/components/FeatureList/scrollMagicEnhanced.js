import React from 'react';
import ReactDOM from 'react-dom';
import verge from 'verge';
import ScrollMagic from 'scrollmagic-with-ssr';
import 'AnimationGsap';
import 'debug.addIndicators';
import S from "camel-case-selector";
import { TweenMax, TimelineMax, Power1, Power2, Power4, } from 'gsap';


let globalOptions = {
  offset: 0,
  container: 'body',
};

function withSubscription(WrappedComponent, selectData) {

  return class extends React.Component {

    constructor() {
      super(...arguments);
      this.myRef = React.createRef();
      this.state = {activeSceneId: 0};
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

    shouldEnable() {
      let w = verge.viewportW();
      let disable = this.props.disable !== undefined ? this.props.disable : globalOptions.disable;
      let disableMobile = this.props.disableMobile !== undefined ? this.props.disableMobile : globalOptions.disableMobile;

      if (typeof disable === 'function') {
        return !disable();
      } else if (typeof disable === 'boolean' && disable) {
        return !disable;
      } else if (typeof disableMobile === 'function') {
        disableMobile = disableMobile();
        if (typeof disableMobile === 'boolean' && disableMobile && w <= globalOptions.defaultMobileWidth) {
          return false;
        } else if (typeof disableMobile === 'number' && w <= disableMobile) {
          return false;
        }
      } else if (typeof disableMobile === 'boolean' && disableMobile && w <= globalOptions.defaultMobileWidth) {
        return false;
      } else if (typeof disableMobile === 'number' && w <= disableMobile) {
        return false;
      }
      return true;
    }

      componentDidMount() {

      // get the height of List
        let $el = document.getElementById("FeatureList");
        //console.log('componentDidMount', $el.getBoundingClientRect() );
        //let sectionCnt = $hero.querySelectorAll('.section').length;

      if (this.shouldEnable()) {
        this.createScene();
      }
      window.addEventListener('resize', this.recalculateDurations);
    }

    componentDidUpdate() {
/*      console.log('componentDidUpdate');
      if (this.shouldEnable()) {
        this.createScene();
      }*/
    }
      
    createScene() {

      let options = this.getOptions();

     // console.log(this.myRef.current);
            
      let $el = ReactDOM.findDOMNode(this.myRef.current);
      let $holders = S($el).queryAll.listGroupItem;


      if ($holders) {
        this.controller = new ScrollMagic.Controller({
          container: options.container,
          // addIndicators: true,
          // loglevel: 2,
        });

        let timeline = new TimelineMax({  });
        let tweenDuration = 0.25;
        let tweenDurationDelay = 0;
        let tweenDurationDelayTxt = 0;

        let delay = 0;

        $holders.map((el, index) => {
          delay = el.dataset.delay;
          //tweenDurationDelay =  (tweenDuration * index) - (delay /100);
          tweenDurationDelay = delay /50;
          timeline.add(TweenMax.to(el.queryAll.img, tweenDuration, {opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power1.easeOut}), tweenDurationDelay );
          timeline.add(TweenMax.to(el.queryAll.text, tweenDuration, {opacity: 1, transform: 'translate3d(0, 0, 0)', ease: Power1.easeOut}), `-=${tweenDuration}`);
          return el;

        });

        timeline.pause();

        this.scenes.push(new ScrollMagic.Scene({
          triggerHook: 0.5,
          triggerElement: $el,
          offset: -250,
        })
          .on("enter", function (event) {
           timeline.play();
          }.bind(this))
          .on("leave", function (event) {
          //  timeline.reverse()
          }.bind(this))
          .addTo(this.controller));

        this.sceneCreated = true;
      }
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

    }

    render() {
      const {extraProp, ...passThroughProps} = this.props;
      return <WrappedComponent
        ref={this.myRef}
        {...passThroughProps}
        activeSceneId={this.state.activeSceneId}
      />;
    }


      // render() {
    //   const { extraProp } = this.props;
    //   return <WrappedComponent
    //     ref={this.myRef}
    //     activeSceneId={this.state.activeSceneId}
    //   />;
    // }
  }
}

export default withSubscription;