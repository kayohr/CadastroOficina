import React, { useContext, useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import LoginContext from '../context/LoginContext';

export default function Cliente() {
  const { nome, telefone, email, placaVeiculo, modeloVeiculo, updateLogin, setNome, setTelefone, setEmail, setPlacaVeiculo, setModeloVeiculo } = useContext(LoginContext);
  const [qrCodeData, setQrCodeData] = useState('');
  const [qrCodeKey, setQrCodeKey] = useState('');
  const [copied, setCopied] = useState(false);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Gera uma chave aleatória para o QR code
    const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setQrCodeKey(key);

    // Gera o QR code com a chave e as informações do cliente
    setQrCodeData(`${key}, ${nome}, ${telefone}, ${email}, ${placaVeiculo}, ${modeloVeiculo}`);
  }, [nome, telefone, email, placaVeiculo, modeloVeiculo]);

  useEffect(() => {
    // Obtém a lista de clientes do localStorage e a armazena no estado clientes
    const listaClientes = JSON.parse(localStorage.getItem('clientes'));
    if (listaClientes) {
      setClientes(listaClientes);
    }
  }, []);

  const handleQrCodeDataChange = (event) => {
    setQrCodeData(event.target.value);
  };

  const handleCopyQrCode = () => {
    navigator.clipboard.writeText(qrCodeData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCadastro = async () => {
    // Cria um novo objeto cliente com as informações do formulário
    const novoCliente = {
      nome,
      telefone,
      email,
      placaVeiculo,
      modeloVeiculo,
    };

    // Adiciona o novo cliente à lista de clientes
    const novaListaClientes = [...clientes, novoCliente];
    setClientes(novaListaClientes);

    // Salva a nova lista de clientes no localStorage
    localStorage.setItem('clientes', JSON.stringify(novaListaClientes));

    // Limpa os valores dos campos do formulário
    setNome('');
    setTelefone('');
    setEmail('');
    setPlacaVeiculo('');
    setModeloVeiculo('');
  };

  // const handleExcluir = (index) => {
  //   // Cria uma cópia da lista de clientes
  //   const novaListaClientes = [...clientes];

  //   // Remove o cliente com o índice especificado da lista de clientes
  //   novaListaClientes.splice(index, 1);

  //   // Atualiza o estado clientes e o localStorage com a nova lista de clientes
  //   setClientes(novaListaClientes);
  //   localStorage.setItem('clientes', JSON.stringify(novaListaClientes));
  // };

  return (
    <div>
      <h1>Identificação do cliente</h1>
      <p>Nome: {nome}</p>
      <p>Telefone: {telefone}</p>
      <p>Email: {email}</p>
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
      <button onClick={handleCadastro}>Cadastrar novo cliente</button>
    </div>
  );
}
