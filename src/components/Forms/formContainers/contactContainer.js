import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import ContactForm from '../forms/contactForm';

import {
  attemptToSubmit
} from '../../../modules/Forms/ContactForm';


const submit = (values, dispatch ) => {
  return dispatch(attemptToSubmit(values));
}

const FormView = props => {
  return (<ContactForm onSubmit={submit} hasErrored={props.hasErrored} isSending={props.isSending}/>)
}

FormView.propTypes = {
  attemptToSubmit: PropTypes.func,
  isSending: PropTypes.bool,
  submitting: PropTypes.bool,
  hasErrored: PropTypes.bool,
};

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


export default connect(mapStateToProps, mapDispatchToProps)(FormView);

