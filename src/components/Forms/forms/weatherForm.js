import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm } from 'redux-form';
import { FormRow, FormFieldInput } from '../formComponents'
import { Button } from 'reactstrap';
import {UID} from 'react-uid';
import { FormGroup, FormFeedback } from 'reactstrap';
import Icon from '../../Icons';
import styles from '../forms.scss';
import cx from "classnames";

export const reduxFormDetails = {
  form: 'weatherLocation',
  fields: [
    'address',
  ],
};

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
          <Button type="submit" disabled={submitting || isSending}>
            <span className={styles.icon}><Icon icon="search" /></span>
          </Button>
          {touched &&
          ((error && <FormFeedback className={cx(styles.FormFeedback)}>{error}</FormFeedback>) ||
            (warning && <FormFeedback className={cx(styles.FormFeedback)}>{warning}</FormFeedback>))}
        </FormRow>
      </div>
    )}
  </UID>);

RenderFieldSingle.propTypes = {
  labeltext: PropTypes.string,
  input: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  submitting: PropTypes.bool,
  meta: PropTypes.object,
};

const FormComp = ({
                    attemptToSubmit,
                    handleSubmit,
                    isSending,
                    submitting,
                    hasErrored,
                  }) => {

  const submitForm = (values) => {
    return attemptToSubmit(values);
  };

  return(
    <div>
      <Form className={cx(styles.weatherForm)} onSubmit={handleSubmit(submitForm)}>
        <fieldset>
          <FormGroup >
            <Field  placeholder="Town or UK postcode" name={"address"} component={RenderFieldSingle} type={"text"} isrequired={true}/>
          </FormGroup>
        </fieldset>
      </Form>
    </div>
  )
};

FormComp.propTypes = {
  attemptToSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSending: PropTypes.bool,
  submitting: PropTypes.bool,
  hasErrored: PropTypes.bool,
};

// Decorate the form component
export default reduxForm(
  reduxFormDetails
)(FormComp);

