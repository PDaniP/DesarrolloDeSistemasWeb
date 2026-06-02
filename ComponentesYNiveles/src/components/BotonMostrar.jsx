import Tarjeta from "./TarjetaInfomacion"
import { useState } from "react"

function BotonMostrar({ nombre, fecha }) {
    const [mostrar, setMostrar] = useState(false);

    const handleClick = () => {
        setMostrar(!mostrar);
    };


    return (
        <>
            <button onClick={()=> setMostrar(!mostrar)}>
                {mostrar ? 'Ocultar' : 'Mostrar'} Información
            </button>

            {mostrar && <Tarjeta nombre={nombre} fecha={fecha} />}
        </>
    );
}

export default BotonMostrar;
