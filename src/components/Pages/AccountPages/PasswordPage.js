import React, { Component } from 'react';
import { OneColumnCenter }  from '../../Layout';
import PageTitle from '../../PageTitle'
import { PasswordForm } from '../../Forms'
import cx from "classnames";
import MainLayer from '../../Content/MainLayer'
import ContentLayer from '../../Content/ContentLayer'

import styles from './styles.scss';


const SetPassword = () => {

  return (
    <div>
     <PasswordForm />
    </div>
  )

}

class Page extends Component {

  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={ 'Set Password' } layout={'center'} style={{}} />
          <OneColumnCenter contentMain={<SetPassword />} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;
