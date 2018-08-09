import React from 'react'
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import IconNav from '../IconNav';

import {
  offCanvasMenuStateChange
} from '../../modules/OffCanvasMenu';

import BurgerIcon from '../BurgerIcon';

import styles from './sideMenu.scss';

const MenuTrigger = ({offCanvasMenuStateChange, menuIsOpen, breakpoint}) => {

  return (
    <div className={styles.menuTriggerWrap} >
      <div onClick={offCanvasMenuStateChange} className={styles.menuTrigger}/>
      <span className={styles.iconWrap}>
        <BurgerIcon menuIsOpen={menuIsOpen}/>
      </span>
      {breakpoint === 'small' ?  <IconNav className={'iconNavSide'} /> : null}
    </div>
  )
}

MenuTrigger.props = {
  offCanvasMenuStateChange: PropTypes.func,
  menuIsOpen: PropTypes.bool,
  breakpoint: PropTypes.string,
}

const mapStateToProps = state => {
  return ({
    menuIsOpen:get('offCanvasMenu.offCanvasMenuOpen', state),
    breakpoint: get('appModule.breakpoint', state),
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

