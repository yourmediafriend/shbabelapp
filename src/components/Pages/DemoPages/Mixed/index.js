import React, { Component } from 'react';
import { OneColumnCenter }  from '../../../Layout';

import bannerImg from '../../../../media/hero_banner.jpg';

import Article from '../../../Article';
import ArticleHero from '../../../Article/Hero';

class DemoPage extends Component {

  constructor(props) {
    super(props);
  }

  //style={{display:'flex',flexDirection:'column'}}

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
