import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { favoritos } = useContext(FavoritosContext);
  const { usuario, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.leftGroup}>
        <h2 style={styles.logo}>Equipos</h2>
        {usuario && (
          <div style={styles.countBadge}>
            Guardados: {favoritos.length}
          </div>
        )}
      </div>

      {usuario && (
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

          <button type="button" style={styles.logoutButton} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      )}
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
    justifyContent: "center",
    alignItems: "center",
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
    padding: "8px 12px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "700",
  },
  logoutButton: {
    color: "#fff",
    backgroundColor: "#ef4444",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
  },
};

export default Navbar;