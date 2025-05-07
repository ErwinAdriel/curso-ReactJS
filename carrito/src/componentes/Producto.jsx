import React from "react";
import { IoCartOutline } from "react-icons/io5";
import "../utils/data.js";

export default function Producto({product, addToCart}){
    return(
        /*<div style={{margin: 10, border: "1px solid white", padding: 10}}>
            <h4>{product.name}</h4>
            <h5>${product.price}</h5>
            <h5>Stock: {product.stock}</h5>
            <button onClick={() => addToCart(product)}>Comprar</button>
        </div>*/
        <div class="w-full h-full  relative group overflow-hidden shadow-xl">
                    <div class="w-full h-[322px] mt-4 bg-cover bg-center bg-no-repeat" style={{backgroundColor: 'black'}}>
                        
                    </div>
                    <div class="flex justify-center h-[102px] items-center relative">
                        <div class="absolute w-full flex justify-center items-center top-40 group-hover:top-[40px] transition-all duration-500 ease-in-out">
                            <button onClick={() => addToCart(product)} type="button" class="bg-blue-600 w-[50%] flex items-center justify-center cursor-pointer">
                                <div class="flex text-white p-4 space-x-3 text-1xl">
                                    <span class="my-auto"><IoCartOutline /></span>
                                    <span>Comprar</span>
                                </div>
                            </button>
                        </div>
                        <div>
                            <a href="#">
                                <p class="mb-2.5 text-[20px] font-600 text-center text-black leading-[24px] line-clamp-2">{product.name}</p>
                            </a>
                            <div class="flex justify-center">
                                <span class="text-gray-500 line-through mr-1 inline-block font-600 text-center text-[18px]">${product.price}</span>
                                <span class="text-red-600 font-600 text-center text-[18px]">25% OFF</span>
                            </div>
                            <div class="flex justify-center">
                                <span class="flex text-[25px] text-center font-600">${product.price * 0.75}</span>
                            </div>
                        </div>
                    </div>
                </div>
    )
}