import React, { Component } from 'react';
import styles from './quarterPage.scss';
import cx from 'classnames';


class QuickComp extends Component {

  stylesBackgroundImage = props => {
    return props.bgImg ?  {backgroundImage: `url(${props.bgImg})`} : {backgroundImage:'none'};
  };

  render() {

    return (
      <div
        className={styles.overlay}
        style={{ ...this.stylesBackgroundImage(this.props)}} />
    )
  }
}

export default QuickComp;
