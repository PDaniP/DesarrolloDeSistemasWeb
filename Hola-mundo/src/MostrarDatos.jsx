//mostrar los datos obtenidos de la API

import { useState } from "react";
//import useObtenerPorID from "./ObtenerPorID";
//import useObtenerTodos from "./obtenerTodos";


function MostrarDatos({ equipos, equipoPorID, id, setId }) {
  //const [id, setId] = useState(1);

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
      <p>{equipoPorID?.nombre || "No encontrado"}</p>

      <h2>Lista de equipos</h2>
      
      <ul>
        {equipos.map((eq) => (
          <li key={eq.id}>{eq.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MostrarDatos;
