import React from 'react'
import PropTypes from 'prop-types';

import styleJs from './svgAnimationStyles';
import style from './compStyles.scss';

import Background from '../Background';
import VideoBackground from '../Background/video';

import bgSrc from '../../media/backgrounds/video/Comp.mp4'

import Triangle from './TriangleComp';
import Circle from './CircleComp';
import Square from './SquareComp'
import Hypno from './HypnoComp';

import BackgroundImageUrlA from './media/factory-1.gif';
import BackgroundImageUrlB  from './media/factory-4.gif';
import BackgroundImageUrlC from './media/factory-3.gif';

const SvgShape = (props) => {

  switch(props.shape) {
    case 'circle':
      return ( <div style={styleJs.slide}>
        <VideoBackground bgSrc={bgSrc} />
        <Background className={style.contentContainer} bgSrc={BackgroundImageUrlA}  />
        <Circle />
      </div>);
    case 'square':
      return (<div style={styleJs.slide}>
        <Background  bgSrc={BackgroundImageUrlB} />
        <Square />
      </div>);
    case 'triangle':
      return (
        <div style={styleJs.slide}>
          <Background bgSrc={BackgroundImageUrlC} />
          <Triangle />
        </div>
      );
    case 'hypno':
      return (
      <div style={styleJs.slide}>
        <Background bgSrc={BackgroundImageUrlC} />
        <Hypno />
      </div>
    );
    default:
      return (
        <div>
          <div style={styleJs.slide}>
            <Triangle />
          </div>
          <div style={styleJs.slide}>
            <Square />
          </div>
          <div style={styleJs.slide}>
            <Circle />
          </div>
        </div>
      );
  }
}

const SvgAnimation = (props) => {
  return (
    <div className={styleJs.svgContainer}>
      {SvgShape(props)}
    </div>
  )
}

SvgAnimation.props = {
  shape: PropTypes.string
}

export default SvgAnimation;