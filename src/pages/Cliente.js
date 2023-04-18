import React, { useContext, useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import LoginContext from '../context/LoginContext';
import { AiOutlineRollback } from 'react-icons/ai';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function Cliente() {
  const { nome, telefone, email, placaVeiculo, modeloVeiculo } = useContext(LoginContext);
  const [qrCodeData, setQrCodeData] = useState('');
  const [qrCodeKey, setQrCodeKey] = useState('');
  const [copied, setCopied] = useState(false);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Gera uma chave aleatória para o QR code
    const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setQrCodeKey(key);

    // Gera o QR code com a chave e as informações do cliente
    const data = `${nome}: ${key}`;
    setQrCodeData(data);

    // Adiciona o novo cliente na lista de clientes
    const novoCliente = { key, nome, telefone, email, placaVeiculo, modeloVeiculo };
    const listaClientes = [...clientes, novoCliente];
    localStorage.setItem('clientes', JSON.stringify(listaClientes));
    setClientes(listaClientes);
  }, [nome, telefone, email, placaVeiculo, modeloVeiculo]);

  const handleQrCodeDataChange = (event) => {
    setQrCodeData(event.target.value);
  };

  const handleCopyQrCode = () => {
    navigator.clipboard.writeText(qrCodeData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDeleteCliente = (clienteKey) => {
    // Remove o cliente com a chave informada da lista de clientes
    const listaClientes = clientes.filter((cliente) => cliente.key !== clienteKey);
    localStorage.setItem('clientes', JSON.stringify(listaClientes));
    setClientes(listaClientes);
  };

  return (
    <div>
                   <NavLink 
    to="/home" 
    activeClassName="">
 <AiOutlineRollback />    
 </NavLink>
      <h1>Identificação do cliente</h1>
      <p>Nome: {nome}</p>
      <p>Telefone: {telefone}</p>
      {/* <p>Email: {email}</p> */}
      <p>Placa do Veículo: {placaVeiculo}</p>
      <p>Modelo do Veículo: {modeloVeiculo}</p>
      <br />
      <label>
        QR Code data:
        <input type="text" value={qrCodeData} onChange={handleQrCodeDataChange} />
      </label>
      <button onClick={handleCopyQrCode}>{copied ? 'Copiado!' : 'Copiar'}</button>
      <br />
      <QRCode value={qrCodeData} />
      <br />
      <h2>Lista de clientes cadastrados</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.key}>
            <button onClick={() => handleDeleteCliente(cliente.key)}>Excluir</button>
            {` ${cliente.nome}: ${cliente.key}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
