import React from 'react'
import bannerImg from '../../media/hero_banner.jpg';
import cx from 'classnames';
import styles from './heroBanner.scss';

const HeroBanner = () => (
  <div style={{...styles.hero.bgImg, backgroundImage:`url(${bannerImg})`}  }  />
)

export default HeroBanner
