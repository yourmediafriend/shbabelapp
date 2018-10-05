import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'
import styles from './content.scss';
import ContentLayer from "./ContentLayer";

/*const MainLayer = React.forwardRef((props, ref)  => {
  return (
    <div ref={ref} className={cx(styles.mainLayer, props.showFooterReveal? styles.footerReveal : '', props.className)}>
      {props.children}
    </div>
  )
});*/

const MainLayer = props  => {
  return (
    <div ref={props.forwardedRef} className={cx(styles.mainLayer, props.showFooterReveal? styles.footerReveal : '', props.className)}>
      {props.children}
    </div>
  )
};

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