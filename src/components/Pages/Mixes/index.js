import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import { Link, Redirect } from 'react-router-dom';
import cx from "classnames";
import styles from './styles.scss';
import MainLayer from '../../Content/MainLayer'
import ContentLayer from '../../Content/ContentLayer'
import PageTitle from '../../PageTitle'
import { OneColumnCenter }  from '../../Layout';
import {Grid} from '../../Mixes'

class MixesIndexLayout extends Component {
  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={'Mixes'} layout={'center'} style={{}} />
          <div className={cx(styles.carouselContainer)}>
            <OneColumnCenter contentMain={<Grid className={'mixes'}/>} />
          </div>
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default MixesIndexLayout;


