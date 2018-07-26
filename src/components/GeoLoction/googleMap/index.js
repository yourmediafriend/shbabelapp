import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import MapMarker from './mapMarker'
import GoogleMap from 'google-map-react';
import { geolocated } from 'react-geolocated';
import { clickMap } from '../../../modules/googleMaps';

const geoMap = props => {
  return(
      <div style={{margin:'0 auto', height: '640px', width: '100%', }} >
        <GoogleMap
          apiKey={'AIzaSyDUYafiJNoxSEKjf-tiqV3118Kdm2myjnQ'} // set if you need stats etc ...
          center={[props.latitude, props.longitude]}
          options={props.options}
          onClick={props.clickMap}
          zoom={13}>
       {/* <MapMarker lat={getLat(props)} lng={getLng(props)} text={'Home'}  />*/}
        </GoogleMap>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clickMap
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(geoMap);
