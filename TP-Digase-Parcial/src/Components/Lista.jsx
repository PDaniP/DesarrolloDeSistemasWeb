// Componente que renderiza una colección de elementos.
//
// Responsabilidades:
// - Recibir un array de datos por props.
// - Iterar sobre los elementos (map).
// - Renderizar un componente Item por cada elemento.
//
// No contiene lógica de negocio, solo renderiza la lista.

import { Link } from "react-router-dom";

function Lista({ equipos, onDelete }) {
  return (
    <div>
      {equipos.map((equipo) => (
        <div key={equipo.id} style={styles.card}>
          <div style={styles.header}>
            <h3>{equipo.nombre}</h3>
            <Link to={`/detalle/${equipo.id}`}>
              <button>Ver más</button>
            </Link>
          </div>
        </div>
      ))}
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
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botones: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
};

export default Lista;