import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import SignupForm from '../forms/signupForm';

import {
  attemptToSubmit,
  resetErrorMessage,
} from '../../../modules/Forms/SignUp';

class SignupFormView extends Component {

  render() {
    return (<SignupForm attemptToSubmit={this.props.attemptToSubmit}
                        resetErrorMessage={this.props.resetErrorMessage}
                        hasErrored={this.props.hasErrored}
                        isSending={this.props.isSending}
                        message={this.props.message} />);
  };

}


const mapStateToProps = (state) => {

  // console.log(state);
  // console.log('mapStateToProps', get('signUpFormModule.message', state));

  return {
    values: get('form.SignUpForm.values', state),
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

