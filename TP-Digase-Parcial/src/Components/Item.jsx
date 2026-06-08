import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritosContext } from "../context/FavoritosContext";

function Item({ equipo, onDelete }) {
  const { favoritos, agregarFavoritos, quitarFavoritos } = useContext(FavoritosContext);
  const isFavorito = favoritos.some((fav) => fav.id === equipo.id);

  const handleFavoritoChange = (event) => {
    if (event.target.checked) {
      agregarFavoritos(equipo);
    } else {
      quitarFavoritos(equipo.id);
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>{equipo.nombre}</h3>
        <div style={styles.actions}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={isFavorito}
              onChange={handleFavoritoChange}
              style={styles.hiddenCheckbox}
            />
            <span style={{
              ...styles.thumbIcon,
              ...(isFavorito ? styles.thumbChecked : {}),
            }}>
              👍
            </span>
          </label>
          <Link to={`/detalle/${equipo.id}`}>
            <button style={styles.detailButton}>Ver Detalle</button>
          </Link>
        </div>
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
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
    userSelect: "none",
  },
  hiddenCheckbox: {
    position: "absolute",
    opacity: 0,
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
  },
  thumbIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    height: "28px",
    fontSize: "20px",
    border: "1.5px solid #888",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    color: "#555",
    backgroundColor: "#fff",
  },
  thumbChecked: {
    borderColor: "#2e7d32",
    color: "#fff",
    backgroundColor: "#2e7d32",
  },
  detailButton: {
    minWidth: "110px",
    padding: "8px 14px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #1d4ed8",
    backgroundColor: "#1d4ed8",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
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
