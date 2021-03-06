import React from 'react'
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './banner.scss';
import Picture from '../Picture';


const baner = (props) => {

  const classes = {bottom: styles.bottom, center: styles.center}

  return(
    <div className={cx(styles.clipBanner)}>
      <div className={cx(styles.textOverMediaInnerText, classes['center'])}>
        <div className={cx(styles.textInner)}>
          {props.content}
        </div>
      </div>
      <div className={cx(styles.backgroundOverlay)} />
      <div className={cx(styles.sectionBackground)}>
        <Picture images={props.image} className={cx(styles.picture)}  />
      </div>
    </div>
  )
};

baner.propTypes = {
  content: PropTypes.object,
  image: PropTypes.object
};

baner.defaultProps = {

};

export default baner;

