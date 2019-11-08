const XLSX = require('xlsx');
const path = require('path');

const fileName = 'file-1573222462649.xlsx';
const pathUpload = path.join(__dirname, '../uploads');
const pathGeneratedExcel = path.join(__dirname, '../generatedExcels');

exports.crearExcelDescargar = async (estadoP, estadoI, estadoE) => {
    let wb = XLSX.readFile(pathUpload + "/" + fileName);

    let noProcesados = XLSX.utils.json_to_sheet(estadoE);
    let enLiquidacion = XLSX.utils.json_to_sheet(estadoP);

    XLSX.utils.book_append_sheet(wb, noProcesados, "No Procesados");
    XLSX.utils.book_append_sheet(wb, enLiquidacion, "En Liquidación");

    let fileNameOut = pathGeneratedExcel + "/" + "_REPROCESO_" + fileName;
    XLSX.writeFile(wb, fileNameOut );

    return [fileNameOut, fileName];
};
