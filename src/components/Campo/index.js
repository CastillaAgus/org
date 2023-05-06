
//import {useState} from 'react'
import "./Campo.css"

const Campo= (props) => {
   
    //destructuracion
    const {type = "text"} = props
    
    
    const manejarCambio = (e) => {
        actualizarValor(e.target.value)

    }

    const {valor, required,titulo, placeholder, actualizarValor} = props;

    return <div className={`campo campo-${type}`}>
        <label> {titulo}</label>
        <input placeholder= {placeholder}
        required={required}
        value={valor}
        onChange={manejarCambio}
        type ={type}
        />
    </div>
}
export default Campo;