import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import LoginForm from '../forms/loginForm';

import {
  attemptToSubmit
} from '../../../modules/Forms/ContactForm';


const submit = (values, dispatch ) => {
  return dispatch(attemptToSubmit(values));
}

const ContactFormView = props => {
  return (<LoginForm onSubmit={submit} hasErrored={props.hasErrored} isSending={props.isSending}/>)
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


export default connect(mapStateToProps, mapDispatchToProps)(ContactFormView);

