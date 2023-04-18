import React, { useState, useEffect } from "react";

function Servico({ onSubmit = () => {} }) {
  const [clienteId, setClienteId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [peca, setPeca] = useState("");
  const [valorPeca, setValorPeca] = useState("");
  const [inicioServico, setInicioServico] = useState("");
  const [fimServico, setFimServico] = useState("");
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const servicosSalvos = localStorage.getItem("servicos");
    if (servicosSalvos) {
      setServicos(JSON.parse(servicosSalvos));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const servico = {
      clienteId,
      qrCode,
      responsavel,
      peca,
      valorPeca,
      inicioServico,
      fimServico,
    };
    setServicos([...servicos, servico]);
    localStorage.setItem("servicos", JSON.stringify([...servicos, servico]));
    onSubmit(servico);
    setClienteId("");
    setQrCode("");
    setResponsavel("");
    setPeca("");
    setValorPeca("");
    setInicioServico("");
    setFimServico("");
  };
  const handleExcluirServico = (index) => {
    const servicosAtualizados = servicos.filter((_, i) => i !== index);
    setServicos(servicosAtualizados);
    localStorage.setItem("servicos", JSON.stringify(servicosAtualizados));
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
      <h2>Serviços cadastrados</h2>
      <ul>
      {/* {servicos.map((servico, index) => (
  <li key={index}>
    ID do Cliente: {servico.clienteId}<br />
    QR Code: {servico.qrCode}<br />
    Responsável pelo Serviço: {servico.responsavel}<br />
    Peça: {servico.peca}<br />
    Valor da Peça: {servico.valorPeca}<br />
    Início do Serviço: {servico.inicioServico}<br />
    Fim do Serviço: {servico.fimServico}<br />
  </li>
))} */}
  {servicos.map((servico, index) => (
    <li key={index}>
      ID do Cliente: {servico.clienteId}<br />
      QR Code: {servico.qrCode}<br />
      Responsável pelo Serviço: {servico.responsavel}<br />
      Peça: {servico.peca}<br />
      Valor da Peça: {servico.valorPeca}<br />
      Início do Serviço: {servico.inicioServico}<br />
      Fim do Serviço: {servico.fimServico}<br />
      <button onClick={() => handleExcluirServico(index)}>Excluir</button>
    </li>
  ))}
      </ul>
    </div>
  );
}

export default Servico;
