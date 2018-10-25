import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import SearchForm from '../forms/searchForm';

const FormView = props => {
  return (<SearchForm/>)
};


FormView.propTypes = {
  attemptToSubmit: PropTypes.func,
  resetErrorMessage: PropTypes.func,
  isSending: PropTypes.bool,
  submitting: PropTypes.bool,
  hasErrored: PropTypes.bool,
};


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


export default connect(mapStateToProps, mapDispatchToProps)(FormView);

