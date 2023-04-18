import React from 'react';
import { Link } from 'react-router-dom';
// import { clientes } from '../mock/mock';
import { AiOutlineRollback } from 'react-icons/ai';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function Home() {
    return (
        <div className='home'>
             <NavLink 
    to="/cadastro" 
    activeClassName="">
 <AiOutlineRollback />    
 </NavLink>
          <h1>Oficina</h1>
        <ul>
            <li><Link to="/client">Identificação do cliente</Link></li>
            <li><Link to="/servico">Iniciar servico</Link></li>

          </ul>
        </div>
      
  )
}
