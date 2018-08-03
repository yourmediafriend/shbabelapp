import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get } from "lodash/fp";

import iconNavComponent from './IconNavComp';

import { searchModalOpen, searchModalToggle } from '../../modules/Search';
import { modalOpen, modalToggle } from "../../modules/Modal";

const mapStateToProps = state => {
  return {
    isSearchModalOpen: get('searchModal.searchIsOpen', state),
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalOpen,
      modalToggle,
      searchModalOpen,
      searchModalToggle,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(iconNavComponent);