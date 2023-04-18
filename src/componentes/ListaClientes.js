import React, { useState } from "react";
import Servico from "../pages/Servico";

function Lista() {
  const [clientes, setClientes] = useState([]);

  const handleAddCliente = (cliente) => {
    setClientes([...clientes, cliente]);
  };

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente, index) => (
          <li key={index}>
            <p>ID do Cliente: {cliente.clienteId}</p>
            <p>QR Code: {cliente.qrCode}</p>
            <p>Responsável pelo Serviço: {cliente.responsavel}</p>
            <p>Peça: {cliente.peca}</p>
            <p>Valor da Peça: {cliente.valorPeca}</p>
            <p>Início do Serviço: {cliente.inicioServico}</p>
            <p>Fim do Serviço: {cliente.fimServico}</p>
          </li>
        ))}
      </ul>
      <Servico onAddCliente={handleAddCliente} />
    </div>
  );
}

export default Lista;
