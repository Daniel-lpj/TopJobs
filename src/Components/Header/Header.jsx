import React from "react";
import { StyledLink, StyledHeader, Text, Menu } from "./style";

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
    </StyledHeader>
  );
};

export default Header;
