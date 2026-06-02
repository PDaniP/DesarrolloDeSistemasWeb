import { useState } from 'react'
import IngresarInformacion from './components/IngresarInformacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IngresarInformacion />
    </>
  )
}

export default App
