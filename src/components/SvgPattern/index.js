import React, { Component } from 'react';
import {connect} from "react-redux";

import SVG from 'svgjs';

import SvgPattern from './svgPattern'
import SvgFlasher from '../SvgFlasher';

import styles from './svgPatternStyles';
import scrollMagicEnhanced from './scrollMagicEnhanced';
import {get} from "lodash/fp";


class SvgPatternMagicScroll extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='scene-content-holder'>
          <SvgPattern scenePosition={this.props.scenePosition} offCanvasMenuAnimating={this.props.offCanvasMenuAnimating}/>
          <SvgFlasher scenePosition={this.props.scenePosition} offCanvasMenuAnimating={this.props.offCanvasMenuAnimating}/>
        </div>
      </div>
    )
  }
}



export const mapStateToProps = (state) => {
  return {
    offCanvasMenuAnimating:get('offCanvasMenu.offCanvasMenuAnimating', state),
  }
};


//export default connect(mapStateToProps)(SvgPatternMagicScroll);

export default scrollMagicEnhanced( connect(mapStateToProps)(SvgPatternMagicScroll) );
