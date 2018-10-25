import React, { Component } from 'react';
import styles from './columnLayoutStyles';
import scrollMagicEnhanced from "./scrollMagicEnhanced";

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
        <div style={{...compStyles(this.state)}}  >
          <div style={{...styles.sideleft.panel}} >
            Sticky Panel
          </div>
          <div style={{...styles.sideleft.panel}} >
            Sticky Panel
          </div>
        </div>
      </div>
    )
  }
}

export default scrollMagicEnhanced(StickyPanel);
