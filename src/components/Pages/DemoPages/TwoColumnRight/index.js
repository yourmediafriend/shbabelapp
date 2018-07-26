import React, { Component } from 'react';
import styles from './quickCompStyles';
import { TwoColumnRight }  from '../../../Layout';
import PageTitle from '../../../PageTitle'

import Dummytext from '../../../DummyText/DummyTextLong';

class DemoPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageTitle title={ 'Two Column Right Page Layout!' } layout={'center'} style={{}} />
        <TwoColumnRight contentMain={<Dummytext />}  contentColumnRight="contentColumnRight"  />
      </div>
    )
  }
}

export default DemoPage;
