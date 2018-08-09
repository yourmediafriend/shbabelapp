import React, { Component } from 'react';
import { OneColumnCenter }  from '../../../Layout';
import Article from '../../../Article';
import ArticleHero from '../../../Article/Hero';

class DemoPage extends Component {

  render() {
    return (
      <div>
        <ArticleHero />
        <OneColumnCenter contentMain={<Article />} styles={{backgroundColor:'#ffffff'}}  />
      </div>
    )
  }
}

export default DemoPage;
