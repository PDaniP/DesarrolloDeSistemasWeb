import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

function Navbar() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <nav style={styles.nav}>
      <div style={styles.leftGroup}>
        <h2 style={styles.logo}>Equipos</h2>
        <div style={styles.countBadge}>
          Guardados: {favoritos.length}
        </div>
      </div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Inicio
        </Link>

        <Link to="/listado" style={styles.link}>
          Listado
        </Link>

        <Link to="/mis-favoritos" style={styles.favoriteButton}>
          Mis Favoritos
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#222",
  },
  leftGroup: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logo: {
    color: "#fff",
    margin: 0,
  },
  countBadge: {
    color: "#222",
    backgroundColor: "#fff",
    borderRadius: "999px",
    padding: "4px 10px",
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  favoriteButton: {
    color: "#222",
    backgroundColor: "#facc15",
    padding: "8px 14px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "700",
  },
};

export default Navbar;