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
      <h3>{equipo.nombre}</h3>
      <p><strong>País:</strong> {equipo.pais}</p>
      <p><strong>Liga:</strong> {equipo.liga}</p>

      <div style={styles.colores}>
        <span>Colores:</span>
        <div
          style={{
            ...styles.colorBox,
            backgroundColor: equipo.coloresCamiseta?.color1,
          }}
        />
        <div
          style={{
            ...styles.colorBox,
            backgroundColor: equipo.coloresCamiseta?.color2,
          }}
        />
      </div>

      <div style={styles.botones}>
        <Link to={`/detalle/${equipo.id}`}>
          <button>Ver Detalle</button>
        </Link>

        <button onClick={() => onDelete(equipo.id)}>
          Eliminar
        </button>
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