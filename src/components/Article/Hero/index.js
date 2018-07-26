import React, { Component } from 'react';

import HeroBanner from '../../HeroBanner';
import styles from '../articleStyles';

import hero_480w from '../../../media/hero6/hero_480w.jpg';
import hero_660w from '../../../media/hero6/hero_660w.jpg';
import hero_960w from '../../../media/hero6/hero_960w.jpg';
import hero_980w from '../../../media/hero6/hero_980w.jpg';
import hero_1320w from '../../../media/hero6/hero_1320w.jpg';
import hero_1900w from '../../../media/hero6/hero_1900w.jpg';


const imagesHero = {
  0: hero_480w,
  480: hero_660w,
  660: hero_960w,
  740: hero_980w,
  1140: hero_1320w,
  1300: hero_1900w,
};

let HeroContent = props => (
  <div style={styles.hero.main}>
    <div style={styles.content.column.main}>
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




