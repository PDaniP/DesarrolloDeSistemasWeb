import { useEffect, useState } from 'react'
import './App.css'
import tanque1 from './assets/lleno.png'
import tanque2 from './assets/medio.png'
import tanque3 from './assets/vacio.png'

function App() {
  const [Tanque, setTanque] = useState(tanque3)
  const [Estado, setEstado] = useState('Vacio')

  const llenarMaximo = () => {
    setTanque(tanque1)
    setEstado('Lleno')
  }

  return (
    <div className="app-container">
      <h1>Control De tanque</h1>
      <img src={Tanque} alt={`Tanque ${Estado}`} />
      <div className="button-group">
        <button onClick={llenarMaximo}>Llenar Máximo</button>
        <button onClick={() => {
          setTanque(tanque2)
          setEstado('Mitad')
        }}>Mitad</button>
        <button onClick={() => {
          setTanque(tanque3)
          setEstado('Vacio')
        }}>Vaciar</button>
      </div>

      <h2>Estado actual: {Estado}</h2>

      <div>
        <FetchAPI />
      </div>

    </div>
    
  )
}

//funcion para consumir y traer datos de la API
function FetchAPI(){
  const [equiposFutbol, setEquiposFutbol] = useState([]);
  
  useEffect(() => {

    fetch('http://localhost:3000/equipos/lista')
      .then((respuesta) => respuesta.json())
      .then((data) => setEquiposFutbol(data))
      

  }, []);//cuando esta vacia se ejecuta primero
  
  return(
    <div>
      <h1>Consumo de la API</h1>
      <ul>
        {equiposFutbol.map((equipo) => (
          <li key={equipo.id}>
            <span>{equipo.nombre}</span>
          </li>
        ))}


      </ul>
    
    
    
    </div>

    
  )

}


export default App
