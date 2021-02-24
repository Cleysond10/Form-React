import React from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import './Form.css';

export default function index() {
  return (
    <Form className="form">
      <Row lg={9} xl={12}>
        <Col>
          <Form.Group controlId="formBasicName">
            <Form.Label><b>Nome:</b></Form.Label>
            <Form.Control required type="name" placeholder="Nome Completo" />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label><b>E-mail:</b></Form.Label>
            <Form.Control required type="email" placeholder="nome.completo@gmail.com" />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label><b>Senha:</b></Form.Label>
            <Form.Control required type="password" placeholder=". . . . ." />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembre-me" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
