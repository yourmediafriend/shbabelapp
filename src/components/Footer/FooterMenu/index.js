import React, { Component } from 'react';
import styles from './footerMenu.scss';
import cx from 'classnames'
import OneColumnCenter from '../../Layout/1ColumnCenter';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const Menu = props => {
  return (
    <Row>
      <Col sm={12} md={4}>
        <ListGroup>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
        </ListGroup>
      </Col>
      <Col sm={12} md={4}>
        <ListGroup>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
        </ListGroup>
      </Col>
      <Col sm={12} md={4}>
        <ListGroup>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>1</ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  )

}


const FooterLayout = props => {
    return (
      <OneColumnCenter contentMain={<Menu />} />
    )
}

export default FooterLayout;
