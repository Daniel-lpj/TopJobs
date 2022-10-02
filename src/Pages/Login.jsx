import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome:
          <input {...register("nome", { required: true })} />
          {errors.nome && <span>Campo obrigatório.</span>}
        </label>
        <label>
          Senha:
          <input {...register("senha", { required: true })} />
          {errors.senha && <span>Campo obrigatório.</span>}
        </label>
        <input type="submit" />
      </form>
      <Footer />
    </>
  );
};
export default Login;
