import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';

import { renderField } from '../formComponents'

import { Container, Button, Form, Row, Col, FormText } from 'reactstrap';

import styles from '../forms.scss';

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  if (!values.message) {
    errors.message = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export const reduxFormDetails = {
  form: 'ContactForm',
  validate,
  fields: [
    'firstName',
    'lastName',
    'phoneNumber',
    'email',
    'message',
  ],
}

const ContactForm = props => {

  const { handleSubmit, pristine, reset, submitting, isSending, hasErrored } = props;

  return(
      <Form className={styles.contactForm} onSubmit={handleSubmit}>
        <fieldset>
          <Row>
            <Col md={6}>
              <Field labeltext={"First Name"} name={"firstName"} component={renderField} type={"text"} isrequired={true}/>
            </Col>
            <Col md={6}>
              <Field labeltext={"Last Name"} name={"lastName"} component={renderField} type={"text"} isrequired={true}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Field labeltext={"Phone Number"} name={"phoneNumber"} component={renderField} type={"text"} isrequired={false}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Field labeltext={"Email"} name={"email"} component={renderField} type={"email"} isrequired={true}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Field labeltext={"Message"} name={"message"} component={renderField} type={"textarea"} isrequired={true}/>
            </Col>
          </Row>
        </fieldset>

        <div>
          <Button type="submit" disabled={submitting || isSending}>Submit</Button>
          {!hasErrored && !isSending ? null : <FormText>There has been an error. Please try again later</FormText> }
        </div>
      </Form>
  )
}

// Decorate the form component
export default reduxForm(
  reduxFormDetails
)(ContactForm);

