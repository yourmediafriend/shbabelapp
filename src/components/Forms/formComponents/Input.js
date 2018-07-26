import React from 'react';
import PropTypes from 'prop-types';
import Radium from "radium";

import styles from '../formStyles';

// TODO: Give option for multiple inputs, starting with text area.

/*let FormFieldInput = ({
                        input,
                        placeholder,
                        type,
                        style,
                        error,
                        touched,
                        warning
                      }) => {


                        const compStyling = (error, touched) => {
                          return  touched && error || touched && error  ?  styles.form.input.warning : '' ;
                        }

                        const compStylesHover = (hoverState) => {

                          console.log('hoverState', hoverState);


                          console.log('hover', Radium.getState(this.state, 'main', ':hover'));
                          return Radium.getState(this.state, 'main', ':hover') ?  {background:'#ff00ea'} : {};
                        };






                    /!*    const compStylesFocus = (Radium) => {
                          console.log('focus', Radium.getState(this.state, 'main', ':focus'));
                          return RadiumLocal.getState(this.state, 'main', ':focus') ?  {background:'yellow'} : {};
                        };*!/

                        Radium.getState();

                        console.log('state', this.state);
                        console.log(':hover', Radium.getState(this.state, 'main', ':hover'));
                        debugger;


                        switch (type) {
                          case 'textarea':
                            return (<textarea style={{...styles.form.input, ...compStyling(error, touched), ...style}} {...input} placeholder={placeholder} type={type} />);
                          default:
                            return (<input style={{...styles.form.input, ...compStyling(error, touched), ...style, ...compStylesHover()}} {...input} placeholder={placeholder} type={type} />);
                        }

                      }*/


class FormFieldInput extends React.Component {

  compStylesError = (error, touched) => {
    return  touched && error || touched && error  ?  styles.form.input.warning : '' ;
  }

  compStylesHover = (style) => {
    const styleOverride = style ? style : {};
    return Radium.getState(this.state, 'main', ':hover') ? {...styles.form.input.hover, ...styleOverride} : {};
  }

  compStylesFocus = (style) => {
    const styleOverride = style ? style : {};
    return Radium.getState(this.state, 'main', ':focus') ? {...styles.form.input.focus, ...styleOverride} : {};
  }

  render() {

    const {input, placeholder, type, style, error, touched, warning, autocomplete} = this.props;

    switch (type) {
      case 'textarea':
        return (<textarea style={{...styles.form.input, ...style, ...this.compStylesError(error, touched), ...this.compStylesHover(style), ...this.compStylesFocus(style)}} {...input} placeholder={placeholder} type={type} />);
      default:
        return (<input style={{...styles.form.input, ...style, ...this.compStylesError(error, touched), ...this.compStylesHover(style), ...this.compStylesFocus(style)}} {...input} placeholder={placeholder} type={type} autoComplete={!(autocomplete) ? 'off' : 'on'}     />);
    }
  }
}

FormFieldInput = Radium(FormFieldInput);

const FormIsRequired = () => (
  <span style={{...styles.form.label.required}}>*</span>
)

let renderField = ({
                     labeltext,
                     input,
                     placeholder,
                     type,
                     style,
                     isrequired,
                     meta: { touched, error, warning }
                   }) => (
                    <div style={{...styles.form.field}}>
                      <label style={{...styles.form.label}}>
                        <span style={{...styles.form.label.text}} >{labeltext}</span>
                        {!isrequired ? '' : FormIsRequired()}
                        <FormFieldInput
                          placeholder={placeholder}
                          input={input}
                          type={type}
                          style={style}
                          error={error}
                          touched={touched}
                          warning={warning}
                        />
                      </label>
                      {touched &&
                      ((error && <span style={{...styles.form.warningMessage}}>{error}</span>) ||
                        (warning && <span style={{...styles.form.warningMessage}}>{warning}</span>))}
                    </div>
                  )

renderField = Radium(renderField);

const FormRow = (props) => {
  return (
    <div style={{...styles.form.row}}>
      {props.children}
    </div>
  );
}

export { FormRow, renderField };