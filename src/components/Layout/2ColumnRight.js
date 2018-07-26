import React, { Component } from 'react';

import styles from './layoutStyles';
import Radium from "radium";
import PropTypes from "prop-types";


const ColumnLayout = (props) => {
  return (
    <div style={styles.container.base}>
      <div style={styles.container.inner}>
        <div style={styles.container.main}>
          {props.contentMain}
        </div>
        <div style={styles.container.sideright}>
          {props.contentColumnRight}
        </div>
      </div>
    </div>
  )
};

export default Radium(ColumnLayout);
