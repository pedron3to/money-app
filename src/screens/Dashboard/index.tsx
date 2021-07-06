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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCardContainer>


    </Container>
  )
}