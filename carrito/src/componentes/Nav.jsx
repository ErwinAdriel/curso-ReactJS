import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";
//import { useCart } from "../hooks/useCart";

export default function Nav(){

    const [open, setOpen] = useState(false);

    const [openMenu, setOpenMenu] = useState(false);

    const Menu = [
                    {name: "Inicio", link: "/"},
                    {name: "Nosotros", link: "/nosotros"},
                    {name: "Contacto", link: "/contacto"}
                ];
    return (
        <div>
            <div class="w-full h-[86px] bg-white lg:block md:px-20 px-5">
                <div class="container-x mx-auto h-full">
                    <div class="relative h-full">
                        <div class="flex justify-between items-center h-full"> 
                            <div class="text-3xl font-bold"><span>AvComputing</span></div>
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
            <div class="bg-slate-900 w-full h-[60px] relative z-30 md:block text-white px-20">
                <div class="w-full h-full relative">
                    <div class="w-full h-full flex justify-between items-center">
                        <div class="flex xl:space-x-7 space-x-3 items-center">
                            <div class="nav">
                                <ul class="flex">
                                    {
                                        Menu.map((menu)=>(
                                            <li key={menu} class="hover:bg-white hover:text-black"><div class="px-4 py-[18px] cursor-pointer"><Link to={menu.link}>{menu.name}</Link></div></li>        
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>           
    );
}