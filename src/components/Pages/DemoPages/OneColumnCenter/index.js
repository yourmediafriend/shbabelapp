import React, { Component } from 'react';
import { OneColumnCenter }  from '../../../Layout';
import PageTitle from '../../../PageTitle'
import Dummytext from '../../../Placeholders/DummyText/DummyTextShort';
import BannerParallax from '../../../BannerParallax';

import cx from "classnames";
import MainLayer from '../../../Content/MainLayer'
import ContentLayer from '../../../Content/ContentLayer'
import styles from '../demoPages.scss';

class Page extends Component {

  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={ 'One Column Center Page Layout!' } layout={'center'} style={{}} />
          <OneColumnCenter contentMain={<Dummytext />} />
          <OneColumnCenter contentMain={<Dummytext />} />
          <OneColumnCenter contentMain={<Dummytext />} />
          <div className={cx(styles.bannerContainer)}>
            <BannerParallax />
          </div>
          <OneColumnCenter contentMain={<Dummytext />} />
          <OneColumnCenter contentMain={<Dummytext />} />
          <OneColumnCenter contentMain={<Dummytext />} />
          <OneColumnCenter contentMain={<Dummytext />} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;




