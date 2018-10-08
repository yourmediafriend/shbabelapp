import React, {Component} from 'react';
import {OneColumnCenter} from '../../../Layout';

import Slider from "react-slick";

import styles from './styles.scss'
import cx from "classnames";
import MainLayer from '../../../Content/MainLayer'
import ContentLayer from '../../../Content/ContentLayer'

import Carousel from '../../../Carousel';
import FeatureList from '../../../FeatureList';

class Page extends Component {
  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <OneColumnCenter contentMain={<FeatureList />} />
          <OneColumnCenter contentMain={<Carousel />} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;




