import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Picture from '../Picture';
import cx from 'classnames';
import styles from './heroBanner.scss';
import {get} from "lodash/fp";

const HeroBanner = (props) => {

  // TODO: Fix Calcs based on App Configs
  const stickCalc = 55 + 60;

  return (
    <div className={cx(styles.heroBanner)} style={{minHeight:`calc(100vh - ${stickCalc}px)`}}>
      <div className={cx(styles.inner)}>
        <Picture images={props.image} imageClass={'heroImg'}/>
        <div className={cx(styles.overlay)}>
          <div className={cx(styles.content, styles.bottom)}>{props.content}</div>
        </div>
      </div>
    </div>
  )
}


export const mapStateToProps = (state) => {
  return {
    fixedFooterHeight: get('appModule.fixedFooterHeight', state),
    stickyHeaderHeight: get('appModule.stickyHeaderHeight', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HeroBanner);

