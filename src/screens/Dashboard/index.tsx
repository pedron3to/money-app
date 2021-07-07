import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import {
  Container,
  Header,
  UserContainer,
  UserInfo,
  Image,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCardContainer,

} from './styles'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Image source={{ uri: 'https://avatars.githubusercontent.com/u/62304426?v=4' }} />
            <User>
              <UserGreeting>Hello,</UserGreeting>
              <UserName>Pedro</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserContainer>

      </Header>
      <HighlightCardContainer >
        <HighlightCard
          type="up"
          title="Deposits"
          amount="$ 10.000,00"
          lastTransaction="Last deposit was at 28th march"
        />
        <HighlightCard
          type="down"
          title="WithDraws"
          amount="$ 5.000,00"
          lastTransaction="Last Withdraw was at 28th march"
        />
        <HighlightCard
          type="total"
          title=""
          amount="$ 5.000,00"
          lastTransaction="from 28th to 30th march"
        />
      </HighlightCardContainer>


    </Container>
  )
}