import React from "react";

export default function TarjetaProyecto({titulo, descripcion, botonTexto}){
    return(
        <div className="tarjetaProyecto">
            <h3>{titulo}</h3>
            <h4>{descripcion}</h4>
            <button onClick={mensaje}>{botonTexto}</button>
        </div>
    )
    
    function mensaje(){
        return(
            console.log(`Explorando: ${titulo}`)
        )
    }   
}
