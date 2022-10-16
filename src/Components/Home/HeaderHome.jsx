import React from "react";
import { StyledLink, StyledHeader, Text, Title, Menu } from "./style";

const HeaderHome = () => {
  return (
    <StyledHeader>
      <Text>Grupo 5 - FIAP</Text>
      <Menu>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/">Login</StyledLink>
        <StyledLink to="/vagas">Vagas</StyledLink>
        <StyledLink to="/sobre">Sobre</StyledLink>
        <StyledLink to="/termometro">Termômetro</StyledLink>
      </Menu>
      <Title>Seja bem vindo(a)!</Title>
    </StyledHeader>
  );
};

export default HeaderHome;
