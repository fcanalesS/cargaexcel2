const getSecuencia = require('../dto/getSecuencia');
const getRows = require('../services/getRows');
const path = require('path');
const XLSX = require('xlsx');
const insertPamBiz = require('../dto/insertPAMBIZ');
const utils = require('../utils/setVariables');
const reproceso = require('../dto/execReprocesoGrupo9');

exports.insertDataFile = async (fileName) => {
    let fileRoute = path.join(__dirname, '../uploads/' + fileName);
    let secuencia = await getSecuencia.get_SEC_PROCESA_GRUPO9();

    await utils.setSecuencia(secuencia);

    var workbook = XLSX.readFile(fileRoute);
    var sheet_name_list = workbook.SheetNames;
    let filas = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    let rows = getRows.getRows(filas);


    for(let i = 0; i < rows.length; i++){
        let datosInsertar = [
            secuencia,
            rows[i]["PAM_NFOLIO"],
            rows[i]["PAM_NFOLIO_XNEAR"],
            rows[i]["ISAP_CEMPRESA"],
            rows[i]["DIAG_CDIAGNOSTICO"],
            96572800,
            'I',
        ]

        try{
            console.log("inserta datos ");
            await insertPamBiz.insert_PAMBIZ_REPROCESA_GRUPO9(datosInsertar)
        }catch (e){
            return {error: e.message};
        }
    }

    try{
        console.log("CARGA EL PKG CON EL REPROCESA DEL GRUPO 9");
        await reproceso.exec_PROC_REPROCESA_GRUPO9(secuencia);
    }catch(e){
        return {error: e.message};
    }



    return {mensaje: "Datos insertados correctamente", secuencia: secuencia};
}