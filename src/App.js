import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Login from './pages/Login';
import Cliente from './pages/Cliente';
import Servico from './pages/Servico';
import Home from './pages/Home';
import CadastroCliente from './pages/CadastroCliente';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/client" component={Cliente} />
      <Route exact path="/servico" component={Servico} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/cadastro" component={CadastroCliente} />



    </Switch>
  );
}

export default App;
