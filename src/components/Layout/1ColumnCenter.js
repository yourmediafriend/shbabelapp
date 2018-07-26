import React, { Component } from 'react';

import styles from './layoutStyles';
import Radium from "radium";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <div style={styles.container.base}>
      <div style={{...styles.container.inner, ...props.styles}}>
        <div style={styles.container.main}>
          {props.contentMain}
        </div>
      </div>
    </div>
  )
};

export default Radium(Layout);


