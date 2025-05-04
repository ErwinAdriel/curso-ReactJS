import React from "react";
import { productList } from "../utils/data";
import ProductList from "../componentes/ProductList";
import Cart from "../componentes/Cart";

export default function Home({cart, handleAddToCart, vaciarCart, decrementoCantidad, incrementoCantidad}){
    
    return(
        <>
            <div className="card">
                <ProductList products={productList} addToCart={handleAddToCart}/>
            </div>
            <div>
                <Cart cartItems={cart} vaciarItems={vaciarCart} decrementoCantidad={decrementoCantidad} incrementoCantidad={incrementoCantidad}/>
            </div>
        </>
    )
}