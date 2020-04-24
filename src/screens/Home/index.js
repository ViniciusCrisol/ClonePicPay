import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  IconsContainer,
  Container,
} from "./styles";

import Sugestions from "../../components/Sugestions";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <IconsContainer>
            <AntDesign name="gift" size={30} color="#10c86e" />
            <MaterialCommunityIcons
              name="ticket-percent"
              size={30}
              color="#10c86e"
            />
          </IconsContainer>
        </Header>

        <Sugestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
