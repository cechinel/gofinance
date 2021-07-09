import React from "react";
import {
    Amount,
    Container, Content, Header, Icon, LastTransaction, Title
} from "./HightlightCardStyle";

export function HightlightCard() {
  return (
    <Container>
        <Header>
            <Title>Entrada</Title>
            <Icon name="power" />
        </Header>

        <Content>
            <Amount>R$ 17.500,00</Amount>
            <LastTransaction>Ultima coisa que aconteceu</LastTransaction>
        </Content>
    </Container>
  );
}
