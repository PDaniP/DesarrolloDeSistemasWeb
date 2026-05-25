// Componente que renderiza una colección de elementos.
//
// Responsabilidades:
// - Recibir un array de datos por props.
// - Iterar sobre los elementos (map).
// - Renderizar un componente Item por cada elemento.
//
// No contiene lógica de negocio, solo renderiza la lista.

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems, deleteItem } from "../api/api";

function Listado() {
  const [equipos, setEquipos] = useState([]);

  //trae datos al cargar
  useEffect(() => {
    cargarEquipos();
  }, []);

  const cargarEquipos = async () => {
    try {
      const res = await getItems();
      setEquipos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //eliminar equipo
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      cargarEquipos(); // refresca lista
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Listado de Equipos</h1>

      {equipos.length === 0 ? (
        <p>No hay equipos cargados</p>
      ) : (
        equipos.map((equipo) => (
          <div key={equipo.id} style={styles.card}>
            <h3>{equipo.nombre}</h3>
            <p>{equipo.pais}</p>
            <p>{equipo.liga}</p>

            <div style={styles.botones}>
              <Link to={`/detalle/${equipo.id}`}>
                <button>Ver Detalle</button>
              </Link>

              <button onClick={() => handleDelete(equipo.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  botones: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
};

export default Listado;