import React, { Component } from 'react';
import { ThreeColumn }  from '../../../Layout';

import { CookieWidget, PromoWidget, MenuWidget, NewsLatestWidget} from '../../../Widgets';

import PageTitle from '../../../PageTitle'
import Dummytext from '../../../DummyText/DummyTextLong';
import cx from "classnames";
import MainLayer from '../../../Content/MainLayer'
import ContentLayer from '../../../Content/ContentLayer'
import styles from '../demoPages.scss';

import HeroBanner from '../../../HeroBanner';
import hero_480w from '../../../../media/hero6/hero_480w.jpg';
import hero_660w from '../../../../media/hero6/hero_660w.jpg';
import hero_960w from '../../../../media/hero6/hero_960w.jpg';
import hero_980w from '../../../../media/hero6/hero_980w.jpg';
import hero_1320w from '../../../../media/hero6/hero_1320w.jpg';
import hero_1900w from '../../../../media/hero6/hero_1900w.jpg';

const imagesHero = {
  0: hero_480w,
  480: hero_660w,
  660: hero_960w,
  740: hero_980w,
  1140: hero_1320w,
  1300: hero_1900w,
};

class SidebarLeft extends Component {

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <div ref={this.ref} className={styles.sidebarWrap}>

        <CookieWidget className={styles.CookieWidget} />

        <PromoWidget imgSrc={hero_480w} className={styles.sidebarWidget} />
        <MenuWidget  className={styles.sidebarWidget} />
        <PromoWidget imgSrc={hero_480w} className={cx(styles.sidebarWidget)} />
      </div>
    );
  }
};

class SidebarRight extends Component {

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <div ref={this.ref} className={styles.sidebarWrap}>
        <NewsLatestWidget className={styles.sidebarWidget}/>
        <PromoWidget imgSrc={hero_480w} className={styles.sidebarWidget} />
      </div>
    );
  }
};


class Page extends Component {

  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={ 'Three Column Page Layout!' } layout={'center'} />
          <ThreeColumn  contentColumnLeft={<SidebarLeft />} contentMain={<Dummytext />}  contentColumnRight={<SidebarRight />}  />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;


