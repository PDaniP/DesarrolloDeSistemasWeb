import { useState } from "react";
import reactLogo from "./assets/react.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import MostrarInfo from "./components/MostrarInfo";

function App() {
  const [vista, setVista] = useState("menu");
  const [data, setData] = useState(null);
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
        </div>
        {vista !== "agregar" && (
          <div>
            <h1>Single Page Aplication de Futbol</h1>
            <p className="quehacer">Selecciona lo que quieres hacer.</p>
          </div>
        )}
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
      {vista === "buscar" && (
        <section>
          <h2>Buscar equipo</h2>
          <Buscador setData={setData} />

          <button onClick={() => {setVista("menu"); setData(null);}}>Volver</button>
        </section>
      )}

      {/*  VISTA FORMULARIO */}
      {vista === "agregar" && (
        <section>
          <h2>Cargar nuevo equipo</h2>
          <Formulario setData={setData} />

          <button onClick={() => {setVista("menu"); setData(null);}}>Volver</button>
        </section>
      )}

      {/* 🔥 RESULTADO (SIEMPRE DISPONIBLE) */}
      {data && (
        <section>
          <h2>Resultado</h2>
          <MostrarInfo data={data} />
        </section>
      )}

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;

/**
{vista === "buscar" && <Buscador setData={setData} />}
{vista === "cargar" && <Formulario setData={setData} />}
{data && <MostrarInfo data={data} />}
*/
