const oracledb = require('oracledb');
const dbConfig = require('../utils/dbconfig');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

function simpleExecute(statement, binds = [], opts = {}){
    return new Promise(async (resolve, reject) => {
        let conn;

        opts.outFormat = oracledb.OBJECT;
        opts.autoCommit = true;

        try{
            conn = await oracledb.getConnection(dbConfig);

            const result = await conn.execute(statement, binds, opts);

            resolve(result);
        }catch (err) {
            reject(err);
        } finally {
            if (conn) { // conn assignment worked, need to close
                try {
                    await conn.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    })
}

module.exports.simpleExecute = simpleExecute;

