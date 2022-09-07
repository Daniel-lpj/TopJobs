import React from "react";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ImagemTermometro from "../Images/termometro.png";

const Termometro = () => {
  const titulo = "Termômetro";
  const descricao =
    "Na página Termômetro o usuário visualizará seu termômetro entre candidato vaga, ou seja, de acordo com o perfil do candidato, suas experiências profissionais, endereço, cursos e área de formação ele possuirá um nivel de compatibilidade com a empresa e vaga já selecionada na tela de Vagas.";
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
