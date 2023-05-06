import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/index.js"
import ListaOpciones from "../ListaOpciones/index.js"
import Boton from "../Boton/index.js"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")


    const {registrarColaborador, crearEquipo} = props;
    
    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("manejar el envío")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault();
        crearEquipo({titulo,colorPrimario: color})
    }






    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo titulo="Nombre" placeholder="Agregar nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <Campo titulo="Puesto" placeholder="Agregar puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
            <Campo titulo="Foto" placeholder="Agregar enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones valor={equipo} actualizarValor={actualizarEquipo} equipos={props.equipos}/>
            <Boton texto="Crear" />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={actualizarTitulo} />
            <Campo titulo="Color" type="color" placeholder="Ingresar el color en hexadecimal" required valor={color} actualizarValor={actualizarColor} />
            <Boton texto="Registrar equipo" />
   </form>
   
    </section>
}
export default Formulario