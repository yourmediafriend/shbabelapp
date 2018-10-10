import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { RenderField, PasswordSrength } from '../formComponents'
import { Button, Form, Row, Col, FormText } from 'reactstrap';
import styles from '../forms.scss';
import cx from 'classnames'


const validate = values => {
  const errors = {};

  console.log('validate PasswordForm');

  // if ((values.passwordRepeat && values.password) && values.passwordRepeat !== values.password ) {
  //   errors.passwordRepeat = 'Must Match'
  // }

  if (!values.passwordset) {
    errors.passwordset = 'Required'
  }

  if (!values.passwordsetcompare) {
    errors.passwordsetcompare = 'Required'
  }

  console.log(errors);
  return errors
};

export const reduxFormDetails = {
  form: 'accountForm',
  validate,
  fields: [
    'firstname',
    'lastname',
    'email',
    'passwordcurrent',
    'password',
    'passwordCheck',
  ],
};

class AccountForm extends Component {

  submitForm = (values) => {
    console.log('submitForm', values);
    return values;
  };

  render() {

    const {handleSubmit, submitting, isSending, hasErrored } = this.props;

    return (
      <Form className={cx(styles.userForm, styles.passwordForm)} onSubmit={handleSubmit(this.submitForm.bind(this))}>

        <h3>Personal Details</h3>
        <fieldset>
          <Row>
            <Col>
              <Field labeltext={"First Name"} name={"firstname"} component={RenderField} type={"text"} isrequired={true}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <PasswordSrength labeltext={"Last Name"} name={"lastname"} isrequired={true}/>
            </Col>
          </Row>
        </fieldset>


        <fieldset>
          <Row>
            <Col>
              <Field labeltext={"Email"} name={"email"} component={RenderField} type={"email"} isrequired={true}/>
            </Col>
          </Row>
        </fieldset>

        <h3>Password Update</h3>

        <fieldset>
          <Row>
            <Col>
              <PasswordSrength labeltext={"Current Password"} name={"passwordcurrent"} strengthIndicator={false} isrequired={true}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <PasswordSrength labeltext={"Password"} name={"passwordset"} strengthIndicator={true} isrequired={true}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <PasswordSrength labeltext={"Repeat Password"} name={"passwordsetcompare"} isrequired={true}/>
            </Col>
          </Row>
        </fieldset>
      </Form>
    )
  }
};

// Decorate the form component
export default reduxForm(
  reduxFormDetails
)(AccountForm);
