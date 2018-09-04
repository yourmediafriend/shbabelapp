import React, { Component } from 'react';
import scrollMagicEnhanced from "./scrollMagicEnhanced";
import cx from 'classnames';
import styles from './stickyElements.scss';

import { MenuWidget, SocialWidget} from '../../../Widgets';

class StickyPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {sticky: false}
  }

  toggleStickyPanel = () => {
    this.setState({sticky: !this.state.sticky});
  };

  render() {

    const compStyles = (state) => {
      return this.state.sticky ? {position: 'fixed', top: '84px', width: '270px'} : {position: 'static'}
    };

    return (

        <div style={{...compStyles(this.state)}}>
          <MenuWidget className={styles.sidebarWidget} />
          <SocialWidget className={styles.sidebarWidget}/>
        </div>

    )
  }
}

export default scrollMagicEnhanced(StickyPanel);
