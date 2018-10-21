import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {get} from "lodash/fp";

import { Power2 } from 'gsap';
import ParallaxContent from './ParallaxContent';
import ScrollMagicEnhanced from './scrollMagicEnhanced';
import cx from 'classnames'
import styles from './styles.scss';

import HeroBanner from '../HeroBanner';
import DummyText from '../DummyText';
import hero_480w from '../../media/hero6/hero_480w.jpg';
import hero_660w from '../../media/hero6/hero_660w.jpg';
import hero_960w from '../../media/hero6/hero_960w.jpg';
import hero_980w from '../../media/hero6/hero_980w.jpg';
import hero_1320w from '../../media/hero6/hero_1320w.jpg';
import hero_1900w from '../../media/hero6/hero_1900w.jpg';


const imagesHero = {
  0: hero_480w,
  480: hero_660w,
  660: hero_960w,
  740: hero_980w,
  1140: hero_1320w,
  1300: hero_1900w,
};

class BannerParallax extends Component {

  render(){
    return (
      <div className={cx(styles.parallaxContainer)} >

        <div className={cx(styles.parallaxLayer,'parallax-layer')} >
          <HeroBanner image={imagesHero}  />
        </div>
        <div className={cx(styles.overlay)} />
        <div className={cx(styles.contentLayer)} >
          <div className={cx(styles.content)} >
            <h2>kjdfgkjh kdhkdsfhkdf</h2>
          </div>
        </div>

      </div>
    )
  }
}


export const mapStateToProps = (state) => {
  return {
    breakpoint: get('appModule.breakpoint', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );


BannerParallax.props = {
  breakpoint: PropTypes.string
};

BannerParallax.defaultProps = {
  breakpoint: 'small'
};

export default connect(mapStateToProps, mapDispatchToProps)(ScrollMagicEnhanced(BannerParallax));



