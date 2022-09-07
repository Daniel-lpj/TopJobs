import React from "react";
import { StyledLink, StyledHeader, Subtitle, Text, Title, Menu } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <Text>Grupo 5 - FIAP</Text>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/sobre">Sobre</StyledLink>
        <StyledLink to="/vagas">Vagas</StyledLink>
        <StyledLink to="/termometro">Termômetro</StyledLink>
      </Menu>
      <Title>Protótipo do Site</Title>
      <Subtitle>
        Este site possui o objetivo de realizar uma visão macro do nosso projeto
        junto com uma breve descrição de cada página e seu conteúdo.
      </Subtitle>
    </StyledHeader>
  );
};

export default Header;
