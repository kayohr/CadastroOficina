import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { clientes } from '../mock/mock';
import { AiOutlineRollback } from 'react-icons/ai';
import LoginContext from '../context/LoginContext';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroCliente() {
  const history = useHistory();
  const { nome, telefone, email, placaVeiculo, modeloVeiculo, setNome, setTelefone, setEmail, setPlacaVeiculo, setModeloVeiculo } = useContext(LoginContext);


  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePlacaVeiculoChange = (event) => {
    setPlacaVeiculo(event.target.value);
  };

  const handleModeloVeiculoChange = (event) => {
    setModeloVeiculo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Adiciona o novo cliente à lista de clientes mockada
    const novoCliente = {
      id: clientes.length + 1,
      nome,
      telefone,
      // email,
      veiculos: [],
    };
    clientes.push(novoCliente);
    history.push('/home');
  };

  return (
    <div>
      <NavLink 
    to="/" 
    activeClassName="">
 <AiOutlineRollback />    
 </NavLink>
      <form onSubmit={handleFormSubmit}>
        <h1 className='test'>Cadastro Cliente</h1>
        <div className='conteinerCadastro'>
        <label>
          Nome:
          <input type="text" name="nome" value={nome} onChange={handleNomeChange} />
        </label>
        <br />
        <label>
          Telefone:
          <input type="text" name="telefone" value={telefone} onChange={handleTelefoneChange} />
        </label>
        <br />
        {/* <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleEmailChange} />
        </label>
        <br /> */}
        <label>
          Placa do Veículo:
          <input type="text" name="placaVeiculo" value={placaVeiculo} onChange={handlePlacaVeiculoChange} />
        </label>
        <br />
        <label>
          Modelo do Veículo:
          <input type="text" name="modeloVeiculo" value={modeloVeiculo} onChange={handleModeloVeiculoChange} />
        </label>
        <br />
        <button type="submit">Cadastrar Cliente</button>
        </div>
      </form>
    </div>
  );
}

export default CadastroCliente;
