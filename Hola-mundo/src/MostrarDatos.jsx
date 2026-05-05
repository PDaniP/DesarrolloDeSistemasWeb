//mostrar los datos obtenidos de la API
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ObtenerTodos from './ObtenerTodos';
import ObtenerPorID from './ObtenerPorID';


function MostrarDatos() {  
    const equiposFutbol = obtenerTodos();
    const equipo = obtenerPorID();

}