import React from "react";

function App() {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: "#3498db",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#ecf0f1",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px"
        }}
      >
        <span>Div Interna</span>
      </div>
    </div>
  );
}

export default App;
