import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { get } from "lodash/fp";

import { modalClose } from '../../../modules/Modal';

import Modal from './Modal'



class Modals extends Component {
  render() {
    const modals = this.props.modals.map((item,i) => <Modal item={item} key={i} zIndex={i} modalClose={(item) => this.props.modalClose(item)}/>)
    return (
      <div className="modals">
        {modals}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    modals: get('modalModule.modals', state)
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalClose
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
