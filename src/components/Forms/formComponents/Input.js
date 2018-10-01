import React from 'react';
import {UID} from 'react-uid';
import PasswordSrength from './PasswordStrength'
import { FormGroup, Label, Input, FormFeedback,  } from 'reactstrap';
import cx from 'classnames';
import styles from '../forms.scss';

class FormFieldInput extends React.Component {

  render() {
    const {input, placeholder, type, autocomplete, id , strengthIndicator, error, touched, warning} = this.props;

    switch (type) {
      case 'textarea':
        return (<Input invalid={!!touched && error} {...input}  id={id} placeholder={placeholder} type={type} />);
      case 'password':
        return (<PasswordSrength error={error} warning={warning} touched={touched} input={input} id={id} strengthIndicator={strengthIndicator} autocomplete={autocomplete} placeholder={placeholder} type={type}/>);
      default:
        return (<Input invalid={!!touched && error} {...input} id={id} placeholder={placeholder} type={type} autoComplete={!(autocomplete) ? 'off' : 'on'} />);
    }
  }
}

const FormIsRequired = () => (
  <span className={styles.required}>*</span>
);

const InputLabel = (labeltext, id, isrequired) => {

  return (
    <Label htmlFor={`input-${id}`}>
      <span>{labeltext}</span>
      {!isrequired ? '' : FormIsRequired()}
    </Label>
  )
};

const RenderField = ({
                     labeltext,
                     input,
                     placeholder,
                     type,
                     isrequired,
                     strengthIndicator,
                     autoComplete,
                     meta: { touched, error, warning }
                   }) => (
                    <FormGroup>
                      <UID>
                        {id => (
                          <div>
                            {labeltext ? InputLabel(labeltext, id,isrequired) : ''}
                            <FormFieldInput
                              id={`input-${id}`}
                              placeholder={placeholder}
                              input={input}
                              type={type}
                              error={error}
                              touched={touched}
                              warning={warning}
                              autoComplete={autoComplete}
                              strengthIndicator={strengthIndicator}
                            />


                            {touched &&
                            ((error && <FormFeedback className={cx(styles.FormFeedback)}>{error}</FormFeedback>) ||
                              (warning && <FormFeedback className={cx(styles.FormFeedback)}>{warning}</FormFeedback>))}
                          </div>
                        )}
                      </UID>
                    </FormGroup>
                  )



const FormRow = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export { FormRow, RenderField, FormFieldInput };