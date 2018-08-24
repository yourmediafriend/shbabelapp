import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { FormRow, FormFieldInput } from '../formComponents'
import { Button } from 'reactstrap';
import {UID} from 'react-uid';
import { FormGroup, FormFeedback } from 'reactstrap';
import styles from '../forms.scss';
import cx from "classnames";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
};

export const reduxFormDetails = {
  form: 'NewsletterSignUp',
  validate,
  fields: [
    'email',
  ],
}

const RenderFieldSingle = ({
                       labeltext,
                       input,
                       placeholder,
                       type,
                       isrequired,
                       submitting,
                       isSending,
                       meta: { touched, error, warning }
                     }) => (
                      <UID>
                        {id => (
                          <div>
                            <label htmlFor={`input-${id}`}>Newsletter Sign-up</label>
                            <FormRow className={styles.formRow}>
                                <FormFieldInput
                                  id={`input-${id}`}
                                  placeholder={placeholder}
                                  input={input}
                                  type={type}
                                  error={error}
                                  touched={touched}
                                  warning={warning}
                                />
                                <Button type="submit" disabled={submitting || isSending}>Sign UP</Button>
                                {touched &&
                                ((error && <FormFeedback className={cx(styles.FormFeedback)}>{error}</FormFeedback>) ||
                                  (warning && <FormFeedback className={cx(styles.FormFeedback)}>{warning}</FormFeedback>))}
                            </FormRow>
                          </div>
                          )}
                      </UID>);

const FormComp = ({
        handleSubmit,
        isSending,
        submitting,
        hasErrored,
      }) => {
        return(
          <div>
            <Form className={cx(styles.newsletterSignUpForm)} onSubmit={handleSubmit}>
              <fieldset>
                <FormGroup  >
                 <Field  placeholder="Your Email" name={"email"} component={RenderFieldSingle} type={"email"} isrequired={true}/>
                </FormGroup>
              </fieldset>
            </Form>
          </div>
        )
      }

// Decorate the form component
export default reduxForm(
  reduxFormDetails
)(FormComp);

