import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import { FormRow, RenderField } from '../formComponents'
import { Button } from 'reactstrap';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.username = 'Required'
  }

  return errors
};

export const reduxFormDetails = {
  form: 'passwordForgotForm',
  validate,
  fields: [
    'email',
  ],
};

const FormComp = props => {

  const { handleSubmit, submitting, isSending, hasErrored } = props;

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <FormRow>
            <Field labeltext={"Email"} name={"email"} component={RenderField} type={"email"} isrequired={true}/>
          </FormRow>
        </fieldset>
        <div>
          <Button type="submit" disabled={submitting || isSending}>Submit</Button>
          {!hasErrored && !isSending ? null : <div>There has been an error. Please try again later</div> }
        </div>
      </form>
    </div>
  )
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

