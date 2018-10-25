import React, { Component } from 'react';
import DummyText from '../Placeholders/DummyText/DummyTextLong'
import styles from './columnLayoutStyles';
import HeroBanner from '../HeroBanner';
import StickyPanel from './StickyPanel';

class ColumnLayout extends Component {
  render() {
    return (
      <div style={styles.container.base}>
        <HeroBanner />
        <div style={styles.container.inner}>
          <div style={styles.container.sideleft}>
            <div style={styles.sideleft.panel} >
              Promo Panel
            </div>
            <StickyPanel />
          </div>
          <div style={styles.container.main}>
            <DummyText />
          </div>
        </div>
      </div>
    )
  }
}

export default ColumnLayout;
