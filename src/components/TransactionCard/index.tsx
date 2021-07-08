import React from 'react';
import {
  Container,
  Amount,
  Footer,
  Title,
  Category,
  Icon,
  CategoryName,
  Date

} from './styles';

export function TransactionCard() {
  return (
    <Container>
      <Title>WebSite Development</Title>

      <Amount>$9.900,00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Sale</CategoryName>
        </Category>
        <Date>12/04/2020</Date>

      </Footer>
    </Container>
  )
}