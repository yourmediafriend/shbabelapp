import React, { Component } from 'react';
import { OneColumnCenter }  from '../../Layout';
import PageTitle from '../../PageTitle'
import { LoginForm } from '../../Forms'
import cx from "classnames";
import MainLayer from '../../Content/MainLayer'
import ContentLayer from '../../Content/ContentLayer'

import styles from './styles.scss';


const LoginUpOtions = () => {

  return (
    <div>
      <LoginForm />
{/*      <p>Facebook</p>
      <p>Google</p>*/}
    </div>
  )

}



class Page extends Component {

  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={ 'Login' } layout={'center'} style={{}} />
          <OneColumnCenter contentMain={<LoginUpOtions />} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;
