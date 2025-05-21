import React from "react";
import ProductList from "../componentes/ProductList";
import Cart from "../componentes/Cart";

export default function Home({cart, handleAddToCart, vaciarCart, decrementoCant, incrementoCant}){
    
    return(
        <>
            <div>
                <ProductList addToCart={handleAddToCart}/>
            </div>
            <div>
                <Cart cartItems={cart} vaciarItems={vaciarCart} decrementoCant={decrementoCant} incrementoCant={incrementoCant}/>
            </div>
        </>
    )
}