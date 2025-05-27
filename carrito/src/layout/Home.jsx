import React from "react";
import ProductList from "../componentes/ProductList";
import Cart from "../componentes/Cart";
import loading from "../img/loading.gif";

export default function Home({products, cargando, handleAddToCart, vaciarCart, decrementoCant, incrementoCant}){
    
    return(
        <>
            {
                cargando ? <img class="mx-auto" src={loading} alt="loading" /> :
                <div>
                    <ProductList products={products} addToCart={handleAddToCart}/>
                </div>
            }
        </>
    )
}