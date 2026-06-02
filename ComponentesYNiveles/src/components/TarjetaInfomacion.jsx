import MostrarInformacion from "./MostrarInformacion"

function Tarjeta({ nombre, fecha }) {
    return(
        <MostrarInformacion nombre={nombre} fecha={fecha} />
    )
}
export default Tarjeta;