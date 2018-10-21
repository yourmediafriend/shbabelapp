import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import styles from './homepageHero.scss';
import CanvasEnhanced from './CanvasSimple';

let HeroBackground = (props) => {
  return (
    <div className={cx(styles.fixedBackgroundLayer, props.heroActive ? '' : styles.hide)} >
      {props.breakpoint ==='large' ? <CanvasEnhanced activeSceneId={props.activeSceneId}  bgTextArray={props.bgTextArray} /> : ''}
    </div>
  )
};

export default HeroBackground;