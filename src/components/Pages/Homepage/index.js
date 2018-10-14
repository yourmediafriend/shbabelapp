import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './homepage.scss'
import ScrollMagicEnhanced from './scrollMagicEnhanced';
import MainLayer from '../../Content/MainLayer';
import ContentLayer from '../../Content/ContentLayer';
import Background from '../../Background';
import { OneColumnCenter }  from '../../Layout';
import Dummytext from '../../DummyText/DummyTextLong';
import CanvasEnhanced from './CanvasSimple';
import FeatureList from '../../FeatureList';
import Carousel from '../../Carousel';
import HomepageHero from './HomepageHero';

let FixedBackground = (props) => {

  return (
    <div className={cx(styles.fixedBackgroundLayer, props.heroActive ? '' : styles.hide)} >
      <CanvasEnhanced activeSceneId={props.activeSceneId}  bgTextArray={props.bgTextArray} />
      <div style={{position:'absolute',top:'100px',left:'100px'}}>
        {props.activeSceneId}
      </div>
    </div>
  )
};


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

    console.log(this.state.textArray);

    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <FixedBackground activeSceneId={this.state.activeSceneId} bgTextArray={this.state.textArray}  />

    {/*    <FixedBackground activeSceneId={this.state.activeSceneId}  heroActive={this.props.heroActive}  />*/}
        <ContentLayer className={cx(styles.contentLayer)} >
          <HomepageHero setActiveSceneId={this.setScene.bind(this)} />

          <div className={cx(styles.content)}>
            <div className={cx(styles.carouselContainer)}>
              <OneColumnCenter contentMain={<Carousel />} />
            </div>
            <div className={cx(styles.featureListContainer)}>
              <OneColumnCenter contentMain={<FeatureList />} />
            </div>
            <OneColumnCenter contentMain={<Dummytext />} />
          </div>

        </ContentLayer>
      </MainLayer>
    );
  }
}

export default Page;
