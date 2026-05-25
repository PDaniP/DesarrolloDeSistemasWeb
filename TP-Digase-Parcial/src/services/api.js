// Archivo centralizado para manejar las llamadas a la API.
//
// Responsabilidades:
// - Configurar la URL base del backend.
// - Definir funciones para cada operación HTTP:
//   - GET (todos los elementos)
//   - GET por ID
//   - POST (crear)
//   - PUT/PATCH (actualizar)
//   - DELETE (eliminar)
//
// Ventajas:
// - Evita repetir código.
// - Facilita cambios en la URL o endpoints.
// - Mantiene separada la lógica de red del resto de la app.


import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3000/equipos", // ⚠️ Cambiar si tu API usa otro puerto
  headers: {
    "Content-Type": "application/json",
  },
});


// CRUD - FUNCIONES

//GET - traer todos los elementos
export const getItems = async () => {
  return await api.get("/lista");
};

//GET - traer un elemento por ID
export const getItemById = async (id) => {
  return await api.get(`/idEquipo/${id}`);
};

//POST - crear nuevo elemento
export const createItem = async (data) => {
  return await api.post("/crear", data);
};

//PUT - actualizar elemento
export const updateTitulosNacionales = async (id, data) => {
  return await api.put(`/titulos/nacionales/${id}`, data);
};

export const updateTitulosInternacionales = async (id, data) => {
  return await api.put(`/titulos/internacionales/${id}`, data);
};

export const updateCapacidad = async (id, data) => {
  return await api.put(`/capacidad/${id}`, data);
};

//DELETE - eliminar elemento
export const deleteItem = async (id) => {
  return await api.delete(`/eliminar/${id}`);
};

export default api;