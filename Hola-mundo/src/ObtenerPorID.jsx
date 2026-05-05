//Hacer una llamada por GetByID para obtener un equipo de futbol
import { useState, useEffect } from "react";
import Axios from "axios";

function useObtenerPorID(id) {
  const [equipo, setEquipo] = useState({});

  useEffect(() => {
    if (!id || isNaN(id)) return; // Verificar si el ID es válido antes de hacer la solicitud

    Axios.get(`http://localhost:3000/equipos/idEquipo/${id}`)
      .then((response) => {
        setEquipo(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return equipo;
}

export default useObtenerPorID;
