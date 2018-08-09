import React, { Component } from 'react';
import PropTypes from 'prop-types';

let globalOptions = {

};

class WindowListener extends Component {

  constructor(){

  }

  getOptions(){

  }
  componentDidMount(){

  }

  componentWillUnmount(){
 /*   window.removeEventListener('resize', );*/
  }

  render(){
    const className = `parallax${this.props.className ? " " + this.props.className : ''}`;
    const style = this.props.style;
    const id = this.props.id || undefined;
    return <div id={id} ref="parallax" className={className} style={style} onLoad={this.recalculateDurations}>
      {this.props.children}
    </div>
  }

}
export default WindowListener;
