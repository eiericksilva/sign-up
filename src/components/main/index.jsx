import React from "react";
import Form from "../form";
import { Container, Aside, Content, Divider } from "./styles";

const Main = () => {
  return (
    <Container>
      <Aside>
        <Divider />
        <h1>
          A plataforma para você aprender com experts, dominar as principais
          tecnologias e entrar mais rápido nas empresas mais desejadas.
        </h1>
        <a href="#">VOLTAR PARA LOGIN</a>
      </Aside>
      <Form />
    </Container>
  );
};

export default Main;
