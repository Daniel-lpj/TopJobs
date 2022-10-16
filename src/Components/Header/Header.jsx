import React from "react";
import { StyledLink, StyledHeader, Text, Menu, Title } from "./style";

const Header = () => {
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
      <Title>InfoJobs</Title>
    </StyledHeader>
  );
};

export default Header;
