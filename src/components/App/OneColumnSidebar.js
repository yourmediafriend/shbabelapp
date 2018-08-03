import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './pages.scss';
import { mediaMatch } from '../../utils/mediaQueries';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';

import { setCurrentBreakPoint } from '../../modules/App';



import {
  get,
} from 'lodash/fp';

// Elements
import MainContent from '../Content';
import Header from '../Header';
import SearchModal from '../SearchModal'
import Modal from '../Modal';
import {FixedFooter, RevealFooter} from '../Footer';

// Menu
import SidebarMenu from '../SidebarMenu';
import MenuTrigger from '../SidebarMenu/MenuTrigger';

import {
  offCanvasMenuStateChange,
  offCanvasMenuToggleAnimation
} from '../../modules/OffCanvasMenu';

import styleJs from './pagesStyles.js';

//const AppContext = React.createContext();

const openMenunClass = function (isMenuOpen) {
  return isMenuOpen ? styleJs.open : '';
};

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
  triggerWidth: 50,
  menuWidth: 280,
  sidebarStyle: 'overlay',
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
    if (window.matchMedia(mediaMatch.breakpointLarge).matches) {
      // Desktop
      this.setState({sidebarStyle:'squash'});
      this.props.setCurrentBreakPoint('large');
    }
    else if (window.matchMedia(mediaMatch.breakpointSmall).matches) {
      // Tablet
      this.setState({sidebarStyle:'push'});
      this.props.setCurrentBreakPoint('medium');
    }
    else {
      // Mobile
      this.setState({sidebarStyle:'overlay'});
      this.props.setCurrentBreakPoint('small');
    }
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

              <div className={styles.mainContainer}>

                { this.props.fullscreen ? '' :
                  <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.header,styles.top)}>
                    <Header />
                  </StickyContainer> }

                { this.props.fullscreen ? '' :
                  <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.search,styles.top)}>
                        <SearchModal />
                  </StickyContainer> }

                <div className={styles.menuFlexWrap}>
                  <div className={styles.menuFlex} style={{...this.myStyles(state).containerInner}}   />
                  <div className={styles.mainFlex} style={{...this.props.fullscreen ? '' : {marginTop:'80px', marginBottom:`${this.props.revealFooterHeight}px`}}}>
                    <div className={styles.content}>
                      <MainContent currentpage={this.props.currentpage} />
                    </div>
                  </div>
                </div>

                { this.props.fullscreen ? '' :
                  <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.search,styles.full, this.modalState(this.props) )}>
                    <Modal/>
                  </StickyContainer> }

                { this.props.fullscreen ? '' :
                  <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.footer, styles.bottom, styles.isFixed)}>
                    <FixedFooter />
                  </StickyContainer> }

                { this.props.fullscreen ? '' :
                  <StickyContainer flexStyle={{...this.myStyles(state).containerInner}} className={cx(styles.footer, styles.bottom, styles.isReveal)}>
                    <RevealFooter />
                  </StickyContainer> }

              </div>
            </div>
          );
        }}
      </Animate>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    isModalOpen: get('modalModule.modalIsOpen', state),
    revealFooterHeight: get('appModule.revealFooterHeight', state),
    fixedFooterHeight: get('appModule.fixedFooterHeight', state),
    isMenuOpen: get('offCanvasMenu.offCanvasMenuOpen', state),
    openMenunClass: openMenunClass,
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      offCanvasMenuStateChange,
      offCanvasMenuToggleAnimation,
      setCurrentBreakPoint,
    },
    dispatch
  );

App.propTypes = {
  isMenuOpen: PropTypes.bool,
  isModalOpen: PropTypes.bool,
  openMenunClass: PropTypes.func,
  offCanvasMenuStateChange: PropTypes.func,
  offCanvasMenuToggleAnimation: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);