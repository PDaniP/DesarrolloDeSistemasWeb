//Aca tengo que hacer una lamada al getalls para obtener la lista de equipos de futbol
import { useState, useEffect } from "react";
import Axios from "axios";

function useObtenerTodos() {
  //preguntar por ese use (algo asi como un custom hook?)
  const [equiposFutbol, setEquiposFutbol] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/equipos/lista")
      .then((response) => {
        setEquiposFutbol(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

    return equiposFutbol;
  
  //Llamame a Mostrar datos y renderiza esto (equipos futbol)
}

export default useObtenerTodos;