import React, { Component } from 'react';
import styles from './contactPageStyles';
import PageTitle from '../../PageTitle';
import { OneColumnCenter }  from '../../Layout';
import { ContactForm }  from '../../Forms';

class ContactPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <PageTitle title={ 'Contact Form' } layout={'center'} style={{}} />
        <OneColumnCenter contentMain={ <ContactForm /> }/>
      </div>
    )
  }
}

export default ContactPage;
