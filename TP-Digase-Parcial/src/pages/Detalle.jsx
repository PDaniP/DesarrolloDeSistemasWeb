// Página de detalle (ruta "/detalle/:id").
// Representa la vista específica de un elemento.
//
// Responsabilidades:
// - Obtener el ID desde la URL usando useParams.
// - Ejecutar un GET individual al cargar el componente.
// - Mostrar toda la información completa del elemento.
// - Manejar estado de carga (ej: "Cargando...").
//
// Acciones:
// - Botón "Eliminar":
//   - Pedir confirmación al usuario.
//   - Ejecutar DELETE.
//   - Redirigir a /listado usando useNavigate.
// - Botón "Editar":
//   - Permitir modificar los datos (modo edición).
//   - Ejecutar PUT o PATCH.
//
// Este componente cubre READ (detalle), DELETE y UPDATE.


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getItemById,
  deleteItem,
  updateTitulosNacionales,
  updateTitulosInternacionales,
  updateCapacidad,
} from "../services/api";

const Detalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [equipo, setEquipo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [editando, setEditando] = useState(false);

  // Estado para edición
  const [formData, setFormData] = useState({
    cantidadDeTitulosNacionales: "",
    cantidadDeTitulosInternacionales: "",
    capacidadEstadio: "",
  });

  // GET POR ID
 
  useEffect(() => {
    const fetchEquipo = async () => {
      try {
        const res = await getItemById(id);
        setEquipo(res.data);

        //precargar datos en formulario
        setFormData({
          cantidadDeTitulosNacionales:
            res.data.cantidadDeTitulosNacionales,
          cantidadDeTitulosInternacionales:
            res.data.cantidadDeTitulosInternacionales,
          capacidadEstadio: res.data.capacidadEstadio,
        });
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipo();
  }, [id]);

  // DELETE
  const handleDelete = async () => {
    const confirmacion = window.confirm(
      "¿Estás seguro que querés eliminar este equipo?"
    );

    if (!confirmacion) return;

    try {
      await deleteItem(id);
      alert("Equipo eliminado correctamente");
      navigate("/listado");
    } catch (error) {
      console.error(error);
      alert("Error al eliminar");
    }
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE (EDITAR)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateTitulosNacionales(
        id,
        parseInt(formData.cantidadDeTitulosNacionales, 10)
      );

      await updateTitulosInternacionales(
        id,
        parseInt(formData.cantidadDeTitulosInternacionales, 10)
      );

      await updateCapacidad(id, parseInt(formData.capacidadEstadio, 10));

      alert("Equipo actualizado correctamente");
      setEditando(false);

      // refrescar datos
      const res = await getItemById(id);
      setEquipo(res.data);
    } catch (error) {
      console.error(error);
      alert("Error al actualizar");
    }
  };

  // RENDER
  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al cargar el equipo</p>;

  return (
    <div>
      <h1>Detalle del Equipo</h1>

      {!editando ? (
        <>
          <p><strong>Nombre:</strong> {equipo.nombre}</p>
          <p><strong>País:</strong> {equipo.pais}</p>
          <p><strong>Liga:</strong> {equipo.liga}</p>
          <p><strong>Fundación:</strong> {equipo.fundacion}</p>
          <p>
            <strong>Títulos Nacionales:</strong>{" "}
            {equipo.cantidadDeTitulosNacionales}
          </p>
          <p>
            <strong>Títulos Internacionales:</strong>{" "}
            {equipo.cantidadDeTitulosInternacionales}
          </p>
          <p>
            <strong>Capacidad Estadio:</strong>{" "}
            {equipo.capacidadEstadio}
          </p>
          <p>
            <strong>Colores:</strong>{" "}
            {equipo.coloresCamiseta.color1} y{" "}
            {equipo.coloresCamiseta.color2}
          </p>

          <div style={{ marginTop: '20px' }}>
            <button onClick={() => setEditando(true)} style={{ marginRight: '10px' }}>
              Editar
            </button>

            <button onClick={handleDelete}>
              Eliminar
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Editar Equipo</h2>

          <label>Títulos Nacionales:</label>
          <input
            type="number"
            name="cantidadDeTitulosNacionales"
            value={formData.cantidadDeTitulosNacionales}
            onChange={handleChange}
          />

          <label>Títulos Internacionales:</label>
          <input
            type="number"
            name="cantidadDeTitulosInternacionales"
            value={formData.cantidadDeTitulosInternacionales}
            onChange={handleChange}
          />

          <label>Capacidad Estadio:</label>
          <input
            type="number"
            name="capacidadEstadio"
            value={formData.capacidadEstadio}
            onChange={handleChange}
          />

          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setEditando(false)}>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default Detalle;