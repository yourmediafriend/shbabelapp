import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import PasswordForm from '../forms/passwordForm';

const PasswordFormView = props => {
  return (<PasswordForm onSubmit={''} />)
};

const mapStateToProps = (state) => {
  return {};
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PasswordFormView);

