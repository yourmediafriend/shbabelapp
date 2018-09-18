import React, { Component } from 'react';
import { ThreeColumn }  from '../../../Layout';
import { MenuWidget} from '../../../Widgets';
import PageTitle from '../../../PageTitle'
import Dummytext from '../../../DummyText/DummyTextLong';
import cx from "classnames";
import MainLayer from '../../../Content/MainLayer'
import ContentLayer from '../../../Content/ContentLayer'
import styles from '../demoPages.scss';

class Page extends Component {

  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={ 'Three Column Page Layout!' } layout={'center'} />
          <ThreeColumn  contentColumnLeft="contentColumnLeft" contentMain={<Dummytext />}  contentColumnRight="contentColumnRight"  />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;


