const getestado_p = require('../dto/getEstadoP');
const getestado_i = require('../dto/getEstadoI');
const getestado_e = require('../dto/getEstadoE');


exports.obtieneEstadoE = async (req, res, next) => {
    let secuencia = 1;

    let resultEstadoP = getestado_p.getEstadoP(secuencia);

    res.send({"resultEstadoP": resultEstadoP});

};

exports.obtieneEstadoP = async (req, res, next) => {

};

exports.obtieneEstadoI = async (req, res, next) => {
    let secuencia = 1;

    let resultEstadoI = getestado_i.getEstadoI(secuencia);

    res.send({"resultEstadoI": resultEstadoI});
};