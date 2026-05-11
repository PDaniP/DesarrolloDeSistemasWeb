//mostrar los datos obtenidos de la API
//import React, { useState, useEffect } from "react";
import { useState } from "react";
//import Axios from "axios";
//6import useObtenerTodos from "./ObtenerTodos";
import useObtenerPorID from "./ObtenerPorID";
import { ListaEquipos } from "./obtenerTodos";


function MostrarDatos({equipo}) {
  const [id, setId] = useState(1);

  //const equiposFutbol = useObtenerTodos();
  //const equipo = useObtenerPorID(id);

  return (
    <div>
      <h2>Buscar equipo por ID</h2>

      <input
        type="number"
        value={id}
        onChange={(e) => setId(Number(e.target.value) || 0)}
      />

      <h3>Resultado:</h3>
      <p>{equipo?.nombre}</p>

      <h2>Lista de equipos</h2>
      {/*
      <ul>
        {equiposFutbol.map((eq) => (
          <li key={eq.id}>{eq.nombre}</li>
        ))}
      </ul>
      */}

      <div>
        <li key={equipo?.id}>{equipo?.nombre}</li>
      </div>

    </div>
  );
}

export default MostrarDatos;
