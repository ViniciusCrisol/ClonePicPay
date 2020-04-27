import React from "react";

import img from "../../images/avatar.png";

import {
  Container,
  ContactContainer,
  Img,
  TextContainer,
  Title,
  Description,
} from "./styles";

const items = [
  {
    key: String(Math.random()),
    image: img,
    title: "Vinícius Crisol",
  },
  {
    key: String(Math.random()),

    image: img,
    title: "Roberto Braga",
  },
  {
    key: String(Math.random()),
    image: img,
    title: "Diogo Amaral",
  },
  {
    key: String(Math.random()),
    image: img,
    title: "Jéssica Amaral",
  },
  {
    key: String(Math.random()),
    image: img,
    title: "Diana Amaral",
  },
  {
    key: String(Math.random()),
    image: img,
    title: "Odete Jorge",
  },
  {
    key: String(Math.random()),
    image: img,
    title: "Vinícius Crisol",
  },
  {
    key: String(Math.random()),

    image: img,
    title: "Roberto Braga",
  },
  {
    key: String(Math.random()),
    image: img,
    title: "Diogo Amaral",
  },
];

export default function People() {
  return (
    <Container>
      {items.map((item) => (
        <ContactContainer key={item.key}>
          <Img source={item.image} />
          <TextContainer>
            <Title>{item.title}</Title>
          </TextContainer>
        </ContactContainer>
      ))}
    </Container>
  );
}
