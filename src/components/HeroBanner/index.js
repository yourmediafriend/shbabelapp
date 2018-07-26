import React from 'react'
import Radium, { Style } from 'radium';
import styles from './heroBannerStyles'
import Picture from '../Picture';

const HeroBanner = (props) => {
  return (
    <div style={styles.hero.base}>
      <div style={styles.hero.inner}>
        <Picture images={props.image} imageStyles={styles.hero.img}   />
        <div style={styles.hero.overlay} />
        <div style={{...styles.hero.content, ...styles.hero.content.bottom }}>{props.content}</div>
      </div>
    </div>
  )
}

export default Radium(HeroBanner);
