//mostrar los datos obtenidos de la API
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import obtenerTodos from './ObtenerTodos';
import obtenerPorID from './ObtenerPorID';


function mostrarDatos() {  
    const equiposFutbol = obtenerTodos();
    const equipo = obtenerPorID();

}