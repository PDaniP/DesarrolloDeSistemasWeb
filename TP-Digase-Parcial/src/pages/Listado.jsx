// Página de listado (ruta "/listado").
// Representa la vista maestra.
//
// Responsabilidades:
// - Ejecutar un GET al cargar el componente (useEffect).
// - Obtener todos los registros desde la API.
// - Guardar los datos en un estado.
// - Pasar la lista al componente Lista.
//
// Debe mostrar solo información básica (ej: nombre).


import { useEffect, useState } from "react";
import { getItems } from "../services/api";
import { Link } from "react-router-dom";

const Listado = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
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

    fetchItems();
  }, []);

  //Render condicional
  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al conectar con la API</p>;

  return (
    <div>
      <h1>Listado de Equipos</h1>

      {items.length === 0 ? (
        <p>No hay equipos cargados</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {/*SOLO UN ATRIBUTO (consigna)*/}
              {item.nombre}

              {" - "}

              <Link to={`/detalle/${item.id}`}>
                Ver más
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listado;