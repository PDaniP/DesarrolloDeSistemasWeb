const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const busquedaPorEmail = require('../controllers/busquedaPorEmail');
const validador = require('../middleware/validacion');


//Definicion de la ruta
router.post('/registro', usuarioController.registrar);


router.post('/login', busquedaPorEmail.login)


module.exports = router;