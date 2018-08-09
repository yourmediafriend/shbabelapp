import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import SearchForm from '../forms/searchForm';

const searchModalForm = props => {
  return (<SearchForm/>)
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


export default connect(mapStateToProps, mapDispatchToProps)(searchModalForm);

