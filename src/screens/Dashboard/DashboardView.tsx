import React from "react";
import { HightlightCard } from "../../components/HightlightCard/HightlightCard";
import {
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HightlightCards,
} from "./DashboardViewStyled";

export function Dashboard() {
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
    </Container>
  );
}
