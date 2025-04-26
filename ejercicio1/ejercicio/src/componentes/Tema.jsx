import React from "react";

export default function Tema({titulo, color }){
    return(
        <button style={{backgroundColor: color}} className="btn">{titulo}</button>
    )
}