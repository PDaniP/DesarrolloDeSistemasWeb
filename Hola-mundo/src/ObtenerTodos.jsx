//Aca tengo que hacer una lamada al getalls para obtener la lista de equipos de futbol
import { useState, useEffect } from "react";
import Axios from "axios";
import MostrarDatos from "./MostrarDatos";

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

    return (
        <>
        //tengo que usar el map para recorrer
        <MostrarDatos equipo={equiposFutbol} />
        </>
    );

    //Llamame a Mostrar datos y renderiza esto (equipos futbol)
}

//Logica para enviar los datos a MostrarDatos.jsx

function ListaEquipos() {
  const equiposFutbol = useObtenerTodos();

  return (
    <ul>
      {equiposFutbol.map((eq) => (
        
      ))}
    </ul>
  );
}


export default useObtenerTodos;
export { ListaEquipos };