import React, { Component } from 'react';
import DummyText from '../DummyText';
import { get } from 'lodash/fp';
import styles from './actionBannerStyles';

import Animate from 'react-move/Animate';
import { easeSinInOut } from 'd3-ease';

class BannerContent extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="wrapper" style={{...styles.actionBanner.banner}}>
        <header>
          <h1>SIMPLIFY</h1>
        </header>
        <section>
          <p>Simplify your content to a MINIMUM.</p>
        </section>
      </div>
    )
  }
}

export default BannerContent;

