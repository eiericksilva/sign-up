import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ type, children }) => {
  return <ButtonContainer type={type}>{children}</ButtonContainer>;
};

export default Button;
