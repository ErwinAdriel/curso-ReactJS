import React from "react";

export default function Miembro({imagen, nombre, rol}){
    return(
        <div style={{border: "1px solid black", padding: 0, margin: 0}}>
            <img style={{with: "100px", height: "100px"}} src={imagen} alt="imagen" />
            <h2>{nombre}</h2>
            <h5>{rol}</h5>
        </div>
    )
        
}