import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
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
  Transactions,
  Title,
  TransactionsList

} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

const data: DataListProps[] = [
  {
    id: '1',
    type: 'positive',
    title: "website Development",
    amount: "$4.0000,00",
    category: {
      name: 'Sale',
      icon: 'dollar-sign',
    },
    date: "13/04/2020"
  },
  {
    id: '2',
    type: 'negative',
    title: "Cappucino",
    amount: "$6,00",
    category: {
      name: 'Food',
      icon: 'coffee',
    },
    date: "10/06/2020"
  },
  {
    id: '3',
    type: 'negative',
    title: "Studio",
    amount: "$4.0000,00",
    category: {
      name: 'Home',
      icon: 'shopping-bag',
    },
    date: "13/04/2020"
  },
]

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
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}

        />

      </Transactions>


    </Container>
  )
}