import React, { Component } from 'react';
import { TwoColumnRight }  from '../../../Layout';
import { MenuWidget} from '../../../Widgets';
import PageTitle from '../../../PageTitle'
import Dummytext from '../../../Placeholders/DummyText/DummyTextLong';
import cx from "classnames";
import MainLayer from '../../../Content/MainLayer'
import ContentLayer from '../../../Content/ContentLayer'
import styles from '../demoPages.scss';

class Page extends Component {

  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={ 'Two Column Right Page Layout!' } layout={'center'} />
          <TwoColumnRight contentMain={<Dummytext />}  contentColumnRight={<MenuWidget />}  />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;



