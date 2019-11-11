const utils = require('../utils/setVariables');

const getValidacion1 = require('../dto/getValidacion1');
const getValidacion2 = require('../dto/getValidacion2');
const getValidacion3 = require('../dto/getValidacion3');


exports.validaEstadoImedPam = async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        console.log("secuencia node: ", req.query);
        let secuencia = 1;


        let resultValidacion1 = await getValidacion1.get_validacion_estado_bd(secuencia);
        res.send({"validacion_1": resultValidacion1});
    }catch(e){
        res.send({"validacion_1": 0, "error": e.message});
    }
};

exports.validaImedpamEnvcta = async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        console.log("secuencia node: ", req.query['secuencia']);

        // let secuencia = utils.getSecuencia();
        let secuencia = 1;
        let resultValidacion2 = await getValidacion2.get_validacion_estado_bd_2(secuencia);
        res.send({"validacion_2": resultValidacion2 });
    }catch(e){
    res.send({"validacion_2": 0, "error": e.message});
    }
}

exports.pamDiagnosticoCIE10 = async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        console.log("secuencia node: ", req.query['secuencia']);
        // let secuencia = utils.getSecuencia();
        let secuencia = 1;

        let resultValidacion3 = await getValidacion3.get_validacion_estado_bd_3(secuencia);
        res.send({"validacion_3": resultValidacion3});
    }catch(e){
        res.send({"validacion_3": 0, "error": e.message});
    }
}