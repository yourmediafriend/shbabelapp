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


const UpdateTileCount = (count) => {
  console.log(count);
}


const HomeHero = (props) => {
  return (

    <div id={'home-hero'} className={cx(styles.content)}>
      <section  className={cx(styles.section, styles.hero, 'section')}>
        <div className={cx(styles.mainText)}>
          <div className={cx(styles.inner)}>
            Section 1
          </div>
        </div>
      </section>
      <section className={cx(styles.section, 'section')}>
        <div className={cx(styles.mainText)}>
          <div className={cx(styles.inner)}>
            Section 2
          </div>
        </div>
      </section>
      <section className={cx(styles.section, 'section')}>
        <div className={cx(styles.mainText)}>
          <div className={cx(styles.inner)}>
            Section 3
          </div>
        </div>
      </section>
      <section className={cx(styles.section, 'section')}>
        <div className={cx(styles.mainText)}>
          <div className={cx(styles.inner)}>
            Section 4
          </div>
        </div>
      </section>
    </div>
  );
}


let FixedBackground = (props) => {
  return (
    <div className={cx(styles.fixedBackgroundLayer, props.heroActive ? '' : styles.hide)} >
      <CanvasEnhanced activeSceneId={props.activeSceneId}/>
      <div style={{position:'absolute',top:'100px',left:'100px'}}>
        {props.activeSceneId}
      </div>
    </div>
  )
};

class Page extends Component {
  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <FixedBackground activeSceneId={this.props.activeSceneId}  heroActive={this.props.heroActive}  />
        <ContentLayer className={cx(styles.contentLayer)} >
          <HomeHero title={this.props.title}/>
          <OneColumnCenter contentMain={<FeatureList />} />
          <OneColumnCenter contentMain={<Dummytext />} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default ScrollMagicEnhanced(Page);
