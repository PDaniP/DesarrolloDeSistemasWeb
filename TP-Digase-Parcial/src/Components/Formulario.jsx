// Componente encargado de crear nuevos registros (POST).
//
// Responsabilidades:
// - Manejar un formulario controlado con useState.
// - Capturar los datos de los inputs mediante onChange.
// - Guardar todos los campos en un único objeto de estado.
// - Ejecutar una petición POST al enviar el formulario (onSubmit).
// - Usar e.preventDefault() para evitar recarga de página.
// - Limpiar el formulario después de un envío exitoso.
// - Mostrar mensajes de éxito o error.
//
// Este componente representa la creación (CREATE del CRUD).

import { useState } from "react";
import { createItem } from "../services/api";

function Formulario() {
  const [formularioDatos, setFormularioDatos] = useState({
    nombre: "",
    pais: "",
    liga: "",
    fundacion: "",
    cantidadDeTitulosNacionales: "",
    cantidadDeTitulosInternacionales: "",
    capacidadEstadio: "",
    color1: "",
    color2: "",
  });

  const [mensaje, setMensaje] = useState("");

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormularioDatos({
      ...formularioDatos,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createItem({
        nombre: formularioDatos.nombre,
        pais: formularioDatos.pais,
        liga: formularioDatos.liga,
        fundacion: parseInt(formularioDatos.fundacion),
        cantidadDeTitulosNacionales: parseInt(
          formularioDatos.cantidadDeTitulosNacionales
        ),
        cantidadDeTitulosInternacionales: parseInt(
          formularioDatos.cantidadDeTitulosInternacionales
        ),
        capacidadEstadio: parseInt(formularioDatos.capacidadEstadio),
        coloresCamiseta: {
          color1: formularioDatos.color1,
          color2: formularioDatos.color2,
        },
      });

      // mensaje éxito
      setMensaje("Equipo creado correctamente");

      // limpiar formulario
      setFormularioDatos({
        nombre: "",
        pais: "",
        liga: "",
        fundacion: "",
        cantidadDeTitulosNacionales: "",
        cantidadDeTitulosInternacionales: "",
        capacidadEstadio: "",
        color1: "",
        color2: "",
      });
    } catch (error) {
      console.error(error);
      setMensaje("Error al crear el equipo");
    }
  };

  return (
    <div>
      <h2>Alta de Equipo</h2>

      {mensaje && <p>{mensaje}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formularioDatos.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="pais"
          placeholder="País"
          value={formularioDatos.pais}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="liga"
          placeholder="Liga"
          value={formularioDatos.liga}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="fundacion"
          placeholder="Año de Fundación"
          value={formularioDatos.fundacion}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="cantidadDeTitulosNacionales"
          placeholder="Títulos Nacionales"
          value={formularioDatos.cantidadDeTitulosNacionales}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="cantidadDeTitulosInternacionales"
          placeholder="Títulos Internacionales"
          value={formularioDatos.cantidadDeTitulosInternacionales}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="capacidadEstadio"
          placeholder="Capacidad del Estadio"
          value={formularioDatos.capacidadEstadio}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="color1"
          placeholder="Color 1"
          value={formularioDatos.color1}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="color2"
          placeholder="Color 2"
          value={formularioDatos.color2}
          onChange={handleChange}
          required
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Formulario;