import TarjetaInformacion from "./ListaInformacion"

function MostrarInformacion({ nombre, fecha }) {
    return(
        <TarjetaInformacion nombre={nombre} fecha={fecha} />
    )
}

export default MostrarInformacion;