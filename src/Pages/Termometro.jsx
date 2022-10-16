import React from "react";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ImagemTermometro from "../Images/termometro.png";

const Termometro = () => {
  const titulo = "Termômetro";
  const descricao = "";
  const alt = "Imagem termômetro";

  return (
    <>
      <Header />
      <Content
        titulo={titulo}
        descricao={descricao}
        imagem={ImagemTermometro}
        alt={alt}
      />
      <Footer />
    </>
  );
};

export default Termometro;
