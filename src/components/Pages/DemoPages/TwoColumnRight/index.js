import React, { Component } from 'react';
import { TwoColumnRight }  from '../../../Layout';
import PageTitle from '../../../PageTitle'
import Dummytext from '../../../DummyText/DummyTextLong';

class DemoPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title={ 'Two Column Right Page Layout!' } layout={'center'} />
        <TwoColumnRight contentMain={<Dummytext />}  contentColumnRight="contentColumnRight"  />
      </div>
    )
  }
}

export default DemoPage;
