import React from 'react';
import {
  Container,
  Header,
  Title,
  Form
} from './styles';
import { Input } from '../../components/Form/Input' 

export function Register() {
  return(
    <Container>
      <Header>
        <Title>Register</Title>
      </Header>
      <Form>
      <Input placeholder="Name" />
      <Input placeholder="Value" />
      </Form>
    </Container>
  )
}