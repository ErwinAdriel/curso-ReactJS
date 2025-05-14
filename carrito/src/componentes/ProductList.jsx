import React, { useEffect, useState } from "react";
import Producto from "./Producto";

export default function ProductList({addToCart}){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/data/data.json')
            .then((respuesta) => respuesta.json())
            .then((datos) => setProducts(datos))
            .catch((error) => console.error("Error: ", error));
    }, []);

    return(
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
            {
                products.map((product) => (
                    <Producto key={product.id} product={product} addToCart={addToCart}/>
                ))
            }
        </div>
    )
}