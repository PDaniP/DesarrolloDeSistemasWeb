//Tener un <form>
//Inputs controlados
//Manejar onSubmit
//Hacer POST
//Luego hacer GET automático (paso 4 del TP)

import React, { useState } from "react";
import Axios from "axios";

function Formulario({ setData }) {
  const [form, setForm] = useState({
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios.post("http://localhost:3000/equipos/crear", {
        nombre: form.nombre,
        pais: form.pais,
        liga: form.liga,
        fundacion: parseInt(form.fundacion),
        cantidadDeTitulosNacionales: parseInt(form.cantidadDeTitulosNacionales),
        cantidadDeTitulosInternacionales: parseInt(form.cantidadDeTitulosInternacionales),
        capacidadEstadio: parseInt(form.capacidadEstadio),
        coloresCamiseta: {
          color1: form.color1,
          color2: form.color2
        }
      });

      const nuevoId = res.data.id; // 🔥 clave para el paso 4

      const resultado = await Axios.get(`http://localhost:3000/equipos/idEquipo/${nuevoId}`);

      setData(resultado.data); // 🔥 mostramos automáticamente
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-vertical">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="pais"
        placeholder="País"
        value={form.pais}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="liga"
        placeholder="Liga"
        value={form.liga}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="fundacion"
        placeholder="Año de Fundación"
        value={form.fundacion}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="cantidadDeTitulosNacionales"
        placeholder="Títulos Nacionales"
        value={form.cantidadDeTitulosNacionales}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="cantidadDeTitulosInternacionales"
        placeholder="Títulos Internacionales"
        value={form.cantidadDeTitulosInternacionales}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="capacidadEstadio"
        placeholder="Capacidad del Estadio"
        value={form.capacidadEstadio}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="color1"
        placeholder="Color 1 de la Camiseta"
        value={form.color1}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="color2"
        placeholder="Color 2 de la Camiseta"
        value={form.color2}
        onChange={handleChange}
        required
      />

      <button type="submit">Guardar</button>
    </form>
  );
}

export default Formulario;