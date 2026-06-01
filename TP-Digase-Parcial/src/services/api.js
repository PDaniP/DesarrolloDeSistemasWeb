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

//PATCH - actualizar elemento
export const updateTitulosNacionales = async (id, titulos) => {
  return await api.patch(`/titulos/nacionales/${id}`, { titulos });
};

export const updateTitulosInternacionales = async (id, titulos) => {
  return await api.patch(`/titulos/internacionales/${id}`, { titulos });
};

export const updateCapacidad = async (id, capacidad) => {
  return await api.patch(`/capacidad/${id}`, { capacidad });
};

//DELETE - eliminar elemento
export const deleteItem = async (id) => {
  return await api.delete(`/eliminar/${id}`);
};

export default api;