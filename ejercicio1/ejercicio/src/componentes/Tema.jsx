import React from "react";
import { useState } from "react";

export default function Tema({titulo, fondo }){

    const[color, setColor] = useState(fondo);
    fondo = color;
    
    function change(){
        setColor(color === fondo ? "white" : fondo)
    }

    return(
        <button onClick={change} style={{backgroundColor: fondo}} className="btn">{titulo}</button>
    )
}