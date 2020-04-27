import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Near from "../../components/Near";
import People from "../../components/People";

import {
  Container,
  Header,
  InputHeader,
  ContactsContainer,
  Label,
  LabelContact,
} from "./styles";

export default function Pay() {
  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

        <InputHeader placeholder="Quem você deseja pagar?" />
      </Header>
      <ContactsContainer>
        <Label>Próximos de você</Label>
        <Near />
        <LabelContact>Contatos</LabelContact>
        <People />
      </ContactsContainer>
    </Container>
  );
}
