import React, { Component } from "react";

const TextInput = ({ forwardedRef, children, ...rest }) => {
  console.log("TextInput", forwardedRef);

  return (
    <div>
      <input ref={forwardedRef} {...rest} />
      <div>{children}</div>
    </div>
  );
};

const Input = InputComponent => {
  const forwardRef = (props, ref) => {
    console.log("forwardRef", ref.current);

    const onType = () => console.log(ref.current.value);
    return <InputComponent forwardedRef={ref} onChange={onType} {...props} />;
  };

  return React.forwardRef(forwardRef);
};

const InputField = Input(TextInput);

class CustomTextInput extends Component {
  render() {
    const inputRef = React.createRef();
    return <InputField ref={inputRef} />;
  }
}

export default CustomTextInput;
