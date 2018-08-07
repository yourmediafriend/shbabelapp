import React, { Component } from 'react';
import SVGInline from "react-svg-inline"

import styles from './logo.scss';

import SvgLogoMain from './media/LogoMain.svg';
import SvgWarningPanel from './media/warning-panel.svg';

class Logo extends Component {

  render() {
    return (
      <span className={styles.logoWrap}>
        <span className={styles.logoInner}>
          <SVGInline svg={ SvgLogoMain }  />
          <SVGInline svg={ SvgWarningPanel } />
        </span>
      </span>
    )
  }
}

export default Logo;
