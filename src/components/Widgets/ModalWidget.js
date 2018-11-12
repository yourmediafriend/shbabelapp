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
        HELLLO I AM THE MODAL
      </div>
    );
  }
}

class Widget extends Component {

  static propTypes = {
    modalOpen: PropTypes.func
  };

  handleSubmit () {
    // open Modal
    const { modalOpen } = this.props;

    modalOpen({
      id: uuid.v4(),
      type: 'confirmation',
      text: 'Are you sure to do this?',
      content: <ModalContent />,
      className:'centerX top',
      maxWidth: '500px',
      maxHeight: '500px',
      bodyScroll: false,
      extendStyles: {
        modal:{marginTop: '100px'},
        inner:{background: '#6f1919', color:'#ffffff' }
        },
      overlayClose: true,
      preventScroll: true,
      onClose: () => console.log("fire at Close event"),
      onConfirm: () => console.log("fire at confirming event"),
    });
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