import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';

import { FormRow, renderField } from '../formComponents'
import { Button } from 'reactstrap';
import styles from '../formStyles';

const validate = values => {
  const errors = {}
  return errors
}

export const reduxFormDetails = {
  form: 'SearchField',
  validate,
  fields: [
    'search',
  ],
}

const SearchForm = props => {

  const { handleSubmit, pristine, reset, submitting, isSending, hasErrored } = props;

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Field name={"search"} placeholder={"Search"} component={renderField} type={"text"} style={{borderWidth: '0 0 1px 0', background: 'transparent', fontSize: '30px'}}/>
        </FormRow>
      </form>
    </div>
  )
}

// Decorate the form component
export default reduxForm(
  reduxFormDetails
)(SearchForm);

