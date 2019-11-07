const database = require("../database/database");

const baseQuery = `
SELECT 
    * 
FROM beneficios.PAMBIZ_REPROCESA_GRUPO9
WHERE 
    PAREGR_SEC IN (:secuencia)
    AND PAREGR_ESTADO='E'
`;

async function getEstadoE(secuencia) {
    let query = baseQuery;
    const result = await database.simpleExecute(query, [secuencia]);
    console.log(result.rows);
    return result.rows;
}

module.exports.getEstadoE = getEstadoE;