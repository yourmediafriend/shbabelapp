import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import cx from 'classnames';
import styles from './homepage.scss'

import MainLayer from '../../Content/MainLayer';
import ContentLayer from '../../Content/ContentLayer';
import { OneColumnCenter }  from '../../Layout';

import FeatureList from '../../FeatureList';
import Carousel from '../../Carousel';


import HomepageHero from '../../HeroBannerHomepage';
import HeroBackground from '../../HeroBannerHomepage/HeroBackground';


import GridWobble from '../../GridWobble';
import BannerParallax from '../../BannerParallax';
import {get} from "lodash/fp";


class Page extends Component {

  state= {
    activeSceneId: 0,
    sceneBackgroundText: []
  }

  setScene(id, textArray) {
    this.setState({
      activeSceneId :id,
      textArray,
    })
  }

  render() {

    return (

      <MainLayer className={cx(styles.mainLayer)}   >

        <HeroBackground breakpoint={this.props.breakpoint} activeSceneId={this.state.activeSceneId} bgTextArray={this.state.textArray}  />

        <ContentLayer className={cx(styles.contentLayer)} >

          <div className={cx(styles.heroContainer)}>
             <HomepageHero setActiveSceneId={this.setScene.bind(this)} />
          </div>

          <div className={cx(styles.content)}>


            <div className={cx(styles.carouselContainer)}>
              <OneColumnCenter contentMain={<Carousel />} />
            </div>


            <div className={cx(styles.bannerParallaxContainer)}>
              <BannerParallax />
            </div>

           <div className={cx(styles.gridContainer)}>
              <OneColumnCenter  contentMain={<GridWobble itemsMax={6}/>} />
            </div>

            <div className={cx(styles.featureListContainer)}>
              <OneColumnCenter contentMain={<FeatureList />} />
            </div>
          </div>
        </ContentLayer>
      </MainLayer>
    );
  }
}


const mapStateToProps = state => {
  return {
    breakpoint: get('appModule.breakpoint', state),
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Page);
