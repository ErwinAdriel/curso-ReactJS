import React, { useState } from "react";

export default function Cart({cartItems, vaciarItems, decrementoCant, incrementoCant}){

    return(
        <div>
            <h2 className="text-3xl underline">Carrito de compras</h2>
            {cartItems.length === 0 ? (<p>El carrito esta vacio</p>) : 
            (
                <>
                <ul>    
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <div className="mt-3">
                                {item.name} - {item.price}
                                <button className="bg-blue-900 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded ml-2" onClick={() => decrementoCant(item)}>-</button>
                                <input type="text" id="cantidad" value={item.cantidad} data-input-counter aria-describedby="helper-text-explanation" className="border-1 border-gray-300 h-9 text-center text-white text-sm w-12" placeholder="0" required readOnly />
                                <button className="bg-blue-900 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={() => incrementoCant(item)}>+</button>
                            </div>
                            
                        </li>
                    ))}
                </ul>
                <button className="bg-blue-950 hover:border-[#646cff] py-2 px-4 border-1 rounded cursor-pointer" onClick={() => vaciarItems(cartItems)}>Vaciar</button>
                </>
            )}
        </div>
    )
}