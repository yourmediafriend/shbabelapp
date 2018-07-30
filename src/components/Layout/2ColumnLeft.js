import React, { Component } from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import styles from './layout.scss';

const Layout = (props) => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={3}>
          {props.contentColumnLeft}
        </Col>
        <Col sm={12} md={9}>
          {props.contentMain}
        </Col>
      </Row>
    </Container>
  )
};

export default Layout;