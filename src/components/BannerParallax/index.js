import React, {Component} from 'react';
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

class ParallaxTestComponent extends Component {

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
      <div className={cx(styles.scrollableContainer ,'scrollable-container')} >
        <ScrollMagicEnhanced {...parallaxProps}>
          <ParallaxContent>
            <HeroBanner image={imagesHero}  />
          </ParallaxContent>
        </ScrollMagicEnhanced>
      </div>
    )
  }
}

ParallaxTestComponent.propTypes = {

}

export default ParallaxTestComponent