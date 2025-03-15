import React from "react";

const PresenteItem = ({ presente, imagem, quantidade, setQuantidade, comprar }) => {
  return (
    <li style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {imagem && (
          <img
            src={imagem} // A URL da imagem
            alt={presente.nome}
            style={{ width: "100px", height: "100px", marginRight: "20px", objectFit: "cover" }}
          />
        )}
        <div>
          <h4>{presente.nome}</h4>
          <p>Preço: R$ {presente.valor.toFixed(2)}</p>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(presente.id, Math.max(1, parseInt(e.target.value, 10)))}
            style={{ width: "50px", textAlign: "center", marginRight: "10px" }}
          />
          <button
            onClick={() => comprar(presente)}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
            }}
          >
            Comprar
          </button>
        </div>
      </div>
    </li>
  );
};

export default PresenteItem;
