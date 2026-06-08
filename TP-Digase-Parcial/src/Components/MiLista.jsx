import { useContext, useState } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import { Link } from "react-router-dom";

function MiLista() {
  const { favoritos, quitarFavoritos } = useContext(FavoritosContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFavoritos = favoritos.filter((equipo) => {
    const term = searchTerm.toLowerCase();
    return (
      equipo.nombre.toLowerCase().includes(term) ||
      equipo.pais.toLowerCase().includes(term) ||
      equipo.liga.toLowerCase().includes(term)
    );
  });

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
      <h1 style={styles.titleMain}>Mis Favoritos</h1>

      <div style={styles.searchRow}>
        <input
          style={styles.input}
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Busca por nombre, pais o liga..."
        />
      </div>

      {filteredFavoritos.length === 0 ? (
        <p style={styles.noResults}>No se encontro en favoritos</p>
      ) : (
        <div style={styles.grid}>
          {filteredFavoritos.map((equipo) => (
            <div key={equipo.id} style={styles.card}>
              <h2 style={styles.title}>{equipo.nombre}</h2>
              <p><strong>País:</strong> {equipo.pais}</p>
              <p><strong>Liga:</strong> {equipo.liga}</p>
              <p><strong>Títulos Nacionales:</strong> {equipo.cantidadDeTitulosNacionales}</p>
              <p><strong>Títulos Internacionales:</strong> {equipo.cantidadDeTitulosInternacionales}</p>
              <div style={styles.cardActions}>
                <Link to={`/detalle/${equipo.id}`} style={styles.detailLink}>
                  Ver detalle
                </Link>
              </div>
              <button
                type="button"
                onClick={() => quitarFavoritos(equipo.id)}
                style={styles.thumbButtonAbsolute}
              >
                👍
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "32px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  searchRow: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "8px 10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
  },
  noResults: {
    color: "#f8fafc",
    textAlign: "center",
    marginTop: "24px",
    fontSize: "1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "24px",
  },
  card: {
    position: "relative",
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
    backgroundColor: "#1e293b",
  },
  titleMain: {
    margin: "0 0 40px",
  },
  title: {
    margin: "0 0 10px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "12px",
  },
  thumbButton: {
    width: "34px",
    height: "34px",
    borderRadius: "10px",
    border: "2px solid #2e7d32",
    backgroundColor: "#2e7d32",
    color: "#fff",
    fontSize: "20px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    cursor: "pointer",
  },
  thumbButtonAbsolute: {
    position: "absolute",
    bottom: "14px",
    right: "14px",
    width: "34px",
    height: "34px",
    borderRadius: "10px",
    border: "2px solid #2e7d32",
    backgroundColor: "#2e7d32",
    color: "#fff",
    fontSize: "20px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    cursor: "pointer",
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
