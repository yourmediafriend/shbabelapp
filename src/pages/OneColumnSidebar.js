import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './pages.scss';
import { mediaMatch } from '../utils/mediaQueries';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';

import {
  get,
} from 'lodash/fp';

// Elements
import MainContent from '../components/Content';
import StickyHeader from '../components/ScrollMagicStickyHeader';
import {FixedFooter, RevealFooter} from '../components/Footer';

import Modal from '../components/Modal';

// Menu
import SidebarMenu from '../components/SidebarMenu';
import MenuTrigger from '../components/SidebarMenu/MenuTrigger';

import {
  offCanvasMenuStateChange,
  offCanvasMenuToggleAnimation
} from '../modules/OffCanvasMenu';

import styleJs from './pagesStyles.js';

const openMenunClass = function (isMenuOpen) {
  return isMenuOpen ? styleJs.open : '';
};

const FooterContainer = (props) => {

  let footerClasses = {
    isFixed: styles.isFixed,
    isReveal: styles.isReveal,
  };

  return (
    <div className={cx(styles.footerContainer, footerClasses[props.class] )}>
      <div className={styles.menuFlexWrap}>
        <div className={styles.menuFlex} style={{...props.flexStyle}} />
        <div className={styles.mainFlex}>
          {props.children}
        </div>
      </div>
    </div>
  );
};






//const Home = (this.props) => {

// this watches for resize and can match queries put how to we update the state for this component
//window.addEventListener('resize', mediaQueriesOoof)

const initialState = {
  triggerWidth: 50,
  menuWidth: 280,
  sidebarStyle: 'overlay',
  fixedFooterHeight: 0,
};

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
    this.fixedFooter = React.createRef();
  };

  componentWillMount(){
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  componentDidMount() {
    this.setFixedFooterHeight();
  }

  componentDidUpdate() {
    const { height } =  this.getDimensions(ReactDOM.findDOMNode(this.fixedFooter.current));
  }

  onResize = () => {

    this.setFixedFooterHeight();

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


  setFixedFooterHeight() {
    const { height } =  this.getDimensions(ReactDOM.findDOMNode(this.fixedFooter.current));
    this.setState({fixedFooterHeight: height });
  }
  getDimensions = (element) => {
    const { width, height } = element ? element.getBoundingClientRect() : {};
    return { width, height };
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

  myStyles = (state) => {
    const {menu, containerInner, containerFixed} = state;
    return {
      menu: {
        transform: `translate3d(${menu.transformX}px, 0, 0)`,
      },
      containerInner: {
        width: `${containerInner.marginRight}px`
      },
      containerFixed: {
        left: `${containerFixed.left}px`,
        width: `calc(100vw - ${containerFixed.left}px)`,
      }
    }
  };

  stickyHeaderContainer = (state) => {
    return (
      <div className={cx(styles.headerContainer)}>
        <div className={styles.menuFlexWrap}>
          <div className={styles.menuFlex} style={{...this.myStyles(state).containerInner}} />
          <div className={styles.mainFlex} >
            <StickyHeader />
          </div>
        </div>
      </div>
    );
  };



  render() {

    let props = this.props;
    let sidebarWidth = this.state.triggerWidth + this.state.menuWidth;

    return (
      <Animate
        start={() => ({
          props,
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

          return (
            <div className={styles.outer} style={styleJs.container.outer}>
              <div className={styles.menu} style={{...this.myStyles(state).menu}}>
                <div>
                  <SidebarMenu/>
                </div>
              </div>
              <MenuTrigger/>

              { state.props.fullscreen ? '' :  this.stickyHeaderContainer(state) }

              <div className={styles.mainContainer}>
                <div className={styles.menuFlexWrap}>
                  <div className={styles.menuFlex} style={{...this.myStyles(state).containerInner}}   />
                  <div className={styles.mainFlex} style={{...state.props.fullscreen ? '' : {marginTop:'80px', marginBottom: `${this.state.fixedFooterHeight}px`    }}}>
                    <MainContent currentpage={this.props.currentpage} />
                  </div>
                </div>
              </div>


              { state.props.fullscreen ? '' :  <FooterContainer ref={this.fixedFooter} flexStyle={{...this.myStyles(state).containerInner}} class={'isFixed'}>
                                                  <FixedFooter />
                                                </FooterContainer> }




{/*              { state.props.fullscreen ? '' :  <FooterContainer flexStyle={{...this.myStyles(state).containerInner}} class={'isReveal'}>
                                                  <RevealFooter />
                                                </FooterContainer> }*/}
            </div>
          );
        }}
      </Animate>
    )
  }
}



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


Home.propTypes = {
  isMenuOpen: PropTypes.bool,
  openMenunClass: PropTypes.func,
  offCanvasMenuStateChange: PropTypes.func,
  offCanvasMenuToggleAnimation: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
