import React from 'react'

import ActionBanner from '../ActionBanner';

import styles from './parallaxStyles';

import imgA from './media/img_mountains01.jpg';
import imgB from './media/img_mountains02.jpg';
import imgC from './media/img_mountains03.jpg';
import imgD from './media/img_mountains04.jpg';

const ScrollMagicComp = (props) => {


  return(
    <div style={{background:'white'}}>

      <div>
        <div style={{...styles.hero.bgImg, backgroundImage:`url(${imgA})`}} />
      </div>

      <ActionBanner />

      <div>
        <div style={{...styles.hero.bgImg, backgroundImage:`url(${imgB})`}} />
      </div>

      <div>
        <div style={{...styles.hero.bgImg, backgroundImage:`url(${imgC})`}} />
      </div>

      <div>
        <div style={{...styles.hero.bgImg, backgroundImage:`url(${imgD})`}} />
      </div>

    </div>
  )
}

export default ScrollMagicComp;

