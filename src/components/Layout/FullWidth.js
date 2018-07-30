import React, { Component } from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';
import { Container, Row, Col } from 'reactstrap';

import styles from './layout.scss';


const Layout = (props) => {
  return (
    <div>
      {props.contentMain}
    </div>
  )
};

export default Layout;