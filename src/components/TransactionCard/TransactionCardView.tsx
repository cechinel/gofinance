import React from "react";
import {
  Amount,
  Category,
  CategoryName,
  Container,
  Date,
  Footer,
  Icon,
  Title,
} from "./TransactionCardStyle";

interface TransactionProps {
  title: string;
  amount: string;
  type: "sell" | "down" | "total";
  categoryName: string;
  date: string;
}

const icon = {
  sell: "dollar-sign",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function TransactionCard({
  title,
  amount,
  type,
  categoryName,
  date,
}: TransactionProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <Amount>{amount}</Amount>

      <Footer>
        <Category>
          <Icon name={icon[type]} type={type} />
          <CategoryName>{categoryName}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
}
