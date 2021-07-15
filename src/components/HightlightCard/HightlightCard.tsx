import React from "react";
import {
  Amount,
  Container,
  Content,
  Header,
  Icon,
  LastTransaction,
  Title,
} from "./HightlightCardStyle";

interface HightlightCardProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HightlightCard({
  title,
  amount,
  lastTransaction,
  type,
}: HightlightCardProps) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Content>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Content>
    </Container>
  );
}
