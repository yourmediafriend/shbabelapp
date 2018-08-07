import React, { Component } from 'react';
import { ThreeColumn }  from '../../../Layout';
import PageTitle from '../../../PageTitle'
import Dummytext from '../../../DummyText/DummyTextLong';

class DemoPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title={ 'Three Column Page Layout!' } layout={'center'} />
        <ThreeColumn  contentColumnLeft="contentColumnLeft" contentMain={<Dummytext />}  contentColumnRight="contentColumnRight"  />
      </div>
    )
  }
}

export default DemoPage;
