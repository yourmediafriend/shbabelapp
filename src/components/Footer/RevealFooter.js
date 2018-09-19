import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import styles from './footer.scss';
import cx from 'classnames';
import FooterMenu from './FooterMenu';
import {get} from "lodash/fp";
import Animate from 'react-move/Animate';
import { easeCubicInOut } from 'd3-ease';



class Footer extends Component {

  myStyles = (state) => {
    const {footer} = state;
    return {
      paddingBottom: `${footer.paddingBottom}px` ,
    }
  };


  render() {

    let props = this.props;

    return (
      <Animate
        start={() => ({
          footer:{
            paddingBottom: 60
          }
        })}
        update={() => ({
          footer:{
            paddingBottom: [props.footerIsOpen ? 60 : 0 ]
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
            <div ref={(element) => this.footerElement = element}
                 className={cx(styles.footer,styles.reveal)}
                 style={{...this.myStyles(state)}} >
              <div className={styles.footerInner}>
                <FooterMenu />
              </div>
            </div>
          );
        }}
      </Animate>
    );
  }

}

export const mapStateToProps = (state) => {
  return {
    breakpoint: get('appModule.breakpoint', state),
    footerIsOpen: get('footerModule.footerIsOpen', state),
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
