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

import { LoginPage, SignUpPage, AccountPage, PasswordPage } from '../Pages/AccountPages';


import ContactPage from '../Pages/ContactPage';
import WeatherPage from '../Pages/WeatherPage';

import News from '../News';
import NewsArticle from '../News/Article';

import TestPage from '../Pages/TestPage';

// Grid Pages
import GridParallax from '../Pages/Grids/GridParallax';
import GridFullpage from '../Pages/Grids/GridFullpage';
import GridWobblepage from '../Pages/Grids/GridWobblepage';
import GridHoverPage from '../Pages/Grids/GridHoverPage';

// Demo Pages
import OneColumnCenterDemo from '../Pages/DemoPages/OneColumnCenter';
import TwoColumnRightDemo from '../Pages/DemoPages/TwoColumnRight';
import TwoColumnLeftDemo from '../Pages/DemoPages/TwoColumnLeft';
import ThreeColumnDemo from '../Pages/DemoPages/ThreeColumn';
import MixedDemo from '../Pages/DemoPages/Mixed';
import DrupalArticles from '../Pages/DemoPages/DrupalArticles';
import CarouselDemo from '../Pages/DemoPages/Carousel';

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
    case 'password':
      return <PasswordPage />;
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
      return <GridParallax pageRef={pageRef}/>;
    case 'grid-fullpage':
      return <GridFullpage />;
    case 'grid-wobble':
      return <GridWobblepage />;
    case 'grid-hover':
      return <GridHoverPage />;
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
    case 'carousel':
      return <CarouselDemo />;
    default:
      return null;
  }
}

export default Content;
