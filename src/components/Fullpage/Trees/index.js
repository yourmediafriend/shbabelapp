import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import SVGInline from "react-svg-inline"
import cx from 'classnames';
import ReactHoverObserver from '../../ReactHoverObserver';
import styles from './trees.scss';
import {hoverSindy} from "../../../modules/Fullpage";
import {get} from "lodash/fp";


import SexShape from '../../../media/fullpage-slides/dark/sex-shape.svg';
import SideShape from '../../../media/fullpage-slides/dark/side-shape.svg';
import ContentShape from '../../../media/fullpage-slides/dark/content-shape.svg';

import sindy_1 from '../../../media/fullpage-slides/dark/sindy-1.jpg';
import sindy_2 from '../../../media/fullpage-slides/dark/sindy-2.jpg';
import sindy_3 from '../../../media/fullpage-slides/dark/sindy-3.jpg';

import Lightening from '../../Svgs/lightening'


const FullpageSlides = (props, fullpageApi) => {

  return (
    <div>

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
    </div>
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


