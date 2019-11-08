
const getestado_p = require('../dto/getEstadoP');
const getestado_i = require('../dto/getEstadoI');
const getestado_e = require('../dto/getEstadoE');
const crearExcel = require('../services/crearExcel');

exports.generaArchivo = async(req, res, next) => {
    let secuencia = 1;

    try{
        var resultEstadoP = await getestado_p.getEstadoP(secuencia);
        var resultEstadoI = await getestado_i.getEstadoI(secuencia);
        var resultEstadoE = await getestado_e.getEstadoE(secuencia);
    }catch(e){
        res.send({error: e.message});
    }

    let resultExcel = await crearExcel.crearExcelDescargar(resultEstadoP, resultEstadoI, resultEstadoE);

    res.download(resultExcel[0], resultExcel[1], function(e){
        if (e) console.log(e);
    })
};

exports.descargaArchivo = async(req, res, next) => {

};