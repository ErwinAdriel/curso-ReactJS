import { useState } from 'react'
import './App.css'
import { productList } from './utils/data'
import ProductList from './componentes/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Productos</h1>
      <div className="card">
        <ProductList products={productList} />
      </div>
    </>
  )
}

export default App
