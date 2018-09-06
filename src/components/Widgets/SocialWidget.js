import React, { Component } from 'react';
import styles from './widget.scss';
import cx from 'classnames';
import { NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import SocialMediaIcons from '../SocialMediaIcons'

class MenuWidget extends Component {
  render() {
    return (
      <div className={cx(styles.widget, styles.socialWidget, this.props.className)}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h4 className={styles.title}>Social Widget</h4>
          </div>
          <div className={styles.body}>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    )
  }
}

export default MenuWidget;
