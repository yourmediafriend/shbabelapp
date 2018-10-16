import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
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
import GridParallax from '../../GridParallax'
import GridWobble from '../../GridWobble'
import {get} from "lodash/fp";

let HeroBackground = (props) => {
  return (
    <div className={cx(styles.fixedBackgroundLayer, props.heroActive ? '' : styles.hide)} >
      {props.breakpoint ==='large' ? <CanvasEnhanced activeSceneId={props.activeSceneId}  bgTextArray={props.bgTextArray} /> : ''}

      {/*<div style={{position:'absolute',top:'300px',left:'300px', background:'#fff', color:'black'}}>*/}
        {/*{props.breakpoint}*/}
        {/*{props.activeSceneId}*/}
      {/*</div>*/}

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

    return (
      <MainLayer className={cx(styles.mainLayer)}   >

        <HeroBackground breakpoint={this.props.breakpoint} activeSceneId={this.state.activeSceneId} bgTextArray={this.state.textArray}  />

        <ContentLayer className={cx(styles.contentLayer)} >

{/*         <HomepageHero setActiveSceneId={this.setScene.bind(this)} />*/}

          <div className={cx(styles.content)}>

        {/*    <div className={cx(styles.carouselContainer)}>
              <OneColumnCenter contentMain={<Carousel />} />
            </div>*/}

            <div className={cx(styles.gridContainer)}>
              <OneColumnCenter  contentMain={<GridWobble itemsMax={6}/>} />
            </div>

            <div className={cx(styles.featureListContainer)}>
              <OneColumnCenter contentMain={<FeatureList />} />
            </div>


   {/*         <OneColumnCenter contentMain={<Dummytext />} />*/}

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
