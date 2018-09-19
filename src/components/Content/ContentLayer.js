import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Animate from 'react-move/Animate';
import { easeCubicInOut } from 'd3-ease';
import cx from 'classnames'
import styles from './content.scss';
import {get, max} from "lodash/fp";
import {footerClose} from "../../modules/Footer";


let stickyHeaderHeight = 80;
let footerRevealHeightLarge = 200;
let footerFixedHeightLarge = 60;


/*style={{
...props.showFooterReveal ? {height:`${footerRevealHeightLarge}px`} : '',
...props.showFooterFixed ? {height:`${footerFixedHeightLarge}px`} : '',
...props.showFooterFixed && props.showFooterReveal ? {height:`${( max([footerRevealHeightLarge,footerFixedHeightLarge]))}px`} : '',
}}*/

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
            height: [props.footerIsOpen ? footerRevealHeightLarge + footerFixedHeightLarge : footerRevealHeightLarge ]
          }
        })}

        update={() => ({
          footerSpacer:{
            height: [props.footerIsOpen ? footerRevealHeightLarge + footerFixedHeightLarge  : footerRevealHeightLarge ]
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


const ContentLayer = props => {
  return (
    <div>
      <div className={cx(styles.contentLayer, props.className)}
           style={{ ...props.showHeader ? {paddingTop:`${stickyHeaderHeight}px`} : '',
             ...props.showFooterReveal ? {boxShadow:'0 7px 15px -7px rgba(58, 57, 57, 0.50)'} : '',
             ...{minHeight:  `calc(100vh - ${( max([footerRevealHeightLarge, footerFixedHeightLarge]))}px`}}}
      >
        {props.children}
      </div>
      <FooterSpacer footerIsOpen={props.footerIsOpen} showFooterReveal={props.showFooterReveal} showFooterFixed={props.showFooterFixed}    />
    </div>
  );
}



ContentLayer.propTypes = {
  showHeader: PropTypes.bool,
  showFooterReveal: PropTypes.bool,
  showFooterFixed:  PropTypes.bool,
};

ContentLayer.defaultProps = {
  showHeader: true,
  showFooterReveal: true,
  showFooterFixed: true
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayer);