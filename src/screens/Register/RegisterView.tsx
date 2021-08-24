import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import { Button } from "../../components/Forms/Button/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton/CategorySelectButton";
import { InputForm } from "../../components/Forms/InputForm/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton/TransactionTypeButton";
import { CategorySelectView } from "../CategorySelect/CategorySelectView";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./RegisterSchema";
import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionsTypes,
} from "./RegisterViewStyle";

interface FormData {
  name: string;
  amount: string;
}

export function RegisterView() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleTransactionsTypeSelect = (type: "up" | "down") =>
    setTransactionType(type);

  const handleCloseSelectCategory = () => setCategoryModalOpen(false);

  const handleOpenSelectCategory = () => setCategoryModalOpen(true);

  const handleRegister = (form: FormData) => {
    if (!transactionType) {
      return;
    }

    if (category.key === "category") {
      return;
    }
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              autoCapitalize="sentences"
              autoCorrect={false}
              control={control}
              placeholder="Nome"
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="amount"
              keyboardType="numeric"
              control={control}
              placeholder="Preço"
              error={errors.amount && errors.amount.message}
            />

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

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelectView
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
