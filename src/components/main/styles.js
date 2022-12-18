import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  margin: 60px 0 0 330px;
`;

export const Aside = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  gap: 30px;

  h1 {
    font-size: 2em;
    justify-content: center;
    line-height: 1.15;
  }

  a {
    color: #6f3ead;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.hr`
  height: 0.5rem;
  background: linear-gradient(
    270deg,
    rgb(50, 33, 78) -3.55%,
    rgb(135, 71, 175) 100.21%
  );
  max-width: 6rem;
  border-radius: 1rem;
  border: none;
`;
