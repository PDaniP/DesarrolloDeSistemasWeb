import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Listado from "./pages/Listado";
import Detalle from "./pages/Detalle";
import Home from "./pages/Home";
import MiLista from "./components/MiLista";
import Login from "./components/Login";
import RutaPrivada from "./routes/RutaPrivada";
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RutaPrivada />}>
          <Route index element={<Home />} />
          <Route path="listado" element={<Listado />} />
          <Route path="listado/:pais" element={<Listado />} />
          <Route path="detalle/:id" element={<Detalle />} />
          <Route path="mis-favoritos" element={<MiLista />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;