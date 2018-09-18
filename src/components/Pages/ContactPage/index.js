import React, { Component } from 'react';
import cx from 'classnames';

import MainLayer from '../../Content/MainLayer';
import ContentLayer from '../../Content/ContentLayer';
import PageTitle from '../../PageTitle';
import { OneColumnCenter }  from '../../Layout';
import { ContactForm }  from '../../Forms';
import styles from './styles.scss';

class ContactPage extends Component {
  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={ 'Contact Form' } layout={'center'} style={{}} />
          <OneColumnCenter contentMain={ <ContactForm /> }/>
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default ContactPage;
