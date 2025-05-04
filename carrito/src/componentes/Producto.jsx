import React from "react";
import "../utils/data.js";

export default function Producto({product, addToCart}){
    return(
        <div style={{margin: 10, border: "1px solid white", padding: 10}}>
            <h4>{product.name}</h4>
            <h5>${product.price}</h5>
            <h5>Stock: {product.stock}</h5>
            <button onClick={() => addToCart(product)}>Comprar</button>
        </div>
    )
}