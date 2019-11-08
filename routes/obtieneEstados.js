const express = require('express');
const router = express.Router();

const obtieneEstados = require('../controllers/obtieneEstados');

router.get('/obtiene-estado-p', obtieneEstados.obtieneEstadoP);
router.get('/obtiene-estado-e', obtieneEstados.obtieneEstadoE);
router.get('/obtiene-estado-i', obtieneEstados.obtieneEstadoI);

module.exports = router;