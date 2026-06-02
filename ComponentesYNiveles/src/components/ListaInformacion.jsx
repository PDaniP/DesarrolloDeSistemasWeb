function TarjetaInformacion({ nombre, fecha }) {
    
    const edad = new Date().getFullYear() - parseInt(fecha);
    
    return(
        <div>
            <h2>{nombre}</h2>
            <p>Año de nacimiento: {fecha}</p>
            <p>Edad: {edad}</p>
        </div>
    )


}

export default TarjetaInformacion;