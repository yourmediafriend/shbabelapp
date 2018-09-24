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
import Homepage from '../Pages/Homepage';

import { LoginPage, SignUpPage, AccountPage } from '../Pages/AccountPages';


import ContactPage from '../Pages/ContactPage';
import WeatherPage from '../Pages/WeatherPage';
import GridPage from '../Pages/GridPage';
import News from '../News';
import NewsArticle from '../News/Article';

import TestPage from '../Pages/TestPage';

// Demo Pages
import OneColumnCenterDemo from '../Pages/DemoPages/OneColumnCenter';
import TwoColumnRightDemo from '../Pages/DemoPages/TwoColumnRight';
import TwoColumnLeftDemo from '../Pages/DemoPages/TwoColumnLeft';
import ThreeColumnDemo from '../Pages/DemoPages/ThreeColumn';
import MixedDemo from '../Pages/DemoPages/Mixed';
import DrupalArticles from '../Pages/DemoPages/DrupalArticles';

import StickyElements from '../Pages/DemoPages/StickyElements';

const Content = ({currentpage, pageRef, match }) => {

  switch(currentpage) {
    case 'home':
      return <Homepage />;
    case 'account':
      return <AccountPage />;
    case 'login':
      return <LoginPage />;
    case 'signup':
      return <SignUpPage />;
    case 'svgs':
      return  <SvgAnimation />;
    case 'circle':
      return <SvgAnimation shape='circle'/>;
    case 'square':
      return <SvgAnimation shape='square'/>;
    case 'triangle':
      return <SvgAnimation shape='triangle'/>;
    case 'hypno':
      return  <SvgAnimation shape='hypno'/>;
    case 'parallax':
      return  <ScrollMagicParallax />;
    case 'parallaxExtra':
      return  <ScrollMagicParallaxExtra />;
    case 'svgPattern':
      return <SvgPattern />;
    case 'stickyHeader':
      return <StickyElements />;
    case 'quarter':
      return  <QuarterPage />;
    case 'fullpage':
      return <Fullpage pageRef={pageRef}/>;
    case 'grid-parallax':
      return <GridPage />;
    case 'news':
      return <News />;
    case 'news/article':
      return <NewsArticle match={match} />;
    case 'contact':
      return <ContactPage />;
    case 'weather':
      return <WeatherPage />;
    case 'test':
      return <TestPage />;
    case 'oneColumnCenterDemo':
      return <OneColumnCenterDemo />;
    case 'twoColumnRightDemo':
      return <TwoColumnRightDemo />;
    case 'twoColumnLeftDemo':
      return <TwoColumnLeftDemo />;
    case 'threeColumnDemo':
      return <ThreeColumnDemo />;
    case 'mixedDemo':
      return <MixedDemo />;
    case 'drupalArticles':
      return <DrupalArticles />;
    default:
      return null;
  }
}

export default Content;
