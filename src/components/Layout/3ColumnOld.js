import React, { Component } from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';
import styles from './layout.scss';
import stylesJs from './layoutStyles';


const Layout = (props) => {
  return (
    <div className={cx(styles.base)} >
      <div className={cx(styles.inner)} style={{...props.styles}}>
        <div className={cx(styles.sideleft)} >
          {props.contentColumnLeft}
        </div>
        <div className={cx(styles.main)} >
          {props.contentMain}
        </div>
        <div className={cx(styles.sideright)} >
          {props.contentColumnRight}
        </div>
      </div>
    </div>
  )
};

export default Layout;
