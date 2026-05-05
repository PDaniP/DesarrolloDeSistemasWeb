//Aca tengo que hacer una lamada al getalls para obtener la lista de equipos de futbol
import React, { useState, useEffect, use } from 'react';
import Axios from 'axios';

function ObtenerTodos() {
    const [equiposFutbol, setEquiposFutol] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3000/equipos/lista')
            .then(response => {
                setEquiposFutbol(response.data);
            })
    }, []);

    return equiposFutbol;
}