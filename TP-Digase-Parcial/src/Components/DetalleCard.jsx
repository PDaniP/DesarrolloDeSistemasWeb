// Componente visual para mostrar los datos del detalle.
//
// Responsabilidades:
// - Recibir un objeto con la información completa.
// - Mostrar los datos de forma ordenada y clara.
// - Separar la lógica de presentación del componente Detalle.
//
// Mejora la organización y reutilización del código.

function DetalleCard({ equipo }) {
  if (!equipo) return <p>No hay datos del equipo</p>;

  return (
    <div style={styles.card}>
      <h2>{equipo.nombre}</h2>

      <p><strong>País:</strong> {equipo.pais}</p>
      <p><strong>Liga:</strong> {equipo.liga}</p>
      <p><strong>Fundación:</strong> {equipo.fundacion}</p>

      <p>
        <strong>Títulos Nacionales:</strong>{" "}
        {equipo.cantidadDeTitulosNacionales}
      </p>

      <p>
        <strong>Títulos Internacionales:</strong>{" "}
        {equipo.cantidadDeTitulosInternacionales}
      </p>

      <p>
        <strong>Capacidad del Estadio:</strong>{" "}
        {equipo.capacidadEstadio}
      </p>

      <p>
            <strong>Colores de la camiseta:</strong>{" "}
            {equipo.coloresCamiseta.color1} y{" "}
            {equipo.coloresCamiseta.color2}
          </p>

    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "400px",
    
  },
  colores: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },
  colorBox: {
    width: "30px",
    height: "30px",
    border: "1px solid black",
  },
};

export default DetalleCard;