import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { renderField } from '../formComponents'
import { Button, Form, Row, Col, FormText } from 'reactstrap';
import styles from '../forms.scss';

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  }

  return errors
};

export const reduxFormDetails = {
  form: 'LoginForm',
  validate,
  fields: [
    'username',
    'password',
  ],
};

const LoginForm = props => {

  const { handleSubmit, submitting, isSending, hasErrored } = props;

  return(

      <Form className={styles.loginForm} onSubmit={handleSubmit}>
        <fieldset>
          <Row>
            <Col>
              <Field labeltext={"Username"} name={"username"} component={renderField} type={"text"} isrequired={true}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Field labeltext={"Password"} name={"password"} component={renderField} type={"password"} isrequired={true}/>
            </Col>
          </Row>
        </fieldset>
        <div>
          <Button type="submit" disabled={submitting || isSending}>Submit</Button>
          {!hasErrored && !isSending ? null : <FormText>There has been an error. Please try again later</FormText> }
        </div>
      </Form>

  )
};

// Decorate the form component
export default reduxForm(
  reduxFormDetails
)(LoginForm);

