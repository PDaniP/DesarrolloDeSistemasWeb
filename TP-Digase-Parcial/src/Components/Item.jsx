// Representa un elemento individual dentro del listado.
//
// Responsabilidades:
// - Mostrar un único dato identificatorio (ej: nombre).
// - Incluir un botón o enlace "Ver más".
// - Usar <Link> para navegar a "/detalle/:id".
//
// Este componente conecta la vista maestra con la vista detalle.

import { Link } from "react-router-dom";

function Item({ equipo, onDelete }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>{equipo.nombre}</h3>
        <Link to={`/detalle/${equipo.id}`}>
          <button>Ver Detalle</button>
        </Link>
      </div>
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
  colores: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginTop: "5px",
  },
  colorBox: {
    width: "20px",
    height: "20px",
    border: "1px solid black",
  },
};

export default Item;
