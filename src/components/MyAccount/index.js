import React from "react";

import { Container, Item, Title, Label } from "./styles";

export default function MyAccount() {
  return (
    <Container>
      <Item>
        <Title>Meu PicPay</Title>
        <Label>@viniciuscrisol</Label>
      </Item>
      <Item>
        <Title>Meu Número</Title>
        <Label>(16) 99104-3028</Label>
      </Item>
      <Item>
        <Title>Meu Email</Title>
        <Label>vinicius.crisol@etec.sp.gov.br</Label>
      </Item>
      <Item>
        <Title>Dados pessoais</Title>
        <Label>NOme, CPF e data de nascimento</Label>
      </Item>
      <Item>
        <Title>Conta Bancária</Title>
      </Item>
      <Item>
        <Title>Taxas e limites</Title>
      </Item>
      <Item>
        <Title>Meus endereços</Title>
      </Item>
      <Item>
        <Title>Meus favoritos</Title>
      </Item>
      <Item>
        <Title>Validar identidade</Title>
        <Label>Não validado</Label>
      </Item>
    </Container>
  );
}
