import React from 'react';
import ReactDOM from 'react-dom';
import verge from 'verge';
import ScrollMagic from 'scrollmagic-with-ssr';
import { getOr } from 'lodash/fp';
import S from 'camel-case-selector';
import 'AnimationGsap';
//import 'debug.addIndicators';

let globalOptions = {
  offset: 0,
  container: 'body',
};

function withSubscription(WrappedComponent, selectData) {

  class scrollMagicEnhanced extends React.Component {

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

    componentDidUpdate(prevProps) {


/*      if (this.shouldEnable()) {
        console.log('oof');
        this.createScene();
      }

      if (this.props !== prevProps.parentRef) {
        // console.log('componentDidUpdate');§
        // console.log('old props:', prevProps);
        // console.log('new props:', this.props);
      }*/
    }

    createScene() {

      let options = this.getOptions();

      let $el = ReactDOM.findDOMNode(this.myRef.current);


      // I need to wait until ref is attached. So Scene is Updated with componet
/*      let $parent = ReactDOM.findDOMNode(this.props.parentRef.current);
      console.log($parent);*/

      this.controller = new ScrollMagic.Controller({
        container: options.container,
        loglevel: 2,
        addIndicators: true
      });

      this.scenes.push(new ScrollMagic.Scene({
        triggerHook: 0,
        triggerElement: $el,
        offset: -85,
        duration: 15000 // get height of main page  $parent.offsetHeight
      })
        .setPin("#pinned")
        .on("enter", function (event) {
          //this.myRef.current.toggleStickyPanel();
        }.bind(this))
        .on("leave", function (event) {
          // this.myRef.current.toggleStickyPanel();
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

      /*          let options = this.getOptions();
        let $holders = S(this.refs.scene).queryAll.sceneContentHolder;
            let $holder = $holders[0];
            let firstScene = this.scenes[0];

            if(firstScene){
              firstScene.duration($holder.clientHeight + options.offset + 'px');
            }*/
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

  return scrollMagicEnhanced;


}

export default withSubscription;