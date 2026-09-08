const usuarioPost = require("../models/usuarioPost");

const publicar = async (req, res) => {
    try {
        const { titulo, contenido } = req.body;

        if (!titulo || !contenido) {
            return res.status(400).json({
                error: "El titulo y el contenido son obligatorios"
            });
        }

        const publicacion = await usuarioPost.crearPost(
            titulo,
            contenido,
            req.usuario.id
        );

        return res.status(201).json(publicacion);
    } catch (error) {
        console.error("[ERROR:", error);
        return res.status(500).json({
            error: "Error al crear la publicacion"
        });
    }
};

module.exports = { publicar }