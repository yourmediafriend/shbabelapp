import React, { Component } from 'react';
import styles from './widget.scss';
import cx from 'classnames';
import { NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

import Latest from '../News/WidgetLatest';

class Widget extends Component {
  render() {
    return (
      <div className={cx(styles.widget, styles.newsLatestWidget, this.props.className)}>
        <div className={styles.inner}>
            <Latest />
        </div>
      </div>
    )
  }
}

export default Widget;
