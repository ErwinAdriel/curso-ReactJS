import { useState } from 'react'
import './App.css'
import Home from './layout/Home'

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product){
    setCart([...cart, product]);
    console.log(cart);
  }

  function vaciarCart(){
    setCart([])
    console.log("Carrito vacio");
  }

  return (
    <>
      <h1>Productos</h1>
      <Home cart={cart} handleAddToCart={handleAddToCart} vaciarCart={vaciarCart}/>
    </>
  )
}

export default App
