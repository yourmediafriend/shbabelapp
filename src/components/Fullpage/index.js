import React from 'react';
import PropTypes from 'prop-types';
import ReactFullpage from '@fullpage/react-fullpage';
import DavidCarson from './DavidCarson';
import Fluro from './Fluro';

const FullpageWrapper = props => {

  const fullPageOptions = { };

  return (
    <ReactFullpage {...fullPageOptions}  render={({ state, fullpageApi }) => {
      switch (props.fullref) {
        case 'david-carson':
          return (<DavidCarson />);
        case 'fluro':
          return (<Fluro />);
        default:
          return (null);
      }
  }}/>);

};

FullpageWrapper.propTypes = {
  fullref: PropTypes.string,
};

FullpageWrapper.defaultProps = {
};



export default FullpageWrapper;


