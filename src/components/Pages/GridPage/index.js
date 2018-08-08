import React, { Component } from 'react';
import PageTitle from '../../PageTitle';
import Banner from '../../Banner';
import { OneColumnCenter }  from '../../Layout';
import GridParallax from '../../GridParallax'
import styles from './gridpages.scss'
import cx from 'classnames';

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

class GridPage extends Component {
  render() {
    return (
      <div>
        <div className={cx(styles.section, styles.banner)}>
          <Banner image={imagesHero} content={<PageTitle title={ 'Paralax Grid!' } layout={'center'} style={{}} />}/>
        </div>
        <div className={cx(styles.section)}>
          <OneColumnCenter  contentMain={<GridParallax />}/>
        </div>
      </div>
    )
  }
}

export default GridPage;
