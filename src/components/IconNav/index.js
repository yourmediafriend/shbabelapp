import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get } from "lodash/fp";
import { searchModalOpen } from '../../modules/Search';
import iconNavComponent from './IconNavComp';

import { modalOpen } from "../../modules/Modal";

// Trigger multiple actions
// this doesn't work
const modalToggle = () => {
  // console.log('modalToggle', searchModalToggle);
  // have to dispatch the action from mapDispatchToProps
  // return (dispatch) => {
  //   dispatch(searchModalToggle());
  // };
}

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