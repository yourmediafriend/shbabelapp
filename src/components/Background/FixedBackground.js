import React from 'react';
import style from './backgroundStyles.scss';
import PropTypes from "prop-types";
import cx from 'classnames';


const Background = (props) => {
  return (
    <div className={cx(style.fixedBackground)} >

    </div>
  )
};

Background.props = {
  bgSrc: PropTypes.string
}

export default Background;


