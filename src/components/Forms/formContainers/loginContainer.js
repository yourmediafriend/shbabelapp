import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import LoginForm from '../forms/loginForm';

import {
  attemptToLogin
} from '../../../modules/Forms/UserLogin';


const submit = (values, dispatch ) => {
  return dispatch(attemptToLogin(values));
}

const LoginFormView = props => {
  return (<LoginForm onSubmit={submit} hasErrored={props.hasErrored} isSending={props.isSending}/>)
}

const mapStateToProps = (state) => {
  return {
    hasErrored: get('postUserLoginForm.hasErrored', state),
    isSending: get('postUserLoginForm.isSending', state),
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      attemptToLogin
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormView);

