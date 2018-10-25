import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../forms.scss';
import zxcvbn from 'zxcvbn';
import { UID } from 'react-uid';
import Icon from '../../Icons';
import { Field } from 'redux-form';
import { Input, Label, FormGroup, FormFeedback } from 'reactstrap';
import cx from "classnames";


const FormIsRequired = () => (
  <span className={styles.required}>*</span>
);

const InputLabel = (labeltext, id, isrequired) => {

  return (
    <Label htmlFor={id}>
      <span>{labeltext}</span>
      {!isrequired ? '' : FormIsRequired()}
    </Label>
  )
};

const ErrorMessage = ({touched, error, warning}) => {

  return (
    <div>
      {touched &&
      ((error && <FormFeedback className={cx(styles.FormFeedback)}>{error}</FormFeedback>) ||
        (warning && <FormFeedback className={cx(styles.FormFeedback)}>{warning}</FormFeedback>))}
    </div>
  )

};

class FormFieldInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      type: 'input',
      score: 'null'
    }
    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
  }

  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  }

  passwordStrength(e){

    console.log('passwordStrength', e.target.value);

    if(e.target.value === ''){
      this.setState({
        score: 'null'
      })
    }
    else{
      let pw = zxcvbn(e.target.value);
      this.setState({
        score: pw.score
      });
    }
  }

  render() {
    const {input, placeholder, strengthIndicator, id , error, touched, warning, onChange} = this.props;

    return (
      <div>
        <div className={cx(styles.passwordWrap)}>
          <Input invalid={!!touched && error}
                 id={id}
                 type={this.state.type}
                 placeholder={placeholder}
                 autoComplete={'off'}
                 onChange={event => {
                   console.log("This is the new value of field myField: " + event.target.value);
                   this.passwordStrength(event);
                   input.onChange(event);
                 }}
          />
          {strengthIndicator ? <span className={styles.passwordStrength} data-score={this.state.score} /> : null }
          <span className={styles.passwordShowButton} onClick={this.showHide}>
            <Icon icon={this.state.type === 'input' ? 'eye_closed' : 'eye_open'} />
          </span>
        </div>
        <ErrorMessage touched={touched} error={error} warning={warning} />
      </div>

    );
  }
}

FormFieldInput.propTypes = {
  input: PropTypes.string,
  placeholder: PropTypes.string,
  strengthIndicator: PropTypes.bool,
  id: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
  onChange: PropTypes.func,
};

const RenderField = ({
                       labeltext,
                       input,
                       placeholder,
                       type,
                       id,
                       isrequired,
                       strengthIndicator,
                       autoComplete,
                       meta: { touched, error, warning }
                     }) =>  (
          <FormFieldInput
            id={id}
            placeholder={placeholder}
            input={input}
            type={type}
            error={error}
            touched={touched}
            warning={warning}
            autoComplete={autoComplete}
            strengthIndicator={strengthIndicator}
          />
      )

RenderField.propTypes = {
  labeltext: PropTypes.string,
  input: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  isrequired: PropTypes.bool,
  strengthIndicator: PropTypes.bool,
  autoComplete: PropTypes.bool,
  meta: PropTypes.object,
};

class PasswordStrengthReveal extends Component {

  render(){

    const {name, labeltext, isrequired, strengthIndicator, touched, error, warning} = this.props;

    return(
      <FormGroup>
        <UID>
          {id => {
            let inputId ='input-'+id;
            return(
              <div>
                {labeltext ? InputLabel(labeltext, inputId, isrequired) : ''}
                <Field name={name}
                       id={inputId}
                       component={RenderField}
                       strengthIndicator={strengthIndicator}
                />
              </div>
            )
          }}
        </UID>
      </FormGroup>
    )
  }
}

PasswordStrengthReveal.propTypes = {
  attemptToSubmit: PropTypes.func,
  isSending: PropTypes.bool,
  submitting: PropTypes.bool,
  hasErrored: PropTypes.bool,
  name: PropTypes.string,
  labeltext: PropTypes.string,
  isrequired: PropTypes.string,
  strengthIndicator: PropTypes.bool,
  touched: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
};

export default PasswordStrengthReveal;