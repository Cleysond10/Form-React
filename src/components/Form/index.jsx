import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function index() {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="...@gmail.com" />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembre-me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
