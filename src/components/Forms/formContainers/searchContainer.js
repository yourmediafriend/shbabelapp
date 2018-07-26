import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import SearchForm from '../forms/searchForm';

/*import {
  attemptToSubmit
} from '../../../modules/Forms/ContactForm';*/


/*const submit = (values, dispatch ) => {
  return dispatch(attemptToSubmit(values));
}*/

const searchModalForm = props => {
  return (<SearchForm/>)
}

const mapStateToProps = (state) => {
  return {

  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(searchModalForm);

