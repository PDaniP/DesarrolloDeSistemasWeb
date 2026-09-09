const obtenerTodas = async ({ search, limit, offset }) => {
    let query = `
        SELECT id, titulo, contenido, autor_id
        FROM publicaciones
    `;

    const params = [];

    if (search) {
        query += `WHERE titulo LIKE ? OR contenido LIKE ? `;
        const texto = `%${search}%`;
        params.push(texto, texto);
    }

    query += `LIMIT ? OFFSET ?`;
    params.push(Number(limit), Number(offset));

    return await db.query(query, params);

};

module.exports = { obtenerTodas };