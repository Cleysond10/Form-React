import React, { useState } from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import './Form.css';

export default function index() {
  const [info1, setInfo1] = useState('');
  const [info2, setInfo2] = useState('');
  const [info3, setInfo3] = useState('');

  const handleSubmit = () => {
    // event.preventDefault();
    const listaDados = [info1, info2, info3];

    console.log(listaDados);
    alert(listaDados);
  };

  const onChange1 = (event) => {
    setInfo1(event.target.value);
  };
  const onChange2 = (event) => {
    setInfo2(event.target.value);
  };
  const onChange3 = (event) => {
    setInfo3(event.target.value);
  };

  return (
    <Form className="form" action="/cadastros">
      <Row lg={9} xl={12}>
        <Col>
          <Form.Group controlId="formBasicName">
            <Form.Label><b>Nome:</b></Form.Label>
            <Form.Control required type="name" name="nome" placeholder="Nome Completo" onChange={onChange1} />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label><b>E-mail:</b></Form.Label>
            <Form.Control required type="email" name="email" placeholder="nome.completo@gmail.com" onChange={onChange2} />
            <Form.Text className="text-muted" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label><b>Senha:</b></Form.Label>
            <Form.Control required type="password" name="senha" placeholder=". . . . ." onChange={onChange3} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembre-me" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Salvar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
