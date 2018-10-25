import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import WeatherForm from '../forms/weatherForm';

import {
  attemptToSubmit,
} from '../../../modules/Forms/Weather';

const submit = (values, dispatch ) => {
  return
//  return dispatch(attemptToSubmit(values));
}

class FormView extends Component {
  render() {
    return (<WeatherForm   attemptToSubmit={this.props.attemptToSubmit}
                          resetErrorMessage={this.props.resetErrorMessage}
                          hasErrored={this.props.hasErrored}
                          isSending={this.props.isSending}
                          message={this.props.message} />);
  };
}

FormView.propTypes = {
  attemptToSubmit: PropTypes.func,
  resetErrorMessage: PropTypes.func,
  isSending: PropTypes.bool,
  submitting: PropTypes.bool,
  hasErrored: PropTypes.bool,
};

const mapStateToProps = (state) => {

  // console.log(state);
  // console.log('mapStateToProps', get('signUpFormModule.message', state));

  return {
    values: get('form.weatherLocation.values', state),
    hasErrored: get('weatherFormModule.hasErrored', state),
    message: get('weatherFormModule.message', state),
    isSending: get('weatherFormModule.isSending', state),
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      attemptToSubmit
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FormView);

