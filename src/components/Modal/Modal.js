import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import cx from 'classnames';
import {isFunction} from "lodash/fp";
import Icon from '../Icons/index';
import Animate from 'react-move/Animate';
import { easeExp } from 'd3-ease';
import Overlay from './Overlay';

const ModalCloseButton = ({clickEvent}) => {
  return (
    <div className={styles.modalClose} onClick={clickEvent}>
      <Icon icon={'close'} />
    </div>
  )
}

class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  onClose(){
    const { item } = this.props;
    const { onClose } = item;
    this.setState({isModalOpen: false});
    isFunction(onClose) ? onClose(item): '';
  }

  componentDidMount() {
    const { bodyScroll } = this.props.item;
    !bodyScroll ? document.body.classList.add ('noscroll') : '';
    this.setState({isModalOpen: true});
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
    const { zIndex, modalClose, item } = this.props;
    const { content, overlayClose, className, extendStyles, animate } = this.props.item;
    const { isModalOpen } = this.state

    return (
      <div className={cx(styles.modalContainer)} style={{zIndex: (zIndex+1)*10}}>
        <Overlay onClose={this.onClose.bind(this)}  overlayClose={overlayClose}  isModalOpen={isModalOpen} />
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

          update={() => {
            switch(animate) {
              case 'slide-rtl':
                return ({
                  translateX: [isModalOpen ? 0 : 100],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'slide-ltr':
                return ({
                  translateX: [isModalOpen ? 0 : -100],
                  timing: {duration: 500, ease: easeExp},
                  events: {
                    start() {
                      // dispatch action Opening
                      //console.log('isAnimating');
                      return;
                    },
                    end() {
                      // dispatch action Opening
                      //console.log('notAnimating');
                     return !(isModalOpen) ? modalClose(item) : null;
                    },
                  }
                })
              case 'slide-ttb':
                return ({
                  translateY: [isModalOpen ? 0 : -100],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'slide-btt':
                return ({
                  translateY: [isModalOpen ? 0 : 100],
                  timing: {duration: 500, ease: easeExp},
                })
              case 'fade':
                return ({
                  opacity: [isModalOpen ? 1 : 0],
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
              <div className={cx(styles.modal, className)} style={ {...this.getMaxWidth(), ...this.getMaxHeight(), ...extendStyles.modal, ...animationStyle() } } >
                <div className={styles.inner} style={extendStyles.inner}>
                  <ModalCloseButton clickEvent={this.onClose.bind(this)}/>
                  {content}
                </div>
              </div>
            );
          }}
        </Animate>
      </div>
    );
  }
}

export default Modal;