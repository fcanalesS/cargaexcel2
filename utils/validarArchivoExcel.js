const path = require('path');
const XLSX = require('xlsx');
const headersExcel = require('../utils/headersExcel');
const daoExcel = require('../utils/daoExcel');

const fileRoute = path.join(__dirname, '../uploads');
exports.validarExcel = function(filename){
    // try{
    //     var workbook = XLSX.readFile(fileRoute + "\\" + filename);
    //     var sheet_name_list = workbook.SheetNames;
    //     let rows = daoExcel.getRows(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));

    //     let headers = validaHeaders(getHeaders(workbook.Sheets[sheet_name_list[0]]));

    //     // if (!headers['status']){
    //     //     return {
    //     //         'err_code': 998,
    //     //         'err_msg': 'Error en las Cabeceras del Excel',
    //     //         'fileRoute': fileRoute,
    //     //         'rows': null,
    //     //         'headers': null,
    //     //         'header_error': headers
    //     //     };
    //     // }
    // }catch (e) {
    //     return {'err_code': 999, 'err_msg': e.message, 'fileRoute': fileRoute, 'rows': null, 'headers': null};
    // }
}



//////**********************************/
function getHeaders(sheet){
    var header=0, offset = 1;
    var hdr=[];
    var o = {};
    if (sheet == null || sheet["!ref"] == null) return [];
    var range = o.range !== undefined ? o.range : sheet["!ref"];
    var r;
    if (o.header === 1) header = 1;
    else if (o.header === "A") header = 2;
    else if (Array.isArray(o.header)) header = 3;
    switch (typeof range) {
        case 'string':
            r = safe_decode_range(range);
            break;
        case 'number':
            r = safe_decode_range(sheet["!ref"]);
            r.s.r = range;
            break;
        default:
            r = range;
    }
    if (header > 0) offset = 0;
    var rr = XLSX.utils.encode_row(r.s.r);
    var cols = new Array(r.e.c - r.s.c + 1);
    for (var C = r.s.c; C <= r.e.c; ++C) {
        cols[C] = XLSX.utils.encode_col(C);
        var val = sheet[cols[C] + rr];
        switch (header) {
            case 1:
                hdr.push(C);
                break;
            case 2:
                hdr.push(cols[C]);
                break;
            case 3:
                hdr.push(o.header[C - r.s.c]);
                break;
            default:
                if (val === undefined) continue;
                hdr.push(XLSX.utils.format_cell(val));
        }
    }
    return hdr;
}
function safe_decode_range(range) {
    var o = {s:{c:0,r:0},e:{c:0,r:0}};
    var idx = 0, i = 0, cc = 0;
    var len = range.length;
    for(idx = 0; i < len; ++i) {
        if((cc=range.charCodeAt(i)-64) < 1 || cc > 26) break;
        idx = 26*idx + cc;
    }
    o.s.c = --idx;

    for(idx = 0; i < len; ++i) {
        if((cc=range.charCodeAt(i)-48) < 0 || cc > 9) break;
        idx = 10*idx + cc;
    }
    o.s.r = --idx;

    if(i === len || range.charCodeAt(++i) === 58) { o.e.c=o.s.c; o.e.r=o.s.r; return o; }

    for(idx = 0; i != len; ++i) {
        if((cc=range.charCodeAt(i)-64) < 1 || cc > 26) break;
        idx = 26*idx + cc;
    }
    o.e.c = --idx;

    for(idx = 0; i != len; ++i) {
        if((cc=range.charCodeAt(i)-48) < 0 || cc > 9) break;
        idx = 10*idx + cc;
    }
    o.e.r = --idx;
    return o;
}
/********************************************************/

function validaHeaders (headers){
    let result = [];
    let counter = 0;
    for (let i = 0; i < headers.length; i++){
        let aux = "";
        if ( headersExcel.headers[i].localeCompare(headers[i]) === 0){
            aux = {
                'err_code': 997,
                'col_num': i+1,
                'col_name': headers[i],
                'err_msg': 'La columna ' + headers[i] + ' coincide con "' + headersExcel.headers[i] + '" en la columna: ' + headersExcel.indicesHeaders[(i+1)]
            };
            counter = counter + 1;
        }else{
            aux = {
                'err_code': 996,
                'col_num': i+1,
                'col_name': headers[i],
                'err_msg': 'La columna ' + headers[i] + ' no coincide con ' + headersExcel.headers[i] + ' en la posición: ' + headersExcel.indicesHeaders[(i+1)]
            };
            counter = counter - 1;
        }
        result.push(aux);
    }

    if (counter === 12)
        return {'status': true, 'result': result};
    else
        return {'status': false, 'result': result};
}