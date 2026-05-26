// Barra de navegación global.
// Permite moverse entre las distintas páginas de la aplicación.
//
// Responsabilidades:
// - Contener enlaces de navegación usando <Link> (NO <a>).
// - Redirigir a:
//   - Inicio (/)
//   - Listado (/listado)
//   - Detalle (/detalle/:id) 
//
// Debe ser visible en toda la aplicación (se renderiza en App.jsx).

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Equipos</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Inicio
        </Link>

        <Link to="/listado" style={styles.link}>
          Listado
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#222",
  },
  logo: {
    color: "#fff",
    margin: 0,
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
};

export default Navbar;