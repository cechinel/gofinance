import React from "react";
import { HightlightCard } from "../../components/HightlightCard/HightlightCard";
import { TransactionCard, TransactionProps } from "../../components/TransactionCard/TransactionCardView";
import {
  Container,
  Header, HightlightCards, Icon, Photo, Title,
  TransactionList, Transactions, User, UserContainer, UserGreeting, UserInfo, UserName
} from "./DashboardViewStyled";

export interface DataListProps extends TransactionProps {
  id: string;
}

export function DashboardView() {
  const data: DataListProps[] = [
    {
      id: "2",
      title: "Foo Bar",
      amount: "R$ 400,00",
      type: "positive",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "12/12/2222",
    },
    {
      id: "3",
      title: "Joe Doe",
      amount: "R$ 333,00",
      type: "negative",
      category: {
        name: "Vendas",
        icon: "coffee",
      },
      date: "12/12/2222",
    },
    {
      id: "4",
      title: "Bar Code",
      amount: "R$ 999,00",
      type: "positive",
      category: {
        name: "Vendas",
        icon: "shopping-bag",
      },
      date: "12/12/2222",
    },
  ];

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/1832092?v=4",
              }}
            />
            <User>
              <UserGreeting>Olar, </UserGreeting>
              <UserName>Alexandre</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserContainer>
      </Header>

      <HightlightCards>
        <HightlightCard
          title="Entradas"
          amount="R$ 17.500,00"
          lastTransaction="ijasoija soija soijaasas"
          type="down"
        />
        <HightlightCard
          title="Saídas"
          amount="R$ 500,00"
          lastTransaction="ijasoija soija soijaasas"
          type="up"
        />
        <HightlightCard
          title="Total"
          amount="R$ 17.000,00"
          lastTransaction="ijasoija soija soijaasas"
          type="total"
        />
      </HightlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
        
      </Transactions>
    </Container>
  );
}
