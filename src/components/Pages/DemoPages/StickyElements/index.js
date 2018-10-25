import React, { Component } from 'react';
import { TwoColumnLeft }  from '../../../Layout';
import cx from "classnames";
import MainLayer from '../../../Content/MainLayer'
import ContentLayer from '../../../Content/ContentLayer'

import styles from './stickyElements.scss';

import DummyText from '../../../Placeholders/DummyText/DummyTextLong'
import StickyPanel from './StickyPanel';
import { PromoWidget } from '../../../Widgets';

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


//return React.forwardRef(forwardRef);


class Sidebar extends Component {

    constructor(props) {
      super(props);
      this.ref = React.createRef();
    }

    render() {
      return (
        <div ref={this.ref} className={styles.sidebarWrap}>
          <PromoWidget imgSrc={hero_480w} className={styles.sidebarWidget} />
          <StickyPanel  />
          <PromoWidget imgSrc={hero_480w} className={cx(styles.sidebarWidget,styles.fixBottom)} />
        </div>
      );
    }
};

class Page extends Component {

  constructor(props) {
    super(props);
    //this.ref = React.createRef();
    //forwardedRef={this.ref}
  }

  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <HeroBanner image={imagesHero}  />
          <TwoColumnLeft  contentMain={<DummyText />}  contentColumnLeft={<Sidebar />} className={styles.containerMain}/>
        </ContentLayer>
      </MainLayer>
    )
  }
}


export default Page;



