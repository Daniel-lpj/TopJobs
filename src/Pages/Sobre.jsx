import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ImagemSobre from "../Images/sobre.png";
import { api } from "../Service/api";

const Sobre = () => {
  const [vaga, setVaga] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        await api.get(`/vagas/${id}`).then((response) => {
          setVaga(response.data);
        });
      } catch {
        console.log("Error");
      }
    })();
  }, [id]);

  const titulo = vaga?.titulo;
  const descricao = vaga?.descricao;
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
