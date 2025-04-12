import React from "react";
import Miembro from "./Miembro";

export default function EquipoTalentoLab(){
    const equipo = [
        {nombre: "Silvia", rol: "Product Owner"},
        {nombre: "Luis", rol: "Diseñador UX/UI"},
        {nombre: "Matias", rol: "Desarrollador"},
        {nombre: "Sabrina", rol: "Desarrolladora"}
    ];
    
    /*
    const nombre = "Silvia";
    const rol = "Product Owner";
    */
    return(
        <ul>
            {
                equipo.map((eq, index) => (
                    <li key={index}>
                        <Miembro nombre={eq.nombre} rol={eq.rol}/>
                    </li>
                ))
            }
        </ul>
    )
}