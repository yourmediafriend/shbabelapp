import React from 'react';
import PropTypes from 'prop-types';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import SVGInline from "react-svg-inline"
import cx from 'classnames';
import styles from './styles.scss';
import {hoverSindy} from "../../../modules/Fullpage";
import {get} from "lodash/fp";

const FullpageSlides = (props, fullpageApi) => {

  const fullPageOptions = {
    callbacks: ['onLeave'],
    scrollOverflow: true,
  };

  return (
    <ReactFullpage {...fullPageOptions} render={({state, fullpageApi}) => {
      return (
        <div id="fullpage-wrapper">
          <div className={cx(styles.section, styles.section_1, 'section')}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.layer)}>
              </div>
            </div>
          </div>
          <div className={cx(styles.section, styles.section_2, 'section')}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.layer)}>
              </div>
            </div>
          </div>

          <div className={cx(styles.section, styles.section_3, 'section')}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.layer)}>
              </div>
            </div>
          </div>

          <div className={cx(styles.section, styles.section_4, 'section')}>
          </div>
        </div>);
      }}
    />
  );
};



FullpageSlides.propTypes = {
  hoverValue: PropTypes.bool,
};

FullpageSlides.defaultProps = {
  hoverValue: false
};

export const mapStateToProps = (state) => {
  return {
    activeTextRef: get('fullpageModule.activeTextLayer', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hoverSindy,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FullpageSlides);


