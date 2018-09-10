import React, { Component } from 'react';
import PageTitle from '../../PageTitle';
import Banner from '../../Banner';
import { OneColumnCenter }  from '../../Layout';
import GridParallax from '../../GridParallax'
import styles from './gridpages.scss'
import cx from 'classnames';

let hero_480w  = 'http://res.cloudinary.com/dghff7rpa/image/upload/c_scale,w_660/v1536370812/hero/hero_2600w.jpg'
let hero_660w  = 'http://res.cloudinary.com/dghff7rpa/image/upload/c_scale,w_960/v1536370812/hero/hero_2600w.jpg';
let hero_960w  = 'http://res.cloudinary.com/dghff7rpa/image/upload/c_scale,w_980/v1536370812/hero/hero_2600w.jpg';
let hero_980w  = 'http://res.cloudinary.com/dghff7rpa/image/upload/c_scale,w_1320/v1536370812/hero/hero_2600w.jpg';
let hero_1320w = 'http://res.cloudinary.com/dghff7rpa/image/upload/c_scale,w_1900/v1536370812/hero/hero_2600w.jpg';
let hero_1900w = 'http://res.cloudinary.com/dghff7rpa/image/upload/v1536370812/hero/hero_2600w.jpg';

const imagesHero = {
  0: hero_480w,
  480: hero_660w,
  660: hero_960w,
  740: hero_980w,
  1140: hero_1320w,
  1300: hero_1900w,
};

class GridPage extends Component {
  render() {
    return (
      <div>
        <Banner image={imagesHero} content={<PageTitle title={ 'Paralax Grid!' } layout={'center'} style={{}} className={cx(styles.section)} />}/>
        <OneColumnCenter  contentMain={<GridParallax />} className={cx(styles.section, styles.contentMain)}/>
      </div>
    )
  }
}

export default GridPage;
