import { useState } from "react";
import { clientes, servicos, veiculos } from "../mock/mock";
export default
function Servicos() {
  const [listaServicos, setListaServicos] = useState(servicos);

  const handleExcluirServico = (id) => {
    const novaLista = listaServicos.filter((servico) => servico.id !== id);
    setListaServicos(novaLista);
  };

  return (
    <div>
      <p>Serviços</p>
      {listaServicos.map((servico) => {
        const veiculo = veiculos.find((v) => v.id === servico.veiculoId);
        const cliente = clientes.find((c) => c.id === veiculo.clienteId);
        const QRCodeValue =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);

        return (
          <div key={servico.id}>
            <p>QR Code: {QRCodeValue}</p>
            <p>ID do Cliente: {cliente.id}</p>
            <p>Responsável pelo Serviço: {servico.tecnico}</p>
            <p>
              Peça:{" "}
              {servico.produtos.map((produto, index) => (
                <span key={index}>
                  {produto.nome} (R${produto.preco.toFixed(2)})
                  {index < servico.produtos.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <p>
              Valor Total: R$
              {servico.produtos.reduce(
                (total, produto) => total + produto.preco,
                0
              ).toFixed(2)}
            </p>
            <p>
              Início do Serviço:{" "}
              {servico.dataInicio.toLocaleString("pt-BR")}
            </p>
            <p>Fim do Serviço: {servico.dataFim.toLocaleString("pt-BR")}</p>
            <button onClick={() => handleExcluirServico(servico.id)}>
              Excluir
            </button>
          </div>
        );
      })}
    </div>
  );
}


