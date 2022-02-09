import React from 'react'

export default function ValidarNumeroPrimo(props) {

    const validarNumeroPrimo = () => {
        let contador = 0
        for(let i = 0; i < 9; i++) {
            if(props.numero % i === 0) {
                contador++;
            }
            if(i === 8) {
                if(contador > 2) {
                    return false;
                }
            }
        }
        return true;
    }


    return (
        <div className='contenedorValidarNumeroPrimo'>
            <p style={validarNumeroPrimo() ? {"color":"#2c569c"}:{"color":"#9c2d2c"}}>{validarNumeroPrimo() ? "Es primo": "No es primo"}</p>
        </div>
    )
}