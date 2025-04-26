import { useState } from 'react'
import './App.css'
import EquipoTalentoLab from './componentes/EquipoTalentoLab';
import TarjetaProyecto from './componentes/TarjetaProyecto';
import './Estilos.css'
import Tema from './componentes/Tema';

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
      <div className='containerTemas'>
        <Tema titulo={"React"} color={"white"}/>
      </div>
    </>
  )
}

export default App
