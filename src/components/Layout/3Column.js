import React, { Component } from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';
import { Container, Row, Col } from 'reactstrap';

import styles from './layout.scss';
import stylesJs from './layoutStyles';


const Layout = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="3">
          {props.contentColumnLeft}
        </Col>
        <Col xs="6">
          {props.contentMain}
        </Col>
        <Col xs="3">
          {props.contentColumnRight}
        </Col>
      </Row>
    </Container>
  )
};

export default Layout;


{/*
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
*/}
