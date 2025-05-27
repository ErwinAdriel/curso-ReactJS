import React, { useState } from "react";

export default function Cart({isOpen, onClose, cartItems, vaciarItems, decrementoCant, incrementoCant}){

  const subtotal = 0;
    return(
        <div class={`z-10 ${isOpen ? 'relative' : 'hidden'}`}>
          <div class="fixed inset-0 bg-gray-500/75 "></div>
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Carrito de compras</h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button onClick={onClose} type="button" class="cursor-pointer relative -m-2 p-2 text-gray-400 hover:text-gray-500">                          
                          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        {cartItems.length === 0 ? (<p>El carrito esta vacio</p>) :
                          (
                              <ul class="-my-6 divide-y divide-gray-200">
                                {cartItems.map((item, index) => (
                                  <li key={index} class="flex py-6">
                                    <div style={{backgroundImage: `url(${item.img})`}} class="bg-cover bg-center bg-no-repeat size-30 rounded-md border border-gray-200">
                                    </div>

                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#">{item.name}</a>
                                          </h3>
                                          <p class="ml-4">${item.price * 0.75}</p>
                                        </div>
                                      </div>
                                      <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500">Unidad: {item.cantidad}</p>

                                        <div class="flex">
                                          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                        </div>
                                      </div>
                                    </div>

                                  </li>
                                ))}
                              </ul>
                          )}
                      </div>
                    </div>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="mt-6">
                      <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-slate-500">Comprar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}