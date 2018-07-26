import React, { Component } from 'react';
import styles from './quickCompStyles';
import { TwoColumnLeft }  from '../../../Layout';
import PageTitle from '../../../PageTitle'

import Dummytext from '../../../DummyText/DummyTextLong';

class DemoPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageTitle title={ 'Two Column Left Page Layout!' } layout={'center'} style={{}} />
        <TwoColumnLeft contentMain={<Dummytext />}  contentColumnLeft="contentColumnLeft"  />
      </div>
    )
  }
}

export default DemoPage;
