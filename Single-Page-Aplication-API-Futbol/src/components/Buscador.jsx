//Tengo que hacer un input controlado.
//Guardar lo que el usuario escribe en (onChange)
//Al hacer click debe hacer un GET
//Mandar los datos a App.jsx

import React, { useState } from "react";
import Axios from "axios";

function Buscador({ setData }) {
  //const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [nombre, setNombre] = useState("");

  const buscar = async () => {
    if (!nombre.trim()) {
      setError("Ingresa un nombre");
      return;
    }

    try {
      const res = await Axios.get(
        `http://localhost:3000/equipos/nombre/${encodeURIComponent(nombre)}`,
      );

      if (!res.data || res.data.length === 0) {
        setError("No se encontró el equipo");
        setData(null);
        return;
      }

      setData(res.data[0]); // Mandás datos al App
      setError("");
    } catch (err) {
      setError("No se encontró el equipo");
    }
  };

  return (
    <div className="search-form">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresa el nombre del equipo"
        className="search-input"
      />
      <button className="search-button" onClick={buscar}>
        Buscar
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Buscador;
