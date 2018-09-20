import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'
import styles from './content.scss';
import ContentLayer from "./ContentLayer";


const MainLayer = props => {
  return (
    <div className={cx(styles.mainLayer, props.showFooterReveal? styles.footerReveal : '', props.className)}>
      {props.children}
    </div>
  )
}

MainLayer.propTypes = {
  showHeader: PropTypes.bool,
  showFooterReveal: PropTypes.bool,
  showFooterFixed:  PropTypes.bool,
};

MainLayer.defaultProps = {
  showHeader: true,
  showFooterReveal: true,
  showFooterFixed: true
};


export default MainLayer;