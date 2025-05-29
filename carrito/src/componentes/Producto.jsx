import React from "react";
import { IoCartOutline } from "react-icons/io5";

export default function Producto({product, addToCart}){

    return(
        <div class="w-full h-full relative group overflow-hidden shadow-xl/10 ">
            <div class="w-full h-[260px] mt-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${product.img})` }}>                    
            </div>
            <div class="flex justify-center h-[102px] items-center relative  border-t border-gray-300">
                <div class="absolute w-full flex justify-center items-center top-40 group-hover:top-[40px] transition-all duration-500 ease-in-out">
                    <button onClick={() => addToCart(product)} type="button" class="bg-slate-900 w-[50%] flex items-center justify-center cursor-pointer">
                        <div class="flex text-white p-4 space-x-3 text-1xl">
                            <span class="my-auto"><IoCartOutline /></span>
                            <span>Comprar</span>
                        </div>
                    </button>
                </div>
                <div>
                    <a href="#"> 
                        <p class="mb-2.5 text-base font-600 text-center text-gray-500  ">{product.name}</p>
                    </a>
                    <div class="flex justify-center">
                        <span class="flex font-medium text-gray-800 text-2xl text-center font-600">$ {product.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}