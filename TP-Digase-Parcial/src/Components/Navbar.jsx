import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import { AuthContext } from "../context/AuthContext";
import Modal from "./Modal";
import Arquitectura from "../docs/Arquitectura";
import Metodologia from "../docs/Metodologia";
import Requerimientos from "../docs/Requerimientos";

function Navbar() {
  const navigate = useNavigate();
  const { favoritos } = useContext(FavoritosContext);
  const { usuario, logout } = useContext(AuthContext);
  const [mostrarDocs, setMostrarDocs] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [contenidoModal, setContenidoModal] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!mostrarDocs) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMostrarDocs(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mostrarDocs]);

  const cerrarDocs = () => setMostrarDocs(false);

  const handleOptionSelect = (tipo) => {
    abrirModal(tipo);
    cerrarDocs();
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const abrirModal = (tipo) => {
    const documentos = {
      metodologia: {
        titulo: "Metodología",
        contenido: <Metodologia />,
      },

      requerimientos: {
        titulo: "Requerimientos",
        contenido: <Requerimientos />,
      },

      arquitectura: {
        titulo: "Arquitectura",
        contenido: <Arquitectura />,
      },
    };

    setContenidoModal(documentos[tipo]);
    setModalAbierto(true);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.leftGroup}>
        <h2 style={styles.logo}>Equipos</h2>
        {usuario && (
          <div style={styles.countBadge}>Guardados: {favoritos.length}</div>
        )}
      </div>

      <div style={styles.links}>
        {/* DOCUMENTACION SIEMPRE VISIBLE */}
        <div ref={dropdownRef} style={{ position: "relative" }}>
          <button
            style={styles.docButton}
            onClick={() => setMostrarDocs(!mostrarDocs)}
          >
            Documentación ▼
          </button>

          {mostrarDocs && (
            <div style={styles.dropdown}>
              <button
                style={styles.dropdownLink}
                onClick={() => handleOptionSelect("metodologia")}
              >
                Metodología
              </button>

              <button
                style={styles.dropdownLink}
                onClick={() => handleOptionSelect("requerimientos")}
              >
                Requerimientos
              </button>

              <button
                style={styles.dropdownLink}
                onClick={() => handleOptionSelect("arquitectura")}
              >
                Arquitectura
              </button>
            </div>
          )}
        </div>

        {/* OPCIONES PRIVADAS */}
        {usuario && (
          <>
            {usuario?.rol === "admin" && (
              <Link to="/" style={styles.link}>
                Inicio
              </Link>
            )}

            <Link to="/listado" style={styles.link}>
              Listado
            </Link>

            <Link to="/mis-favoritos" style={styles.favoriteButton}>
              Mis Favoritos
            </Link>

            <button style={styles.logoutButton} onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </>
        )}

        {/* LOGIN SI NO HAY USUARIO */}
        {!usuario && (
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        )}
      </div>
      <Modal
        abierto={modalAbierto}
        cerrar={() => setModalAbierto(false)}
        titulo={contenidoModal?.titulo}
      >
        {contenidoModal?.contenido}
      </Modal>
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
  docButton: {
    color: "#fff",
    backgroundColor: "#2563eb",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
  },
  dropdown: {
    position: "absolute",
    top: "45px",
    right: 0,
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    minWidth: "180px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
  dropdownLink: {
    color: "#222",
    textDecoration: "none",
    padding: "8px",
    borderRadius: "5px",
  },
};

export default Navbar;
