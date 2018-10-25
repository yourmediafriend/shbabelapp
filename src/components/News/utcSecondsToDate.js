import React, { Component } from 'react';
import PropTypes from 'prop-types'

const utcSecondsToDate = (utcSeconds) => {
  let d = new Date(0);

  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(d.setUTCSeconds(utcSeconds))
};

const TimeFomated = ({created}) => {
  return (
    <span>{utcSecondsToDate(created)}</span>
  )
};

TimeFomated.props = {
  created: PropTypes.number
};

export default TimeFomated


