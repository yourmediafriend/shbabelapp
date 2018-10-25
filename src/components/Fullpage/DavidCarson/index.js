import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import cx from 'classnames';
import styles from './davidCarson.scss';
import {hoverSindy} from "../../../modules/Fullpage";
import {get} from "lodash/fp";

import SlideA from './slideA';
import SlideB from './slideB';
import SlideC from './slideC';

const FullpageSlides = (props, fullpageApi) => {

  const fullPageOptions = {
    callbacks: ['onLeave'],
    scrollOverflow: true,
  };

  return (
    <ReactFullpage {...fullPageOptions}  render={({ state, fullpageApi }) => {
      return (
        <div id="fullpage-wrapper">

          <div className={cx(styles.section, styles.section_1, 'section')}>
            <SlideA />
          </div>

          <div className={cx(styles.section, styles.section_2, 'section')}>
            <SlideB />
          </div>

          <div className={cx(styles.section, styles.section_3, 'section')}>
            <SlideC />
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


