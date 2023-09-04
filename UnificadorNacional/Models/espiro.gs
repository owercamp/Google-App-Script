function insertEspiro(data, sheetName, spreadsheet) {
  const rowRegister = spreadsheet.getSheetByName(sheetName);
  const arrayData = [];

  try {
    for (const iterator of Object.keys(data)) {
      switch (iterator) {
        case 'contractedName':
          arrayData[0] = data[iterator];
          break;
        case 'origin':
          arrayData[1] = data[iterator];
          break;
        case 'destiny':
          arrayData[2] = data[iterator];
          break;
        case 'city':
          arrayData[3] = data[iterator];
          break;
        case 'income':
          arrayData[4] = data[iterator];
          break;
        case 'examType':
          arrayData[5] = data[iterator];
          break;
        case 'date':
          arrayData[6] = data[iterator];
          break;
        case 'patient':
          arrayData[7] = data[iterator];
          break;
        case 'numberIdentification':
          arrayData[8] = data[iterator];
          break;
        case 'age':
          arrayData[9] = data[iterator];
          break;
        case 'stratum':
          arrayData[11] = data[iterator];
          break;
        case 'gender':
          arrayData[12] = data[iterator];
          break;
        case 'numberOfChildren':
          arrayData[13] = data[iterator];
          break;
        case 'race':
          arrayData[14] = data[iterator];
          break;
        case 'civilStatus':
          arrayData[15] = data[iterator];
          break;
        case 'scholarship':
          arrayData[16] = data[iterator];
          break;
        case 'post':
          arrayData[17] = data[iterator];
          break;
        case 'durationWorking':
          arrayData[18] = data[iterator];
          break;
        case 'alegias':
          arrayData[20] = data[iterator];
          break;
        case 'alergiasObs':
          arrayData[21] = data[iterator];
          break;
        case 'tuberculosis':
          arrayData[22] = data[iterator];
          break;
        case 'tosCronica':
          arrayData[23] = data[iterator];
          break;
        case 'gripasFrecuentes':
          arrayData[24] = data[iterator];
          break;
        case 'faringitis':
          arrayData[25] = data[iterator];
          break;
        case 'faringoamigdalitis':
          arrayData[26] = data[iterator];
          break;
        case 'rinitis':
          arrayData[27] = data[iterator];
          break;
        case 'sinusitis':
          arrayData[28] = data[iterator];
          break;
        case 'cxTorax':
          arrayData[29] = data[iterator];
          break;
        case 'cxToraxObs':
          arrayData[30] = data[iterator];
          break;
        case 'asmaBronquial':
          arrayData[31] = data[iterator];
          break;
        case 'bronquitis':
          arrayData[32] = data[iterator];
          break;
        case 'neumonia':
          arrayData[33] = data[iterator];
          break;
        case 'trumaCostal':
          arrayData[34] = data[iterator];
          break;
        case 'cancer':
          arrayData[35] = data[iterator];
          break;
        case 'cancerObs':
          arrayData[36] = data[iterator];
          break;
        case 'otrosRespiratorios':
          arrayData[37] = data[iterator];
          break;
        case 'riesgoQuimicoPolvos':
          arrayData[38] = data[iterator];
          break;
        case 'riesgoQuimicoFibras':
          arrayData[39] = data[iterator];
          break;
        case 'riesgoQuimicoLiquidos':
          arrayData[40] = data[iterator];
          break;
        case 'riesgoQuimicoGases':
          arrayData[41] = data[iterator];
          break;
        case 'riesgoQuimicoVapos':
          arrayData[42] = data[iterator];
          break;
        case 'riesgoQuimicoHumos':
          arrayData[43] = data[iterator];
          break;
        case 'riesgoQuimicoMaterialParticulado':
          arrayData[44] = data[iterator];
          break;
        case 'otrosRiesgosQuimicos':
          arrayData[45] = data[iterator];
          break;
        case 'eppEspecificoTapaboca':
          arrayData[46] = data[iterator];
          break;
        case 'eppEspecificoRespirador':
          arrayData[47] = data[iterator];
          break;
        case 'actFisica':
          arrayData[48] = data[iterator];
          break;
        case 'fuma':
          arrayData[49] = data[iterator];
          break;
        case 'cigarrillosDia':
          arrayData[50] = data[iterator];
          break;
        case 'frecuencia':
          arrayData[51] = data[iterator];
          break;
        case 'tiempoEnAnios':
          arrayData[52] = data[iterator];
          break;
        case 'interpretacion':
          arrayData[53] = data[iterator];
          break;
        case 'peso':
          arrayData[54] = data[iterator];
          break;
        case 'talla':
          arrayData[55] = data[iterator];
          break;
      }
    }
  } catch (error) {
    Logger.log(error.message);
  }
}