import React, { Component } from 'react';
import styles from './footer.scss';
import cx from 'classnames';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className={cx(styles.footer, styles.fixed)}>
        Footer Sticky
      </div>
    )
  }
}

export default Footer;
