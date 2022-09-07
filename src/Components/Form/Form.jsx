import React from "react";
import { Button, Container, Formulario, Input, Label } from "./style";

const Form = () => {
  return (
    <Container>
      <Formulario>
        <Label for="email">Email:</Label>
        <Input
          type="email"
          id="email"
          required
          placeholder="seuemail@dominio.com"
        />

        <Label for="senha">Senha:</Label>
        <Input type="tex" id="senha" required />

        <Button type="submit" value="Login" />
      </Formulario>
    </Container>
  );
};
export default Form;
