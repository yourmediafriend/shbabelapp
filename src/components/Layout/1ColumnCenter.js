import React, { Component } from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';
import { Container, Row, Col } from 'reactstrap';

import styles from './layout.scss';


const Layout = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          {props.contentMain}
        </Col>
      </Row>
    </Container>
  )
};

export default Layout;