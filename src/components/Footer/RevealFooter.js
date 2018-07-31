import React, { Component } from 'react';
import styles from './footer.scss';
import cx from 'classnames'


class Footer extends Component {

  render() {
    return (
      <div className={cx(styles.footer, styles.reveal)}>
          Footer Reveal
      </div>
    )
  }
}

export default Footer;
