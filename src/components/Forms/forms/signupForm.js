import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { FormRow, RenderField } from '../formComponents'
import { Button } from 'reactstrap';

const validate = values => {
  const errors = {};

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
};

export const reduxFormDetails = {
  form: 'SignUpForm',
  validate,
  fields: [
    'firstName',
    'lastName',
    'username',
    'email',
    'password',
    'repeatpassword',
  ],
}

const ContactForm = props => {

  const { handleSubmit, submitting, isSending, hasErrored } = props;

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
    {/*      <FormRow>
            <Field labeltext={"First Name"} name={"firstName"} component={RenderField} type={"text"} isrequired={true}/>
            <Field labeltext={"Last Name"} name={"lastName"} component={RenderField} type={"text"} isrequired={true}/>
          </FormRow>*/}
          <FormRow>
            <Field labeltext={"Usename"} name={"username"} component={RenderField} type={"text"} isrequired={false}/>
          </FormRow>
          <FormRow>
            <Field labeltext={"Email"} name={"email"} component={RenderField} type={"email"} isrequired={true}/>
          </FormRow>
  {/*        <FormRow>
            <Field labeltext={"Password"} name={"password"} component={RenderField} type={"password"} isrequired={true}/>
          </FormRow>
          <FormRow>
            <Field labeltext={"Repeat Password"} name={"repeatpassword"} component={RenderField} type={"password"} isrequired={true}/>
          </FormRow>*/}
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
)(ContactForm);

