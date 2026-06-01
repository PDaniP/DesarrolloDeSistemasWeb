import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Listado from "./pages/Listado";
import Detalle from "./pages/Detalle";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/listado/:pais" element={<Listado />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;