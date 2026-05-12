//Tengo que hacer un input controlado. 
//Guardar lo que el usuario escribe en (onChange)
//Al hacer click debe hacer un GET
//Mandar los datos a App.jsx

import React, { useState } from "react";

function Buscador({setData}) {
    const [id, setId] = useState("");


}
/*
//input controlado
<input 
type="text"
value={id}
onChange={(e) => setId(e.target.value)}
/>
*/

/*
const buscar = async () => {
  try {
    const res = await Axios.get(`/api/${id}`)
    setData(res.data)   //  mandás datos al App
    setError("")
  } catch (err) {
    setError("No se encontró el equipo")
  }
}
*/