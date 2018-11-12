import React from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';
import cx from 'classnames';
import { get } from "lodash/fp";
import styles from './modalStyles.scss';
import { modalClose } from '../../modules/Modal';
import Icon from '../Icons';

import AccountModal from './AccountModal'
import LocationModal from './LocationModal'

const ModalCloseButton = ({clickEvent}) => {
  return (
    <div className={styles.modalClose} onClick={clickEvent}>
      <Icon icon={'close'} />
    </div>
  )
}

const Modal = ({isModalOpen, modalClose, modalRef, contentId}) => {

  const contentSwitch = (modalRef) => {

    switch(modalRef) {
      case 'account':
        return (
          <div style={{maxWidth: '620px', height: '100%', margin: '0 auto'}}>
            <AccountModal contentId={contentId}/>
          </div>
        );

      case 'location':
        return (
            <LocationModal contentId={contentId} />
        );

      default:
        return null;
    }
  }


  return (
    <Animate
      start={() => ({
        modalOpacity: [0],
        modalDisplay: 'none',
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
          <div className={cx(styles.modalFullscreen)} style={{display: state.modalDisplay, opacity: state.modalOpacity}}>
            <div className={styles.modalFullscreenInner}>
              <ModalCloseButton clickEvent={modalClose}/>
              {contentSwitch(modalRef)}
            </div>
          </div>
        );
      }}
    </Animate>
  )

};

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  accountModalClose: PropTypes.func,
  modalClassName: PropTypes.string,
};

export const mapStateToProps = (state) => {
  return {
    isModalOpen: get('modalModule.modalIsOpen', state),
    modalRef: get('modalModule.modalRef', state),
    contentId: get('modalModule.contentId', state),
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalClose
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
