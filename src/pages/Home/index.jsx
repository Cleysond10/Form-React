import React from 'react';
import './Home.css';

export default function index() {
  return (
    <div className="div">
      <h1 className="h1">
        Bem Vindo!
      </h1>
      <p className="p">
        {' '}
        Navegue pelo site... Clique em
        {' '}
        <b>Formulário de Inscrição</b>
        {' '}
        na barra de menu acima para preencher seus dados
        <br />
        e vá para
        {' '}
        <b>Lista de Cadastros</b>
        {' '}
        caso deseje visualizar os dados salvos.
      </p>
    </div>
  );
}
