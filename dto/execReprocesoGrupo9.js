const database = require('../database/database');

const baseQuery = `
declare
P_PAREGR_SEC number(12);
p_usuario varchar2(8);
P_RESP varchar2(2000);
begin
    P_PAREGR_SEC:= :secuencia;
    P_USUARIO:='96572800';
    P_RESP:='';
    dbms_output.enable(NULL);
    BEGIN
        BENEFICIOS.PKG_PROCFUN_MANTENEDORES.PROC_REPROCESA_GRUPO9(P_PAREGR_SEC, P_USUARIO, P_RESP);    
    exception when others then 
      dbms_output.put_line('[ Error PKG_PROCFUN_MANTENEDORES.PROC_REPROCESA_GRUPO9]'||sqlerrm); 
    end; 
    dbms_output.put_line('[P_RESP ]'||P_RESP); 
   COMMIT;
end;
`;

async function exec_PROC_REPROCESA_GRUPO9(secuencia) {
    let query = baseQuery;
    const result = await database.simpleExecute(query, [parseInt(secuencia)]);
    return result;
}
module.exports.exec_PROC_REPROCESA_GRUPO9 = exec_PROC_REPROCESA_GRUPO9;