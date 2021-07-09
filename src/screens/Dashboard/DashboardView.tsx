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
  Icon
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

      <HightlightCard />
    </Container>
  );
}
