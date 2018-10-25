import React from 'react';
import PropTypes from 'prop-types';
import DavidCarson from './DavidCarson';
import Fluro from './Fluro';
import Trees from './Trees';
import Wobble from './Wobble';

const FullpageWrapper = props => {


  switch (props.pageRef) {
    case 'david-carson':
      return (<DavidCarson />);
    case 'fluro':
         return (<Fluro />);
    case 'trees':
      return (<Trees />);
    case 'wobble':
      return (<Wobble />);
    default:
      return (null);
  }


};

FullpageWrapper.propTypes = {
  pageRef: PropTypes.string,
};

FullpageWrapper.defaultProps = {};

export default FullpageWrapper;


