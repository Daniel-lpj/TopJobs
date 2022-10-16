import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TermometroComponent from "../Components/Termometro/Termometro";
import ImagemTermometro from "../Images/termometro.png";
import { api } from "../Service/api";

const Termometro = () => {
  const [termometro, setTermometro] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        await api.get(`/vagas/${id}`).then((response) => {
          setTermometro(response.data);
        });
      } catch {
        console.log("Error");
      }
    })();
  }, [id]);

  const titulo = "Termômetro";
  const subtitulo = termometro?.titulo === undefined ? "" : termometro?.titulo;
  const alt = termometro?.descricao;

  return (
    <>
      <Header />
      <TermometroComponent
        titulo={titulo}
        subtitulo={"Seu termômetro em relação a vaga da empresa: " + subtitulo}
        imagem={ImagemTermometro}
        alt={alt}
      />
      <Footer />
    </>
  );
};

export default Termometro;
