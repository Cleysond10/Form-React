import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inscricao from './pages/Inscricao';
import Cadastros from './pages/Cadastros';
import Navbar from './components/Navbar';

export default function routes() {
  return (
    <BrowserRouter>
      <Navbar title="iForm" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inscricao" component={Inscricao} />
        <Route exact path="/cadastros" component={Cadastros} />
      </Switch>
    </BrowserRouter>
  );
}
