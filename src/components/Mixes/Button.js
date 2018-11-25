import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.scss';
import cx from 'classnames';
import Icon from '../Icons';

let  Button = (props)  => {
  const {nid, track, playing } = props;
  return (
    <button className={cx(styles.button, styles.playpause)} >
      {track.nid === nid && playing ? <span className={cx(styles.icon, styles.pause)}><Icon icon={'pause'} /></span> : <span className={cx(styles.icon, styles.play)}><Icon icon={'play'} /></span>}
    </button>
  )
}

Button.propTypes = {
  nid: PropTypes.number,
  track: PropTypes.object,
  playing: PropTypes.bool,
};

Button.defaultProps = {
  playing: false,
};


export default Button;