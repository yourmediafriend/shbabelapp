import React, { Component } from 'react';
import { TwoColumnLeft }  from '../../../Layout';
import PageTitle from '../../../PageTitle'
import Dummytext from '../../../DummyText/DummyTextLong';
import { MenuWidget} from '../../../Widgets';

class DemoPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title={ 'Two Column Left Page Layout!' } layout={'center'} />
        <TwoColumnLeft contentMain={<Dummytext />}  contentColumnLeft={<MenuWidget />} />
      </div>
    )
  }
}

export default DemoPage;
