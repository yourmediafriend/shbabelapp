import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import MapMarker from './mapMarker'
import GoogleMap from 'google-map-react';
import { clickMap } from '../../../modules/GoogleMaps';

const geoMap = props => {
  return(
    <GoogleMap
      bootstrapURLKeys={{key: 'AIzaSyDUYafiJNoxSEKjf-tiqV3118Kdm2myjnQ'}}
      center={[props.latitude, props.longitude]}
      options={props.options}
      onClick={props.clickMap}
      zoom={13}>
      <MapMarker lat={props.latitude} lng={props.longitude} text={'Home'}  />
    </GoogleMap>
  );
}

geoMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  options: PropTypes.object,
  clickMap: PropTypes.func,
};

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
