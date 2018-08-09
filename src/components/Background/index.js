import React from 'react'
import style from './theme/backgroundStyles.js';
import PropTypes from "prop-types";


const Background = (props) => {
  return (
    <div style={{...style.background,...{backgroundImage:`url(${props.bgSrc})`}}} />
  )
};

Background.props = {
  bgSrc: PropTypes.string
}

export default Background
