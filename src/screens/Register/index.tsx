import React, { useState } from 'react';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../../components/Form/CategorySelect';

export function Register() {
  const [transactionType, setTransactiontype] = useState('');

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactiontype(type);
  }

  return (
    <Container>
      <Header>
        <Title>Register</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Name" />
          <Input placeholder="Value" />
          <TransactionsTypes>
            <TransactionTypeButton
              title="Income"
              type="up"
              isActive={transactionType === 'up'}
              onPress={() => handleTransactionsTypeSelect('up')}
            />
            <TransactionTypeButton
              isActive={transactionType === 'down'}
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect('down')}
              type="down"
            />
          </TransactionsTypes>

          <CategorySelect title="Category" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
