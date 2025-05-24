import React, { useEffect, useState } from "react";
import Producto from "./Producto";
import loading from "../img/loading.gif";
import Error from "../layout/Error404";

export default function ProductList({addToCart}){

    const [products, setProducts] = useState([]);
    const [carga, setCarga] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('/data/data.json')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setTimeout(() => {
                    setProducts(datos)
                    setCarga(false)    
                }, 2000)
            })
            .catch((error) => {
                console.error("Error: ", error)
                setTimeout(() => {
                    setCarga(false)
                    setError(true)    
                }, 2000);
            });
    }, []);

    if(error){
        return <Error />
    }

    return(
        <>
        {
            carga ? <img class="mx-auto" src={loading} alt="loading" /> :
        
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-20 mt-10">
                {
                    products.map((product) => (
                        <Producto key={product.id} product={product} addToCart={addToCart}/>
                    ))
                }
            </div>
        }
        </>
    )
}