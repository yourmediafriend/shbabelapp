import React from 'react'
import PropTypes from 'prop-types';

import styles from './sidebarMenuStyles';

import NestedMenu from '../NestedMenu';

const SidebarMenu = (props) => {

  return (
    <div style={styles.sidebarMenu.base}>
      <NestedMenu />
    </div>
  )
}

export default SidebarMenu;
