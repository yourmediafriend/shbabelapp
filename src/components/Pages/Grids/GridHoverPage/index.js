import React, { Component } from 'react';

import MainLayer from '../../../Content/MainLayer'
import ContentLayer from '../../../Content/ContentLayer'
import { OneColumnCenter }  from '../../../Layout';
import Grid from '../../../Grid'
import styles from './gridpages.scss'
import cx from 'classnames';


class GridPage extends Component {
  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)}>
         <OneColumnCenter contentMain={<Grid className={'grid-hover'}/>} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default GridPage;
