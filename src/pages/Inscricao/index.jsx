import React, { useState } from 'react';
import Form from '../../components/Form';

export default function index() {
  const [lista, setLista] = useState([]);
  return (
    <div>
      <Form lista={lista} setLista={setLista} />
    </div>

  );
}
