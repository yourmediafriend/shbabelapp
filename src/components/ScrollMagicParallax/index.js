import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Power2} from 'gsap';
import ParallaxContent from './ParallaxContent';
import Parallax from './Parallax';

import HeroBanner from '../HeroBanner';
import DummyText from '../DummyText';

import styles from './parallaxStyles';

class ParallaxTestComponent extends Component {

  constructor(){
    super(...arguments)
  }

  render(){

    const parallaxProps = {
      offset: 0,
      ease: Power2.easeNone,
      power: 0.1,
      container: 'body'
    };

    const parallaxPropsB = {
      offset: 100,
      ease: Power2.easeNone,
      power: 0.1,
      container: 'body'
    };


    return (
      <div className="scrollable-container" style={styles.parallax.scrollableContainer}>
        <Parallax {...parallaxProps}>
          <ParallaxContent>
            <HeroBanner />
          </ParallaxContent>
        </Parallax>
          <div style={{background:'white'}}>
            <div style={{maxWidth:'1020px', margin: '0 auto', padding:'30px 50px'}}>
              <DummyText />
            </div>
          </div>
        <Parallax {...parallaxPropsB}>
          <ParallaxContent>
            <HeroBanner />
          </ParallaxContent>
        </Parallax>
          <div style={{background:'white'}}>
            <div style={{maxWidth:'1020px', margin: '0 auto', padding:'30px 50px'}}>
              <DummyText />
            </div>
          </div>
      </div>
    )
  }

}

ParallaxTestComponent.propTypes = {

}

export default ParallaxTestComponent