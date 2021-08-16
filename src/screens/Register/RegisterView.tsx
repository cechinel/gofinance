import React, { useState } from "react";
import { Button } from "../../components/Forms/Button/Button";
import { CategorySelect } from "../../components/Forms/CategorySelect/CategorySelect";
import { Input } from "../../components/Forms/Input/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton/TransactionTypeButton";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./RegisterViewStyle";

export function RegisterView() {
  const [transactionType, setTransactionType] = useState("");

  const handleTransactionsTypeSelect = (type: "up" | "down") =>
    setTransactionType(type);

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionsTypes>
            <TransactionTypeButton
              title="Income"
              type="up"
              onPress={() => handleTransactionsTypeSelect("up")}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => handleTransactionsTypeSelect("down")}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>
          
          <CategorySelect title="Categoria"/>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
