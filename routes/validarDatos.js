const express = require('express');
const router = express.Router();

const cuadraturaDatos = require('../controllers/cuadraturaDatosController')


router.get('/imedpam-resumen-envcta', cuadraturaDatos.validaEstadoImedPam);
router.get('/imedpam-envcta', cuadraturaDatos.validaEstadoImedPam);
router.get('/pam-diagnostico-cie10', cuadraturaDatos.pamDiagnosticoCIE10);


module.exports = router;

