const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const busquedaPorEmail = require('../controllers/busquedaPorEmail');
const validarToken = require('../middleware/validacion');


//Definicion de la ruta
router.post('/registro', usuarioController.registrar);

router.post('/login', busquedaPorEmail.login)


//con la siguiente linea ya protejo las futuras rutas
//solo afecta a las rutas que esten debajo, no a las de arriba
router.use(validarToken);



module.exports = router;