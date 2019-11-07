const path = require('path');
const multer = require('multer');
const XLSX = require('xlsx');
const insertData = require('../services/insertDataExcel');



const fileRoute = path.join(__dirname, '../uploads');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, fileRoute)
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
});

const upload = multer({ //multer settings
    storage: storage,
    fileFilter: function (req, file, callback) { //file filter
        if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length - 1]) === -1) {
            return callback(new Error('Archivo no válido'));
        }
        callback(null, true);
    }
}).single('file');

exports.uploadFile = async(req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    upload(req, res, async function (err) {
        if (err) {
            res.send(
                {
                    title: "Error al Cargar el Archivo",
                    error_code: 1,
                    err_desc: err.message
                }
            );
        }else{
            try{
                fileName = req.file.filename;
                // let resultValidacion = validarArchivo.validarExcel(fileName); 
                let getDataInsert = await insertData.insertDataFile(fileName);
                console.log("********GET DATA INSERT********")
                console.log(getDataInsert);
                console.log("********GET DATA INSERT********")
                res.send({fileName: fileName, dataInsert: getDataInsert});
            }catch (e) {
                res.send({error: e.message})
                //next(e);
            }
        }
    });
};