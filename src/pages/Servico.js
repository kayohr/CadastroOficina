import React, { useState } from "react";

function Servico({ onSubmit = () => {} }) {
  const [clienteId, setClienteId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [peca, setPeca] = useState("");
  const [valorPeca, setValorPeca] = useState("");
  const [inicioServico, setInicioServico] = useState("");
  const [fimServico, setFimServico] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      clienteId,
      qrCode,
      responsavel,
      peca,
      valorPeca,
      inicioServico,
      fimServico,
    });
  };

  return (
    <div>
      <h2>Cadastro de Serviço</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID do Cliente:
          <input
            type="text"
            value={clienteId}
            onChange={(event) => setClienteId(event.target.value)}
          />
        </label>
        <br />
        <label>
          QR Code:
          <input
            type="text"
            value={qrCode}
            onChange={(event) => setQrCode(event.target.value)}
          />
        </label>
        <br />
        <label>
          Responsável pelo Serviço:
          <input
            type="text"
            value={responsavel}
            onChange={(event) => setResponsavel(event.target.value)}
          />
        </label>
        <br />
        <label>
          Peça:
          <input
            type="text"
            value={peca}
            onChange={(event) => setPeca(event.target.value)}
          />
        </label>
        <br />
        <label>
          Valor da Peça:
          <input
            type="number"
            value={valorPeca}
            onChange={(event) => setValorPeca(event.target.value)}
          />
        </label>
        <br />
        <label>
          Início do Serviço:
          <input
            type="datetime-local"
            value={inicioServico}
            onChange={(event) => setInicioServico(event.target.value)}
          />
        </label>
        <br />
        <label>
          Fim do Serviço:
          <input
            type="datetime-local"
            value={fimServico}
            onChange={(event) => setFimServico(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Servico;
  
