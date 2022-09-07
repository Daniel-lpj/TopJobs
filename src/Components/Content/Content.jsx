import React from "react";
import { Container, ContainerImage, Descricao, Image, Title } from "./style";

const Content = (props) => {
  return (
    <>
      <Title>{props.titulo}</Title>
      <Container>
        <Descricao>{props.descricao}</Descricao>
        <ContainerImage>
          <Image src={props.imagem} alt={props.alt} />
        </ContainerImage>
      </Container>
    </>
  );
};
export default Content;
