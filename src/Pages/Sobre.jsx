import React from "react";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ImagemSobre from "../Images/sobre.png";

const Sobre = () => {
  const titulo = "Sobre";
  const descricao =
    "Na página de Sobre, o usuário deverá preencher um formulario para cadastro de todas as suas informações de dados pessoais, dados escolares, experiência profisional, contato e endereço, preenchedo assim um curriculo online que será utilizado para análise do match entre candidato vaga. Caso o usuário já tenha preenchido o formulário, suas informações são apenas exibidas na tela.";
  const alt = "Imagem sobre";

  return (
    <>
      <Header />
      <Content
        titulo={titulo}
        descricao={descricao}
        imagem={ImagemSobre}
        alt={alt}
      />
      <Footer />
    </>
  );
};

export default Sobre;
