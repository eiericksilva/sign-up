import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const InputField = styled.input`
  width: 100%;
  line-height: 2;
  height: 35px;
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid #3b3450;
  padding: 0px 0.2rem;
  margin: 0.5rem 0px;
  transition: border-color 0.15s ease 0s;
  font-size: 16px;
  color: #ffffff;
  padding-left: 25px;

  &::placeholder {
    color: rgb(255, 255, 255 / 50%);
  }
`;

export const WrapperIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -10px;

  svg {
    color: #8647ad;
    width: 16px;
    height: 16px;
  }
`;
