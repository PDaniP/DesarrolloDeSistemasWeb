//Hacer una llamada por GetByID para obtener un equipo de futbol
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function obtenerPorID() {
    const [equipo, setEquipo] = useState({});

    useEffect(() => {
        Axios.get('http://localhost:3000/equipos/idEquipo/1')
            .then(response => {
                setEquipo(response.data);
            })
    }), [];

    return equipo;


}