import { Link } from "react-router-dom";
import Item from "./Item";

function Lista({ equipos, onDelete }) {
  return (
    <div>
      {equipos.map((equipo) => (
        <Item 
          key={equipo.id} 
          equipo={equipo} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botones: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
};

export default Lista;
