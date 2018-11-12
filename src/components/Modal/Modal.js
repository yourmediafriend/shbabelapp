import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import cx from 'classnames';
import {isFunction} from "lodash/fp";
import Icon from '../Icons/index';


const ModalCloseButton = ({clickEvent}) => {
  return (
    <div className={styles.modalClose} onClick={clickEvent}>
      <Icon icon={'close'} />
    </div>
  )
}

class Modal extends Component {

  onClose(){
    const { item, modalClose } = this.props;
    const { onClose } = item;

    isFunction(onClose) ? onClose(item): '';
    modalClose(item);

  }

  render() {
    const { zIndex } = this.props;
    const { content, overlayClose } = this.props.item;

    return (
      <div className={cx(styles.modalContainer)} style={{zIndex: (zIndex+1)*10}}>
        <div className={cx(styles.modalContainerOverlay)} onClick={overlayClose ? this.onClose.bind(this): '' }/>
        <div className={cx(styles.modal, styles.center)}>
          <div className={styles.modalInner}>
            <ModalCloseButton clickEvent={this.onClose.bind(this)}/>
            {content}
          </div>
        </div>
      </div>
    )

  }
}

export default Modal;