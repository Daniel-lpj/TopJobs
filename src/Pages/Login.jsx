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

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    (async () => {
      e.preventDefault();
      try {
        await api
          .post(`/login`, {
            nome: nome,
            senha: senha,
          })
          .then((result) => {
            if (result.status === 201) {
              navigate("/home");
            }
          });
      } catch {
        console.log("Error");
      }
    })();
  };

  return (
    <>
      <Header />
      <Container>
        <Formulario onSubmit={(e) => handleLogin(e)}>
          <Label>
            Nome:
            <Input
              name="nome"
              required
              onChange={(e) => setNome(e.target.value)}
            />
          </Label>
          <Label>
            Senha:
            <Input
              name="senha"
              required
              onChange={(e) => setSenha(e.target.value)}
            />
          </Label>
          <InputButton type="submit" />
        </Formulario>
      </Container>
      <Footer />
    </>
  );
};
export default Login;
