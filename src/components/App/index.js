import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './app.scss';
import { mediaMatch } from '../../utils/mediaQueries';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import { setCurrentBreakPoint } from '../../modules/App';
import { Player as MusicPlayer } from  '../MusicPlayer';
import { get } from 'lodash/fp';
import { footerClose } from "../../modules/Footer";
import { setIconNavConfig } from "../../modules/App";
import Helmet from "./Helmet";

// Elements
import MainContent from '../Content';
import Header from '../Header';
import SearchModal from '../SearchModal'
import ComplianceModal from '../Modalx/ComplianceModal'

import Modal from '../Modal';
import ModalTest from '../Modalx/TestModal';

import {FixedFooter, RevealFooter} from '../Footer';

// Menu
import SidebarMenu from '../SidebarMenu';
import MenuTrigger from '../SidebarMenu/MenuTrigger';

import {
  offCanvasMenuStateChange,
  offCanvasMenuToggleAnimation
} from '../../modules/OffCanvasMenu';

const StickyContainer = (props) => {
  return (
    <div className={cx(styles.stickyContainer, props.className)}>
      <div className={styles.menuFlexWrap}>
        <div className={styles.menuFlex} style={{...props.flexStyle}} />
        <div className={styles.mainFlex} >
          {props.children}
        </div>
      </div>
    </div>
  );
};

const initialState = {
  triggerWidth: 54,
  menuWidth: 280,
  sidebarStyle: 'overlay',
};


const isTouchScreen = () =>{
  return ('ontouchstart' in window);
}


const touchScreenClass = () =>{

  let root = document.getElementsByTagName( 'html' )[0];

  if (isTouchScreen())
  {
    root.classList.remove('no-touch');
    root.classList.add('touch');
  }
  else
  {
    root.classList.remove('touch');
    root.classList.add('no-touch');
  }



};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  };

  componentWillMount(){
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  onResize = () => {

    let iconNavItemsTop = {};
    let iconNavItemsSide = {};

    touchScreenClass();

    if (window.matchMedia(mediaMatch.breakpointLarge).matches) {
      console.log('large');
      this.setState({sidebarStyle:'squash'});
      this.props.setCurrentBreakPoint('large');
      iconNavItemsTop = {home: true, search: true, account: true, contact: true, cart: true,}
      this.props.setIconNavConfig({side:{}, top: iconNavItemsTop });
    }
    else if (window.matchMedia(mediaMatch.breakpointMedium).matches) {
      console.log('medium');
      this.setState({sidebarStyle:'push'});
      this.props.setCurrentBreakPoint('medium');
      this.props.footerClose();
      iconNavItemsTop = {home: false, search: false, account: true, contact: false, cart: true,}
      iconNavItemsSide = {home: true,search: true,account: false,contact: true, cart: false,}
      this.props.setIconNavConfig({side:iconNavItemsSide, top: iconNavItemsTop });
    }
    else if (window.matchMedia(mediaMatch.breakpointSmall).matches) {
      console.log('small');
      this.setState({sidebarStyle:'overlay'});
      this.props.setCurrentBreakPoint('small');
      this.props.footerClose();
      iconNavItemsTop = {home: false, search: false, account: true, contact: false, cart: true,}
      iconNavItemsSide = {home: true,search: true,account: false,contact: true, cart: false,}
      this.props.setIconNavConfig({side:iconNavItemsSide, top: iconNavItemsTop });
    }
    else {
      console.log('x-small');
      this.setState({sidebarStyle:'overlay'});
      this.props.setCurrentBreakPoint('x-small');
      this.props.footerClose();
      iconNavItemsTop = {home: false, search: false, account: true, contact: false, cart: true,}
      iconNavItemsSide = {home: true,search: true,account: false,contact: true, cart: false,}
      this.props.setIconNavConfig({side:iconNavItemsSide, top: iconNavItemsTop });
    }
  };

  sidebarAction = (props, sidebarWidth) => {
    switch (this.state.sidebarStyle) {
      case 'squash':
        return {
          transformX: [props.isMenuOpen ? sidebarWidth : this.state.triggerWidth],
          marginRight: [props.isMenuOpen ? sidebarWidth : this.state.triggerWidth],
        };
      case 'push':
        return {
          transformX: [props.isMenuOpen ? sidebarWidth : this.state.triggerWidth],
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

  modalState = ({isModalOpen}) => {
    return isModalOpen ? styles.visible : styles.hidden
  };

  render() {

    let props = this.props;
    let sidebarWidth = this.state.triggerWidth + this.state.menuWidth;

    return (
      <Animate
        start={() => ({
          menu: {
            transformX: (this.state.triggerWidth - this.state.menuWidth),
          },
          containerInner: this.sidebarAction(props, sidebarWidth),
          containerFixed: {
            left: this.state.triggerWidth
          }
        })}
        update={() => ({
          menu: {
            transformX: [props.isMenuOpen ? this.state.triggerWidth: (this.state.triggerWidth - this.state.menuWidth)],
          },
          containerInner: this.sidebarAction(props, sidebarWidth),
          containerFixed: {
            left: [props.isMenuOpen ? sidebarWidth : this.state.triggerWidth],
          },
          timing: {duration: 500, ease: easeExpOut},
          events: {
            start() {
              // dispatch action Opening
               //console.log('isAnimating');
            },
            end() {
              // dispatch action Opening
               //console.log('notAnimating');
              props.offCanvasMenuToggleAnimation(false);
            },
          },
        })}
      >
        {(state) => {

         // console.log('HideMenu', (!this.props.isMenuOpen && !this.props.isMenuAnimating));

          return (
            <div className={cx(styles.outer,'application')}>

              <Helmet {...this.props} />

              <div className={styles.sidebarMenuWrap} style={{...this.myStyles(state).menu}}>
                <SidebarMenu showMenu={ !(!this.props.isMenuOpen && !this.props.isMenuAnimating)  }/>
              </div>

              <MenuTrigger/>

              <div className={styles.mainContainer}>

                { this.props.stickyHeader ?
                  <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.header,styles.top)}>
                    <Header />
                  </StickyContainer> : '' }

                { this.props.fullscreen ? '' :
                  <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.search,styles.top)}>
                        <SearchModal />
                  </StickyContainer> }


              <div className={cx(styles.menuFlexWrap,'mainContent')}>
                <div className={styles.menuFlex} style={{...this.myStyles(state).containerInner}} />
                  <div className={styles.mainFlex}>
                      <MainContent currentpage={this.props.currentpage} match={this.props.match} pageRef={this.props.pageRef} />
                  </div>
                </div>

                <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.footer, styles.bottom, styles.isFixed)}>
                  <FixedFooter />
                </StickyContainer>

{/*                { this.props.fixedFooter ?
                  <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.footer, styles.bottom, styles.isFixed)}>
                    <FixedFooter />
                  </StickyContainer> : '' }*/}

                { this.props.revealFooter ?
                  <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.footer, styles.bottom, styles.isReveal)}>
                    <RevealFooter />
                  </StickyContainer> : '' }

                <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.search,styles.full, this.modalState(this.props) )}>
                  <Modal/>
                </StickyContainer>


                <ModalTest/>


                <MusicPlayer />

                <ComplianceModal />

              </div>
            </div>
          );
        }}
      </Animate>
    )
  }
}

App.propTypes = {
  stickyHeader: PropTypes.bool,
  fixedFooter: PropTypes.bool,
  revealFooter: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  isMenuAnimating: PropTypes.bool,
  isModalOpen: PropTypes.bool,
  offCanvasMenuStateChange: PropTypes.func,
  offCanvasMenuToggleAnimation: PropTypes.func,
};

App.defaultProps = {
  showFooterReveal: true,
  showFooterFixed: true,
  showHeader: true,
  singlePage: false,
};

export const mapStateToProps = (state) => {
  return {
    stickyHeader: get('appModule.stickyHeader', state),
    fixedFooter: get('appModule.fixedFooter', state),
    revealFooter: get('appModule.revealFooter', state),
    isMenuOpen: get('offCanvasMenu.offCanvasMenuOpen', state),
    isMenuAnimating: get('offCanvasMenu.offCanvasMenuAnimating', state),
    isModalOpen: get('modalModule.modalIsOpen', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      offCanvasMenuStateChange,
      offCanvasMenuToggleAnimation,
      setCurrentBreakPoint,
      footerClose,
      setIconNavConfig,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);