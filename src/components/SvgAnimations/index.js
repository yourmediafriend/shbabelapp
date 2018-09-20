import React from 'react'
import PropTypes from 'prop-types';

import styles from './svgShapes.scss';
import cx from 'classnames';

import Background from '../Background';
import VideoBackground from '../Background/video';
import MainLayer from '../Content/MainLayer';
import ContentLayer from '../Content/ContentLayer';

import Triangle from './TriangleComp';
import Circle from './CircleComp';
import Square from './SquareComp';
import Hypno from './HypnoComp';

let backgroundVideo =  'https://res.cloudinary.com/dghff7rpa/video/upload/v1536614709/backgrounds/video/abstract_bw.mp4';

let backgroundImage_A = 'https://res.cloudinary.com/dghff7rpa/image/upload/v1536613724/backgrounds/images/factory-1.gif';
let backgroundImage_B = 'https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-3.gif';
let backgroundImage_C = 'https://res.cloudinary.com/dghff7rpa/image/upload/v1536613724/backgrounds/images/factory-2.gif';


const SvgBackground = (props) => {

  switch(props.shape) {
    case 'circle':
      return ( <div className={cx(styles.slide)} >
        <VideoBackground bgSrc={backgroundVideo} />
        <Background className={styles.contentContainer} bgSrc={backgroundImage_A} />
      </div>);
    case 'square':
      return (<div className={cx(styles.slide)} >
        <VideoBackground bgSrc={backgroundVideo} />
        <Background  bgSrc={backgroundImage_B} />
      </div>);
    case 'triangle':
      return (
        <div className={cx(styles.slide)} >
          <VideoBackground bgSrc={backgroundVideo} />
          <Background bgSrc={backgroundImage_C} />
        </div>
      );
    case 'hypno':
      return (
        <div className={cx(styles.slide)} >
          <VideoBackground bgSrc={backgroundVideo} />
          <Background bgSrc={backgroundImage_C} />
        </div>
      );
    default: null;
  }
}

const SvgShape = (props) => {

  switch(props.shape) {
    case 'circle':
      return <Circle />;
    case 'square':
      return <Square />;
    case 'triangle':
      return  <Triangle />;
    case 'hypno':
      return <Hypno />;
    default:
      return null;
  }
}

const SvgAnimation = (props) => {
  return (
    <MainLayer className={styles.svgContainer}>
        {SvgBackground(props)}
      <ContentLayer className={cx(styles.contentLayer)}>
         {SvgShape(props)}
      </ContentLayer>
    </MainLayer>
  )
}

SvgAnimation.props = {
  shape: PropTypes.string
}

export default SvgAnimation;