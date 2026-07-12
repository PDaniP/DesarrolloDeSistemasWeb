import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Listado from "./pages/Listado";
import Detalle from "./pages/Detalle";
import Home from "./pages/Home";
import MiLista from "./components/MiLista";
import Login from "./components/Login";
import RutaPrivada from "./routes/RutaPrivada";
import "./App.css";
import Layout from "./components/Layout";


import Metodologia from "./docs/Metodologia";
import Requerimientos from "./docs/Requerimientos";
import Arquitectura from "./docs/Arquitectura";


function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <Routes>

        <Route path="/login" element={<Login />} />

        
          <Route path="/docs/metodologia" element={<Metodologia />} />
          <Route path="/docs/requerimientos" element={<Requerimientos />} />
          <Route path="/docs/arquitectura" element={<Arquitectura />} />
        


        <Route element={<RutaPrivada />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="listado" element={<Listado />} />
            <Route path="listado/:pais" element={<Listado />} />
            <Route path="detalle/:id" element={<Detalle />} />
            <Route path="mis-favoritos" element={<MiLista />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
