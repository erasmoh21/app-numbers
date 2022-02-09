import React,{useState} from "react";
import ValidarNumeroNegativo from "./ValidarNumeroNegativo.js";
import ValidarNumeroPar from "./ValidarNumeroPar.js"
import ValidarNumeroPrimo from "./ValidarNumeroPrimo.js"

export default function Botones() {
    const [numero,setNumero] = useState(0)

    const aumentar = () => {
        setNumero(numero+1)
    }

    const disminuir = () => {
        setNumero(numero-1)
    }

    return (
        <>
            <h1>{numero}</h1>
            <div className="contenedorBotones">
                <button onClick={aumentar}>+</button>
                <button onClick={disminuir}>-</button>
            </div>
            <ValidarNumeroNegativo numero={numero}/>
            <ValidarNumeroPar numero={numero}/>
            <ValidarNumeroPrimo numero={numero}/>
        </>
    )
}