import React, { Component} from 'react';
import Icon from '../../Icons';

export default class MapMarker extends Component {
  render() {
    return (
      <div style={{marginLeft:'-21px',marginTop:'-21px'}}>
       <Icon icon={'location'} color={'#ff00ea'} size={42} />
      </div>
    );
  }
}