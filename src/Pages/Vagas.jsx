import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import {
  Card,
  Container,
  Conteudo,
  Imagem,
  Titulo,
} from "../Styles/stylesVagas";
import ImagemEmpresa1 from "../Images/img_empresa1.jpeg";
import { Link } from "react-router-dom";
import { api } from "../Service/api";
import { useEffect } from "react";

const Vagas = () => {
  const [listVaga, setListVaga] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await api.get(`/vagas`).then((response) => {
          setListVaga(response.data);
        });
      } catch {
        console.log("Error");
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Titulo>Vagas</Titulo>
      <Container>
        {listVaga.map((vaga, i) => (
          <Card key={i}>
            <Imagem src={ImagemEmpresa1} alt="Imagem da empresa" />
            <Conteudo>
              <h3>
                <b>{vaga.titulo}</b>
              </h3>
              <p>{vaga.descricao}</p>
              <h5>
                <Link to={`/sobre/${vaga.codigo}`}>
                  Clique para acompanhar sua candidatura
                </Link>
              </h5>
            </Conteudo>
          </Card>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Vagas;
