import React from "react";
import ListaPresentes from "./components/ListaPresentes";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "2%", maxWidth: "100vw", overflowX: "hidden" }}>
      <h1>Casamento Lucas e Kaka</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2%",
          marginTop: "2%",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Imagem esquerda */}
        <div style={{maxWidth: "15%", display: "flex", flexDirection: "column" }}>
          <img           
            style={{
              maxWidth: "100%",
              height: "auto",
              marginTop: "2%",
              border: "0.8vw solid #8B5E3C", // Borda responsiva com 'vw'
              borderRadius: "1.5em", // Bordas arredondadas com 'em'
              padding: "2vw", // Padding responsivo
              boxShadow: `0px ${0.5}vw ${1.5}vw rgba(0, 0, 0, 0.3), inset 0px ${0.4}vw ${1}vw rgba(255, 255, 255, 0.2)`, // Sombras responsivas com 'vw'
              backgroundColor: "#f4f1ec", // Cor de fundo da moldura
              position: "relative",
            }}
            src="https://avatars.githubusercontent.com/u/54318740?s=400&u=f696645e2d7f1c6e4cb1e1ddc3b43b9f5e74dd62&v=4"
            alt="Casal"
          />
          <img
            style={{
              maxWidth: "100%",
              height: "auto",
              marginTop: "2%",
              border: "0.8vw solid #8B5E3C", // Borda responsiva com 'vw'
              borderRadius: "1.5em", // Bordas arredondadas com 'em'
              padding: "2vw", // Padding responsivo
              boxShadow: `0px ${0.5}vw ${1.5}vw rgba(0, 0, 0, 0.3), inset 0px ${0.4}vw ${1}vw rgba(255, 255, 255, 0.2)`, // Sombras responsivas com 'vw'
              backgroundColor: "#f4f1ec", // Cor de fundo da moldura
              position: "relative",
            }}
            src="https://avatars.githubusercontent.com/u/37753278?v=4"
            alt="Casal"
          />
          {/* Adicionando mais imagens */}
          <img
            style={{
              maxWidth: "100%",
              height: "auto",
              marginTop: "2%",
              border: "0.8vw solid #8B5E3C", // Borda responsiva com 'vw'
              borderRadius: "1.5em", // Bordas arredondadas com 'em'
              padding: "2vw", // Padding responsivo
              boxShadow: `0px ${0.5}vw ${1.5}vw rgba(0, 0, 0, 0.3), inset 0px ${0.4}vw ${1}vw rgba(255, 255, 255, 0.2)`, // Sombras responsivas com 'vw'
              backgroundColor: "#f4f1ec", // Cor de fundo da moldura
              position: "relative",
            }}
            src="https://avatars.githubusercontent.com/u/54318740?s=400&u=f696645e2d7f1c6e4cb1e1ddc3b43b9f5e74dd62&v=4"
            alt="Casal"
          />
        </div>

        {/* Conteúdo central (Lista de Presentes) */}
        <div className="card-grid" style={{ flexGrow: 1, maxWidth: "70%" }}>
          <ListaPresentes />
        </div>

        {/* Imagem direita */}
        <div style={{maxWidth: "15%", display: "flex", flexDirection: "column", gap: "5%" }}>
        <img
            style={{
              maxWidth: "100%",
              height: "auto",
              marginTop: "2%",
              border: "0.8vw solid #8B5E3C", // Borda responsiva com 'vw'
              borderRadius: "1.5em", // Bordas arredondadas com 'em'
              padding: "2vw", // Padding responsivo
              boxShadow: `0px ${0.5}vw ${1.5}vw rgba(0, 0, 0, 0.3), inset 0px ${0.4}vw ${1}vw rgba(255, 255, 255, 0.2)`, // Sombras responsivas com 'vw'
              backgroundColor: "#f4f1ec", // Cor de fundo da moldura
              position: "relative",
            }}
            src="https://avatars.githubusercontent.com/u/37753278?v=4"
            alt="Casal"
          />
          {/* Adicionando mais imagens */}
          <img
            style={{
              maxWidth: "100%",
              height: "auto",
              marginTop: "2%",
              border: "0.8vw solid #8B5E3C", // Borda responsiva com 'vw'
              borderRadius: "1.5em", // Bordas arredondadas com 'em'
              padding: "2vw", // Padding responsivo
              boxShadow: `0px ${0.5}vw ${1.5}vw rgba(0, 0, 0, 0.3), inset 0px ${0.4}vw ${1}vw rgba(255, 255, 255, 0.2)`, // Sombras responsivas com 'vw'
              backgroundColor: "#f4f1ec", // Cor de fundo da moldura
              position: "relative",
            }}
            src="https://avatars.githubusercontent.com/u/54318740?s=400&u=f696645e2d7f1c6e4cb1e1ddc3b43b9f5e74dd62&v=4"
            alt="Casal"
          />
          <img
            style={{
              maxWidth: "100%",
              height: "auto",
              marginTop: "2%",
              border: "0.8vw solid #8B5E3C", // Borda responsiva com 'vw'
              borderRadius: "1.5em", // Bordas arredondadas com 'em'
              padding: "2vw", // Padding responsivo
              boxShadow: `0px ${0.5}vw ${1.5}vw rgba(0, 0, 0, 0.3), inset 0px ${0.4}vw ${1}vw rgba(255, 255, 255, 0.2)`, // Sombras responsivas com 'vw'
              backgroundColor: "#f4f1ec", // Cor de fundo da moldura
              position: "relative",
            }}
            src="https://avatars.githubusercontent.com/u/37753278?v=4"
            alt="Casal"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
