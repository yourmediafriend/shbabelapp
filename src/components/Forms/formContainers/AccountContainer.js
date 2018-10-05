import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get} from "lodash/fp";

import AccountForm from '../forms/AccountForm';

const accountFormView = props => {
  return (<AccountForm onSubmit={''} />)
};

const mapStateToProps = (state) => {
  return {};
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(accountFormView);

