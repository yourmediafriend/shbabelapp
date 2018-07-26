import React from 'react'
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import {
  offCanvasMenuStateChange
} from '../../modules/OffCanvasMenu';

import BurgerIcon from '../BurgerIcon';

import styles from './sidebarMenuStyles';

const MenuTrigger = (props) => {
  return (
    <a onClick={props.offCanvasMenuStateChange} style={styles.menuTrigger.base}>
      <span style={styles.menuTrigger.iconWrap}>
        <BurgerIcon menuIsOpen={props.menuIsOpen}/>
      </span>
    </a>
  )
}

MenuTrigger.props = {
  offCanvasMenuStateChange: PropTypes.func,
  menuIsOpen: PropTypes.bool,
}

const mapStateToProps = state => {
  return ({
    menuIsOpen:get('offCanvasMenu.offCanvasMenuOpen', state),
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

