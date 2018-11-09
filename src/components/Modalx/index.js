import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import cx from 'classnames';
import { isFunction } from "lodash/fp";
import styles from './modalStyles.scss';

import Icon from '../Icons';

const ModalCloseButton = ({clickEvent}) => {
  return (
    <div className={styles.modalClose} onClick={clickEvent}>
      <Icon icon={'close'} />
    </div>
  )
}

class Modal extends Component {

  static propTypes = {
    extendClose: PropTypes.func,
    isModalOpen: PropTypes.bool,
    overlayClose: PropTypes.bool,
    preventScroll: PropTypes.bool,
  };

  static defaultProps = {
    isModalOpen: false,
    overlayClose: false,
    preventScroll: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: props.isModalOpen || false,
    };
  }

  setNoScroll() {
    const { isModalOpen } = this.state;
    isModalOpen ? document.body.classList.add ('noscroll') : document.body.classList.remove ('noscroll');
  }

  handleClose() {
    const { extendClose } = this.props;
    this.setState({isModalOpen: false});
    isFunction(extendClose) ? extendClose() : '';
  }

  render() {

    const { children, overlayClose, preventScroll } = this.props;
    const { isModalOpen } = this.state;

    this.setNoScroll();

    return (
      <Animate
        start={() => ({
          modalOpacity: isModalOpen ? [1] : [0],
          modalDisplay: isModalOpen ? 'block' : 'none',
        })}

        update={() => ({
          modalOpacity: [isModalOpen ? 1 : 0],
          timing: {duration: 500, ease: easeExpOut},
          events: {
            start() {
              // dispatch action Opening
              //console.log('isAnimating');
              isModalOpen ? this.setState({modalDisplay:'block'}) : null;
            },
            end() {
              // dispatch action Opening
              //console.log('notAnimating');
              !(isModalOpen) ? this.setState({modalDisplay:'none'}) : null;
            },
          },
        })}
      >
        {(state) => {
          return (
            <div className={cx(styles.modalContainer)} style={{display: isModalOpen ? 'block' : state.modalDisplay}}>
              <div className={cx(styles.modalContainerOverlay)} style={{display: state.modalDisplay, opacity: state.modalOpacity}}  onClick={overlayClose ? this.handleClose.bind(this): '' }/>
              <div className={cx(styles.modal, styles.bottom)} style={{display: state.modalDisplay, opacity: state.modalOpacity}}>
                <div className={styles.modalInner}>
                  <ModalCloseButton clickEvent={this.handleClose.bind(this)}/>
                  {children}
                </div>
              </div>
            </div>
          );
        }}
      </Animate>
    )
  }
}

export default Modal;