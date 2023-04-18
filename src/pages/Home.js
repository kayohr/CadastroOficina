import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
          <h1>Oficina</h1>
        <ul>
            <li><Link to="/client">Identificação do cliente</Link></li>
            <li><Link to="/servico">Iniciar servico</Link></li>

          </ul>
        </div>
      
  )
}
