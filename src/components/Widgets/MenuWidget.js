import React, { Component } from 'react';
import styles from './widget.scss';
import cx from 'classnames';
import { NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';



class MenuWidget extends Component {
  render() {
    return (
      <div className={cx(styles.widget, styles.menuWidget, this.props.className)}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h4 className={styles.title}>Sidebar Menu</h4>
          </div>
          <div className={styles.body}>
            <ListGroup className={styles.menu}>
              <ListGroupItem>
                <NavLink to={'#'} activeClassName="active" tag={RRNavLink}>
                  About
                </NavLink>
              </ListGroupItem>
              <ListGroupItem>
                <NavLink to={'#'} activeClassName="active" tag={RRNavLink}>
                  Sign Up
                </NavLink>
              </ListGroupItem>
              <ListGroupItem>
                <NavLink to={'/contact'} activeClassName="active" tag={RRNavLink}>
                  Contact
                </NavLink>
              </ListGroupItem>
              <ListGroupItem>
                <NavLink to={'#'} activeClassName="active" tag={RRNavLink}>
                  Location
                </NavLink>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuWidget;
