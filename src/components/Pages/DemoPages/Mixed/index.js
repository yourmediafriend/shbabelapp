import React, { Component } from 'react';
import { OneColumnCenter }  from '../../../Layout';
import Article from '../../../Article';
import ArticleHero from '../../../Article/Hero';
import styles from './mixed.scss'

class DemoPage extends Component {

  render() {
    return (
      <div>
        <ArticleHero />
        <OneColumnCenter className={styles.article} contentMain={<Article />} />
      </div>
    )
  }
}

export default DemoPage;
