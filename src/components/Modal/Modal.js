import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import cx from 'classnames';
import {isFunction} from "lodash/fp";
import Icon from '../Icons/index';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';

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

  componentDidMount() {
    const { bodyScroll } = this.props.item;
    !bodyScroll ? document.body.classList.add ('noscroll') : '';
  }

  componentWillUnmount() {
    const { bodyScroll } = this.props.item;
    !bodyScroll ? document.body.classList.remove ('noscroll'): '';
  }

  getMaxWidth() {
    const { maxWidth } = this.props.item;
    return maxWidth ? { maxWidth } : '';
  }

  getMaxHeight() {
    const { maxHeight } = this.props.item;
    return maxHeight ? { maxHeight } : '';
  }

  render() {
    const { zIndex } = this.props;
    const { content, overlayClose, className, extendStyles } = this.props.item;
    return (
        <Animate
          start={() => ({
            modalOpacity: [0]
          })}

          enter={{
            modalOpacity: [1],
            timing: {duration: 1000, ease: easeExpOut},
          }}

          update={() => ({
            modalOpacity: [1],
            timing: {duration: 1000, ease: easeExpOut},
          })}
        >
          {(state) => {
            //console.log(state.modalOpacity);
            return (
              <div className={cx(styles.modalContainer)} style={{zIndex: (zIndex+1)*10}}>
                <div className={cx(styles.modalContainerOverlay)} onClick={overlayClose ? this.onClose.bind(this): '' }/>
                <div className={cx(styles.modal, className)} style={ {...this.getMaxWidth(), ...this.getMaxHeight(), ...extendStyles.modal, ...{opacity: state.modalOpacity}} } >
                  <div className={styles.inner} style={extendStyles.inner}>
                    <ModalCloseButton clickEvent={this.onClose.bind(this)}/>
                    {content}
                  </div>
                </div>
              </div>
            );
          }}
        </Animate>
    );
  }
}

export default Modal;