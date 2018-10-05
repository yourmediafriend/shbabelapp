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
      //  this.recalculateDurations = this.recalculateDurations.bind(this);
    }

    componentDidMount() {
      console.log('componentDidMount:', this.props);

      this.test();
      this.createScene();

      // if (this.shouldEnable()) {
      //   this.createScene();
      // }
    }

    test() {
      console.log('test:', this.props);
    }

    componentDidUpdate(prevProps) {
      this.createScene();
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

    getOptions() {
      let container = this.props.container || globalOptions.container;
      let offset = this.props.offset || globalOptions.offset;
      return {offset, container};
    }

    createScene() {

      let $el = ReactDOM.findDOMNode(this.myRef.current);
      let $parent = this.props.parentRef.current;

      console.log('createScene $el', $el);
      console.log('createScene $parent', $parent);

    //  console.log('createScene $parent', $parent);

 /*     let options = this.getOptions();

      let $el = ReactDOM.findDOMNode(this.myRef.current);

      // I need to wait until ref is attached. So Scene is Updated with componet

      debugger;

      let $parent = ReactDOM.findDOMNode(this.props.forwardedRef.current);

      console.log($parent);

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

      this.sceneCreated = true;*/

    }

    render() {
      console.log('Render:', this.props);
      const {extraProp, ...passThroughProps} = this.props;

      return <WrappedComponent
        ref={this.myRef}
        {...passThroughProps}
        />;
    }
  }

  return scrollMagicEnhanced;

}

export default withSubscription;