import React from "react";

export default function Cart({cartItems}){
    return(
        <div>
            <h2>Carrito de compras</h2>
            {cartItems.lenght === 0 ? (<p>El carrito esta vacio</p>) : 
            (
                <ul>
                    //Recorre la lista de productos agregados al carrito 
                    {cartItems.map((index, item) => (
                        <li key={index}>
                            {item.name} - {item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}