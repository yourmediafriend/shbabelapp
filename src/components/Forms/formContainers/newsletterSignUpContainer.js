import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import NewsletterSignup from '../forms/newsletterSignupForm';

import {
  attemptToSubmit
} from '../../../modules/Forms/ContactForm';


const submit = (values, dispatch ) => {
  return dispatch(attemptToSubmit(values));
}

const FormView = props => {
  return (<NewsletterSignup onSubmit={submit} hasErrored={props.hasErrored} isSending={props.isSending}/>)
}

const mapStateToProps = (state) => {
  return {};
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FormView);

