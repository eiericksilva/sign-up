import React from "react";
import { Divider } from "../main/styles";
import { FormContainer } from "./styles";
import { Wrapper } from "./styles";
import Button from "../button";

/* Icons */
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockFill } from "react-icons/ri";

import TextBox from "../text-box";

const Form = () => {
  return (
    <Wrapper>
      <Divider />
      <h1>Comece agora grátis</h1>
      <p>Crie sua conta e make the change._</p>
      <FormContainer>
        <TextBox type="string" placeholder="Nome Completo">
          <FaUserAlt />
        </TextBox>
        <TextBox type="string" placeholder="E-mail">
          <MdEmail />
        </TextBox>
        <TextBox type="string" placeholder="Celular">
          <MdPhone />
        </TextBox>
        <TextBox type="password" placeholder="Senha">
          <RiLockFill />
        </TextBox>
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
