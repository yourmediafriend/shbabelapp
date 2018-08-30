import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import styles from './sideMenu.scss';
import NestedMenu from '../NestedMenu';
import {get} from "lodash/fp";

const SidebarMenu = (props) => {

  /*style={{...(!props.isMenuOpen && !props.isMenuAnimating) ? {display:'none'} : {display:'block'}}}*/
  return (
    <div className={styles.sidebarMenuWrap}    >
      <div className={styles.sidebarMenu}>
        <NestedMenu />
      </div>
    </div>
  )
}


export const mapStateToProps = (state) => {
  return {
    isMenuOpen: get('offCanvasMenu.offCanvasMenuOpen', state),
    isMenuAnimating: get('offCanvasMenu.offCanvasMenuAnimating', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);

