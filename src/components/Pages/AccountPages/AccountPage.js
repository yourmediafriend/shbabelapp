import React, { Component } from 'react';
import { OneColumnCenter }  from '../../Layout';
import PageTitle from '../../PageTitle'
import cx from "classnames";
import MainLayer from '../../Content/MainLayer'
import ContentLayer from '../../Content/ContentLayer'
import { AccountForm } from '../../Forms'
import styles from './styles.scss';


const AccountPageContent = (props) => {
  return (
    <div>

      <AccountForm />

      <p>Details; Name, Username, Email, Age, Avatar</p>
      <p>Security</p>
      <p>Preferences</p>
      <p>History</p>
      <p>Address Book</p>
      <p>Delete Account</p>
    </div>
  );
}


class Page extends Component {

  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={ 'My Account' } layout={'center'} style={{}} />
          <OneColumnCenter contentMain={<AccountPageContent />} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;
