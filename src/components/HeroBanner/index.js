import React from 'react'
import Picture from '../Picture';
import cx from 'classnames';
import styles from './heroBanner.scss';

const HeroBanner = (props) => {
  return (
    <div className={cx(styles.heroBanner)}>
      <div className={cx(styles.inner)}>
        <Picture images={props.image} imageClass={'heroImg'}/>
        <div className={cx(styles.overlay)}>
          <div className={cx(styles.content, styles.bottom)}>{props.content}</div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;
