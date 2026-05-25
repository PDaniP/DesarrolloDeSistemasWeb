// Página de listado (ruta "/listado").
// Representa la vista maestra.
//
// Responsabilidades:
// - Ejecutar un GET al cargar el componente (useEffect).
// - Obtener todos los registros desde la API.
// - Guardar los datos en un estado.
// - Pasar la lista al componente Item.
//
// Debe mostrar solo información básica (ej: nombre).

import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../services/api";
import Item from "../components/Item";

const Listado = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await getItems();
      setItems(res.data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  //eliminar
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      fetchItems(); // refresca lista
    } catch (error) {
      console.log(error);
    }
  };

  //render condicional
  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al conectar con la API</p>;

  return (
    <div>
      <h1>Listado de Equipos</h1>

      {items.length === 0 ? (
        <p>No hay equipos cargados</p>
      ) : (
        <ul>
          {items.map((equipo) => (
            <Item
              key={equipo.id}
              equipo={equipo}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listado;