import { useState } from 'react'
import './App.css'
import Home from './layout/Home'
import Footer from './layout/Footer';
import Header from './layout/Header';
import Nav from './layout/Nav';

function App() {
  const [cart, setCart] = useState([]);
  const [stock, setStock] = useState([]);

  function handleAddToCart(product){
    const productExist = cart.find(item => item.id === product.id);

    if(productExist){
      //Si el producto esta en el carrito
      setCart(cart.map((item) => {
        if(item.id === product.id){
          if(item.cantidad < product.stock){
            return {...item, cantidad: item.cantidad+1}  
          }
            return item
        }else{
          return item
        }
      }))
    }else{
      setCart([...cart, {...product, cantidad:1}]);
    }
    //setCantidad(cantidad + 1);
    console.log(cart);
  }

  function decrementoCant(product){
    setCart(prevCart => {
      return(
        prevCart.map((item) => {
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
        }).filter(item => item != null)
      )
    })
  }

  function incrementoCant(product){
    setCart(afterCart => {
      return(
        afterCart.map((item) => {
          if(item.id === product.id){
            if(item.cantidad < product.stock){
              return(
                {...item, cantidad: item.cantidad+1}
              )
            }else{
              return (
                item
              )
            }
          }else{
            return item
          }
        }).filter(item => item === item)
      )
    })
  }

  function vaciarCart(){
    setCart([])
    console.log("Carrito vacio");
  }

  return (
    <>
      <Header />
      <div class="lg:px-20 my-10">
        <Home cart={cart} handleAddToCart={handleAddToCart} decrementoCant={decrementoCant} incrementoCant={incrementoCant} vaciarCart={vaciarCart} />
      </div>
      <Footer /> 
    </>
  )
}

export default App
