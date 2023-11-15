const express = require('express');
const router = express.Router();
const { check } = require('express-validator') 
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.js')
const { listarUsuarios } = require('../controllers/users.js')
const { validarCampos } = require ('../middlewares/validar-campos.js');
const { validarJWT } = require('../middlewares/validar-token.js');

router.post('/', loginUsuario)

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La clave debe tener al menos 6 dígitos').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario)
    
router.get('/renew', validarJWT, revalidarToken)
router.get('/list', listarUsuarios)

module.exports = router;