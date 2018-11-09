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
    isModalOpen: PropTypes.bool
  };

  render() {
    const modalConfig = {
      isModalOpen: this.props.isModalOpen,
      preventScroll: false,
      overlayClose: true,
    };

    console.log('modalConfig',modalConfig);

    return (
      <Modal { ...modalConfig } >
          <PageTitle title={"TEST MODAL"}/>
          <p>This is a test.</p>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    isModalOpen: get('modalTestModule.isModalOpen', state),
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
