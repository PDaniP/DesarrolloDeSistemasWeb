import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import { Link } from "react-router-dom";

function MiLista() {
  const { favoritos } = useContext(FavoritosContext);

  if (!favoritos || favoritos.length === 0) {
    return (
      <div style={styles.container}>
        <h1>Mis Favoritos</h1>
        <p>No has guardado ningún equipo aún.</p>
        <Link to="/listado" style={styles.linkBack}>
          Ver listado de equipos
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Mis Favoritos</h1>
      <div style={styles.grid}>
        {favoritos.map((equipo) => (
          <div key={equipo.id} style={styles.card}>
            <h2 style={styles.title}>{equipo.nombre}</h2>
            <p><strong>País:</strong> {equipo.pais}</p>
            <p><strong>Estadio:</strong> {equipo.estadio}</p>
            <p><strong>Títulos Nacionales:</strong> {equipo.cantidadDeTitulosNacionales}</p>
            <p><strong>Títulos Internacionales:</strong> {equipo.cantidadDeTitulosInternacionales}</p>
            <Link to={`/detalle/${equipo.id}`} style={styles.detailLink}>
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "32px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "24px",
  },
  card: {
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
    backgroundColor: "#1e293b",
  },
  title: {
    margin: "0 0 10px",
  },
  detailLink: {
    display: "inline-block",
    marginTop: "12px",
    color: "#1d4ed8",
    textDecoration: "none",
    fontWeight: "600",
  },
  linkBack: {
    display: "inline-block",
    marginTop: "16px",
    color: "#1d4ed8",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default MiLista;
