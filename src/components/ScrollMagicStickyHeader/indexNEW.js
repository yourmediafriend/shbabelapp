import React, { Component } from 'react';
import styles from './stickyHeader.scss';
import cx from 'classnames';

// import Animate from 'react-move/Animate';
// import { easeExp, easeExpInOut, easePolyOut, easeQuad, easeCubicInOut, easeCircleOut } from 'd3-ease';
// import scrollMagicEnhanced from "./scrollMagicEnhanced";
 import MegaMenu from '../MegaMenu';
 import IconNav from '../IconNav';

class StickyHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {compact: false};
    this.myRef = React.createRef();
  };

  toggleCompactHeader = () => {
    this.setState({compact: !this.state.compact});
  };

  render() {
    return (
      <div>
        <div className={cx(styles.stickyHeader, styles.padding )} />
        <div className={cx(styles.stickyHeader, styles.base, styles.isSticky )}>
          <MegaMenu />
          <IconNav />
        </div>
      </div>
    )
  }
}

export default StickyHeader;
