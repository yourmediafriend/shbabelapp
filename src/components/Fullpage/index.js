import React from 'react';
import PropTypes from 'prop-types';
import ReactFullpage from '@fullpage/react-fullpage';
import DavidCarson from './DavidCarson';
import Fluro from './Fluro';
import Trees from './Trees';
import Wobble from './Wobble';

const FullpageWrapper = props => {

  const fullPageOptions = { };

  return (
    <ReactFullpage {...fullPageOptions}  render={({ state, fullpageApi }) => {
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
  }}/>);

};

FullpageWrapper.propTypes = {
  pageRef: PropTypes.string,
};

FullpageWrapper.defaultProps = {
};



export default FullpageWrapper;


