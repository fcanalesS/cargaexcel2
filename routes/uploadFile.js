var express = require('express');
var router = express.Router();

var uploadFileController = require('../controllers/uploadFileController');

router.post("/upload-file", uploadFileController.uploadFile);

module.exports = router;