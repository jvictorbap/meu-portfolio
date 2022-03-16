import React, { useState } from 'react'

function QRGenerator() {
  const [visible, setVisible] = useState('hidden');
  const [qrcode, setQrcode] = useState('');

  function createQrCode() {
    setVisible('visible');
  }

  function handleChange() {
    setQrcode(document.getElementById('qrcode').value);
    createQrCode();
  }

  return (
    <div className="flex justify-center items-center h-screen bg-secondary">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl fonte shadowtitle text-center text-primary">
          QR Code Generator
        </h1>
        <div className="flex flex-col justify-center items-center w-full mt-4">
          <h4 className="text-primary fonte">Insira a URL abaixo</h4>
          <input id="qrcode" type="text" className="px-4 text-center outline-4 rounded-full outline-quinary text-primary w-4/5 outline mb-4 bg-secondary placeholder-primary">
          </input>
          <button type="button" className="text-primary fonte bg-quinary rounded-full px-2 shadow-md shadow-quaternary" onClick={() => handleChange()}>Criar QRCODE</button>
        </div>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${qrcode}`} className="m-4" style={{visibility: visible, width: '300px', height: '300px'}} alt='qrcode'></img>
      </div>
    </div>
  );
}

export default QRGenerator