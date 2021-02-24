import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function index({ title = 'MyForm' }) {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/inscricao">Formulário de Inscrição</Nav.Link>
          <Nav.Link as={Link} to="/cadastros">Lista de Cadastros</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
