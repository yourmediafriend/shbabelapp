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
import Animate from 'react-move/Animate';
import { easeCubicInOut } from 'd3-ease';
import Background from "../Background";

const FooterCloseComp = ({clickEvent}) => {
  return (
    <div className={styles.footerClose} onClick={clickEvent}>
      <Icon icon={'close'} />
    </div>
  )
}

class Footer extends Component {

  myStyles = (state) => {
    const {footer, show} = state;
    return {
      transform: `translateY(${footer.translateY}%)` ,
    }
  };

  render() {

    let props = this.props;

    console.log('AAA', props);

    return (

        <Animate

          footerFixedOpen={this.props.footerFixedOpen}

          start={() => ({
            showFooter: props.footerFixedOpen,
            footer:{
              translateY: [props.footerFixedOpen ? 0: 100 ]
            }
          })}

          update={() => ({
            footer:{
              translateY: [props.footerFixedOpen ? 0: 100 ]
            },
            timing: { duration: 250, ease: easeCubicInOut },
            events: {
              start() {
                this.setState({showFooter:true})
              },
              end() {
                if (!this.props.footerFixedOpen){
                  this.setState({showFooter:false});
                }
              },
            },
          })}
        >
          {(state) => {

            return state.showFooter ?
              (
                <div ref={(element) => this.footerElement = element}
                   className={cx(styles.footer, styles.fixed )}
                   style={{...this.myStyles(state)}} >
                  <FooterMusicPlayer />
                  <FooterCloseComp  clickEvent={this.props.footerClose}/>
                </div>
              ) : null;

          }}
        </Animate>

    );
  }
}

export const mapStateToProps = (state) => {
  return {
    footerFixedOpen: get('footerModule.footerFixedOpen', state),
    breakpoint: get('appModule.breakpoint', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      footerClose,
    },
    dispatch
  );


Footer.props = {
  breakpoint: PropTypes.string
};

Footer.defaultProps = {
  breakpoint: 'small'
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
