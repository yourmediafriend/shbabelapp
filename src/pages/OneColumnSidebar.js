import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mediaMatch } from '../utils/mediaQueries';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';

import {
  get,
} from 'lodash/fp';

// Pages
import ContactPage from '../components/Pages/ContactPage';
import WeatherPage from '../components/Pages/WeatherPage';


import GridPage from '../components/Pages/GridPage';
import TestPage from '../components/Pages/TestPage';

// Demo Pages
import OneColumnCenterDemo from '../components/Pages/DemoPages/OneColumnCenter';
import TwoColumnRightDemo from '../components/Pages/DemoPages/TwoColumnRight';
import TwoColumnLeftDemo from '../components/Pages/DemoPages/TwoColumnLeft';
import ThreeColumnDemo from '../components/Pages/DemoPages/ThreeColumn';
import MixedDemo from '../components/Pages/DemoPages/Mixed';
import StickyElements from '../components/Pages/DemoPages/StickyElements';

// Elements
import Logo from '../components/Logo';
import IconNav from '../components/IconNav';
import StickyHeader from '../components/ScrollMagicStickyHeader';
import Modal from '../components/Modal';
import SearchModal from '../components/SearchModal'

// Menu
import SidebarMenu from '../components/SidebarMenu';
import MenuTrigger from '../components/SidebarMenu/MenuTrigger';

// Content
import SvgAnimation from '../components/SvgAnimations';
import ScrollMagicParallax from '../components/ScrollMagicParallax';
import ScrollMagicParallaxExtra from '../components/ScrollMagicParallaxExtra';

import SvgFlasher from '../components/SvgFlasher';
import SvgPattern from '../components/SvgPattern';
import QuarterPage from '../components/QuarterPage';

import Fullpage from '../components/Fullpage';
import NestedMenu from '../components/NestedMenu';

import {
  offCanvasMenuStateChange,
  offCanvasMenuToggleAnimation
} from '../modules/OffCanvasMenu';

import styles from './pagesStyles.js';


const openMenunClass = function (isMenuOpen) {
  return isMenuOpen ? styles.open : '';
};

export const mapStateToProps = (state) => {
  return {
    isMenuOpen: get('offCanvasMenu.offCanvasMenuOpen', state),
    openMenunClass: openMenunClass,
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      offCanvasMenuStateChange,
      offCanvasMenuToggleAnimation
    },
    dispatch
  );

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


const MainContent = props => {
  return (
    <div style={{...styles.container.scroll, ...props.style   }}>
      <SearchModal />
      <StickyHeader style={{width: '100%'}}/>
      {props.children}
    </div>
  )
}


//const Home = (this.props) => {

// this watches for resize and can match queries put how to we update the state for this component
//window.addEventListener('resize', mediaQueriesOoof)

const initialState = {
  triggerWidth: 50,
  menuWidth: 280,
  sidebarStyle: 'overlay'
};

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  };

  onResize = () => {
    if (window.matchMedia(mediaMatch.breakpointLarge).matches) {
      this.setState({sidebarStyle:'squash'});
    }
    else if (window.matchMedia(mediaMatch.breakpointSmall).matches) {
      this.setState({sidebarStyle:'push'});
    }
    else {
      this.setState({sidebarStyle:'overlay'});
    }
  };

  componentWillMount(){
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  sidebarAction = (props, sidebarWidth) => {

      switch (this.state.sidebarStyle) {
        case 'squash':
          return {
            transformX: [props.isMenuOpen ? sidebarWidth + 2 : this.state.triggerWidth + 2],
            marginRight: [props.isMenuOpen ? sidebarWidth + 1 : this.state.triggerWidth + 1],
          };
        case 'push':
          return {
            transformX: [props.isMenuOpen ? sidebarWidth + 2 : this.state.triggerWidth + 2],
            marginRight: this.state.triggerWidth,
          };
        default:
          return {
            transformX: this.state.triggerWidth,
            marginRight: this.state.triggerWidth,
          };
      }
  };

  render() {

    let props = this.props;
    let sidebarWidth = this.state.triggerWidth + this.state.menuWidth;

    return (
      <Animate
        start={() => ({
          menu: {
            transformX: (this.state.triggerWidth - this.state.menuWidth) + 4,
          },
          containerInner: this.sidebarAction(props, sidebarWidth),
          containerFixed: {
            left: this.state.triggerWidth
          }
        })}
        update={() => ({
          menu: {
            transformX: [props.isMenuOpen ? this.state.triggerWidth + 3 : (this.state.triggerWidth - this.state.menuWidth) + 4 ],
          },
          containerInner: this.sidebarAction(props, sidebarWidth),
          containerFixed: {
            left: [props.isMenuOpen ? sidebarWidth + 2 : this.state.triggerWidth + 4],
          },
          timing: {duration: 500, ease: easeExpOut},
          events: {
            start() {
              // dispatch action Opening
              // console.log('isAnimating');
              props.offCanvasMenuToggleAnimation();
            },
            end() {
              // dispatch action Opening
              // console.log('notAnimating');
              props.offCanvasMenuToggleAnimation();
            },
          },
        })}
      >
        {(state) => {

          const myStyles = (state) => {
            const {menu, containerInner, containerFixed} = state;
            return {
              menu: {
                transform: `translate3d(${menu.transformX}px, 0, 0)`,
              },
              containerInner: {
                transform: `translate3d(${containerInner.transformX}px, 0, 0)`,
                marginRight: `${containerInner.marginRight}px`
              },
              containerFixed: {
                left: `${containerFixed.left}px`,
                width: `calc(100vw - ${containerFixed.left}px)`,
              }
            }
          };

          return (
            <div style={styles.container.outer}>
              <div style={{...styles.menu, ...myStyles(state).menu}}>
                <div>
                  <SidebarMenu/>
                </div>
              </div>
              <MenuTrigger/>
              <div style={{...styles.container.inner, ...myStyles(state).containerInner}}>
                {renderContentSwitch(this.props.currentpage)}
              </div>
              <div style={{...styles.container.fixed, ...myStyles(state).containerFixed}}/>
              <Modal/>
            </div>
          );
        }}
      </Animate>
    )
  }
}

Home.propTypes = {
  isMenuOpen: PropTypes.bool,
  openMenunClass: PropTypes.func,
  offCanvasMenuStateChange: PropTypes.func,
  offCanvasMenuToggleAnimation: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
