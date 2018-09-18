import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { setFixedFooterHeight } from "../../modules/App";
import { footerClose } from "../../modules/Footer";

import styles from './footer.scss';
import cx from 'classnames';
import FooterMusicPlayer from './FooterMusicPlayer';
import Icon from '../Icons';
import {get} from "lodash/fp";

const FooterCloseComp = ({clickEvent}) => {
  return (
    <div className={styles.footerClose} onClick={clickEvent}>
      <Icon icon={'close'} />
    </div>
  )
}

class Footer extends Component {
  render() {
    return (
      <div ref={(element) => this.footerElement = element} className={cx(styles.footer, styles.fixed, this.props.footerIsOpen ? styles.open : styles.closed )}>
        <div className={styles.footerSlide}>
          <FooterMusicPlayer />
          <FooterCloseComp  clickEvent={this.props.footerClose}/>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    footerIsOpen: get('footerModule.footerIsOpen', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      footerClose,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
