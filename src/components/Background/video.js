import React from 'react';
import style from './backgroundStyles.scss';
import PropTypes from "prop-types";
import cx from 'classnames';


const Background = (props) => {
  return (
    <video className={cx(style.videoBackground)} playsInline autoPlay muted loop preload="metadata" >
      <source src={props.bgSrc} type="video/mp4" />
      <source src={props.bgSrc} type="video/ogg" />
      <span>Your browser does not support the video tag.</span>
    </video>
  )
};

Background.props = {
  bgSrc: PropTypes.string
}

export default Background;


