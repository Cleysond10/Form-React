import React, { useState } from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import './Form.css';

export default function index() {
  const [data, setData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleSubmit = () => {
    // event.preventDefault();

    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
  };

  return (
    <Form className="form" action="/cadastros">
      <Row lg={9} xl={12}>
        <Col>
          <Form.Group controlId="formBasicName">
            <Form.Label>
              <b>Nome:</b>
            </Form.Label>
            <Form.Control
              required
              type="name"
              name="nome"
              placeholder="Nome Completo"
              onChange={(event) => setData({ ...data, nome: event.target.value })}
            />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <b>E-mail:</b>
            </Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="nome.completo@gmail.com"
              onChange={(event) => setData({ ...data, email: event.target.value })}
            />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <b>Senha:</b>
            </Form.Label>
            <Form.Control
              required
              type="password"
              name="senha"
              placeholder=". . . . ."
              onChange={(event) => setData({ ...data, senha: event.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembre-me" />
          </Form.Group>

          <Button disabled={!data.nome || !data.email || !data.senha} variant="primary" type="submit" onClick={handleSubmit}>
            Salvar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
