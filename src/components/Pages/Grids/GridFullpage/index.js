import React, { Component } from 'react';
import PageTitle from '../../../PageTitle';
import Banner from '../../../Banner';

import MainLayer from '../../../Content/MainLayer'
import ContentLayer from '../../../Content/ContentLayer'

import { OneColumnCenter }  from '../../../Layout';
import GridFullpage from '../../../GridFullpage'
import styles from './gridpages.scss'
import cx from 'classnames';


class GridPage extends Component {
  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)}>
          <GridFullpage />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default GridPage;
