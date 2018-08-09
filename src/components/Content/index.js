import React from 'react';
import styles from './content.scss';
import cx from 'classnames'

// Content
import SvgAnimation from '../SvgAnimations';
import ScrollMagicParallax from '../ScrollMagicParallax';
import ScrollMagicParallaxExtra from '../ScrollMagicParallaxExtra';

import SvgPattern from '../SvgPattern';
import QuarterPage from '../QuarterPage';
import Fullpage from '../Fullpage';

// Pages
import ContactPage from '../Pages/ContactPage';
import WeatherPage from '../Pages/WeatherPage';
import GridPage from '../Pages/GridPage';
import TestPage from '../Pages/TestPage';

// Demo Pages
import OneColumnCenterDemo from '../Pages/DemoPages/OneColumnCenter';
import TwoColumnRightDemo from '../Pages/DemoPages/TwoColumnRight';
import TwoColumnLeftDemo from '../Pages/DemoPages/TwoColumnLeft';
import ThreeColumnDemo from '../Pages/DemoPages/ThreeColumn';
import MixedDemo from '../Pages/DemoPages/Mixed';
import DrupalArticles from '../Pages/DemoPages/DrupalArticles';



import StickyElements from '../Pages/DemoPages/StickyElements';

const MainContent = props => {
  return (
    <div className={cx(styles.content,props.className)} style={{...props.style}}>
      {props.children}
    </div>
  )
}

const Content = ({currentpage }) => {

  switch(currentpage) {
    case 'home':
      return null;
    case 'svgs':
      return  <SvgAnimation />;
    case 'circle':
      return(
        <MainContent style={{backgroundColor:'#464646'}}>
          <SvgAnimation shape='circle'/>
        </MainContent>
      );
    case 'square':
      return(
        <MainContent style={{backgroundColor:'#464646'}}>
          <SvgAnimation shape='square'/>
        </MainContent>
      );
    case 'triangle':
      return(
        <MainContent style={{backgroundColor:'#464646'}}>
          <SvgAnimation shape='triangle'/>
        </MainContent>
      );
    case 'hypno':
      return  <SvgAnimation shape='hypno'/>;
    case 'parallax':
      return  <ScrollMagicParallax />;
    case 'parallaxExtra':
      return  <ScrollMagicParallaxExtra />;
    case 'svgPattern':
      return(
        <MainContent style={{backgroundColor:'#000'}}>
          <SvgPattern />;
        </MainContent>
      );
    case 'stickyHeader':
      return (
        <MainContent>
          <StickyElements />
        </MainContent>
      );
    case 'quarter':
      return  <QuarterPage />;
    case 'fullpage':
      return (
        <MainContent className={styles.fullpage}>
          <Fullpage />
        </MainContent>
      );
    case 'grid-parallax':
      return (
        <MainContent className={styles.grid}>
          <GridPage />
        </MainContent>
      );
    case 'contact':
      return (
        <MainContent style={{backgroundColor:'#fff'}}>
          <ContactPage />
        </MainContent>
      );
    case 'weather':
      return (
        <MainContent style={{backgroundColor:'#fff'}}>
          <WeatherPage />
        </MainContent>
      );
    case 'test':
      return (
        <MainContent style={{backgroundColor:'#fff'}}>
          <TestPage />
        </MainContent>
      );
    case 'oneColumnCenterDemo':
      return (
        <MainContent style={{backgroundColor:'#fff'}}>
          <OneColumnCenterDemo />
        </MainContent>
      );
    case 'twoColumnRightDemo':
      return (
        <MainContent style={{backgroundColor:'#fff'}}>
          <TwoColumnRightDemo />
        </MainContent>
      );
    case 'twoColumnLeftDemo':
      return (
        <MainContent style={{backgroundColor:'#fff'}}>
          <TwoColumnLeftDemo />
        </MainContent>
      );
    case 'threeColumnDemo':
      return (
        <MainContent style={{backgroundColor:'#fff'}}>
          <ThreeColumnDemo />
        </MainContent>
      );
    case 'mixedDemo':
      return (
        <MainContent style={{backgroundColor:'#f5f5f5'}}>
          <MixedDemo />
        </MainContent>
      );
    case 'drupalArticles':
      return (
        <MainContent style={{backgroundColor:'#f5f5f5'}}>
          <DrupalArticles />
        </MainContent>
      );
    default:
      return null;
  }
}

export default Content;
