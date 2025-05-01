import React from "react";
import Producto from "./Producto";

export default function ProductList({products, addToCart}){
    
    return(
        <div>
            {
                products.map(product => (
                    <Producto product={product} addToCart={addToCart}/>
                ))
            }
        </div>
    )
}