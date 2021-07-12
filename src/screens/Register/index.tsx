import React from 'react';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
} from './styles';
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button';

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Register</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Name" />
          <Input placeholder="Value" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  )
}