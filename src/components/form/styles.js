import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 330px;

  h1 {
    font-size: 2em;
  }

  p.term {
    font-size: 0.8rem;

    a {
      text-decoration: none;
      color: rgb(134, 71, 173);
      font-weight: 500;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  a.login {
    color: rgb(35, 221, 122);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  input {
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

    &::placeholder {
      color: #ffffff;
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 29px;
  border-radius: 1.5rem;
  border: none;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  background-color: #e4105d;
  color: #ffffff;
  cursor: pointer;
`;
