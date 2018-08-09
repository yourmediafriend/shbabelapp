import React from 'react';
import classNames from 'classnames';

import { Fullpage, Slide } from 'fullpage-react';

import styles from './Fullpage.scss';

const fullPageOptions = {

  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 7,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};


const slides = [
  <Slide>
    <div className={classNames(styles.fullpageBg, styles.fullpageBgA)}></div>
  </Slide>,
  <Slide>
    <div className={classNames(styles.fullpageBg, styles.fullpageBgB)}></div>
  </Slide>,
  <Slide>
    <div className={classNames(styles.fullpageBg, styles.fullpageBgC)}></div>
  </Slide>
];

fullPageOptions.slides = slides;


const FullpageComponent = () => (

  <Fullpage {...fullPageOptions} className={styles.fullpage} />

)

export default FullpageComponent
