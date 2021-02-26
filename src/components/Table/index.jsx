import React from 'react';
import { Table } from 'react-bootstrap';
import './Table.css';

export default function index() {
  return (
    <Table className="table" striped bordered hover size="lg">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome Completo</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Maria Clara Neves</td>
          <td>clara.maria@yahoo.br</td>
        </tr>
        <tr>
          <td>2</td>
          <td>João Augusto Souza</td>
          <td>Joaoas@hotmail.com</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">
            {localStorage.getItem('myData')}
            ;
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
