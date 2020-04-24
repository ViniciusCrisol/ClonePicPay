import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  ContainerTags,
  Tag,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <ContainerTags>
          <Tag>Todas</Tag>
          <Tag>Minhas</Tag>
        </ContainerTags>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você </Bold>
            pagou a <Bold>@viniciusCrisol</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Vinícius Crisol</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider />

            <Feather name="lock" color="white" size={14} />
            <Date>há 2 semanas</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="white"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="white" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
