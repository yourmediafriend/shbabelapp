import React from 'react'
import PropTypes from 'prop-types';

import styles from './svgShapes.scss';
import cx from 'classnames';

import Background from '../Background';
import VideoBackground from '../Background/video';



import Triangle from './TriangleComp';
import Circle from './CircleComp';
import Square from './SquareComp';
import Hypno from './HypnoComp';


let backgroundVideo =  'https://res.cloudinary.com/dghff7rpa/video/upload/v1536614709/backgrounds/video/abstract_bw.mp4';

let backgroundImage_A = 'https://res.cloudinary.com/dghff7rpa/image/upload/v1536613724/backgrounds/images/factory-1.gif';
let backgroundImage_B = 'https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-3.gif';
let backgroundImage_C = 'https://res.cloudinary.com/dghff7rpa/image/upload/v1536613724/backgrounds/images/factory-2.gif';

const SvgShape = (props) => {

  switch(props.shape) {
    case 'circle':
      return ( <div className={cx(styles.slide)} >
        <VideoBackground bgSrc={backgroundVideo} />
        <Background className={styles.contentContainer} bgSrc={backgroundImage_A} />
        <Circle />
      </div>);
    case 'square':
      return (<div className={cx(styles.slide)} >
        <VideoBackground bgSrc={backgroundVideo} />
        <Background  bgSrc={backgroundImage_B} />
        <Square />
      </div>);
    case 'triangle':
      return (
        <div className={cx(styles.slide)} >
          <VideoBackground bgSrc={backgroundVideo} />
          <Background bgSrc={backgroundImage_C} />
          <Triangle />
        </div>
      );
    case 'hypno':
      return (
      <div className={cx(styles.slide)} >
        <VideoBackground bgSrc={backgroundVideo} />
        <Background bgSrc={backgroundImage_C} />
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