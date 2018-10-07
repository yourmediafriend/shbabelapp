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
  form: 'passwordSetForm',
  validate,
  fields: [
    'password',
    'passwordCheck',
  ],
};

class PasswordForm extends Component {

  submitForm = (values) => {
    console.log('submitForm', values);
    return values;
  };

  render() {

    const {handleSubmit, submitting, isSending, hasErrored } = this.props;

    return (
      <Form className={cx(styles.userForm, styles.passwordForm)} onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <fieldset>
          <Row>
            <Col>
              <PasswordSrength labeltext={"Password"} name={"passwordset"} strengthIndicator={true} isrequired={true}/>

{/*              <Field labeltext={"Password"} name={"passwordset"} component={RenderField} type={"password"} showHide={true}
                     strengthIndicator={true} isrequired={true}/>*/}
            </Col>
          </Row>
          <Row>
            <Col>
              <PasswordSrength labeltext={"Repeat Password"} name={"passwordsetcompare"} isrequired={true}/>
{/*              <Field labeltext={"Repeat Password"} name={"passwordsetcompare"} component={RenderField} type={"password"}
                     showHide={true} strengthIndicator={false} isrequired={true}/>*/}
            </Col>
          </Row>
        </fieldset>
        <div>
          <Button type="submit" disabled={submitting || isSending}>Submit</Button>
          {!hasErrored && !isSending ? null : <FormText>There has been an error. Please try again later</FormText>}
        </div>
      </Form>
    )
  }
};

// Decorate the form component
export default reduxForm(
  reduxFormDetails
)(PasswordForm);

