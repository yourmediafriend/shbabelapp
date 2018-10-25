import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class FormComp extends Component {

  submitForm = (values) => {
    console.log('submitForm', values);
    return values;
  };

  render() {

    const {handleSubmit, submitting, isSending, hasErrored } = this.props;

    return (
      <Form className={cx(styles.userForm, styles.accountForm)} onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <div className={styles.formSection}>
          <h3 className={styles.formSectionTitle}>Personal Details</h3>
          <fieldset>
            <Row>
              <Col>
                <Field labeltext={"First Name"} name={"firstname"} component={RenderField} type={"text"} isrequired={true}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Field labeltext={"Last Name"} name={"lastname"} component={RenderField} type={"text"} isrequired={true}/>
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
        </div>
        <div className={styles.formSection}>
        <h3 className={styles.formSectionTitle}>Password Update</h3>
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
        </div>
      </Form>
    )
  }
};

FormComp.propTypes = {
  handleSubmit: PropTypes.func,
  isSending: PropTypes.bool,
  submitting: PropTypes.bool,
  hasErrored: PropTypes.bool,
};

// Decorate the form component
export default reduxForm(
  reduxFormDetails
)(FormComp);
