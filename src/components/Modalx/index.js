import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import cx from 'classnames';
import { get } from "lodash/fp";
import styles from './modalStyles.scss';
import { modalClose } from '../../modules/Modal';
import Icon from '../Icons';

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
      isModalOpen: props.isModalOpen || false,
    };
  }

  handleClose() {
    const { extendClose } = this.props;
    this.setState({isModalOpen: false});
    extendClose();
  }

  render() {

    const { modalClose, children} = this.props;
    const { isModalOpen } = this.state;

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
              return  isModalOpen ? this.setState({modalDisplay:'block'}) : null;
            },
            end() {
              // dispatch action Opening
              //console.log('notAnimating');
              return !(isModalOpen) ? this.setState({modalDisplay:'none'}) : null;
            },
          },
        })}
      >
        {(state) => {
          return (
            <div className={cx(styles.modalContainer)} style={{display: isModalOpen ? 'block' : state.modalDisplay}}>
              <div className={cx(styles.modalContainerOverlay)} style={{display: state.modalDisplay, opacity: state.modalOpacity}} />
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