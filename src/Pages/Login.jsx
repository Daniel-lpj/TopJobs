import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import axios from "axios";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      senha: "",
    },
  });

  const onSubmit = (data) => {
    navigate("/home");
    console.log(data);
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    padding-top: 2.875em;
  `;

  const Formulario = styled.form`
    padding-bottom: 2em;
  `;

  const Input = styled.input`
    width: 46.875em;
    display: flex;
    justify-content: center;
    margin-bottom: 1.25em;
    padding: 0.625em 1.5625em;
  `;

  const Label = styled.label`
    font-size: 20px;
  `;

  const [list, setList] = useState();

  const api = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: `http://localhost:8080/InfoJobs/rest`?.toString(),
  });

  useEffect(() => {
    (async () => {
      try {
        await api.get(`/produto`).then((result) => {
          setList(result);
          console.log(result);
        });
      } catch {
        console.log("Error");
      }
    })();
  });

  return (
    <>
      <Header />
      {list}
      <Container>
        <Formulario onSubmit={handleSubmit(onSubmit)}>
          <Label>
            Nome:
            <Input {...register("nome", { required: true })} />
            {errors.nome && <span>Campo obrigatório.</span>}
          </Label>
          <Label>
            Senha:
            <Input {...register("senha", { required: true })} />
            {errors.senha && <span>Campo obrigatório.</span>}
          </Label>
          <Input type="submit" />
        </Formulario>
      </Container>
      <Footer />
    </>
  );
};
export default Login;
