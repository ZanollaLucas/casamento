import React from "react";
import QRCode from "react-qr-code";

const QrCodePix = ({ qrCode, nomeComprador, setNomeComprador, confirmarPagamento }) => {
  if (!qrCode) return null;

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h3>QR Code para Pagamento</h3>
      <QRCode value={qrCode} size={150} />

      <div style={{ marginTop: "15px" }}>
        <input
          type="text"
          value={nomeComprador}
          onChange={(e) => setNomeComprador(e.target.value)}
          placeholder="Nome do Comprador"
          style={{ padding: "8px", fontSize: "16px", width: "80%", marginBottom: "10px" }}
        />
        <button onClick={confirmarPagamento} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          Confirmar Pix Realizado
        </button>
      </div>
    </div>
  );
};

export default QrCodePix;
