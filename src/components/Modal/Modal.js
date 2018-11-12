import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import cx from 'classnames';
import {isFunction} from "lodash/fp";
import Icon from '../Icons/index';
import Animate from 'react-move/Animate';
import { easeExp } from 'd3-ease';

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
    const { content, overlayClose, className, extendStyles, animate } = this.props.item;

    return (
        <Animate
          start={() => {
            switch(animate) {
              case 'slide-rtl':
                return ({
                  translateX: [100]
                })
              case 'slide-ltr':
                return ({
                  translateX: [-100]
                })
              case 'slide-ttb':
                return ({
                  translateY: [-100]
                })
              case 'slide-btt':
                return ({
                  translateY: [100]
                })
              case 'fade':
                return ({
                  opacity: [0]
                })
              default:
                return null;
            }
          }}

          enter={() => {
            switch(animate) {
              case 'slide-rtl':
                return ({
                  translateX: [0],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'slide-ltr':
                return ({
                  translateX: [0],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'slide-ttb':
                return ({
                  translateY: [0],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'slide-btt':
                return ({
                  translateY: [0],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'fade':
                return ({
                  opacity: [1],
                  timing: {duration: 500, ease: easeExp},
                })
              default:
                return null;
            }
          }}

          update={() => {
            switch(animate) {
              case 'slide-rtl':
                return ({
                  translateX: [0],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'slide-ltr':
                return ({
                  translateX: [0],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'slide-ttb':
                return ({
                  translateY: [0],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'slide-btt':
                return ({
                  translateY: [0],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'fade':
                return ({
                  opacity: [1],
                  timing: {duration: 500, ease: easeExp},
                })
              default:
                return null;

            }
          }}
        >
          {(state) => {

            // console.log(state.translateX);
            // console.log(animationStyle());

            const animationStyle = () => {
              switch (animate) {
                case 'slide-rtl':
                case 'slide-ltr':
                  return {transform: `translateX(${state.translateX}%)`}
                case 'slide-ttb':
                case 'slide-btt':
                  return {transform: `translateY(${state.translateY}%)`}
                case 'fade':
                  return {opacity: state.opacity}
                default:
                  return {};
              }
            }

            return (
              <div className={cx(styles.modalContainer)} style={{zIndex: (zIndex+1)*10}}>
                <div className={cx(styles.modalContainerOverlay)} onClick={overlayClose ? this.onClose.bind(this): '' }/>
                <div className={cx(styles.modal, className)} style={ {...this.getMaxWidth(), ...this.getMaxHeight(), ...extendStyles.modal, ...animationStyle() } } >
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