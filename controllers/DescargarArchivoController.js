const fs = require('fs');
const getestado_p = require('../dto/getEstadoP');
const getestado_i = require('../dto/getEstadoI');
const getestado_e = require('../dto/getEstadoE');
const crearExcel = require('../services/crearExcel');

exports.generaArchivo = async(req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    let fileName = req.query["fileName"];
    let secuencia = req.query["secuencia"];

    // let fileName = 'file-1573498738817.xlsx';
    // let secuencia = 20;

    console.log("FILENAME DEL DESCARGAR", fileName);
    console.log("Secuencia DEL DESCARGAR", secuencia);

    try{
        var resultEstadoP = await getestado_p.getEstadoP(secuencia);
        var resultEstadoI = await getestado_i.getEstadoI(secuencia);
        var resultEstadoE = await getestado_e.getEstadoE(secuencia);
    }catch(e){
        res.send({error: e.message});
    }

    let resultExcel = await crearExcel.crearExcelDescargar(resultEstadoP, resultEstadoI, resultEstadoE, fileName);
    let resultExcelBase64 = base64_encode(resultExcel[0])

    res.send({file64: resultExcelBase64, fileName: resultExcel[1]});

    // res.download(resultExcel[0], resultExcel[1], function(e){
    //     if (e) console.log(e);
    // })
};

exports.descargaArchivo = async(req, res, next) => {

};

function base64_encode(file) {
    let bitmap = fs.readFileSync(file);
    return new Buffer.from(bitmap).toString('base64');
}