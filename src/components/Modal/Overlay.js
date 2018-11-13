import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import cx from 'classnames';
import {isFunction} from "lodash/fp";
import Icon from '../Icons/index';
import Animate from 'react-move/Animate';
import { easeExp } from 'd3-ease';


class Overlay extends Component {


  handleClick() {
    const { overlayClose, onClose } = this.props;
    overlayClose ? onClose() : '';
  }


  render() {
    const { overlayClose, onClose, isModalOpen } = this.props;
    return (
      <Animate
        start={() => {
          return ({
            opacity: [0]
          })
        }}

        enter={() => {
          return ({
            opacity: [1],
            timing: {duration: 250, ease: easeExp}
          })
        }}

        update={() => {
          return ({
            opacity: [isModalOpen ? 1 : 0],
            timing: {duration: 250, ease: easeExp},
          })
        }}

      >
        {(state) => {
          const animationStyle = () => {
            return {opacity: state.opacity}
          }
          return (
            <div className={cx(styles.modalContainerOverlay)} onClick={this.handleClick.bind(this)} style={{...animationStyle()}} />
          );
        }}
      </Animate>
    );
  }
}

export default Overlay;