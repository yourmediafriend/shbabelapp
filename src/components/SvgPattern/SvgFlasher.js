import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SVG from 'svgjs';
import Skull from './media/svgTileSkull.svg'
import Lightening from './media/svgTileLightening.svg'
import Globe from './media/svgTileGlobe.svg'
import Peace from './media/svgTilePeace.svg'


import {get, getOr} from 'lodash/fp';

class SvgFlasher extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.svgArray = [Skull, Lightening, Globe, Peace];
    this.colorArray = ['#000000', 'blue', 'yellow', '#ffffff'];
    this.state={ count: 0}
  }

  componentDidMount() {
    this.createPattern();
  }

  createPattern() {

    this.draw = SVG(this.myRef.current).viewbox(0, 0, 100, 100);
    let rect = this.draw.rect(100,100);

    this.pattern = this.draw.pattern(50, 50, function(add) {
      // the viewbox size should match the imported svg height and width.
      add.svg(this.svgArray[this.state.count]).viewbox(0, 0, 100, 100).attr({fill: this.colorArray[this.state.count] });

    }.bind(this))

    rect.attr({ fill: this.pattern });

  }

  updatePattern() {
    this.pattern.update(function(add) {
      add.svg(this.svgArray[this.state.count]).attr({fill: this.colorArray[this.state.count] });;
    }.bind(this))
  }


  shouldComponentUpdate(nextProps, nextState) {

    // this is almost right but scenePosition still changes side bar scroll
    // I need to make the compare a bit more complicated

    // still nbot right but better
    return ( (nextState.count === this.state.count && nextProps.offCanvasMenuAnimating === this.props.offCanvasMenuAnimating) && !(nextProps.offCanvasMenuAnimating) );

  }

  componentWillUpdate(nextProps, nextState){

    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1 >= this.svgArray.length ?  0 : prevState.count + 1
      };
    });
    this.updatePattern();
  }

  render() {
    return (
      <div ref={this.myRef} />
    )
  }
}

export default SvgFlasher;

