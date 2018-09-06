import React from 'react'
import styles from './sideMenu.scss';
import NestedMenu from '../NestedMenu';

const SidebarMenu = (props) => {
  return (
    <div className={styles.sidebarMenuWrap} style={{...props.showMenu ? {display:'block'} : {display:'none'}}} >
      <div className={styles.sidebarMenu}>
        <NestedMenu />
      </div>
    </div>
  )
}

export default SidebarMenu;