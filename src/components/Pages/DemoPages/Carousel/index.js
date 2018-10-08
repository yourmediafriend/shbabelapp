import React, {Component} from 'react';
import {OneColumnCenter} from '../../../Layout';
import Article from '../../../Article';
import ArticleHero from '../../../Article/Hero';

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
          <FeatureList />
          <Carousel />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;




