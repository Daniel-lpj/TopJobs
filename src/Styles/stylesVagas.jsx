import styled from "styled-components";

export const Titulo = styled.h1`
  padding-left: 1em;
  font-size: 36px;
`;

export const Container = styled.div`
  font-family: "Courier New", Courier, monospace;
  width: 115%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding-left: 2em;
  padding-bottom: 3em;
  padding-top: 1em;
  margin-right: 1em;
`;

export const Card = styled.div`
  width: 20%;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  margin-right: 1em;
  margin-bottom: 1em;
`;

export const Imagem = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 2px 16px 16px;
  p {
    display: flex;
    height: auto;
  }

  h5 {
    font-size: 14px;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  padding-top: 0.875em;
`;

export const Formulario = styled.form`
  /* padding-bottom: 1em; */
`;

export const Input = styled.input`
  width: 17em;
  display: flex;
  justify-content: center;
  margin-bottom: 1.25em;
  padding: 0.4em 1.5625em;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const InputButton = styled.input`
  width: 8em;
  display: flex;
  justify-content: center;
  margin-bottom: 1.25em;
  padding: 0.5em 1.5625em;
`;
