import React from "react";

import img1 from "../../images/13.png";
import img2 from "../../images/12.png";
import img3 from "../../images/09.png";

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
    image: img1,
    title: "Mundo do tênis",
    description: "A loja de tênis mais famosa do mundo.",
  },
  {
    key: String(Math.random()),

    image: img2,
    title: "Bistrô do Alemão",
    description: "Os melhores espetinhos do Brasil.",
  },
  {
    key: String(Math.random()),
    image: img3,
    title: "GamesWorld",
    description: "A loja de jogos que você confia.",
  },
];

export default function Near() {
  return (
    <Container>
      {items.map((item) => (
        <ContactContainer key={item.key}>
          <Img source={item.image} />
          <TextContainer>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </TextContainer>
        </ContactContainer>
      ))}
    </Container>
  );
}
