import React from 'react'

import bannerImg from './media/hero_banner.jpg';

import styles from './heroBannerStyles'

const HeroBanner = () => (
  <div style={{...styles.hero.bgImg, backgroundImage:`url(${bannerImg})`}  }  />
)

export default HeroBanner
