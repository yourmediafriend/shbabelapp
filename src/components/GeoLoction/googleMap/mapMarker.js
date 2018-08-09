import React, { Component} from 'react';
import SVGInline from "react-svg-inline"
import Marker from './media/marker.svg';

export default class MapMarker extends Component {
  render() {
    return (
      <div style={{marginLeft:'0', marginTop:'-150px', width: '150px'}}>
        <SVGInline svg={ Marker }  />
      </div>
    );
  }
}