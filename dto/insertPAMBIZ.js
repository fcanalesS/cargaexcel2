const database = require('../database/database');

const baseQuery = `
INSERT INTO
    beneficios.PAMBIZ_REPROCESA_GRUPO9 
    (
        PAREGR_SEC,
        PAM_NFOLIO, 
        PAM_NFOLIO_XNEAR, 
        ISAP_CEMPRESA, 
        DIAG_CDIAGNOSTICO, 
        PAREGR_UCREADOR,
        PAREGR_ESTADO
    )
    VALUES
    (
        :secuencia,
        :pam_nfolio,
        :pam_nfolio_xnear,
        :isap_cempresa,
        :diag_cdiagnostico,
        :paregr_ucreador,
        :paregr_estado
   )
`;

async function insert_PAMBIZ_REPROCESA_GRUPO9(insertData) {
    let query = baseQuery;

    const result = await database.simpleExecute(query, insertData);

    return result;
}

module.exports.insert_PAMBIZ_REPROCESA_GRUPO9 = insert_PAMBIZ_REPROCESA_GRUPO9;


//