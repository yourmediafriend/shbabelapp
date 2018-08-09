import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Icon from '../Icons'
import styles from './geolocationStyles';

import {
  attemptToRetrieveIpData,
} from '../../modules/GeoLocation';

import {get} from "lodash/fp";


class GeoLocator extends Component {

  constructor(props) {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchIpData();
  }

  render() {

    console.log(this.props.ipData);

    return (
      <div>
        {this.props.ipData.city}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ipData: get('retrieveIpData.ipData', state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIpData: getCurrentIP => dispatch(attemptToRetrieveIpData(getCurrentIP))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocator);


