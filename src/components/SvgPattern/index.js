import React, { Component } from 'react';
import {connect} from "react-redux";
import cx from 'classnames'
import styles from './svgPattern.scss';

import SVG from 'svgjs';
import SvgPattern from './SvgPattern';
import SvgFlasher from './SvgFlasher';

import scrollMagicEnhanced from './scrollMagicEnhanced';
import {get} from "lodash/fp";

import { OneColumnCenter }  from '../Layout';
import Dummytext from '../DummyText/DummyTextLong';

class SvgPatternMagicScroll extends Component {

  render() {
    return (
      <div>

        <div className='scene-content-holder'>
          <div className={cx(styles.svgPatternWrap)}>
            <SvgPattern scenePosition={this.props.scenePosition} offCanvasMenuAnimating={this.props.offCanvasMenuAnimating}/>
          </div>
          <div className={cx(styles.svgFlasherWrap)}>
            <SvgFlasher scenePosition={this.props.scenePosition} offCanvasMenuAnimating={this.props.offCanvasMenuAnimating}/>
          </div>
        </div>

        <div className={cx(styles.textWrap)}>
          <OneColumnCenter contentMain={
            <div className={cx(styles.textWrapInner)}>
              <Dummytext />
            </div>
          } />
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
