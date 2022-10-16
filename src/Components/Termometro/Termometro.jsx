import React from "react";
import { Container, Image, Subtitle, Title } from "./style";

const TermometroComponent = (props) => {
  return (
    <>
      <Title>{props.titulo}</Title>
      <Subtitle>{props.subtitulo}</Subtitle>
      <Container>
        <Image src={props.imagem} alt={props.alt} />
      </Container>
    </>
  );
};
export default TermometroComponent;
