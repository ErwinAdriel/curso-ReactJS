import { FaFacebook, FaInstagram, FaYoutube, FaRegUser } from "react-icons/fa";
import Nav from "./Nav";

export default function Header(){

    return(
        <header class="relative">
            <div class="bg-slate-900 text-white w-full h-10 sm:px-20 px-[40%]">
                <div class="mx-auto h-full">
                    <div class="flex justify-between items-center h-full">
                        <div class="sm:block hidden">
                            <ul class="flex space-x-6">
                                <li><a href="#"><span class="text-xs leading-6 text-qblack font-500">Sucursales</span></a></li>
                                <li><a href="#"><span class="text-xs leading-6 text-qblack font-500">Centro de atencion</span></a></li>
                            </ul>
                        </div>
                        <div>
                            <div class="flex space-x-6">
                                <FaFacebook />
                                <FaInstagram />
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </header>
    );
}