const getestado_p = require('../dto/getEstadoP');
const getestado_i = require('../dto/getEstadoI');
const getestado_e = require('../dto/getEstadoE');


exports.obtieneEstadoE = async (req, res, next) => {
    let secuencia = 1;

    let resultEstadoE = await getestado_e.getEstadoE(secuencia);

    res.send({"resultEstadoP": resultEstadoE});

};

exports.obtieneEstadoP = async (req, res, next) => {
    let secuencia = 1;

    let resultEstadoP = await getestado_p.getEstadoP(secuencia);

    res.send({"resultEstadoP": resultEstadoP});
};

exports.obtieneEstadoI = async (req, res, next) => {
    let secuencia = 1;

    let resultEstadoI = await getestado_i.getEstadoI(secuencia);

    res.send({"resultEstadoI": resultEstadoI});
};