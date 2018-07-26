import React from 'react';
import PropTypes from 'prop-types';
import styles from '../formStyles';
import Radium from "radium";


export const Button = ({ submitting, isSending }) => (
  <button type="submit" disabled={submitting || isSending} style={{...styles.form.button}}>
    Submit
  </button>
)

export default Radium(Button);
