import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollMagicEnhanced from "./scrollMagicEnhanced";
import cx from 'classnames';
import styles from './stickyElements.scss';

import { MenuWidget, SocialWidget, DummyWidget} from '../../../Widgets';

function logProps(WrappedComponent) {

  class LogProps extends React.Component {

  /*  componentDidMount() {
      console.log('componentDidMount:', this.props.parentRef);
    }

    componentDidUpdate(prevProps) {
      console.log('new props:', this.props.parentRef.current);
    }
*/

    render() {
     // console.log('Render:', this.props.forwardRef.current);
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}

const StickyPanel = React.forwardRef((props, ref)  => {


  console.log('StickyPanel', ref);

  return (
    <div className={cx(styles.pinnedContent,'pinned')}  >
      <div id='pinned'>
        <MenuWidget className={styles.sidebarWidget} />
        <SocialWidget className={styles.sidebarWidget}/>
        <DummyWidget className={styles.sidebarWidget}/>
      </div>
    </div>
  )
});

export default StickyPanel;
