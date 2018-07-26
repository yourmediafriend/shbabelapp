import React from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get } from "lodash/fp";
import cx from 'classnames';
import { modalOpen } from "../../../modules/Modal";
import styles from './dropdownStyles.scss';


let menuJson = [
    {
      "id": 0,
      "name": "Login",
    },
    {
      "id": 1,
      "name": "Sign Up",
    }
  ];

const DropdownMenuItem = ({item, eventClick}) => {
  return (
    <li className={cx(styles.menuItem)}><a href={'#'} onClick={eventClick.bind(this, 'account',  item.id)} >{item.name}</a></li>
  );
}

const DropdownMenu = props => {
  return (
    <ul className={cx(styles.dropdownMenu)}>
      {menuJson.map((child, index) => <DropdownMenuItem
                                        key={index}
                                        item = {child}
                                        eventClick = {props.modalOpen}
                                      />
      )}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    isSearchModalOpen: get('modalModule.modalIsOpen', state),
    contentId: get('modalModule.contentRef', state),
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalOpen,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);
