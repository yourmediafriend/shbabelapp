import React, { Component } from 'react';
import styles from './widget.scss';
import cx from 'classnames';
import { Button } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';




class MenuWidget extends Component {
  render() {
    return (
      <div className={cx(styles.widget, styles.dummyWidget, this.props.className)}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h4 className={styles.title}>Dummy Widget</h4>
          </div>
          <div className={styles.body}>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <div className={styles.footer}>
            <Button type="submit">Don't Touch</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuWidget;
