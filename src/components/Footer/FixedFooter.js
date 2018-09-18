import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import styles from './footer.scss';
import cx from 'classnames';
import FooterMusicPlayer from './FooterMusicPlayer';


class Footer extends Component {
  render() {
    return (
      <div ref={(element) => this.footerElement = element} className={cx(styles.footer, styles.fixed)}>
        <FooterMusicPlayer />
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {}
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
