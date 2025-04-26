import { useState } from 'react'
import './App.css'
import EquipoTalentoLab from './componentes/EquipoTalentoLab';
import TarjetaProyecto from './componentes/TarjetaProyecto';
import './Estilos.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TalentoLab</h1>
      <div className='containerEquipo'>
        <EquipoTalentoLab />
      </div>
      <div className='containerTarjetas'>
        <TarjetaProyecto titulo={"Matematica"} descripcion={"Esto es una descripcion de Matematica"} botonTexto={"Explorar"}/>
        <TarjetaProyecto titulo={"Literatura"} descripcion={"Esto es una descripcion de Literatura"} botonTexto={"Explorar"}/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
