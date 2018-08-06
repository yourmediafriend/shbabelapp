import React, { Component } from 'react';
import styles from './footerMenu.scss';
import cx from 'classnames'
import OneColumnCenter from '../../Layout/1ColumnCenter';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const Menu = props => {
  return (
    <Row>
      <Col sm={12} md={4}>
        <ListGroup className={styles.footerMenu}>
          <ListGroupItem><a href="#">About</a></ListGroupItem>
          <ListGroupItem><a href="#">Contact</a></ListGroupItem>
          <ListGroupItem><a href="#">Sign Up</a></ListGroupItem>
          <ListGroupItem><a href="#">Location</a></ListGroupItem>
        </ListGroup>
      </Col>
      <Col sm={12} md={4}>
        <ListGroup className={styles.footerMenu}>
          <ListGroupItem><a href="#">Meat</a></ListGroupItem>
          <ListGroupItem><a href="#">Fish & Seafood</a></ListGroupItem>
          <ListGroupItem><a href="#">Vegetables</a></ListGroupItem>
          <ListGroupItem><a href="#">Fruit</a></ListGroupItem>
          <ListGroupItem><a href="#">Groceries</a></ListGroupItem>
        </ListGroup>
      </Col>
      <Col sm={12} md={4}>
        <p>Add Contact Details</p>
        <p>Social Media Links</p>
        <p>Newsletter Signup</p>
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
