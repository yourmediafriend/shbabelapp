import React, { Component } from 'react';
import { OneColumnCenter }  from '../../../Layout';
import Article from '../../../Placeholders/Article';
import ArticleHero from '../../../Placeholders/Article/Hero';
import styles from './mixed.scss'
import cx from "classnames";
import MainLayer from '../../../Content/MainLayer'
import ContentLayer from '../../../Content/ContentLayer'

class Page extends Component {

  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <ArticleHero />
          <OneColumnCenter className={styles.article} contentMain={<Article />} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;




