import React from "react";
import "../utils/data.js";

export default function Producto({product, addToCart}){
    return(
        <div>
            <h4>{product.name}</h4>
            <h5>{product.price}</h5>
            <button onClick={addToCart(product)}>Agregar</button>
        </div>
    )
}