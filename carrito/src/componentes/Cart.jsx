import React from "react";

export default function Cart({cartItems, vaciarItems}){

    return(
        <div>
            <h2>Carrito de compras</h2>
            {cartItems.length === 0 ? (<p>El carrito esta vacio</p>) : 
            (
                <>
                <ul>
                    
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.price}
                        </li>
                    ))}
                </ul>
                <button onClick={() => vaciarItems(cartItems)}>Vaciar</button>
                </>
            )}
        </div>
    )
}