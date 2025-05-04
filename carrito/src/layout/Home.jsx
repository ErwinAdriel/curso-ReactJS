import React from "react";
import { productList } from "../utils/data";
import ProductList from "../componentes/ProductList";
import Cart from "../componentes/Cart";

export default function Home({cart, handleAddToCart, vaciarCart, decrementoCant, incrementoCant}){
    
    return(
        <>
            <div>
                <ProductList products={productList} addToCart={handleAddToCart}/>
            </div>
            <div>
                <Cart cartItems={cart} vaciarItems={vaciarCart} decrementoCant={decrementoCant} incrementoCant={incrementoCant}/>
            </div>
        </>
    )
}