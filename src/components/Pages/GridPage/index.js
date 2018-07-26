import React, { Component } from 'react';
import PageTitle from '../../PageTitle';
import { OneColumnCenter }  from '../../Layout';
import GridParallax from '../../GridParallax'

class GridPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title={"Grid Page"}/>
        <OneColumnCenter  contentMain={<GridParallax />}/>
      </div>
    )
  }
}

export default GridPage;
