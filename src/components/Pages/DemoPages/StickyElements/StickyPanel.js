import React, { Component } from 'react';
import scrollMagicEnhanced from "./scrollMagicEnhanced";
import cx from 'classnames';
import styles from './stickyElements.scss';

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
      <div>
        <div style={{...compStyles(this.state)}}>
          <div className={cx(styles.panel, styles.stickyPanel)}>
            Sticky Panel
          </div>
          <div className={cx(styles.panel, styles.stickyPanel)}>
            Sticky Panel
          </div>
        </div>
      </div>
    )
  }
}

export default scrollMagicEnhanced(StickyPanel);
