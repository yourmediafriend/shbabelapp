import React, { Component } from 'react';
import styles from './footer.scss';
import cx from 'classnames'

import FooterMenu from './FooterMenu';


class Footer extends Component {

  render() {
    return (
      <div className={cx(styles.footer, styles.reveal)}>
          <FooterMenu />
      </div>
    )
  }
}

export default Footer;
