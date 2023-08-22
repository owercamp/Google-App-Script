function insertAudio(data, sheetName, spreadsheet) {
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
        case 'eppEspecificoAuditivo':
          arrayData[20] = data[iterator];
          break;
        case 'eppEspecificoAuditivoCopa':
          arrayData[21] = data[iterator];
          break;
        case 'eppEspecificoAuditivoInsercion':
          arrayData[22] = data[iterator];
          break;
        case 'eppEspecificoAuditivoDoble':
          arrayData[23] = data[iterator];
          break;
        case 'pabellonAuricoidoDer':
          arrayData[24] = data[iterator];
          break;
        case 'pabellonAuricoidoDerObs':
          arrayData[25] = data[iterator];
          break;
        case 'pabellonAuricoidoIzq':
          arrayData[26] = data[iterator];
          break;
        case 'pabellonAuricoidoIzqObs':
          arrayData[27] = data[iterator];
          break;
        case 'conductoAuditoidoDer':
          arrayData[28] = data[iterator];
          break;
        case 'conductoAuditoidoDerObs':
          arrayData[29] = data[iterator];
          break;
        case 'conductoAuditoidoIzq':
          arrayData[30] = data[iterator];
          break;
        case 'conductoAuditoidoIzqObs':
          arrayData[31] = data[iterator];
          break;
        case 'membranaTimpoidoDer':
          arrayData[32] = data[iterator];
          break;
        case 'membranaTimpoidoDerObs':
          arrayData[33] = data[iterator];
          break;
        case 'membranaTimpoidoIzq':
          arrayData[34] = data[iterator];
          break;
        case 'membranaTimpoidoIzqObs':
          arrayData[35] = data[iterator];
          break;
        case 'tipoDeExamen':
          arrayData[36] = data[iterator];
          break;
        case 'od500':
          arrayData[37] = data[iterator];
          break;
        case 'od1000':
          arrayData[38] = data[iterator];
          break;
        case 'od2000':
          arrayData[39] = data[iterator];
          break;
        case 'od3000':
          arrayData[40] = data[iterator];
          break;
        case 'od4000':
          arrayData[41] = data[iterator];
          break;
        case 'od6000':
          arrayData[42] = data[iterator];
          break;
        case 'od8000':
          arrayData[43] = data[iterator];
          break;
        case 'oi500':
          arrayData[45] = data[iterator];
          break;
        case 'oi1000':
          arrayData[46] = data[iterator];
          break;
        case 'oi2000':
          arrayData[47] = data[iterator];
          break;
        case 'oi3000':
          arrayData[48] = data[iterator];
          break;
        case 'oi4000':
          arrayData[49] = data[iterator];
          break;
        case 'oi6000':
          arrayData[50] = data[iterator];
          break;
        case 'oi8000':
          arrayData[51] = data[iterator];
          break;
        case 'controlSegunPve':
          arrayData[53] = data[iterator];
          break;
        case 'confirmatoria':
          arrayData[54] = data[iterator];
          break;
        case 'remisionOrl':
          arrayData[55] = data[iterator];
          break;
        case 'pruebasComplementarias':
          arrayData[56] = data[iterator];
          break;
        case 'limpiezaDeOido':
          arrayData[57] = data[iterator];
          break;
        case 'limpiezaOd':
          arrayData[58] = data[iterator];
          break;
        case 'limpiezaOi':
          arrayData[59] = data[iterator];
          break;
        case 'reposoAuditivoExtralab':
          arrayData[60] = data[iterator];
          break;
        case 'rotarDiaadematelefonica':
          arrayData[61] = data[iterator];
          break;
        case 'conducirConVentanasCerradas':
          arrayData[62] = data[iterator];
          break;
        case 'usoDeEppAuditivo':
          arrayData[63] = data[iterator];
          break;
        case 'controlesMensuales':
          arrayData[64] = data[iterator];
          break;
        case 'controlesBimestrales':
          arrayData[65] = data[iterator];
          break;
        case 'controlesTrimestrales':
          arrayData[66] = data[iterator];
          break;
        case 'controles6Meses':
          arrayData[67] = data[iterator];
          break;
        case 'controles1Anio':
          arrayData[68] = data[iterator];
          break;
        case 'diagPpal':
          arrayData[69] = data[iterator];
          break;
        case 'diagInterno':
          arrayData[70] = data[iterator];
          break;
        case 'diagGatiSo':
          arrayData[71] = data[iterator];
          break;
      }
    }

    /** Calculates the ageRange **/
    const age = ageRange(arrayData[9]);
    arrayData[10] = age;
    const working = numberWorking(arrayData[18]);
    arrayData[19] = working;
    const ptaOD = ptaInfo(arrayData[37], arrayData[38], arrayData[39], arrayData[40]);
    arrayData[44] = ptaOD.toFixed(2);
    const ptaOI = ptaInfo(arrayData[45], arrayData[46], arrayData[47], arrayData[48]);
    arrayData[52] = ptaOI.toFixed(2);

    rowRegister.appendRow(arrayData);

  } catch (error) {
    Logger.log(error.message);
  }
}

