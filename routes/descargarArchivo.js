const express = require('express');
const router = express.Router();

const descargarArchivo = require('../controllers/DescargarArchivoController');

router.get('/genera-archivo', descargarArchivo.generaArchivo);
router.get('/descarga-archivo', descargarArchivo.descargaArchivo);


module.exports = router;