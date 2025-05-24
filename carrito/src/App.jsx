import { useState } from 'react'
import './App.css'
import Home from './layout/Home'
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Error from './layout/Error404';
import Nosotros from './layout/Nosotros';
import Contacto from './layout/Contacto';
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path='*' element={<Error />}/>
        <Route path='/' element={<Home cart={cart} handleAddToCart={handleAddToCart} decrementoCant={decrementoCant} incrementoCant={incrementoCant} vaciarCart={vaciarCart} />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>
      <Footer /> 
    </>
  )
}

export default App
