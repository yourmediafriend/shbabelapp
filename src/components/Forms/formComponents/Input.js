import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';


import styles from '../forms.scss';

class FormFieldInput extends React.Component {

  render() {

    const {input, placeholder, type, style, error, touched, warning, autocomplete} = this.props;

    switch (type) {
      case 'textarea':
        return (<Input  invalid={touched && error ? true : false} {...input} placeholder={placeholder} type={type} />);
      default:
        return (<Input invalid={touched && error ? true : false} {...input} placeholder={placeholder} type={type} autoComplete={!(autocomplete) ? 'off' : 'on'}     />);
    }
  }
}


const FormIsRequired = () => (
  <span className={styles.required}>*</span>
)

let renderField = ({
                     labeltext,
                     input,
                     placeholder,
                     type,
                     isrequired,
                     meta: { touched, error, warning }
                   }) => (
                    <FormGroup>
                      <Label>
                        <span>{labeltext}</span>
                        {!isrequired ? '' : FormIsRequired()}
                        <FormFieldInput
                          placeholder={placeholder}
                          input={input}
                          type={type}
                          error={error}
                          touched={touched}
                          warning={warning}
                        />
                        {touched &&
                        ((error && <FormFeedback >{error}</FormFeedback>) ||
                          (warning && <FormFeedback >{warning}</FormFeedback>))}
                      </Label>

                    </FormGroup>
                  )



const FormRow = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

export { FormRow, renderField };