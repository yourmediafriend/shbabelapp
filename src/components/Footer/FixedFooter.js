import React, { Component } from 'react';
import styles from './footer.scss';
import cx from 'classnames';
import FooterMusicPlayer from './FooterMusicPlayer';


class Footer extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className={cx(styles.footer, styles.fixed)}>
        <FooterMusicPlayer />
      </div>
    )
  }
}

export default Footer;
