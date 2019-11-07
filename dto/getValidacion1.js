const database = require('../database/database');

const baseQuery = `
select PAM_PROCESOIMED,CTACODFINANCIADOR, CTANUMCTA, CTANUMCOBRO, CTATIPENVIO, CTARUTCONVENIO, CTASECENVIO,ctaetapa,ctaedoestado ,
IREEN_EDOCIE10, IREEN_FCIE10, IREEN_UCIE10, IREEN_EDOCONTRA, IREEN_FCONTRALORIA, IREEN_UCONTRALORIA, IREEN_FINGR_CIE10, IREEN_UINGR_CIE10, CTAGRUPOVISACION,
pam_nfolio,pam_nfolio_xnear,isap_cempresa
from infomedica.imedpam_resumen_envcta where (CTACODFINANCIADOR, CTANUMCTA, CTANUMCOBRO, CTATIPENVIO, CTARUTCONVENIO, CTASECENVIO)
in (select CTACODFINANCIADOR, CTANUMCTA, CTANUMCOBRO, CTATIPENVIO, CTARUTCONVENIO, CTASECENVIO from beneficios.PAMBIZ_REPROCESA_GRUPO9
where PAREGR_SEC = :secuencia
and PAREGR_ESTADO ='P')
`;

async function get_validacion_estado_bd(secuencia) {
    let query = baseQuery;
    result = await database.simpleExecute(query, [secuencia]);
    return result.rows;
}

//get_validacion_estado_bd(3);
module.exports.get_validacion_estado_bd = get_validacion_estado_bd;