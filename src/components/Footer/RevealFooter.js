import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import styles from './footer.scss';
import cx from 'classnames';
import FooterMenu from './FooterMenu';
import FooterSpacer from './FooterSpacer';
import {get} from "lodash/fp";

class Footer extends Component {

  render() {
    return (
      <div>
        <div ref={(element) => this.footerElement = element}
             className={cx(styles.footer,styles.reveal)} >
          <div className={styles.footerInner}>
            <FooterMenu />
          </div>
        </div>
        <FooterSpacer trigger={this.props.footerFixedOpen} spacerMax={60} spacerMin={0} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    breakpoint: get('appModule.breakpoint', state),
    footerFixedOpen: get('footerModule.footerFixedOpen', state),
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
