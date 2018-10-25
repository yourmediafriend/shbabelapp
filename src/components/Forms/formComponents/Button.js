import React from 'react';
import PropTypes from 'prop-types';
import styles from '../forms.scss';

export const Button = ({ submitting, isSending }) => (
  <button type="submit" disabled={submitting || isSending} className={styles.button}>
    Submit
  </button>
)

Button.propTypes = {
  isSending: PropTypes.bool,
  submitting: PropTypes.bool,
};


export default Button;
