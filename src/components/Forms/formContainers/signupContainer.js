import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import SignupForm from '../forms/signupForm';

import {
  attemptToSubmit,
  resetErrorMessage,
} from '../../../modules/Forms/SignUp';

const submit = (values, dispatch ) => {
  return dispatch(attemptToSubmit(values));
}

class SignupFormView extends Component {
  componentWillUnmount(prevProps) {
    this.props.resetErrorMessage();
  }
  render() {
    return (<SignupForm onSubmit={submit} hasErrored={this.props.hasErrored} isSending={this.props.isSending}   message={this.props.message} />)
  }
}

const mapStateToProps = (state) => {
  return {
    hasErrored: get('signUpFormModule.hasErrored', state),
    message: get('signUpFormModule.message', state),
    isSending: get('signUpFormModule.isSending', state),
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      attemptToSubmit,
      resetErrorMessage
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormView);

