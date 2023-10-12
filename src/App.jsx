import React, { useState } from 'react';
import './App.css'
import CryptoJS from 'crypto-js';

const cifradoContainerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const inputContainerStyle = {
  marginBottom: '10px',
};

const CifradoAES = () => {
  const [textoOriginal, setTextoOriginal] = useState('');
  const [clave, setClave] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');

  const cifrarTexto = () => {
    const textoCifrado = CryptoJS.AES.encrypt(textoOriginal, clave);
    setTextoCifrado(textoCifrado.toString());
  };

  const descifrarTexto = () => {
    try {
      const bytesDescifrados = CryptoJS.AES.decrypt(textoCifrado, clave);
      const textoDescifrado = bytesDescifrados.toString(CryptoJS.enc.Utf8);
      setTextoDescifrado(textoDescifrado);
    } catch (error) {
      setTextoDescifrado('Error al descifrar. Asegúrate de usar la clave correcta.');
    }
  };

  return (
    <div style={cifradoContainerStyle}>
      <h1>Cifrado AES en React</h1>
      <div style={inputContainerStyle}>
        <label>Texto Original:</label>
        <textarea value={textoOriginal} onChange={(e) => setTextoOriginal(e.target.value)} rows="4" cols="40" />
      </div>
     
      <button onClick={cifrarTexto}>Cifrar</button>
      <button onClick={descifrarTexto}>Descifrar</button>
      <div style={inputContainerStyle}>
        <label>Texto Cifrado:</label>
        <textarea value={textoCifrado} rows="4" cols="40" readOnly />
      </div>
      <div style={inputContainerStyle}>
        <label>Texto Descifrado:</label>
        <textarea value={textoDescifrado} rows="4" cols="40" readOnly />
      </div>
    </div>
  );
};

export default CifradoAES;
