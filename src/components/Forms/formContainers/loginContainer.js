import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import LoginForm from '../forms/loginForm';

import {
  attemptToLogin
} from '../../../modules/Forms/Login';

const submit = (values, dispatch ) => {
  return dispatch(attemptToLogin(values));
}

const FormView = props => {
  return (<LoginForm onSubmit={submit} hasErrored={props.hasErrored} isSending={props.isSending}/>)
}

FormView.propTypes = {
  attemptToSubmit: PropTypes.func,
  isSending: PropTypes.bool,
  submitting: PropTypes.bool,
  hasErrored: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    hasErrored: get('loginFormModule.hasErrored', state),
    isSending: get('loginFormModule.isSending', state),
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      attemptToLogin
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FormView);

