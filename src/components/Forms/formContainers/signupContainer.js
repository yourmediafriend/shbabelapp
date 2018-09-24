import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import SignupForm from '../forms/signupForm';

import {
  attemptToSubmit
} from '../../../modules/Forms/SignUp';


const submit = (values, dispatch ) => {
  return dispatch(attemptToSubmit(values));
}

const SignupFormView = props => {
  return (<SignupForm onSubmit={submit} hasErrored={props.hasErrored} isSending={props.isSending}   message={props.message} />)
}

const mapStateToProps = (state) => {

  // console.log(state);
  // console.log('mapStateToProps', get('signUpFormModule.message', state));

  return {
    hasErrored: get('signUpFormModule.hasErrored', state),
    message: get('signUpFormModule.message', state),
    isSending: get('signUpFormModule.isSending', state),
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      attemptToSubmit
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormView);

