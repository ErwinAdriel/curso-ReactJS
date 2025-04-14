import React from "react";
import Miembro from "./Miembro";
import img from "../img/img.png";

export default function EquipoTalentoLab(){
    const equipo = [
        {imagen: img, nombre: "Silvia", rol: "Product Owner"},
        {imagen: img, nombre: "Luis", rol: "Diseñador UX/UI"},
        {imagen: img, nombre: "Matias", rol: "Desarrollador"},
        {imagen: img, nombre: "Sabrina", rol: "Desarrolladora"}
    ];
    
    /*
    const nombre = "Silvia";
    const rol = "Product Owner";
    */
    return(
        <ul style={{display: "grid", gap:"40px", padding: "40px", backgroundColor: "blanchedalmond", color: "black"}}>
            {
                equipo.map((eq, index) => (
                    <li style={{listStyle: "none"}} key={index}>
                        <Miembro imagen={eq.imagen} nombre={eq.nombre} rol={eq.rol}/>
                    </li>
                ))
            }
        </ul>
    )
}