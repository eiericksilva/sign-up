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
`;
