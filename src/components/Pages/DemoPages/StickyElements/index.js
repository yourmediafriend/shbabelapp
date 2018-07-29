
import PropTypes from "prop-types";

import { TwoColumnLeft }  from '../../../Layout';
import React, { Component } from 'react';

import cx from 'classnames';
import styles from './stickyElements.scss';


import DummyText from '../../../DummyText/DummyTextLong'
import StickyPanel from './StickyPanel';

import stylesJS from './columnLayoutStyles';


import HeroBanner from '../../../HeroBanner';

import hero_300w from '../../../../media/hero6/hero_300w.jpg';
import hero_480w from '../../../../media/hero6/hero_480w.jpg';
import hero_660w from '../../../../media/hero6/hero_660w.jpg';
import hero_960w from '../../../../media/hero6/hero_960w.jpg';
import hero_980w from '../../../../media/hero6/hero_980w.jpg';
import hero_1320w from '../../../../media/hero6/hero_1320w.jpg';
import hero_1900w from '../../../../media/hero6/hero_1900w.jpg';
import hero_2600w from '../../../../media/hero6/hero_2600w.jpg';

const imagesHero = {
  0: hero_480w,
  480: hero_660w,
  660: hero_960w,
  740: hero_980w,
  1140: hero_1320w,
  1300: hero_1900w,
};


let Sidebar = props => (
  <div>
    <div className={cx(styles.panel)} >
      Promo Panel
    </div>
    <StickyPanel />
  </div>
)

class ColumnLayout extends Component {

  render() {
    return (
      <div>
        <HeroBanner image={imagesHero}  />
        <TwoColumnLeft contentMain={<DummyText />}  contentColumnLeft={<Sidebar />}  style={{container:{paddingTop: '30px'}}}/>
      </div>
    )
  }
}

export default ColumnLayout;
