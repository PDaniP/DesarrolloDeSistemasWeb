//Tener un <form>
//Inputs controlados
//Manejar onSubmit
//Hacer POST
//Luego hacer GET automático (paso 4 del TP)

import React, { useState } from "react";

function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
  });


}

/*
input controlado
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}
*/

/*
Submit
const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const res = await Axios.post("/api/cargarNuevo", form)

    const nuevoId = res.data.id   // 🔥 clave para el paso 4

    const resultado = await Axios.get(`/api/${nuevoId}`)

    setData(resultado.data) // 🔥 mostramos automáticamente
  } catch (error) {
    console.log(error)
  }
}

*/