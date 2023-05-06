//import {useState} from "react"
import "./MiOrg.css"
const MiOrg = (props) => {
    // Antes lo maneje de acá pero luego lo mande al formulario
    //const [mostrar, actualizarMostrar] = useState(true);
   // const manejarClick = () => {
   //     actualizarMostrar(!mostrar);
   // }
    return <section className="orgSection">
        <h3>Mi organización</h3>
        <img src="/img/add-1.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg