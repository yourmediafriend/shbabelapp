import React, { Component } from 'react';
import styles from './quickCompStyles';
import { OneColumnCenter }  from '../../../Layout';
import PageTitle from '../../../PageTitle'
import Dummytext from '../../../DummyText/DummyTextLong';

class DemoPage extends Component {

  constructor(props) {
    super(props);
    super(props);
  }

  render() {
    return (
      <div>
        <PageTitle title={ 'One Column Center Page Layout!' } layout={'center'} style={{}} />
        <OneColumnCenter contentMain={<Dummytext />} />
      </div>
    )
  }
}

export default DemoPage;
