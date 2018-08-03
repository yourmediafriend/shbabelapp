import React from 'react'
import styles from "./pagesStyles";


// Pages
import ContactPage from '../components/Pages/ContactPage';
import GridPage from '../components/Pages/GridPage';

import OneColumnCenterDemo from '../components/Pages/DemoPages/OneColumnCenter';
import TwoColumnRightDemo from '../components/Pages/DemoPages/TwoColumnRight';
import TwoColumnLeftDemo from '../components/Pages/DemoPages/TwoColumnLeft';
import ThreeColumnDemo from '../components/Pages/DemoPages/ThreeColumn';


// Elements
import Logo from '../components/Logo';
import IconNav from '../components/IconNav';
import Header from '../components/Header';

// Menu
import SidebarMenu from '../components/SidebarMenu';
import MenuTrigger from '../components/SidebarMenu/MenuTrigger';

// Content
import ColumnLayout from '../components/ColumnLayout';

import SvgAnimation from '../components/SvgAnimations';
import ScrollMagicParallax from '../components/ScrollMagicParallax';
import ScrollMagicParallaxExtra from '../components/ScrollMagicParallaxExtra';

import SvgPattern from '../components/SvgPattern';
import QuarterPage from '../components/QuarterPage';

import Fullpage from '../components/Fullpage';
import NestedMenu from '../components/NestedMenu';


const renderContentSwitch = (currentpage) => {

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
    case 'svgPattern':
      return  <SvgPattern />;
    case 'stickyHeader':
      return (
        <MainContent style={{backgroundColor:'#fff'}}>
          <ColumnLayout />
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
    default:
      return null;
  }
}


const MainContent = props => {
  return (
    <div style={{...styles.container.scroll, ...props.style   }}>
      <Header style={{width: '100%'}}/>
      {props.children}
    </div>
  )
}




const OneColumnFlat = props => {
  return (
    <div>
      {renderContentSwitch(props.currentpage)}
    </div>
  )
};

export default OneColumnFlat;

