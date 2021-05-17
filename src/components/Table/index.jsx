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
          <td>#</td>
          <td colSpan="3">
            {localStorage.getItem('myData')}
            ;
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
