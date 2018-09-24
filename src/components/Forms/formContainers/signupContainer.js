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
  return (<SignupForm onSubmit={submit} hasErrored={props.hasErrored} isSending={props.isSending}/>)
}

const mapStateToProps = (state) => {
  return {
    hasErrored: get('postContactForm.hasErrored', state),
    isSending: get('postContactForm.isSending', state),
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

