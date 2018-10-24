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
import { footerOpen } from "../../modules/Footer";

const FooterToggleComp = ({clickEvent}) => {
  return (
    <div className={styles.footerExpand} onClick={clickEvent}>
      <span className={styles.footerOpenIcon} />
    </div>
  )
}

class MusicControler extends Component {

  myStyles = (state) => {
    const {musicPlayer} = state;
    return {
      transform: `translateY(${musicPlayer.translateY}%)` ,
    }
  };

  render() {

    let props = this.props;

    //console.log('MenuTrigger', !(props.footerFixedOpen));

    return (
      <Animate
        start={() => ({
          showPlayer: !(props.footerFixedOpen),
          musicPlayer:{
            translateY: [!(props.footerFixedOpen) ? 0 : 100]
          }
        })}
        update={() => ({
          musicPlayer:{
            translateY: [!(props.footerFixedOpen) ? 0 : 100]
          },
          timing: { duration: 250, ease: easeCubicInOut },
          events: {
            start() {
              this.setState({showPlayer:true})
            },
            end() {

            },
          },
        })}
      >
        {(state) => {

          // console.log('state.showPlayer', state.showPlayer);

          return state.showPlayer ?
            (
              <div className={cx(styles.sidebarControls)}>
                <div style={{...this.myStyles(state)}}>
                  <Controls class={'sidebar'} />
                  <FooterToggleComp clickEvent={props.footerOpen} />
                </div>
              </div>
            ) : null;
        }}
      </Animate>
    );
  }
}

const MenuTrigger = ({offCanvasMenuStateChange, footerOpen, menuIsOpen, iconNavConfig, footerFixedOpen, musicPlayerPosition}) => {
  return (
    <div className={styles.menuTriggerWrap} >
      <div onClick={offCanvasMenuStateChange} className={styles.menuTrigger}/>
      <span className={styles.iconWrap}>
        <BurgerIcon menuIsOpen={menuIsOpen}/>
      </span>

      {Object.keys(iconNavConfig.side).length ?
        <IconNav   className={'iconNavSide'}
                   menuItems={{
                     ...iconNavConfig.side
                   }} /> : ''}



{/*<MusicControler footerIsOpen={footerIsOpen} />*/}
{/*can't make it appear and activate animation*/}

      <MusicControler footerFixedOpen={footerFixedOpen} footerOpen={footerOpen}/>


{/*{musicPlayerPosition === 'sidebar' ?  <MusicControler footerIsOpen={footerIsOpen} />  : null}*/}
    </div>
  )
}

MenuTrigger.props = {
  offCanvasMenuStateChange: PropTypes.func,
  menuIsOpen: PropTypes.bool,
  showMusicControls: PropTypes.bool,
  iconNavConfig: PropTypes.object,
}

const mapStateToProps = state => {
  return ({
    menuIsOpen:get('offCanvasMenu.offCanvasMenuOpen', state),
    iconNavConfig: get('appModule.iconNavConfig', state),
    musicPlayerPosition: get('musicPlayerModule.position', state),
    footerFixedOpen: get('footerModule.footerFixedOpen', state),
  });
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      offCanvasMenuStateChange,
      footerOpen,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MenuTrigger);

