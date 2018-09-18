import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './homepage.scss'
import { ThreeColumn }  from '../../Layout';
import PageTitle from '../../PageTitle'
import Dummytext from '../../DummyText/DummyTextLong';
import ScrollMagicEnhanced from './scrollMagicEnhanced';

import MainLayer from '../../Content/MainLayer';
import ContentLayer from '../../Content/ContentLayer';
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
      <MainLayer className={cx(styles.mainLayer)}>
        <FixedBackground />
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={ 'HOMEPAGE!' } layout={'center'} />
          <ThreeColumn  contentColumnLeft="contentColumnLeft" contentMain={<Dummytext />}  contentColumnRight="contentColumnRight"  />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default ScrollMagicEnhanced(Page);
