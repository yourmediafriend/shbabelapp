import React from 'react'
import PropTypes from 'prop-types';

import styles from './sideMenu.scss';

import NestedMenu from '../NestedMenu';

const SidebarMenu = (props) => {

  return (
    <div className={styles.sidebarMenuWrap}>
      <div className={styles.sidebarMenu}>
        <NestedMenu />
      </div>
    </div>
  )
}

export default SidebarMenu;
