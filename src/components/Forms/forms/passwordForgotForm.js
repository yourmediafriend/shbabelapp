import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import { FormRow, renderField } from '../formComponents'
import { Button } from 'reactstrap';

import styles from '../formStyles';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.username = 'Required'
  }

  return errors
}

export const reduxFormDetails = {
  form: 'passwordForgotForm',
  validate,
  fields: [
    'email',
  ],
}

const passwordForgotForm = props => {

  const { handleSubmit, pristine, reset, submitting, isSending, hasErrored } = props;

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <FormRow>
            <Field labeltext={"Email"} name={"email"} component={renderField} type={"email"} isrequired={true}/>
          </FormRow>
        </fieldset>
        <div>
          <Button type="submit" disabled={submitting || isSending}>Submit</Button>
          {!hasErrored && !isSending ? null : <div>There has been an error. Please try again later</div> }
        </div>
      </form>
    </div>
  )
}

// Decorate the form component
export default reduxForm(
  reduxFormDetails
)(passwordForgotForm);

