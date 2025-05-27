import { FaFacebook, FaInstagram, FaYoutube, FaRegUser } from "react-icons/fa";
import { useState } from "react";
import Nav from "../componentes/Nav";

export default function Header({cartItems}){

    return(
        <header class="relative">
            <Nav cartItems={cartItems}/>
        </header>
    );
}