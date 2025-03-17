import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code"; // Biblioteca para gerar QR Code
import BrCode from "../util/BrCode"; // Importando o BrCode local
import PresenteItem from "./PresenteItem";
import "./ui/ListaPresentes.css";

const ListaPresentes = () => {
  const [presentes, setPresentes] = useState([]);
  const [quantidades, setQuantidades] = useState({});
  const [comprando, setComprando] = useState(null); // Estado para saber qual presente está sendo comprado
  const [qrCode, setQrCode] = useState(""); // Estado para armazenar o QR Code
  const [nomeComprador, setNomeComprador] = useState(""); // Estado para armazenar o nome do comprador

  // Carregar a lista de presentes do servidor
  useEffect(() => {
    fetch("http://localhost:8080/presente")
      .then((response) => response.json())
      .then((data) => setPresentes(data))
      .catch((error) => console.error("Erro ao carregar os presentes:", error));
  }, []);

  const setQuantidade = (id, quantidade) => {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [id]: quantidade,
    }));
  };

  const gerarQRCode = (presente) => {
    const quantidade = quantidades[presente.id] || 1;
    const total = presente.valor * quantidade;

    // Gerar o payload do QR Code utilizando o BrCode
    const brCode = new BrCode(
      "lucas10.zanolla@gmail.com", // Chave Pix (substitua com a chave correta)
      total.toFixed(2), // Valor total formatado
      "Lucas Zanolla", // Nome do recebedor
      null, // aqui sempre null
      "email", // Tipo de chave (alterar conforme necessário, ex: cpf, cnpj, telefone)
      "Passo Fundo" // Cidade (ajuste conforme necessário)
    );

    const payload = brCode.generate_qrcp(); // Gerar o payload com o BrCode

    setQrCode(payload); // Atualiza o estado com o payload do QR Code
    setComprando(presente); // Define qual presente está sendo comprado
  };

  const confirmarCompra = () => {
    const presente = comprando;
    const quantidade = quantidades[presente.id] || 1;
    const total = presente.valor * quantidade;


    // Aqui você pode fazer o POST para o servidor
    fetch("http://localhost:8080/transacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeDonatario: nomeComprador,
        dataHora: new Date(),
        valorTotal: total,
        presenteid: presente.id,
        valorPresente: presente.valor,
        quantidade: quantidade,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Compra realizada:", data);
        alert("Compra realizada com sucesso!");
        // Limpa os estados
        setComprando(null);
        setQrCode("");
        setNomeComprador("");
      })
      .catch((error) => console.error("Erro ao realizar a compra:", error));
  };

  return (
    <div className="lista-presentes">
      <h2>Lista de Presentes</h2>
      {presentes.length === 0 ? (
        <p className="loading">Carregando presentes...</p>
      ) : (
        <div  className="grid">
          {presentes.map((presente) => (
            <PresenteItem
              key={presente.id}
              presente={presente}
              imagem={presente.img}
              quantidade={quantidades[presente.id] || 1}
              setQuantidade={setQuantidade}
              comprar={gerarQRCode}
            />
          ))}
        </div>
      )}
      {comprando && (
        <div style={{ marginTop: "20px" }}>
          <h3>QR Code para pagamento do presente</h3>
          <QRCode value={qrCode} size={150} />
          <div>
            <input
              type="text"
              placeholder="Nome do comprador"
              value={nomeComprador}
              onChange={(e) => setNomeComprador(e.target.value)}
              style={{ padding: "8px", fontSize: "16px", marginTop: "10px" }}
            />
            <button
              onClick={confirmarCompra}
              disabled={!nomeComprador}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                fontSize: "16px",
                cursor: "pointer",
                backgroundColor: nomeComprador ? "#4CAF50" : "#ccc",
                border: "none",
                color: "white",
              }}
            >
              Confirmar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default ListaPresentes;
