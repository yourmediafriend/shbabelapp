import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import cx from 'classnames';
import styles from './fluro.scss';


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
            </div>
          </div>
          <div className={cx(styles.section, styles.section_2, 'section')}>
            <div className={cx(styles.inner)}>
            </div>
          </div>
          <div className={cx(styles.section, styles.section_3, 'section')}>
          </div>
          <div className={cx(styles.section, styles.section_4, 'section')}>
          </div>
        </div>);
    }}
    />
  );
};


FullpageSlides.propTypes = {
};

FullpageSlides.defaultProps = {
};

export const mapStateToProps = (state) => {
  return {}
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FullpageSlides);


