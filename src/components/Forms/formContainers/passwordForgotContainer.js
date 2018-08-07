import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import PasswordForgotForm from '../forms/passwordForgotForm';

import {
  attemptToSubmit
} from '../../../modules/Forms/ContactForm';


const submit = (values, dispatch ) => {
  return dispatch(attemptToSubmit(values));
}

const passwordForgotView = props => {
  return (<PasswordForgotForm onSubmit={submit} hasErrored={props.hasErrored} isSending={props.isSending}/>)
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

    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(passwordForgotView);

