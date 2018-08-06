import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';

import { renderField } from '../formComponents'
import { Button, Container, Row, Col  } from 'reactstrap';
import styles from '../forms.scss';

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
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Field name={"search"} placeholder={"Search"} component={renderField} type={"text"} />
          </Col>
        </Row>
      </form>
  )
}

// Decorate the form component
export default reduxForm(
  reduxFormDetails
)(SearchForm);

