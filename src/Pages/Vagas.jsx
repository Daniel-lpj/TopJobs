import React from "react";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ImagemVagas from "../Images/vagas.jpg";

const Vagas = () => {
  const titulo = "Vagas";
  const descricao =
    "Esta página é responsável por exibir todas as vagas para o usuário já logado, ela possuirá alguns filtros para usuário conseguir pesquisar com mais clareza a vaga desejada. Possuirá também algumas informações em destaque para facilitar a escolha da vaga, como cargo, salário, e função. Analisando todas as vagas disponíveis o candidato poderá de candidatar a vaga e visualizar seu termômetro no próximo item do menu.";
  const alt = "Imagem vagas";

  return (
    <>
      <Header />
      <Content
        titulo={titulo}
        descricao={descricao}
        imagem={ImagemVagas}
        alt={alt}
      />
      <Footer />
    </>
  );
};

export default Vagas;
