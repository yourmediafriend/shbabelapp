import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";

import cx from 'classnames';
import { Button } from 'reactstrap';
import styles from './widget.scss';
import {connect} from "react-redux";
import {get} from "lodash/fp";
import uuid from 'uuid';
import { modalOpen } from "../../modules/Modal";

class ModalContent extends Component {
  render() {
    return (
      <div>
        I AM THE MODAL. YOU ARE YOU.
      </div>
    );
  }
}

const optionsArray = {
  rtl: {
    id: uuid.v4(),
    content: <ModalContent />,
    className:'right fullY',
    animate: 'slide-rtl',
    maxWidth: '50vw',
    maxHeight: '',
    bodyScroll: false,
    extendStyles: {
      modal:{marginTop: '0px', width: '100%'},
      inner:{background: '#6f1919', color:'#ffffff' }
    },
    overlayClose: true,
    preventScroll: true,
    onClose: () => console.log("fire at Close event"),
    onConfirm: () => console.log("fire at confirming event"),
  },
  ltr: {
    id: uuid.v4(),
    content: <ModalContent />,
    className:'left fullY',
    animate: 'slide-ltr',
    maxWidth: '50vw',
    maxHeight: '',
    bodyScroll: false,
    extendStyles: {
      modal:{marginTop: '0px', width: '100%'},
      inner:{background: '#6f1919', color:'#ffffff' }
    },
    overlayClose: true,
    preventScroll: true,
    onClose: () => console.log("fire at Close event"),
    onConfirm: () => console.log("fire at confirming event"),
  },
  ttb: {
    id: uuid.v4(),
    content: <ModalContent />,
    className:'fullX top',
    animate: 'slide-ttb',
    maxWidth: '',
    maxHeight: '',
    bodyScroll: false,
    extendStyles: {
      modal:{marginTop: '0px', width: '100%'},
      inner:{background: '#6f1919', color:'#ffffff' }
    },
    overlayClose: true,
    preventScroll: true,
    onClose: () => console.log("fire at Close event"),
    onConfirm: () => console.log("fire at confirming event"),
  },
  btt: {
    id: uuid.v4(),
    content: <ModalContent />,
    className:'fullX bottom',
    animate: 'slide-btt',
    maxWidth: '',
    maxHeight: '',
    bodyScroll: false,
    extendStyles: {
      modal:{marginTop: '0px', width: '100%'},
      inner:{background: '#6f1919', color:'#ffffff' }
    },
    overlayClose: true,
    preventScroll: true,
    onClose: () => console.log("fire at Close event"),
    onConfirm: () => console.log("fire at confirming event"),
  },
}



class Widget extends Component {

  static propTypes = {
    modalOpen: PropTypes.func
  };

  handleSubmit () {
    // open Modal
    const { modalOpen } = this.props;
    modalOpen(optionsArray.ltr);
  }

  render() {
    return (
      <div className={cx(styles.widget, this.props.className)}>
        <div className={styles.inner}>
          <div className={styles.footer}>
            <Button type="submit"  onClick={this.handleSubmit.bind(this)} >Open Modal!</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalOpen,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Widget);