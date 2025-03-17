import React from "react";

const PresenteItem = ({ presente, imagem, quantidade, setQuantidade, comprar }) => {
  return (
    <div style={styles.card}>
      {imagem && <img src={imagem} alt={presente.nome} style={styles.image} />}
      <div style={styles.content}>
        <h4 style={styles.title}>{presente.nome}</h4>
        <p style={styles.price}>Preço: R$ {presente.valor.toFixed(2)}</p>
        <div style={styles.actions}>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(presente.id, Math.max(1, parseInt(e.target.value, 10)))}
            style={styles.input}
          />
          <button onClick={() => comprar(presente)} style={styles.button}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  content: {
    textAlign: "center",
    marginTop: "12px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  price: {
    fontSize: "16px",
    color: "#4CAF50",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  actions: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },
  input: {
    width: "50px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "5px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "8px 16px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    transition: "background 0.3s",
  },
};

export default PresenteItem;
