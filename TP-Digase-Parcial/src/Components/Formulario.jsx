// Componente encargado de crear nuevos registros (POST).
//
// Responsabilidades:
// - Manejar un formulario controlado con useState.
// - Capturar los datos de los inputs mediante onChange.
// - Guardar todos los campos en un único objeto de estado.
// - Ejecutar una petición POST al enviar el formulario (onSubmit).
// - Usar e.preventDefault() para evitar recarga de página.
// - Limpiar el formulario después de un envío exitoso.
// - Mostrar mensajes de éxito o error.
//
// Este componente representa la creación (CREATE del CRUD).

import { useState } from 'react';
import axios from 'axios';


function Formulario({ setData }) {
    const [formularioDatos, setFormularioDatos] = useState({
        nombre: '',
        pais: '',
        liga: '',
        fundacion: '',
        cantidadTitulosNacionales: '',
        cantidadTitulosInternacionales: '',
        capacidadEstadio: '',
        color1: '',
        color2: '',
    });

    const handleChange = (e) => {
        setFormularioDatos({
            ...formularioDatos,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:3000/equipos/crear', {
                nombre: formularioDatos.nombre,
                pais: formularioDatos.pais,
                liga: formularioDatos.liga,
                fundacion: parseInt(formularioDatos.fundacion),
                cantidadDeTitulosNacionales: parseInt(formularioDatos.cantidadTitulosNacionales),
                cantidadDeTitulosInternacionales: parseInt(formularioDatos.cantidadTitulosInternacionales),
                capacidadDelEstadio: parseInt(formularioDatos.capacidadEstadio),
                coloresCamiseta: {
                    color1: formularioDatos.color1,
                    color2: formularioDatos.color2
                }
            });

            const nuevoId = res.data.id;

            const resultado = await axios.get(`http://localhost:3000/equipos/idEquipo/${nuevoId}`);

            setData(resultado.data);

            // Limpiar el formulario después de un envío exitoso
            setFormularioDatos({
                nombre: '',
                pais: '',
                liga: '',
                fundacion: '',
                cantidadTitulosNacionales: '',
                cantidadTitulosInternacionales: '',
                capacidadEstadio: '',
                color1: '',
                color2: '',
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-vertical">
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formularioDatos.nombre}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="pais"
                placeholder="País"
                value={formularioDatos.pais}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="liga"
                placeholder="Liga"
                value={formularioDatos.liga}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="fundacion"
                placeholder="Año de Fundación"
                value={formularioDatos.fundacion}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="cantidadDeTitulosNacionales"
                placeholder="Títulos Nacionales"
                value={formularioDatos.cantidadDeTitulosNacionales}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="cantidadDeTitulosInternacionales"
                placeholder="Títulos Internacionales"
                value={formularioDatos.cantidadDeTitulosInternacionales}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="capacidadEstadio"
                placeholder="Capacidad del Estadio"
                value={formularioDatos.capacidadEstadio}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="color1"
                placeholder="Color 1 de la Camiseta"
                value={formularioDatos.color1}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="color2"
                placeholder="Color 2 de la Camiseta"
                value={formularioDatos.color2}
                onChange={handleChange}
                required
            />

            <button type="submit">Guardar</button>
        </form>
    );
}

export default Formulario;