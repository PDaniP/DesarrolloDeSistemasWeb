const pool = require("../config/db")

const crearPost = async (titulo, contenido, autor_id) => {
    const query = `INSERT INTO publicaciones
    (titulo, contenido, autor_id)
    VALUES ($1, $2, $3)
    RETURNING *`;

    const { rows } = await pool.query(query, [
        titulo,
        contenido,
        autor_id
    ]);

    return rows[0];
};

module.exports = { crearPost };