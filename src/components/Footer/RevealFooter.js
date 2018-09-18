import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import styles from './footer.scss';
import cx from 'classnames';
import FooterMenu from './FooterMenu';
import {get} from "lodash/fp";

class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    switch(this.props.breakpoint) {
      case 'large':
      case 'medium':
        return (
          <div ref={(element) => this.footerElement = element} className={cx(styles.footer,styles.reveal)} style={{ paddingBottom:`${this.props.fixedFooterHeight}px`}}>
            <div className={styles.footerInner}>
              <FooterMenu />
            </div>
          </div>
        );
      default: return null;
    }
  }
}

export const mapStateToProps = (state) => {
  return {
    breakpoint: get('appModule.breakpoint', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

Footer.propTypes = {
  setRevealFooterHeight: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
