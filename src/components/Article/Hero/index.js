import React, { Component } from 'react';
import styles from '../article.scss';

import HeroBanner from '../../HeroBanner';
let hero_480w  = 'https://res.cloudinary.com/dghff7rpa/image/upload/c_scale,w_660/v1536370812/hero/hero_2600w.jpg';
let hero_660w  = 'https://res.cloudinary.com/dghff7rpa/image/upload/c_scale,w_960/v1536370812/hero/hero_2600w.jpg';
let hero_960w  = 'https://res.cloudinary.com/dghff7rpa/image/upload/c_scale,w_980/v1536370812/hero/hero_2600w.jpg';
let hero_980w  = 'https://res.cloudinary.com/dghff7rpa/image/upload/c_scale,w_1320/v1536370812/hero/hero_2600w.jpg';
let hero_1320w = 'https://res.cloudinary.com/dghff7rpa/image/upload/c_scale,w_1900/v1536370812/hero/hero_2600w.jpg';
let hero_1900w = 'https://res.cloudinary.com/dghff7rpa/image/upload/v1536370812/hero/hero_2600w.jpg';

const imagesHero = {
  0: hero_480w,
  480: hero_660w,
  660: hero_960w,
  740: hero_980w,
  1140: hero_1320w,
  1300: hero_1900w,
};

let HeroContent = props => (
  <div className={styles.heroMain}>
    <div className={styles.columnMain}>
      <h1>
        'nean leo ligula': porttitor eu, consequat vitae, eleifend
      </h1>
    </div>
  </div>
)

class ArticleHero extends Component {
  render() {
    return (<HeroBanner image={imagesHero} content={<HeroContent />} />)
  }
}

export default ArticleHero;




