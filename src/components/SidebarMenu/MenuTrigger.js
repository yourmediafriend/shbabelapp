import React, { Component } from 'react'
import PropTypes from "prop-types";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";
import IconNav from '../IconNav';
import { Controls } from '../MusicPlayer';
import Animate from 'react-move/Animate';
import { easeCubicInOut } from 'd3-ease';

import {
  offCanvasMenuStateChange
} from '../../modules/OffCanvasMenu';

import BurgerIcon from '../BurgerIcon';
import styles from './sideMenu.scss';
import cx from 'classnames';


class MusicControler extends Component {

  myStyles = (state) => {
    const {musicPlayer} = state;
    return {
      transform: `translateY(${musicPlayer.translateY}%)` ,
    }
  };


  render() {

    let props = this.props;

    console.log(!props.footerIsOpen);

    return (
      <Animate
        start={() => ({
          musicPlayer:{
            translateY: 100
          }
        })}
        update={() => ({
          musicPlayer:{
            translateY: [!props.footerIsOpen ? 0 : 100]
          },
          timing: { duration: 250, ease: easeCubicInOut },
          events: {
            start() {

            },
            end() {

            },
          },
        })}

      >
        {(state) => {
          return (
            <div className={cx(styles.sidebarControls)}>
              <div style={{...this.myStyles(state)}}>
                <Controls class={'sidebar'} />
              </div>
            </div>
          );
        }}
      </Animate>
    );
  }


}

const MenuTrigger = ({offCanvasMenuStateChange, menuIsOpen, breakpoint, footerIsOpen, musicPlayerPosition}) => {
  return (
    <div className={styles.menuTriggerWrap} >
      <div onClick={offCanvasMenuStateChange} className={styles.menuTrigger}/>
      <span className={styles.iconWrap}>
        <BurgerIcon menuIsOpen={menuIsOpen}/>
      </span>
      {breakpoint === 'small' ?  <IconNav className={'iconNavSide'} /> : null}

{/*      <MusicControler footerIsOpen={footerIsOpen} />*/}


      {/*    can't make it appear and activate animation*/}

      <MusicControler footerIsOpen={footerIsOpen} />

{/*{musicPlayerPosition === 'sidebar' ?  <MusicControler footerIsOpen={footerIsOpen} />  : null}*/}
    </div>
  )
}

MenuTrigger.props = {
  offCanvasMenuStateChange: PropTypes.func,
  menuIsOpen: PropTypes.bool,
  showMusicControls: PropTypes.bool,
  breakpoint: PropTypes.string,
}

const mapStateToProps = state => {
  return ({
    menuIsOpen:get('offCanvasMenu.offCanvasMenuOpen', state),
    breakpoint: get('appModule.breakpoint', state),
    musicPlayerPosition: get('musicPlayerModule.position', state),
    footerIsOpen: get('footerModule.footerIsOpen', state),
  });
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      offCanvasMenuStateChange,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MenuTrigger);

