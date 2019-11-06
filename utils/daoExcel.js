
exports.getRows = function (rows) {

    var products = [];
    var i = 0;
    rows.forEach(e => {
        let aux = {
            'ISAP_CEMPRESA': e['ISAP_CEMPRESA'],
            'PAM_NFOLIO': e['PAM_NFOLIO'],
            'PAM_NFOLIO_XNEAR': e['PAM_NFOLIO_XNEAR'],
            'CANAL_VF': e['CANAL_VF'],
            'ETAPA': e['ETAPA'],
            'PROCEDENCIA': e['PROCEDENCIA'],
            'ID_CASO_BIZAGI': e['ID_CASO_BIZAGI'],
            'PRESTADOR': e['PRESTADOR'],
            'Dia_de_XPAM_FRECEP_AGE': e['Día de XPAM_FRECEP_AGE'],
            'DIAG_CDIAGNOSTICO': e['DIAG_CDIAGNOSTICO'],
            'DIAG_TDESCRIPCION': e['DIAG_TDESCRIPCION'],
            'TIPO_ATENCION': e['TIPO ATENCION']
        };
        products.push(aux);
        i = i + 1;
    });

    return products;
};