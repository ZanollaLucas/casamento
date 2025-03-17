import React from "react";
import ListaPresentes from "./components/ListaPresentes";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Título centralizado no topo */}
      <h1>Casamento Lucas e Kaka</h1>

      {/* Container das imagens e da lista de presentes */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "flex-start",
        gap: "20px",
        marginTop: "20px"
      }}>
        {/* Imagem esquerda mais abaixo */}
        <div>
          <img src="https://avatars.githubusercontent.com/u/54318740?s=400&u=f696645e2d7f1c6e4cb1e1ddc3b43b9f5e74dd62&v=4" alt="Casal" style={{ width: "200px", height: "auto" }} />
        </div>

        {/* Conteúdo central */}
        <div className="card-grid">
          <ListaPresentes />
        </div>

        {/* Imagem direita mais abaixo */}
        <div>
          <img src="https://avatars.githubusercontent.com/u/37753278?v=4" alt="Casal" style={{ width: "200px", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}

export default App;
