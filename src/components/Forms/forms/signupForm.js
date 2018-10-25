import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import { FormRow, RenderField } from '../formComponents'
import { Button } from 'reactstrap';
import styles from '../forms.scss'
import cx from 'classnames'

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required'
  }

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
  destroyOnUnmount: false,
  validate,
  fields: [
    'name',
    'email',
  ],
}

class FormComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initValues: {name:'', email:'', },
    };
  }

  componentDidMount() {
   // this.handleInitialize();
  }

  componentWillUnmount() {
    this.reset();
  };

  reset() {
    return this.props.resetErrorMessage();
  }

  handleInitialize() {
    const initData = {
      'name': this.state.initValues.name,
      'email': this.state.initValues.email,
    };
    this.props.initialize(initData);
  }

  submitForm = (values) => {
    const {attemptToSubmit} = this.props;
    return attemptToSubmit(values);
  };

  render(){

    const { handleSubmit, submitting, isSending, hasErrored, message } = this.props;

    return(
      <form className={cx(styles.userForm, styles.signUpForm)} onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <fieldset>
          <FormRow>
            <Field labeltext={"Username"} name={"name"} component={RenderField} type={"text"} isrequired={true} />
          </FormRow>
          <FormRow>
            <Field labeltext={"Email"} name={"email"} component={RenderField} type={"text"} isrequired={true}/>
          </FormRow>
        </fieldset>
        <div>
          <Button type="submit" disabled={submitting || isSending}>Submit</Button>
          {!hasErrored && !isSending ? null : <div className={cx(styles.errorMessage)}>
            {message ? <div dangerouslySetInnerHTML={{ __html: message }} /> : 'There has been an error. Please try again later' }
          </div> }
        </div>
      </form>
    )
  }
}

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

