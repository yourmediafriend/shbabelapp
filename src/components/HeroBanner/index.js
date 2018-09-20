import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Picture from '../Picture';
import cx from 'classnames';
import styles from './heroBanner.scss';
import {get} from "lodash/fp";
import appConfig from '../../config'

const heroBannerHeightCalc = (props) => {
 return props.fixedFooter && props.footerFixedOpen ? appConfig.header.height.max + appConfig.footerFixed.height.max : appConfig.header.height.max ;
}

const HeroBanner = (props) => {
  return (
    <div className={cx(styles.heroBanner)} style={{minHeight:`calc(100vh - ${heroBannerHeightCalc(props)}px)`}}>
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
    stickyHeader: get('appModule.stickyHeader', state),
    fixedFooter: get('appModule.fixedFooter', state),
    footerFixedOpen: get('footerModule.footerFixedOpen', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HeroBanner);

