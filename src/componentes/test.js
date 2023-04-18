import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

function CadastroCliente() {
  const history = useHistory();
  const { nome, telefone, email, placaVeiculo, modeloVeiculo, setNome, setTelefone, setEmail, setPlacaVeiculo, setModeloVeiculo } = useContext(LoginContext);

  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    const storedClientes = JSON.parse(localStorage.getItem('clientes'));
    if (storedClientes) {
      setListaClientes(storedClientes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify(listaClientes));
  }, [listaClientes]);

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
    // Adiciona o novo cliente à lista de clientes
    const novoCliente = {
      id: listaClientes.length + 1,
      nome,
      telefone,
      email,
      veiculos: [],
    };
    setListaClientes([...listaClientes, novoCliente]);
    // Limpa os campos do formulário
    setNome('');
    setTelefone('');
    setEmail('');
    setPlacaVeiculo('');
    setModeloVeiculo('');
  };

  const handleExcluirClick = (id) => {
    setListaClientes(listaClientes.filter((cliente) => cliente.id !== id));
  };

  function ListaClientes() {
    
    return (
      <div>
        <h2>Lista de Clientes</h2>
        <ul>
          {listaClientes.map((cliente) => (
            <li key={cliente.id}>
              <strong>Nome:</strong> {cliente.nome}, <strong>Telefone:</strong> {cliente.telefone}, <strong>Email:</strong> {cliente.email}
              <button onClick={() => history.push('/home', { cliente: cliente })}>Enviar para Home</button>
              <button onClick={() => handleExcluirClick(cliente.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
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
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
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
<button type="submit">Cadastrar</button>
</form>
<hr />
<ListaClientes />
</div>
);
}

export default CadastroCliente;