import React, {Component} from 'react';
import cx from 'classnames';
import styles from './parallaxBanner.scss';

class ParallaxContent extends Component {

  render(){
    const className = `parallax-content-holder ${(this.props.className && " " + this.props.className) || ('')}`;

    const myStyles = Object.assign({overflow: 'hidden'}, this.props.styles || {});

    return <div className={cx(styles.parallaxContentHolder, className)} style={{...myStyles}}>
      <div className={cx(styles.parallaxContent, 'parallax-content')}>
        {this.props.children}
      </div>
    </div>
  }
}

export default ParallaxContent;