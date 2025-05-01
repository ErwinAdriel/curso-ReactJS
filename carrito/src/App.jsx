import { useState } from 'react'
import './App.css'
import { productList } from './utils/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {console.log(productList)}
      </div>
    </>
  )
}

export default App
