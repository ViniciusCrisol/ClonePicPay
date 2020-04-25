import React from "react";

import { Container, Header, TextHeader, TextHeaderConfig } from "./styles";

import NotificationContainer from "../../components/Notification";

export default function Notification() {
  return (
    <Container>
      <Header>
        <TextHeader>Notificações</TextHeader>
        <TextHeaderConfig>Configurar</TextHeaderConfig>
      </Header>
      <NotificationContainer />
    </Container>
  );
}
