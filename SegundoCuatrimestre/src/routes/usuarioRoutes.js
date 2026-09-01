const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//Definicion de la ruta
router.post('/registro', usuarioController.registrar);

module.exports = router;