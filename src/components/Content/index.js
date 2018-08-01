import React from 'react';
import PropTypes from 'prop-types';
import styles from './content.scss';


// Content
import SvgAnimation from '../SvgAnimations';
import ScrollMagicParallax from '../ScrollMagicParallax';
import ScrollMagicParallaxExtra from '../ScrollMagicParallaxExtra';
import SvgFlasher from '../SvgFlasher';
import SvgPattern from '../SvgPattern';
import QuarterPage from '../QuarterPage';

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
import StickyElements from '../Pages/DemoPages/StickyElements';



const MainContent = props => {
  return (
    <div className={styles.content} style={{...props.style}}>
      {props.children}
    </div>
  )
}

const Content = ({currentpage }) => {

  switch(currentpage) {
    case 'home':
      return;
    case 'svgs':
      return  <SvgAnimation />;
    case 'circle':
      return  <SvgAnimation shape='circle' />;
    case 'square':
      return  <SvgAnimation shape='square'/>;
    case 'triangle':
      return  <SvgAnimation shape='triangle'/>;
    case 'hypno':
      return  <SvgAnimation shape='hypno'/>;
    case 'parallax':
      return  <ScrollMagicParallax />;
    case 'parallaxExtra':
      return  <ScrollMagicParallaxExtra />;
    case 'svgFlasher':
      return  <SvgFlasher />;
    case 'svgPattern':
      return  <SvgPattern />;
    case 'stickyHeader':
      return (
        <MainContent style={{backgroundColor:'#fff'}}>
          <StickyElements />
        </MainContent>
      );
    case 'quarter':
      return  <QuarterPage />;
    case 'grid-parallax':
      return (
        <MainContent>
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
    default:
      return null;
  }
}

export default Content;