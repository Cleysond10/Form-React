import React from 'react';
import './Home.css';

export default function index() {
  return (
    <div className="div">
      <h1 className="h1">
        Bem Vindo!
      </h1>
      <p className="p">
        Navegue pelo site...
        {' '}
        <br />
        Clique em
        {' '}
        <a className="hiperlink" href="/inscricao"> Formulário de Inscrição </a>
        na para preencher suas informações e completar sua inscrição
        e/ou vá para
        {' '}
        <a className="hiperlink" href="/cadastros">Lista de Cadastros</a>
        {' '}
        caso deseje visualizar os dados salvos.
      </p>
    </div>
  );
}
