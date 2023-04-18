import React, { useContext, useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import LoginContext from '../context/LoginContext';

export default function Cliente() {
  const { nome, telefone, email, placaVeiculo, modeloVeiculo } = useContext(LoginContext);
  const [qrCodeData, setQrCodeData] = useState('');
  const [qrCodeKey, setQrCodeKey] = useState('');

  useEffect(() => {
    // Gera uma chave aleatória para o QR code
    const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setQrCodeKey(key);

    // Gera o QR code com a chave e as informações do cliente
    setQrCodeData(`${key}, ${nome}, ${telefone}, ${email}, ${placaVeiculo}, ${modeloVeiculo}`);
  }, [nome, telefone, email, placaVeiculo, modeloVeiculo]);

  const handleQrCodeDataChange = (event) => {
    setQrCodeData(event.target.value);
  };

  return (
    <div>
      <h1>Identificação do cliente</h1>
      <p>Nome: {nome}</p>
      <p>Telefone: {telefone}</p>
      <p>Email: {email}</p>
      <p>Placa do Veículo: {placaVeiculo}</p>
      <p>Modelo do Veículo: {modeloVeiculo}</p>
      <br />
      <label>
        QR Code data:
        <input type="text" value={qrCodeData} onChange={handleQrCodeDataChange} />
      </label>
      <br />
      <QRCode value={qrCodeData} />
    </div>
  );
}
