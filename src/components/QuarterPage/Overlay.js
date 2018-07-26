import React, { Component } from 'react';
import styles from './quarterPageStyles';
import {StyleRoot} from 'radium';


class QuickComp extends Component {

  constructor(props) {
    super(props);
  }

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
