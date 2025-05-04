import { useState } from 'react'
import './App.css'
import Home from './layout/Home'

function App() {
  const [cart, setCart] = useState([]);
  const [stock, setStock] = useState([]);

  function handleAddToCart(product){
    const productExist = cart.find(item => item.id === product.id);

    if(productExist){
      //Si el producto esta en el carrito
      setCart(cart.map((item) => item.id === product.id ? {...item, cantidad: item.cantidad+1} : item))
    }else{
      setCart([...cart, {...product, cantidad:1}]);
    }
    
    //setCantidad(cantidad + 1);
    console.log(cart);
  }

  function decremento(product){
    setCart(prevCart => {
      return(
        prevCart.map(item => {
          if(item.id === product.id){
            if(item.cantidad > 1){
              return(
                {...item, cantidad: item.cantidad-1}
              )
            }else{
              return null
            }
          }else{
            return item
          }
        }).filter(item => item != null);
      )
    })
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
