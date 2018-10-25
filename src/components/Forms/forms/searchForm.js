import React from 'react';
import PropTypes from 'prop-types';
import {Form, Field, reduxForm} from 'redux-form';
import { RenderField } from '../formComponents'
import { Row, Col  } from 'reactstrap';
import styles from '../forms.scss';

export const reduxFormDetails = {
  form: 'SearchField',
  fields: [
    'search',
  ],
}

const FormComp = props => {

  const { handleSubmit } = props;

  return(
      <Form className={styles.searchForm} onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Field name={"search"} placeholder={"Search"} component={RenderField} type={"text"} />
          </Col>
        </Row>
      </Form>
  )
}

FormComp.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm(
  reduxFormDetails
)(FormComp);

