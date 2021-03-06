import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { get } from "lodash/fp";
import cx from 'classnames';
import styles from './openWeather.scss';
import GoogleMap from '../GeoLoction/googleMap';
import { geolocated } from 'react-geolocated';
import WeatherPanel from './WeatherPanel';
import {attemptToRetrieveOpenWeather} from "../../modules/OpenWeather";
import {attemptToRetrieveData as attemptToRetrieveReverseGeoData} from  "../../modules/GoogleMaps";

const mapOptions  = () => {
  return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#ff09d3"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffeb53"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ff09d3"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
          {
            "color": "#ff09d3"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffeb53"
          },
          {
            "weight": 4.5
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#e608c2"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffeb53"
          },
          {
            "visibility": "on"
          },
          {
            "weight": 4.5
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffeb3b"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ff2fb8"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffeb53"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#f3fff0"
          },
          {
            "visibility": "off"
          },
          {
            "weight": 8
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f800d7"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.station.airport",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.station.bus",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.station.rail",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "color": "#ff09d3"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]
  }
}

const geolocatedError = () => {
  return(<div style={{margin:'0 auto', height: '640px', width: '1200px' }}>Your browser does not support Geolocation</div>)
}

const geolocatedUnenabled = () => {
  return(<div style={{margin:'0 auto', height: '640px', width: '1200px' }}>Geolocation is not enabled</div>)
}

const geolocatedLoading = () => {
  return (<div style={{margin:'0 auto', height: '640px', width: '1200px' }}>Getting the location data&hellip; </div>)
}

class currentLocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? geolocatedError() : !this.props.isGeolocationEnabled ? geolocatedUnenabled() : this.props.coords ?  (
      <WeatherApp getOpenWeatherData={this.props.getOpenWeatherData}
                  getReverseGeoData={this.props.getReverseGeoData}
                  coords={this.props.coords}
                  upDateCords={this.props.upDateCords}
                  weatherData={this.props.weatherData} />) : geolocatedLoading()
  }
}

const getLat = props => {
  return props.upDateCords.latitude ?  props.upDateCords.latitude :  props.coords.latitude;
};

const getLng = props => {
  return props.upDateCords.longitude ?  props.upDateCords.longitude :  props.coords.longitude;
};

class WeatherApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapHeight: '640px',
      lat: getLat(this.props),
      lng: getLng(this.props),
    }
    this.getData();
  }

  componentWillMount(){
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  componentDidMount() {
    const { top } =  this.weatherMap.getBoundingClientRect();
    this.setState({mapHeight:(window.innerHeight - top) + 'px'});
  }

  componentDidUpdate(prevProps, prevState) {

/*    const { height } =  this.weatherMap.getBoundingClientRect();
    if (prevState.height !==  height ) {

    }*/

  }

  onResize = () => {
    if (this.weatherMap && this.weatherMap!== null) {
      const { top } =  this.weatherMap.getBoundingClientRect();
      this.setState({mapHeight:(window.innerHeight - top) + 'px'});
    }
  };

  getData() {
    this.props.getOpenWeatherData(this.state.lat, this.state.lng);
   // this.props.getReverseGeoData(this.state.lat, this.state.lng);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      ((getLat(nextProps) !== this.state.lat && getLng(nextProps) !== this.state.lng)) ||
      ((get('coord.lat', nextProps.weatherData) !== get('coord.lat', this.props.weatherData)) && (get('coord.lon', nextProps.weatherData) !== get('coord.lon', this.props.weatherData))) ||
      ((nextState.mapHeight) !== this.state.mapHeight)
    );
  }

  componentWillUpdate(nextProps, nextState){
    this.setState({lat:getLat(nextProps),lng:getLng(nextProps)})
    this.getData();
  }

  render () {
    return (
      <div ref={(element) => this.weatherMap = element} className={cx(styles.weatherMap)} style={{height: this.state.mapHeight}}>
        <WeatherPanel weatherData={this.props.weatherData} />
        <GoogleMap latitude={this.state.lat} longitude={this.state.lng} options={mapOptions()} />
      </div>
    )
  }
}

WeatherApp.propTypes = {
  weatherData: PropTypes.object,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  upDateCords: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    weatherData: get('retrieveOpenWeather.data', state),
    hasErrored: get('retrieveOpenWeather.hasErrored', state),
    isLoading: get('retrieveOpenWeather.isLoading', state),
    upDateCords: {
      latitude: get('googleMapsModule.lat', state),
      longitude: get('googleMapsModule.lng', state)
    }


  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOpenWeatherData: (lat, lng) => dispatch(attemptToRetrieveOpenWeather(lat, lng)),
    getReverseGeoData: (lat, lng) => dispatch(attemptToRetrieveReverseGeoData(lat, lng))
  };
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(connect(mapStateToProps, mapDispatchToProps)(currentLocation));


