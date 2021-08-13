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

interface CategoryProps {
  name: string;
  icon: string;
}

export interface TransactionProps {
  title: string;
  amount: string;
  type: "positive" | "negative";
  category: CategoryProps;
  date: string;
}

interface Props {
  data: TransactionProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
