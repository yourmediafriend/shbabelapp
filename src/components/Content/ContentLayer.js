import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Animate from 'react-move/Animate';
import { easeCubicInOut } from 'd3-ease';
import cx from 'classnames'
import styles from './content.scss';
import {get, max} from "lodash/fp";

import FooterSpacer from "../Footer/FooterSpacer";

import {footerClose} from "../../modules/Footer";

import appConfig from '../../config'


class HeaderSpacer extends Component {

  myStyles = (state) => {
    const {HeaderSpacer} = state;
    return {
      height: `${HeaderSpacer.height}px` ,
    }
  };

  render() {

    let props = this.props;

    return (
      <Animate
        start={() => ({
          HeaderSpacer:{
            height: appConfig.header.height.max
          }
        })}

        update={() => ({
        /*  HeaderSpacer:{
            height: [props.XXX ? stickyHeaderHeight  : stickyHeaderHeight ]
          },*/
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
            <div className={cx(styles.headerSpacer)}
                 style={{...this.myStyles(state)}} />

          );
        }}
      </Animate>
    );
  }
}

const spacerCalcMax = props => {
  return  props.revealFooter ?  props.fixedFooter && props.footerFixedOpen ? appConfig.footerReveal.height.max + appConfig.footerFixed.height.max : appConfig.footerReveal.height.max : props.fixedFooter && props.footerFixedOpen ? appConfig.footerFixed.height.max : 0 ;
}

const spacerCalcMin = props => {
  return  props.revealFooter ? appConfig.footerReveal.height.max : props.fixedFooter && props.footerFixedOpen ? appConfig.footerFixed.height.max : 0 ;
}

const ContentLayer = props => {
  return (
    <div className={cx(styles.contentLayerWrapper)}>
      <HeaderSpacer />
      <div className={cx(styles.contentLayer, props.className)}
           style={{
             ...props.revealFooter ? {boxShadow:'0 7px 15px -7px rgba(58, 57, 57, 0.50)'} : '',
           }}
      >
        {props.children}
      </div>
      <FooterSpacer trigger={props.footerFixedOpen}  spacerMax={spacerCalcMax(props)} spacerMin={spacerCalcMin(props)}  />
    </div>
  );
}

ContentLayer.propTypes = {
  stickyHeader: PropTypes.bool,
  fixedFooter: PropTypes.bool,
  revealFooter:  PropTypes.bool,
};

export const mapStateToProps = (state) => {
  return {
    stickyHeader: get('appModule.stickyHeader', state),
    fixedFooter: get('appModule.fixedFooter', state),
    revealFooter: get('appModule.revealFooter', state),
    footerFixedOpen: get('footerModule.footerFixedOpen', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      footerClose,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayer);