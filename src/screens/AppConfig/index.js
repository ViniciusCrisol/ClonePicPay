import React from "react";

import {
  Container,
  Header,
  Img,
  Title,
  Label,
  ViewProfile,
  Help,
  Button,
  MyAccountText,
} from "./styles";

import profile from "../../images/08.png";

import MyAccount from "../../components/MyAccount";

export default function AppConfig() {
  return (
    <Container>
      <Header>
        <Button>
          <Help>Ajuda</Help>
        </Button>
        <Img source={profile} resizeMode="contain" />
        <Title>@viniciuscrisol</Title>
        <Label>Vinícius Crisol</Label>
        <Button>
          <ViewProfile>Ver meu perfil ></ViewProfile>
        </Button>
        <MyAccountText>Minha conta</MyAccountText>
      </Header>
      <MyAccount />
    </Container>
  );
}
