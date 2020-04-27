import React from "react";

import {
  Container,
  NotificationContainer,
  NotificationText,
  NotificationDate,
  NotificationFooter,
} from "./styles";

const items = [
  {
    key: String(Math.random()),
    text: "Você já sabe como é incrivel poder pagar suas constas com PicPay?",
    date: "Ontem as 19:17",
  },
  {
    key: String(Math.random()),
    text: "Gostando do PickPay? Avalie nosso app na PlayStore!",
    date: "Há 3 dias as 14:22",
  },
  {
    key: String(Math.random()),
    text: "Seu boleto foi aprovado",
    date: "Ontem as 19:17",
  },
  {
    key: String(Math.random()),
    text: "Você já sabe como é incrivel poder pagar suas constas com PicPay?",
    date: "Há 4 dias as 21:02",
  },
  {
    key: String(Math.random()),
    text: "Adote um animal abandonado, o PicPay te apoia nessa decisão!!!",
    date: "Há uma semana",
  },
  {
    key: String(Math.random()),
    text: "Tenha seu dinehiro de volta com PiclPay.Largue os boletos!!!",
    date: "Há 2 semanas",
  },
];

export default function Notification() {
  return (
    <Container>
      {/*notificação*/}

      {items.map((item) => (
        <NotificationContainer key={item.key}>
          <NotificationText>{item.text}</NotificationText>
          <NotificationFooter>
            <NotificationDate>{item.date}</NotificationDate>
          </NotificationFooter>
        </NotificationContainer>
      ))}
    </Container>
  );
}
