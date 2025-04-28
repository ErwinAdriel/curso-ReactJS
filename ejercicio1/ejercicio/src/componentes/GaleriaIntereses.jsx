import React from "react";
import Tema from "./Tema";

export default function GaleriaIntereses(){
    const intereses = [
        {titulo: "React", fondo: "white"},
        {titulo: "Javascript", fondo: "green"},
        {titulo: "APIs", fondo: "red"},
        {titulo: "Diseño UX", fondo: "blue"},
        {titulo: "Node.js", fondo: "yellow"},
    ]

    return(
        <ul className="ul2">
        {
            intereses.map((int, index) => (
                <li style={{listStyle: "none"}} key={index}>
                    <Tema titulo={int.titulo} fondo={int.fondo}/>
                </li>
            ))
        }
        </ul>        
    )
}