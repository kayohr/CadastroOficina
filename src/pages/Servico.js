import React, { useState, useEffect } from "react";
import CadastroServico from "../componentes/CadastroSalvo";
import { produtos } from "../mock/mock";
import Tecnico from "../componentes/Tecnico";
import { AiOutlineRollback } from 'react-icons/ai';
import { GiExitDoor } from 'react-icons/gi';

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Servico({ onSubmit = () => {} }) {
  const [clienteId, setClienteId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [peca, setPeca] = useState("");
  const [valorPeca, setValorPeca] = useState("");
  const [inicioServico, setInicioServico] = useState("");
  const [fimServico, setFimServico] = useState("");
  const [servicos, setServicos] = useState([]);
  const [pecaSelecionada, setPecaSelecionada] = useState({});

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
      peca: pecaSelecionada.nome,
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
    <NavLink 
    to="/home" 
    activeClassName="">
 <AiOutlineRollback />    
 </NavLink>
 <NavLink 
    to="/" 
    activeClassName="">
 <GiExitDoor />    
 </NavLink>
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
       <div>
      <Tecnico />
       </div>
        <br />
        <label>
          Peça:
          <select
            value={pecaSelecionada.nome}
            onChange={(event) => {
              const nome = event.target.value;
              const peca = produtos.find((p) => p.nome === nome);
              setPecaSelecionada(peca);
              setValorPeca(peca.preco);
            }}
          >
            {produtos.map((p) => (
              <option key={p.nome} value={p.nome}>
                {p.nome}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>Valor da Peça: R${valorPeca}</label>
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
        <div className="cs">
          <CadastroServico />
        </div>

        {servicos.map((servico, index) => (
          <li key={index}>
            ID do Cliente: {servico.clienteId}
            <br />
            QR Code: {servico.qrCode}
            <br />
            Responsável pelo Serviço: {servico.responsavel}
            <br />
            Peça: {servico.peca}
            <br />
            Valor da Peça: {servico.valorPeca}
            <br />
            Início do Serviço: {servico.inicioServico}
            <br />
            Fim do Serviço: {servico.fimServico}
            <br />
            <button onClick={() => handleExcluirServico(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Servico;
