import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { Card, Container, Conteudo, Imagem, Titulo } from "../Styles/style";
import ImagemEmpresa1 from "../Images/img_empresa1.jpeg";

const Vagas = () => {
  return (
    <>
      <Header />
      <Titulo>Vagas</Titulo>

      <Container>
        <Card>
          <Imagem src={ImagemEmpresa1} alt="Imagem empresa 1" />
          <Conteudo>
            <h3>
              <b>Nome da empresa 1</b>
            </h3>
            <p>Descrição da vaga...</p>
            <h5>Clique para acompanhar sua candidatura</h5>
          </Conteudo>
        </Card>
        <Card>
          <Imagem src={ImagemEmpresa1} alt="Imagem empresa 2" />
          <Conteudo>
            <h3>
              <b>Nome da empresa 2</b>
            </h3>
            <p>Descrição da vaga...</p>
            <h5>Clique para acompanhar sua candidatura</h5>
          </Conteudo>
        </Card>
        <Card>
          <Imagem src={ImagemEmpresa1} alt="Imagem empresa 3" />
          <Conteudo>
            <h3>
              <b>Nome da empresa 3</b>
            </h3>
            <p>Descrição da vaga...</p>
            <h5>Clique para acompanhar sua candidatura</h5>
          </Conteudo>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Vagas;
