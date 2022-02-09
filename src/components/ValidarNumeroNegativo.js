import React from 'react'

export default function ValidarNumeroNegativo(props) {
    return (
        <div className='contenedorValidarNumeroNegativo'>
            <p style={props.numero >= 0 ? {"color":"#2c569c"}:{"color":"#9c2d2c"}}>{props.numero >= 0 ? "El numero es positivo": "El numero es negativo"}</p>
        </div>
    )
}