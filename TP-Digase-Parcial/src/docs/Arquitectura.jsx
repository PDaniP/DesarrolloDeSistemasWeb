function Arquitectura() {
  return (
    <div style={styles.documento}>
      <h1 style={styles.titulo}>Arquitectura y Modelado</h1>

      <h2 style={styles.subtitulo}>Persistencia de Datos</h2>

      <p style={styles.parrafo}>
        En las primeras etapas de desarrollo es posible almacenar información
        utilizando estructuras temporales como arreglos en memoria. Sin embargo,
        a medida que el sistema crece esta solución deja de ser suficiente, ya
        que los datos se pierden al cerrar o recargar la aplicación.
      </p>

      <p style={styles.parrafo}>
        Por este motivo es necesario utilizar una estructura persistente, como
        una base de datos, que permita almacenar la información de los equipos
        de fútbol de forma segura, organizada y disponible en todo momento.
      </p>

      <h2 style={styles.subtitulo}>Entidad Principal: Equipo</h2>

      <table style={styles.tabla}>
        <thead>
          <tr>
            <th style={styles.celdaCabecera}>Nombre de propiedad</th>

            <th style={styles.celdaCabecera}>Tipo de dato</th>

            <th style={styles.celdaCabecera}>¿Es obligatorio?</th>

            <th style={styles.celdaCabecera}>Descripción</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={styles.celda}>nombre</td>

            <td style={styles.celda}>Texto</td>

            <td style={styles.celda}>Sí</td>

            <td style={styles.celda}>Nombre del equipo de fútbol.</td>
          </tr>

          <tr>
            <td style={styles.celda}>pais</td>

            <td style={styles.celda}>Texto</td>

            <td style={styles.celda}>Sí</td>

            <td style={styles.celda}>País de origen del equipo.</td>
          </tr>

          <tr>
            <td style={styles.celda}>liga</td>

            <td style={styles.celda}>Texto</td>

            <td style={styles.celda}>Sí</td>

            <td style={styles.celda}>Competición o liga donde participa.</td>
          </tr>

          <tr>
            <td style={styles.celda}>fundacion</td>

            <td style={styles.celda}>Número</td>

            <td style={styles.celda}>Sí</td>

            <td style={styles.celda}>Año de creación del club.</td>
          </tr>

          <tr>
            <td style={styles.celda}>cantidadDeTitulosNacionales</td>

            <td style={styles.celda}>Número</td>

            <td style={styles.celda}>Sí</td>

            <td style={styles.celda}>
              Cantidad de campeonatos nacionales obtenidos.
            </td>
          </tr>

          <tr>
            <td style={styles.celda}>cantidadDeTitulosInternacionales</td>

            <td style={styles.celda}>Número</td>

            <td style={styles.celda}>Sí</td>

            <td style={styles.celda}>
              Cantidad de títulos internacionales obtenidos.
            </td>
          </tr>

          <tr>
            <td style={styles.celda}>capacidadEstadio</td>

            <td style={styles.celda}>Número</td>

            <td style={styles.celda}>Sí</td>

            <td style={styles.celda}>
              Capacidad máxima de espectadores del estadio.
            </td>
          </tr>

          <tr>
            <td style={styles.celda}>coloresCamiseta</td>

            <td style={styles.celda}>Objeto / JSON</td>

            <td style={styles.celda}>Sí</td>

            <td style={styles.celda}>
              Contiene los colores principales de la camiseta.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 style={styles.subtitulo}>Identificador Único</h2>

      <p style={styles.parrafo}>
        La propiedad "id" será utilizada como identificador único de cada
        equipo. Este valor permite diferenciar cada registro dentro del sistema
        y evita que existan dos equipos exactamente iguales.
      </p>

      <p style={styles.parrafo}>
        El "id", se asigna automaticamente a un equipo al momento de ingresarlo en la 
        base de datos.
      </p>

      <p style={styles.parrafo}>
        Además, el identificador permite realizar operaciones específicas como
        consultar detalles, editar información o eliminar registros
        determinados.
      </p>
    </div>
  );
}

export default Arquitectura;

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

  parrafo: {
    fontSize: "16px",
    lineHeight: "1.7",
    textAlign: "justify",
    marginBottom: "15px",
  },

  tabla: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
    marginBottom: "25px",
    fontSize: "15px",
  },

  celdaCabecera: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center",
  },

  celda: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
};
