import React from 'react'
import PropTypes from 'prop-types';

import BannerContent from './bannerContent';
import scrollMagicEnhanced from './scrollMagicEnhanced';

import styles from './actionBannerStyles';

const actionBanner = (props) => {
  return(
    <div style={props.sceneActive ? {...styles.actionBanner.base,...{}} : styles.actionBanner.base } >
      <div className='scene-content-holder' style={styles.actionBanner.inner}>
        <BannerContent sceneActive={props.sceneActive}/>
      </div>
    </div>
  )
};

actionBanner.propTypes = {
  sceneActive: PropTypes.bool,
};

actionBanner.defaultProps = {
  sceneActive: false,
};

export default scrollMagicEnhanced(actionBanner);