import React from 'react'

export default function ValidarNumeroPar(props) {
    return (
        <div className='contenedorValidarNumeroPar'>
            <p style={props.numero % 2 === 0 ? {"color":"#2c569c"}:{"color":"#9c2d2c"}}>{props.numero % 2 === 0 ? "El numero es par" : "El numero es impar"}</p>
        </div>
    )
}