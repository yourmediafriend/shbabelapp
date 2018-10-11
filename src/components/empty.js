import React, { Component } from 'react';

import FeatureList from './FeatureList';

class Example extends Component {

  state = {
    open: false,
  }

  render() {
    return (
      <div>
       <FeatureList />
      </div>
    );
  }
}

export default Example;




