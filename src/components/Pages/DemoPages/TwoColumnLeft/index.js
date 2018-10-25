import React, { Component } from 'react';
import { TwoColumnLeft }  from '../../../Layout';
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
          <PageTitle title={ 'Two Column Left Page Layout!' } layout={'center'} />
          <TwoColumnLeft contentMain={<Dummytext />}  contentColumnLeft={<MenuWidget />} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;


