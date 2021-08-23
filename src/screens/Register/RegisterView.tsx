import React, { useState } from "react";
import { Modal } from "react-native";
import { Button } from "../../components/Forms/Button/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton/CategorySelectButton";
import { Input } from "../../components/Forms/Input/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton/TransactionTypeButton";
import { CategorySelectView } from "../CategorySelect/CategorySelectView";
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
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const handleTransactionsTypeSelect = (type: "up" | "down") =>
    setTransactionType(type);

  const handleCloseSelectCategory = () => setCategoryModalOpen(false);

  const handleOpenSelectCategory = () => setCategoryModalOpen(true);

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
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => handleTransactionsTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransactionsTypes>

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategory}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelectView
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </Container>
  );
}
