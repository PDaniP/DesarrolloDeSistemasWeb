function Metodologia() {
  return (
    <div style={styles.documento}>

      <h1 style={styles.titulo}>
        Metodología de Trabajo
      </h1>

      <h2 style={styles.subtitulo}>
        Análisis del proceso de desarrollo
      </h2>

      <p style={styles.parrafo}>
        El desarrollo del sistema de equipos de fútbol fue realizado siguiendo
        un enfoque incremental, donde en cada etapa se agregaba alguna funcionalidad al proyecto, 
        en lugar de un flujo completamente lineal como el modelo en cascada.
        Tambien podria considerarse un modelo iterativo/evolutivo, ya que se realizaron entregas 
        sucesivas y se fueron incorporando mejoras a medida que se avanzaba en el desarrollo.
        Podria considerarse un Proceso unificado de Desarrollo (RUP).
      </p>

      <p style={styles.parrafo}>
        Durante las distintas etapas de construcción se fueron incorporando
        funcionalidades de manera progresiva. Inicialmente se creo la estructura
        que permitia listar los equipos desde la base de datos.
        Luego se incorporo la opcion de poder agregar mas equipos, ver la informacion
        en detalle y crear una lista de favoritos.
        Finalmente se agregaron funcionalidades como autenticacion que permitio
        limitar contenido de la pagina.
      </p>


      <h2 style={styles.subtitulo}>
        Proyección Ágil
      </h2>

      <p style={styles.parrafo}>
        Si un cliente real solicitara ampliar este sistema y los requerimientos
        cambiaran constantemente, se elegiría la metodología ágil Scrum debido
        a su capacidad de adaptación y organización del trabajo en ciclos
        cortos.
      </p>

      <p style={styles.parrafo}>
        Las dos prácticas principales que se aplicarían serían:
      </p>


      <ul style={styles.lista}>

        <li style={styles.itemLista}>
          <strong>Sprints:</strong> dividir el desarrollo en períodos cortos,
          permitiendo entregar nuevas funcionalidades como filtros avanzados,
          estadísticas de equipos o nuevas vistas.
        </li>


        <li style={styles.itemLista}>
          <strong>Reuniones diarias (Daily Scrum):</strong> permitirían
          mantener una comunicación constante entre los integrantes del equipo,
          detectar problemas rápidamente y reorganizar prioridades.
        </li>

      </ul>

    </div>
  );
}

export default Metodologia;



const styles = {

  documento: {
    color: "#000000",
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


  parrafo: {
    fontSize: "16px",
    lineHeight: "1.7",
    textAlign: "justify",
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