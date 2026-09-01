const pool = require('../config/db');

const crearUsuario = async (nombre, email, passwordHasheada) => {
    //usamos $1, $2, $3 para evitar ataques de SQL Injection.
    //Nunca concatenar variables directamente en el string de la consulta.

    const query = 'INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3)';

    //Pasamos los datos en un array en el mismo orden que los $1, $2, $3
    const { rows } = await pool.query(query, [nombre, email, passwordHasheada])

    return rows
};

module.exports = { crearUsuario }