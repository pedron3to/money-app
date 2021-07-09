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

interface Category {
  name: string;
  icon: string;
}

interface Data {
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface TransactionCardPros {
  data: Data
}

export function TransactionCard({ data }: TransactionCardPros) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount>{data.amount}</Amount>

      <Footer>
        <Category>
          <Icon name='dollar-sign' />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>

      </Footer>
    </Container>
  )
}