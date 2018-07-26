import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './parallaxStyles';

class ParallaxContent extends Component {
  constructor(){
    super(...arguments);
  }

  render(){
    const className = `parallax-content-holder ${this.props.className && " " + this.props.className || ''}`;
    const myStyles = Object.assign({overflow: 'hidden'}, this.props.styles || {});

    return <div className={className} style={{...styles.parallax.parallaxContentHolder,...myStyles}}>
      <div className="parallax-content" style={{...styles.parallax.parallaxContent}}>
        {this.props.children}
      </div>
    </div>
  }
}

ParallaxContent.propTypes = {

}

export default ParallaxContent;