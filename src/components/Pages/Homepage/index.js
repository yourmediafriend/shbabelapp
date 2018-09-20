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
import HomeCanvas from './HomeCanvas';
import CanvasEnhanced from './CanvasSimple';

const UpdateTileCount = (count) => {

  console.log(count);

}


const HomeContent = (props) => {
  return (
    <div className={cx(styles.content)}>
      <section className={cx(styles.section)}>
        <div className={cx(styles.mainText)}>
          <div className={cx(styles.inner)}>
            <h1>{props.title}</h1>
            Creative vision, technologies and digital experience
          </div>
        </div>
      </section>
      <section className={cx(styles.section)}>
        <div className={cx(styles.mainText)}>
          <div className={cx(styles.inner)}>
            section 2
          </div>
        </div>
      </section>
      <section className={cx(styles.section)}>
        <div className={cx(styles.mainText)}>
          <div className={cx(styles.inner)}>
            section 3
          </div>
        </div>
      </section>
      <section className={cx(styles.section)}>
        <div className={cx(styles.mainText)}>
          <div className={cx(styles.inner)}>
            section 4
          </div>
        </div>
      </section>
    </div>
  );
}


let FixedBackground = (props) => {
  return (
    <div className={cx(styles.fixedBackgroundLayer)} >
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
        <FixedBackground activeSceneId={this.props.activeSceneId} />
        <ContentLayer className={cx(styles.contentLayer)} >
          <HomeContent title={this.props.title}/>
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default ScrollMagicEnhanced(Page);
