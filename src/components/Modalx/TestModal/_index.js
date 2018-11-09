import React from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { get } from "lodash/fp";

import Modal from '../';
import PageTitle from '../../PageTitle';

import { modalOpen } from "../../../modules/ModalTest";


class ModalContent extends React.Component {

  static propTypes = {

  };


  render() {
    const modalConfig = {
      isModalOpen: true,
      preventScroll: true,
      extendClose: this.onExtendClose,
      overlayClose: true,
    };

    return (
      !this.state.compliance ?
      <Modal { ...modalConfig } >
          <PageTitle title={"TEST MODAL"}/>
          <p>This is a test.</p>
      </Modal> : ''
    )
  }
}


const mapStateToProps = state => {

  console.log(state);
  return {
    isModalOpen: get('modalTest.isModalOpen', state),
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalOpen,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);

