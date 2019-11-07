const database = require('../database/database');

const baseQuery = `
    select 
        CTACODFINANCIADOR,
        CTANUMCTA,
        CTANUMCOBRO, 
        CTATIPENVIO, 
        CTARUTCONVENIO, 
        CTASECENVIO,
        ctagrupovisacion,
        PAGC_GRUPO,
        CTACODDIAGPRIN 
    from 
        infomedica.imedpam_envcta 
    where 
        (
            CTACODFINANCIADOR, 
            CTANUMCTA, 
            CTANUMCOBRO, 
            CTATIPENVIO, 
            CTARUTCONVENIO, 
            CTASECENVIO
        )
        in 
        (
            select 
                CTACODFINANCIADOR, 
                CTANUMCTA, 
                CTANUMCOBRO, 
                CTATIPENVIO, 
                CTARUTCONVENIO, 
                CTASECENVIO 
            from 
                beneficios.PAMBIZ_REPROCESA_GRUPO9
            where 
                PAREGR_SEC = :secuencia and 
                PAREGR_ESTADO ='P'
        )
`;

async function get_validacion_estado_bd_2(secuencia){
    let query = baseQuery;
    const result = await database.simpleExecute(query, [secuencia]);
    return result.rows;
}

module.exports.get_validacion_estado_bd_2 = get_validacion_estado_bd_2;
