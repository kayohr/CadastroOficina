import React, { useMemo, useState } from 'react';
import LoginContext from './LoginContext';

export default function LoginProvider({children}){
      const [nome, setNome] = useState('');
      const [telefone, setTelefone] = useState('');
      const [email, setEmail] = useState('');
      const [placaVeiculo, setPlacaVeiculo] = useState('');
      const [modeloVeiculo, setModeloVeiculo] = useState('');
    // useEffect(() => {
    //   }, []);

    const value = useMemo(() => ({
        nome,
        telefone,
        email,
        placaVeiculo,
        modeloVeiculo,
        setNome,
        setTelefone,
        setEmail,
        setPlacaVeiculo,
        setModeloVeiculo
    }), [nome, telefone, email, placaVeiculo, modeloVeiculo, setNome, setTelefone, setEmail,setPlacaVeiculo, setModeloVeiculo]) 
    
    return (
    <LoginContext.Provider value={ value }>
        {children}
    </LoginContext.Provider>
)
}