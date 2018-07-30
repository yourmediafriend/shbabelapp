import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get } from "lodash/fp";
import { searchModalOpen } from '../../modules/Search';
import iconNavComponent from './IconNavComp';

import { modalOpen } from "../../modules/Modal";

const mapStateToProps = state => {
  return {
    isSearchModalOpen: get('searchModal.searchIsOpen', state),
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalOpen,
      searchModalOpen,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(iconNavComponent);