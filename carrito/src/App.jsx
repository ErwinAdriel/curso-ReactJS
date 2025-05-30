import { useState, useEffect } from "react";
import "./App.css";
import Home from "./layout/Home";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Error from "./layout/Error404";
import DetallesProductos from "./componentes/DetallesProductos";
import Nosotros from "./layout/Nosotros";
import Contacto from "./layout/Contacto";
import GaleriadeProductos from "./layout/GaleriadeProductos";
import Admin from "./layout/Admin";
import Login from "./layout/Login";
import RutaProtegida from "./auth/RutasProtegidas";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [carga, setCarga] = useState(true);
  const [vacio, setVacio] = useState(true);
  const [error, setError] = useState(false);
  const [precio, setPrecio] = useState();
  const [isAuthenticated, setIsAuth] = useState(false);

  useEffect(() => {
    fetch("/data/data.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProducts(datos);
          setCarga(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error: ", error);
        setTimeout(() => {
          setCarga(false);
          setError(true);
        }, 2000);
      });
  }, []);

  //console.log(cart);

  function handleAddToCart(product) {
    setPrecio(product.price);
    const productExist = cart.find((item) => item.id === product.id);

    if (productExist) {
      /*if(productExist.id == product.id){
        setCart([...cart, {...product}])
      }*/
      //Si el producto esta en el carrito
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            if (item.cantidad < product.stock) {
              return { ...item, cantidad: item.cantidad + 1 };
            }

            return item;
          } else {
            return item;
          }
        })
      );
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
      setVacio(false);
    }
  }

  function eliminarCant(product) {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            } else {
              if (prevCart.length < 2) {
                setVacio(true);
              }
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item != null);
    });
  }

  function agregarCant(product) {
    setCart((afterCart) => {
      return afterCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.cantidad < product.stock) {
              return {
                ...item,
                cantidad: item.cantidad + 1,
                price: precio + item.price,
              };
            } else {
              return item;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item === item);
    });
  }

  function vaciarCart() {
    setCart([]);
    setVacio(true);
    console.log("Carrito vacio");
  }

  return (
    <>
      <Header
        cartItems={cart}
        vaciarItems={vaciarCart}
        eliminarItem={eliminarCant}
        vacio={vacio}
        agregarItem={agregarCant}
      />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route
          path="/"
          element={
            <Home
              products={products}
              cargando={carga}
              cart={cart}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/productos"
          element={<GaleriadeProductos products={products} cargando={carga} />}
        />
        <Route
          path="/productos/:id"
          element={
            <DetallesProductos
              products={products}
              addToCart={handleAddToCart}
            />
          }
        />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/admin"
          element={
            <RutaProtegida isAuthenticated={isAuthenticated}>
              {" "}
              <Admin />{" "}
            </RutaProtegida>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
