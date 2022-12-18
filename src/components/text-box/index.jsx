import React from "react";
import { Container, InputField, WrapperIcon } from "./styles";

const TextBox = ({ required, type, placeholder, children }) => {
  return (
    <Container>
      <InputField required={required} type={type} placeholder={placeholder} />
      <WrapperIcon>{children}</WrapperIcon>
    </Container>
  );
};

export default TextBox;
