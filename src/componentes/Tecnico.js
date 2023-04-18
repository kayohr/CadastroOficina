import React, { useState } from 'react';
import { servicos } from '../mock/mock';

export default function Tecnico() {
    const [responsavel, setResponsavel] = useState('');

  const [tecnicoSelecionado, setTecnicoSelecionado] = useState('');

  const handleTecnicoChange = (event) => {
    const tecnicoSelecionado = servicos.find(
      (tecnico) => tecnico.tecnico === event.target.value
    );
    setTecnicoSelecionado(tecnicoSelecionado.tecnico);
    setResponsavel(tecnicoSelecionado);
  };

  return (
    <label>
      Responsável pelo Serviço:
      <select value={tecnicoSelecionado} onChange={handleTecnicoChange}>
        <option value="">Selecione um técnico</option>
        {servicos.map((tecnico) => (
          <option key={tecnico.id} value={tecnico.tecnico}>
            {tecnico.tecnico}
          </option>
        ))}
      </select>
    </label>
  );
}

