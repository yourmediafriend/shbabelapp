import React, { Component } from 'react';
import cx from 'classnames';
import styles from './homepage.scss'
import { ThreeColumn }  from '../../Layout';
import PageTitle from '../../PageTitle'
import Dummytext from '../../DummyText/DummyTextLong';
import ScrollMagicEnhanced from './scrollMagicEnhanced';
import Background from '../../Background';

import BackgroundImageUrlC from '../../../media/backgrounds/images/factory-1.gif';

const FixedBackground = (props) => {
  return (
    <div className={cx(styles.fixedBackgroundLayer)} >
      <Background className={styles.contentContainer} bgSrc={BackgroundImageUrlC} />
    </div>
  )
};

class Page extends Component {
  render() {
    return (
      <div>
        <FixedBackground />
        <div className={cx(styles.textLayer)}>
          <PageTitle title={ 'HOMEPAGE!' } layout={'center'} />
          <ThreeColumn  contentColumnLeft="contentColumnLeft" contentMain={<Dummytext />}  contentColumnRight="contentColumnRight"  />
        </div>
      </div>
    )
  }
}

//export default Page;
export default ScrollMagicEnhanced(Page);
