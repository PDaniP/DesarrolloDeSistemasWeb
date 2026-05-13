//Tengo que hacer un input controlado. 
//Guardar lo que el usuario escribe en (onChange)
//Al hacer click debe hacer un GET
//Mandar los datos a App.jsx

import React, { useState } from "react";
import Axios from "axios";

function Buscador({ setData }) {
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  const buscar = async () => {
    try {
      const res = await Axios.get(`http://localhost:3000/equipos/idEquipo/${id}`);
      setData(res.data); // Mandás datos al App
      setError("");
    } catch (err) {
      setError("No se encontró el equipo");
    }
  }

  return (
    <div className="search-form">
      <input 
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Ingresa el ID del equipo"
        className="search-input"
      />
      <button className="search-button" onClick={buscar}>Buscar</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Buscador;