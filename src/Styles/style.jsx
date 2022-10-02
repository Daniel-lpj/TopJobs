import styled from "styled-components";

export const Titulo = styled.h1`
  padding-left: 1em;
  font-size: 36px;
`;

export const Container = styled.div`
  font-family: "Courier New", Courier, monospace;
  width: 96%;
  display: flex;
  flex-direction: row;

  padding-left: 2em;
  padding-bottom: 3em;
  padding-top: 1em;
  margin-right: 1em;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  margin-right: 1em;
`;

export const Imagem = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const Conteudo = styled.div`
  padding: 2px 16px;
`;
