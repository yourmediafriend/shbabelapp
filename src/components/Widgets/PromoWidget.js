import React, { Component } from 'react';
import styles from './widget.scss';
import cx from 'classnames';
import { NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Button } from 'reactstrap';


class Widget extends Component {
  render() {
    return (
      <div className={cx(styles.widget, styles.promoWidget, this.props.className)}>
        <div className={styles.inner}>
          <div className={styles.body}>
            <img src={this.props.imgSrc} alt={''} />
          </div>
          <div className={styles.footer}>
            <Button type="submit">Buy Me!</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Widget;
