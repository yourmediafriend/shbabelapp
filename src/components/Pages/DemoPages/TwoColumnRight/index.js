import React, { Component } from 'react';
import { TwoColumnRight }  from '../../../Layout';
import PageTitle from '../../../PageTitle'
import Dummytext from '../../../DummyText/DummyTextLong';
import { MenuWidget} from '../../../Widgets';

class DemoPage extends Component {
  render() {
    return (
      <div>
        <PageTitle title={ 'Two Column Right Page Layout!' } layout={'center'} />
        <TwoColumnRight contentMain={<Dummytext />}  contentColumnRight={<MenuWidget />}  />
      </div>
    )
  }
}

export default DemoPage;
