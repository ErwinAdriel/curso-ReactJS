import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
//import { useCart } from "../hooks/useCart";
//import { Link } from "react-router-dom";

export default function Nav(){

    const [open, setOpen] = useState(false);

    const [openCategoria, setOpenCategoria] = useState(false);

    const [openMenu, setOpenMenu] = useState(false);
    
    const Menus = ["Notebook", "Monitores", "Pc's de Escritorio"];

    const Categorias = [
                        {name: "Laptops", link: "/laptops"},
                        {name: "Celulares", link: "/celulares"},
                        {name: "TV", link: "/tvs"},
                        {name: "Audio", link: "/audio"},
                        {name: "Gaming", link: "/gaming"}
                    ];
    return (
        <div>
            <div class="w-full h-[86px] bg-white lg:block md:px-20 px-5">
                <div class="container-x mx-auto h-full">
                    <div class="relative h-full">
                        <div class="flex justify-between items-center h-full">
                            
                            <div class="text-3xl font-bold"><span>TinoShop</span></div>
                            <div class="md:flex w-[517px] h-[44px] border border-slate-400 hidden">
                                <div class="w-full h-full flex items-center bg-white">
                                    <form action="#" class="h-full w-full">
                                        <input type="text" class="search-input h-full w-full px-4 focus:outline-none" placeholder="Buscar producto..."/>
                                    </form>
                                </div>
                                <div class="border-2 border-black px-3 flex items-center bg-slate-900 text-white">
                                    <button>Buscar</button>
                                </div>
                            </div>
                            <div class="flex space-x-3 items-center">
                                <div class="md:flex text-3xl hidden"><a href="#"><span><MdFavoriteBorder /></span></a></div>
                                <div class="group relative text-3xl">
                                    <a href="#"><span><IoCartOutline /></span></a>
                                    <span class="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-blue-700 text-white">0</span>
                                </div>
                                <div class="sm:flex text-2xl"><a href="#"><span><FaRegUser /></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
    );
}