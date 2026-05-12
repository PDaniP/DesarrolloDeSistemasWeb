import { useState } from "react";
import reactLogo from "./assets/react.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [vista, setVista] = useState("menu");

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
        </div>
        <div>
          <h1>Single Page Aplication de Futbol</h1>
          <p className="quehacer">Selecciona lo que quieres hacer.</p>
        </div>
      </section>

      <div className="ticks"></div>

      {vista === "menu" && (
        <section id="next-steps">
          <div id="docs">
            <h2>Buscar equipo</h2>
            <p>Puedes buscar el equipo por nombre</p>
            <button onClick={() => setVista("buscar")}>Buscar</button>
          </div>

          <div id="social">
            <h2>Ingresa un nuevo equipo</h2>
            <p>Agregar un equipo a la base de datos</p>
            <button onClick={() => setVista("agregar")}>Cargar Nuevo</button>
          </div>
        </section>
      )}

      {/*  VISTA BUSCAR */}
      {vista === "Buscador.jsx" && (
        <section>
          <h2>Buscar equipo</h2>
          <p>Aquí irá el buscador (siguiente paso)</p>

          <button onClick={() => setVista("menu")}>Volver</button>
        </section>
      )}

      {/*  VISTA FORMULARIO */}
      {vista === "Formulario.jsx" && (
        <section>
          <h2>Cargar nuevo equipo</h2>
          <p>Aquí irá el formulario (siguiente paso)</p>

          <button onClick={() => setVista("menu")}>Volver</button>
        </section>
      )}

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
