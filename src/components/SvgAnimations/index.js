import React from 'react'
import PropTypes from 'prop-types';

import styles from './svgShapes.scss';
import cx from 'classnames';

import Background from '../Background';
import VideoBackground from '../Background/video';

import bgSrc from '../../media/backgrounds/video/Comp 4_1.mp4'

import Triangle from './TriangleComp';
import Circle from './CircleComp';
import Square from './SquareComp'
import Hypno from './HypnoComp';

import BackgroundImageUrlA from '../../media/backgrounds/images/factory-1.gif';
import BackgroundImageUrlB from '../../media/backgrounds/images/factory-4.gif';
import BackgroundImageUrlC from '../../media/backgrounds/images/factory-3.gif';


const SvgShape = (props) => {

  switch(props.shape) {
    case 'circle':
      return ( <div className={cx(styles.slide)} >
        <VideoBackground bgSrc={bgSrc} />
        <Background className={styles.contentContainer} bgSrc={BackgroundImageUrlA} />
        <Circle />
      </div>);
    case 'square':
      return (<div className={cx(styles.slide)} >
        <VideoBackground bgSrc={bgSrc} />
        <Background  bgSrc={BackgroundImageUrlB} />
        <Square />
      </div>);
    case 'triangle':
      return (
        <div className={cx(styles.slide)} >
          <VideoBackground bgSrc={bgSrc} />
          <Background bgSrc={BackgroundImageUrlC} />
          <Triangle />
        </div>
      );
    case 'hypno':
      return (
      <div className={cx(styles.slide)} >
        <Background bgSrc={BackgroundImageUrlC} />
        <Hypno />
      </div>
    );
    default:
      return (
        <div>
          <div className={cx(styles.slide)} >
            <Triangle />
          </div>
          <div className={cx(styles.slide)} >
            <Square />
          </div>
          <div className={cx(styles.slide)} >
            <Circle />
          </div>
        </div>
      );
  }
}

const SvgAnimation = (props) => {
  return (
    <div className={styles.svgContainer}>
      {SvgShape(props)}
    </div>
  )
}

SvgAnimation.props = {
  shape: PropTypes.string
}

export default SvgAnimation;