const database = require('../database/database');

const baseQuery = `
SELECT BENEFICIOS.SEC_PROCESA_GRUPO9.nextval secuencia
from dual
`; //Consulta por la secuencia disponible

async function get_SEC_PROCESA_GRUPO9() {
    let query = baseQuery;

    const result = await database.simpleExecute(query);

    return result.rows[0]['SECUENCIA'];
}

module.exports.get_SEC_PROCESA_GRUPO9 = get_SEC_PROCESA_GRUPO9;
