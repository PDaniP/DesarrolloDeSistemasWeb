import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems, deleteItem } from "../services/api";
import Lista from "../components/Lista";

const Listado = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { pais } = useParams();

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

  useEffect(() => {
    fetchItems();
  }, []);

  // eliminar
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  //filtro por país (si existe en la URL)
  const equiposFiltrados = pais
    ? items.filter(
        (e) => e.pais.toLowerCase() === pais.toLowerCase()
      )
    : items;

  //render condicional
  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al conectar con la API</p>;

  return (
    <div className="container">
      <h1 style={{ marginBottom: "30px" }}>
        {pais
          ? `Equipos de ${pais}`
          : "Listado de Equipos"}
      </h1>

      {equiposFiltrados.length === 0 ? (
        <p>No hay equipos cargados</p>
      ) : (
        <Lista
          equipos={equiposFiltrados}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Listado;