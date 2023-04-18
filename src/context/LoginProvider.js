import React, { useMemo, useState } from 'react';
import LoginContext from './LoginContext';

export default function LoginProvider({children}){
      const [nome, setNome] = useState('');
      const [telefone, setTelefone] = useState('');
      const [email, setEmail] = useState('');
      const [placaVeiculo, setPlacaVeiculo] = useState('');
      const [modeloVeiculo, setModeloVeiculo] = useState('');
      const [updateLogin, setUpdateLogin] = useState({
        nome: '',
        telefone: '',
        email: '',
        placaVeiculo: '',
        modeloVeiculo: '',
      });
    // useEffect(() => {
    //   }, []);

    const value = useMemo(() => ({
        nome,
        telefone,
        email,
        placaVeiculo,
        modeloVeiculo,
        updateLogin,
        setNome,
        setTelefone,
        setEmail,
        setPlacaVeiculo,
        setModeloVeiculo,
        setUpdateLogin
    }), [nome, telefone, email, placaVeiculo, modeloVeiculo, updateLogin, setNome, setTelefone, setEmail,setPlacaVeiculo, setModeloVeiculo, setUpdateLogin]) 
    
    return (
    <LoginContext.Provider value={ value }>
        {children}
    </LoginContext.Provider>
)
}