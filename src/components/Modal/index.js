import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { get } from "lodash/fp";
import styles from './styles.scss';
import cx from 'classnames';
import { modalClose } from '../../modules/Modal/index';
import Modal from './Modal'

class Modals extends Component {
  render() {
    const modals = this.props.modals.map((item,i) => <Modal item={item} key={i} zIndex={i} modalClose={(item) => this.props.modalClose(item)}/>)
    return (
      <div className={cx(styles.modalLayer)}>
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
