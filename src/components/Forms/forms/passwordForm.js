import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import { RenderField, PasswordSrength } from '../formComponents'
import { Button, Form, Row, Col, FormText } from 'reactstrap';
import styles from '../forms.scss';
import cx from 'classnames'

const validate = values => {
  const errors = {};

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

class FormComp extends Component {

  submitForm = (values) => {
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
            </Col>
          </Row>
          <Row>
            <Col>
              <PasswordSrength labeltext={"Repeat Password"} name={"passwordsetcompare"} isrequired={true}/>
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
}

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

