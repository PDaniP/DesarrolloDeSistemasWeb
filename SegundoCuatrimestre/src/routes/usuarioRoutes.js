const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const usuarioPerfil = require('../controllers/usuarioPerfil');
const busquedaPorEmail = require('../controllers/busquedaPorEmail');
const validarToken = require('../middlewares/validacion');
const validarUsuario = require('../middlewares/validacionRegEx');
const publicacionesController = require("../controllers/controllerUsuarioPost");

//Definicion de la ruta
router.post('/registro', validarUsuario, usuarioController.registrar);

router.post('/login', busquedaPorEmail.login);


//con la siguiente linea ya protejo las futuras rutas
//solo afecta a las rutas que esten debajo, no a las de arriba
router.use(validarToken);

router.get('/perfil', usuarioPerfil.perfil);

router.post('/publicar', publicacionesController.publicar);

router.delete('/publicaciones/:id', publicacionesController.eliminarPublicacion);

router.put('/publicaciones/:id', publicacionesController.editarPublicacion);

module.exports = router;