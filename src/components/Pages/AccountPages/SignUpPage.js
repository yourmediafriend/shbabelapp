import React, { Component } from 'react';
import { OneColumnCenter }  from '../../Layout';
import { SignupForm } from '../../Forms'

import PageTitle from '../../PageTitle'

import cx from "classnames";
import MainLayer from '../../Content/MainLayer'
import ContentLayer from '../../Content/ContentLayer'

import styles from './styles.scss';

class Page extends Component {

  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={ 'Sign Up' } layout={'center'} style={{}} />
          <OneColumnCenter contentMain={<SignupForm />} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;
