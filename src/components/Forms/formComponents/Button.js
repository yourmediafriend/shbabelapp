import React from 'react';
import styles from '../forms.scss';

export const Button = ({ submitting, isSending }) => (
  <button type="submit" disabled={submitting || isSending} className={styles.button}>
    Submit
  </button>
)

export default Button;
