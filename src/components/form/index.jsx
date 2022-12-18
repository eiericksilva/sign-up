import React from "react";
import { Divider } from "../main/styles";
import { Button, FormContainer } from "./styles";
import { Wrapper } from "./styles";

const Form = () => {
  return (
    <Wrapper>
      <Divider />
      <h1>Comece agora grátis</h1>
      <p>Crie sua conta e make the change._</p>
      <FormContainer>
        <input type="string" placeholder="Nome Completo" />
        <input type="string" placeholder="E-mail" />
        <input type="tel" placeholder="Celular" />
        <input type="password" placeholder="Senha" />
        <Button type="submit">CRIAR MINHA CONTA GRÁTIS</Button>
      </FormContainer>
      <p className="term">
        Ao clicar em "criar minha conta grátis", declaro que aceito as
        <a href="#"> Políticas de Privacidade </a> e os
        <a href="#"> Termos de Uso </a> da DIO.
      </p>
      <p>
        Já tenho conta.
        <a className="login" href="#">
          Fazer login.
        </a>
      </p>
    </Wrapper>
  );
};

export default Form;
