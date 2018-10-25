import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import AccountForm from '../forms/accountForm';

const FormView = props => {
  return (<AccountForm onSubmit={''} />)
};

FormView.propTypes = {
  attemptToSubmit: PropTypes.func,
  isSending: PropTypes.bool,
  submitting: PropTypes.bool,
  hasErrored: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {};
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FormView);

