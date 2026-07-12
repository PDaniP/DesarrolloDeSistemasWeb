import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ abierto, cerrar, titulo, children }) {

  const modalRef = useRef(null);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {

    if (abierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Limpieza por si el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };

  }, [abierto]);


  // Cerrar haciendo click fuera del modal
  const cerrarClickFuera = (e) => {
    if (e.target === modalRef.current) {
      cerrar();
    }
  };


  if (!abierto) return null;

  return createPortal(
    <div
      className="modal-overlay"
      style={estilos.overlay}
      ref={modalRef}
      onClick={cerrarClickFuera}
    >
      <div className="modal-content" style={estilos.modal} onClick={(e) => e.stopPropagation()}>
        <button style={estilos.cerrar} onClick={cerrar}>
          ✖
        </button>

        <div style={estilos.contenido}>{children}</div>
      </div>
    </div>,
    document.body
  );
}


export default Modal;


const estilos = {

  overlay: {
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    overflowY: "auto",
    zIndex: 99999,
    boxSizing: "border-box",
  },

  modal: {
    backgroundColor: "white",
    width: "min(1000px, 100%)",
    maxHeight: "90vh",
    overflowY: "auto",
    padding: "25px",
    borderRadius: "10px",
    position: "relative",
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
    boxSizing: "border-box",
  },


  cerrar: {
    position: "absolute",
    right: "15px",
    top: "10px",
    border: "none",
    background: "transparent",
    fontSize: "20px",
    cursor: "pointer",
    color: "#000000"
  },


  contenido: {
    marginTop: "20px",
    lineHeight: "1.6",
  },


  titulo:{
  textAlign:"center",
  color:"#000000",
  marginBottom:"20px"
},
};