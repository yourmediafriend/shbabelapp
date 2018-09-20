import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";
import cx from "classnames";
import Animate from 'react-move/Animate';
import { easeCubicInOut } from 'd3-ease';
import styles from './footer.scss'

class FooterSpacer extends Component {

  myStyles = (state) => {
    const {footerSpacer} = state;
    return {
      height: `${footerSpacer.height}px` ,
    }
  };

  render() {

    let props = this.props;

    return (
      <Animate
        start={() => ({
          footerSpacer:{
            height: [props.trigger ? props.spacerMax : props.spacerMin]
          }
        })}

        update={() => ({
          footerSpacer:{
            height: [props.trigger ? props.spacerMax : props.spacerMin]
          },
          timing: { duration: 250, ease: easeCubicInOut },
          events: {
            start() {

            },
            end() {

            },
          },
        })}
      >
        {(state) => {
          return (
            <div className={cx(styles.footerSpacer)}
                 style={{...this.myStyles(state)}} />
          );
        }}
      </Animate>
    );
  }

}

FooterSpacer.propTypes = {
  stickyHeader: PropTypes.bool,
  fixedFooter: PropTypes.bool,
  revealFooter: PropTypes.bool,
  footerFixedOpen: PropTypes.bool,
  spacerMax: PropTypes.number,
  spacerMin: PropTypes.number,
};

export const mapStateToProps = (state) => {
  return {
    stickyHeader: get('appModule.stickyHeader', state),
    fixedFooter: get('appModule.fixedFooter', state),
    revealFooter: get('appModule.revealFooter', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FooterSpacer);