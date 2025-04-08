import React, { useState } from "react";

export default function App() {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  return (
    <div style={{ background: "linear-gradient(to bottom right, #E0BBE4, #957DAD)", minHeight: "100vh", padding: "20px" }}>
      <img src="/ster foto.jpg" alt="Ster" style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "20px", marginBottom: "20px" }} />
      <h1 style={{ color: "#5D3A9B", fontSize: "2em", textAlign: "center", marginBottom: "10px" }}>Guarde Aqui Sua Lembrança Para a Ster 💜</h1>
      <p style={{ color: "#7F57A0", textAlign: "center" }}>Envie uma foto especial e faça parte desse momento inesquecível dos 15 anos da Ster!</p>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <input type="file" multiple accept="image/*" onChange={handleUpload} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ width: "150px", height: "150px", overflow: "hidden", borderRadius: "10px", position: "relative" }}>
            <img src={img} alt={`foto-${idx}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <a href={img} download={`foto-${idx}.jpg`} style={{ position: "absolute", bottom: "5px", right: "5px", background: "#fff", padding: "2px 5px", borderRadius: "5px", fontSize: "12px", textDecoration: "none", color: "#5D3A9B" }}>Baixar</a>
          </div>
        ))}
      </div>
    </div>
  );
}
