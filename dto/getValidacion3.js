const database = require('../database/database');

const baseQuery = `
    select 
        * 
    from 
        BENEFICIOS.PAM_DIAGNOSTICO_CIE10
    where 
    (
        PAM_NFOLIO, 
        PAM_NFOLIO_XNEAR, 
        ISAP_CEMPRESA
    )
    in 
    (
        select 
            PAM_NFOLIO, 
            PAM_NFOLIO_XNEAR, 
            ISAP_CEMPRESA 
        from 
            beneficios.PAMBIZ_REPROCESA_GRUPO9
        where PAREGR_SEC = :secuencia and 
        PAREGR_ESTADO ='P'
    )
`;

async function get_validacion_estado_bd_3(secuencia) {
    let query = baseQuery;

    const result = await database.simpleExecute(query, [secuencia]);

    return result.rows;
}

module.exports.get_validacion_estado_bd_3 = get_validacion_estado_bd_3;