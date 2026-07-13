function Requerimientos() {
  return (
    <div style={styles.documento}>

      <h1 style={styles.titulo}>
        Ingeniería de Requerimientos
      </h1>


      <h2 style={styles.subtitulo}>
        El problema a resolver
      </h2>


      <p style={styles.parrafo}>
        El sistema desarrollado permite consultar y gestionar información de
        equipos de fútbol obtenida mediante una API.
      </p>


      <p style={styles.parrafo}>
        La aplicación busca solucionar la necesidad de contar con una forma
        organizada de visualizar información deportiva, evitando la búsqueda
        manual de datos dispersos y facilitando el acceso a información como
        nombre del equipo, país, liga y otros datos relevantes.
      </p>


      <p style={styles.parrafo}>
        La correcta definición de requerimientos permite reducir la brecha
        entre las necesidades del usuario y la solución tecnológica
        desarrollada.
      </p>



      <h2 style={styles.subtitulo}>
        Historias de Usuario
      </h2>



      <div style={styles.tarjeta}>

        <h3 style={styles.subtituloSecundario}>
          Historia de Usuario #1
        </h3>

        <p style={styles.parrafo}>
          Como administrador del sistema, quiero poder agregar nuevos equipos
          de fútbol para mantener la información actualizada.
        </p>

      </div>



      <div style={styles.tarjeta}>

        <h3 style={styles.subtituloSecundario}>
          Historia de Usuario #2
        </h3>

        <p style={styles.parrafo}>
          Como usuario, quiero visualizar una lista de equipos de fútbol para
          consultar información deportiva de manera rápida.
        </p>

      </div>



      <div style={styles.tarjeta}>

        <h3 style={styles.subtituloSecundario}>
          Historia de Usuario #3
        </h3>

        <p style={styles.parrafo}>
          Como usuario registrado, quiero guardar equipos favoritos para poder
          acceder rápidamente a ellos posteriormente.
        </p>

      </div>




      <h2 style={styles.subtitulo}>
        Criterios de Aceptación
      </h2>



      <h3 style={styles.subtituloSecundario}>
        Historia seleccionada:
      </h3>


      <p style={styles.cita}>
        "Como administrador del sistema, quiero poder agregar nuevos equipos
        de fútbol para mantener la información actualizada."
      </p>



      <ul style={styles.lista}>

        <li style={styles.itemLista}>
          El formulario debe contener los campos obligatorios del equipo
          como nombre (string), país (string), Liga (string) y datos principales tales como
          la cantidad de titulos nacionales (integer), internacionales (integer), el año de fundacion (integer) y la capacidad del 
          estadio (integer). Ademas se añaden los colores de la camiseta (string).
        </li>


        <li style={styles.itemLista}>
          El sistema no debe permitir guardar registros con campos
          obligatorios vacíos.
        </li>


        <li style={styles.itemLista}>
          Si existe un error en los datos ingresados, el sistema debe mostrar
          un mensaje visible indicando el problema.
        </li>


        <li style={styles.itemLista}>
          Al completar una carga válida, la información debe actualizarse sin
          necesidad de recargar la página.
        </li>


      </ul>


    </div>
  );
}


export default Requerimientos;



const styles = {

  documento: {
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },


  titulo: {
    textAlign: "center",
    color: "#000000",
    fontSize: "28px",
    marginBottom: "25px",
    borderBottom: "2px solid #2563eb",
    paddingBottom: "10px",
  },


  subtitulo: {
    color: "#000000",
    fontSize: "21px",
    marginTop: "25px",
    marginBottom: "12px",
  },


  subtituloSecundario: {
    color: "#000000",
    fontSize: "18px",
    marginBottom: "10px",
  },


  parrafo: {
    fontSize: "16px",
    lineHeight: "1.7",
    textAlign: "justify",
    marginBottom: "15px",
  },


  tarjeta: {
    backgroundColor: "#f8fafc",
    borderLeft: "4px solid #2563eb",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
  },


  cita: {
    backgroundColor: "#f1f5f9",
    padding: "15px",
    borderRadius: "8px",
    fontStyle: "italic",
    lineHeight: "1.6",
    marginBottom: "15px",
  },


  lista: {
    paddingLeft: "25px",
    marginTop: "10px",
  },


  itemLista: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "12px",
  },

};