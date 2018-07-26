import React, { Component } from 'react';
import styles from './quickCompStyles';
import { ThreeColumn }  from '../../../Layout';
import PageTitle from '../../../PageTitle'

import Dummytext from '../../../DummyText/DummyTextLong';



class DemoPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageTitle title={ 'Three Column Page Layout!' } layout={'center'} style={{}} />
        <ThreeColumn  contentColumnLeft="contentColumnLeft" contentMain={<Dummytext />}  contentColumnRight="contentColumnRight"  />
      </div>
    )
  }
}

export default DemoPage;
