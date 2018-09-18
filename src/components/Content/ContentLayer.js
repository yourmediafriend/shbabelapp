import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'
import styles from './content.scss';
import {max} from "lodash/fp";

let stickyHeaderHeight = 80;
let footerRevealHeightLarge = 260;
let footerFixedHeightLarge = 60;


const ContentLayer = props => {
  return (
    <div className={cx(styles.contentLayer, props.className)}
         style={{ ...props.showHeader ? {paddingTop:`${stickyHeaderHeight}px`} : '',
           ...props.showFooterReveal ? {marginBottom:`${footerRevealHeightLarge}px`, boxShadow:'0 7px 15px -7px rgba(58, 57, 57, 0.50)'} : '',
           ...props.showFooterFixed ? {marginBottom:`${footerFixedHeightLarge}px`} : '',
           ...props.showFooterFixed && props.showFooterReveal ? {marginBottom:`${( max([footerRevealHeightLarge,footerFixedHeightLarge]))}px`} : '',
           ...{minHeight:  `calc(100vh - ${( max([footerRevealHeightLarge, footerFixedHeightLarge]))}px`}}}
    >
      {props.children}
    </div>
  )
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



export default ContentLayer;