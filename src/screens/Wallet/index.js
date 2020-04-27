import React, { useState } from "react";
import { Switch } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BaleanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  PaymentMethodsCard,
  CardBody,
  CardDetails,
  CardInfo,
  CardTitle,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from "./styles";

import crediCard from "../../images/credit-card.png";

export default function Wallet() {
  const [isVisible, setVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  //Importar UseState

  function handleToggleVisibility() {
    setVisible((prevState) => !prevState);
  }

  function handdleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BaleanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "0,00" : "----"}</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color="white"
              />
            </EyeButton>
          </BaleanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="white" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="white" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>usar saldo ao pagar</UseBalanceTitle>

        <Switch value={useBalance} onValueChange={handdleToggleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>
        <PaymentMethodsCard>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre sua cartão de crédito</CardTitle>
              <CardInfo>
                Cadaste seu cartão de crédito para pooder fazer pagamentos mesmo
                quanto não tiver saldo no seu PicPay
              </CardInfo>
            </CardDetails>

            <Img source={crediCard} resizeMode="contain" />
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <AddLabel>Adiconar cartão de crédito</AddLabel>
          </AddButton>
        </PaymentMethodsCard>

        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={20}
              color="#0db060"
            />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
}
