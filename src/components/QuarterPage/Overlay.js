import React, { Component } from 'react';
import styles from './quarterPageStyles';


class QuickComp extends Component {

  stylesBackgroundImage = props => {
    return props.bgImg ?  {backgroundImage: `url(${props.bgImg})`} : {backgroundImage:'none'};
  };

  render() {

    return (
      <div style={{
        ...styles.overlay.base,
        ...this.stylesBackgroundImage(this.props)
      }} />
    )
  }
}

export default QuickComp;
