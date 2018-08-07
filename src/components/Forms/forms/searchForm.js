import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { renderField } from '../formComponents'
import { Row, Col  } from 'reactstrap';
import styles from '../forms.scss';

export const reduxFormDetails = {
  form: 'SearchField',
  fields: [
    'search',
  ],
}

const SearchForm = props => {

  const { handleSubmit } = props;

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

export default reduxForm(
  reduxFormDetails
)(SearchForm);

