import styled from "styled-components";

export const Container = styled.nav`
  background-color: #000000;
  width: 100%;
  height: 50px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.div`
  a {
    text-decoration: none;
    color: #ffffff;
    text-align: center;
    margin-right: 10px;
    padding: 5px;

    &:hover {
      color: #e4105d;
      transition: 0.2s ease-out 0s;
    }
  }
  button {
    padding: 0 1.5rem;
    border-radius: 2rem;
    font-size: 16px;
    color: #ffffff;
    background-color: rgb(86, 86, 86);
    margin: auto 5px;

    &:hover {
      cursor: pointer;
      background-color: #e4105d;
      transition: 0.2s ease-out 0s;
    }
  }
`;
