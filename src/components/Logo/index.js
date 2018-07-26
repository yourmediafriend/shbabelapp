import React, { Component } from 'react';
import SVGInline from "react-svg-inline"
import S from 'camel-case-selector';

import Radium, { Style } from 'radium';
import styles from './logoStyles.js';

import SvgLogoMain from './media/LogoMain.svg';
import SvgWarningPanel from './media/warning-panel.svg';


import { mediaQueries } from '../../utils/mediaQueries';

class Logo extends Component {

  render() {
    return (
      <span style={styles.logo.wrap}>
        <span style={styles.logo.wrap.inner}>
      {/*    <SVGInline svg={ SvgLogoMain }  style={Radium.getState(this.state, 'main', ':hover') ? {...styles.logo.svg, ...styles.logo.svg.hover } : styles.logo.svg } />
          <SVGInline svg={ SvgWarningPanel }  style={Radium.getState(this.state, 'main', ':hover') ? {...styles.logo.svg, ...styles.logo.svg.hover } : styles.logo.svg } />*/}
        </span>
      </span>
    )
  }
}

export default Radium(Logo);
