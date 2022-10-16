import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

import { useNavigate } from "react-router-dom";

import { api } from "../Service/api";
import {
  Container,
  Formulario,
  Input,
  InputButton,
  Label,
} from "../Styles/stylesLogin";

const Login = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [senha, setSenha] = useState();

  const model = () => {
    const log = {
      nome: nome,
      senha: senha,
    };
    return log;
  };

  const handleLogin = () => {
    (async () => {
      try {
        await api.post(`/login`, model);
      } catch {
        console.log("Error");
      }
    })();
    navigate("/home");
  };

  return (
    <>
      <Header />
      <Container>
        <Formulario onSubmit={() => handleLogin()}>
          <Label>
            Nome:
            <Input name="nome" onChange={(e) => setNome(e.target.value)} />
          </Label>
          <Label>
            Senha:
            <Input name="senha" onChange={(e) => setSenha(e.target.value)} />
          </Label>
          <InputButton type="submit"></InputButton>
        </Formulario>
      </Container>
      <Footer />
    </>
  );
};
export default Login;
