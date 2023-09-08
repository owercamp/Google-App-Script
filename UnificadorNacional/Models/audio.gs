class audio extends emoGraph {
  constructor(
    contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", numberIdentification = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", race = "", civilStatus = "", scholarship = "", post = "", durationWorking = "", antiquity = "", eppEspecificoAuditivo = 0, eppEspecificoAuditivoCopa = 0, eppEspecificoAuditivoInsercion = 0, eppEspecificoAuditivoDoble = 0, pabellonAuricoidoDer = "NORMAL", pabellonAuricoidoDerObs = "SIN HALLAZGOS", pabellonAuricoidoIzq = "NORMAL", pabellonAuricoidoIzqObs = "SIN HALLAZGOS", conductoAuditoidoDer = "NORMAL", conductoAuditoidoDerObs = "SIN HALLAZGOS", conductoAuditoidoIzq = "NORMAL", conductoAuditoidoIzqObs = "SIN HALLAZGOS", membranaTimpoidoDer = "NORMAL", membranaTimpoidoDerObs = "SIN HALLAZGOS", membranaTimpoidoIzq = "NORMAL", membranaTimpoidoIzqObs = "SIN HALLAZGOS", tipoDeExamen = "VIA AEREA", od500 = 0, od1000 = 0, od2000 = 0, od3000 = 0, od4000 = 0, od6000 = 0, od8000 = 0, ptaOD = 0, oi500 = 0, oi1000 = 0, oi2000 = 0, oi3000 = 0, oi4000 = 0, oi6000 = 0, oi8000 = 0, ptaOI = 0, controlSegunPve = 0, confirmatoria = 0, remisionOrl = 0, pruebasComplementarias = 0, limpiezaDeOido = 0, limpiezaOd = 0, limpiezaOi = 0, reposoAuditivoExtralab = 0, rotarDiaadematelefonica = 0, conducirConVentanasCerradas = 0, usoDeEppAuditivo = 0, controlesMensuales = 0, controlesBimestrales = 0, controlesTrimestrales = 0, controles6Meses = 0, controles1Anio = 0, diagPpal = "", diagInterno = "", diagGatiSo = ""
  ) {
    super(contractedName, origin, destiny, city, income, examType, date, patient, numberIdentification, age, range_age, stratum, gender, numberOfChildren, race, civilStatus, scholarship, post, durationWorking, antiquity);
    this.eppEspecificoAuditivo = eppEspecificoAuditivo; // EPP ESPECIFICO AUDITIVO
    this.eppEspecificoAuditivoCopa = eppEspecificoAuditivoCopa; // EPP ESPECIFICO AUDITIVO COPA
    this.eppEspecificoAuditivoInsercion = eppEspecificoAuditivoInsercion; // EPP ESPECIFICO AUDITIVO INSERCION
    this.eppEspecificoAuditivoDoble = eppEspecificoAuditivoDoble; // EPP ESPECIFICO AUDITIVO DOBLE
    this.pabellonAuricoidoDer = pabellonAuricoidoDer; // PABELLON AURICOIDO DER
    this.pabellonAuricoidoDerObs = pabellonAuricoidoDerObs; // PABELLON AURICOIDO DER OBS
    this.pabellonAuricoidoIzq = pabellonAuricoidoIzq; // PABELLON AURICOIDO IZQ
    this.pabellonAuricoidoIzqObs = pabellonAuricoidoIzqObs; // PABELLON AURICOIDO IZQ OBS
    this.conductoAuditoidoDer = conductoAuditoidoDer; // CONDUCTO AUDITOIDO DER
    this.conductoAuditoidoDerObs = conductoAuditoidoDerObs; // CONDUCTO AUDITOIDO DER OBS
    this.conductoAuditoidoIzq = conductoAuditoidoIzq; // CONDUCTO AUDITOIDO IZQ
    this.conductoAuditoidoIzqObs = conductoAuditoidoIzqObs; // CONDUCTO AUDITOIDO IZQ OBS
    this.membranaTimpoidoDer = membranaTimpoidoDer; // MEMBRANA TIMPOIDO DER
    this.membranaTimpoidoDerObs = membranaTimpoidoDerObs; // MEMBRANA TIMPOIDO DER OBS
    this.membranaTimpoidoIzq = membranaTimpoidoIzq; // MEMBRANA TIMPOIDO IZQ
    this.membranaTimpoidoIzqObs = membranaTimpoidoIzqObs; // MEMBRANA TIMPOIDO IZQ OBS
    this.tipoDeExamen = tipoDeExamen; // TIPO DE EXAMEN
    this.od500 = od500; // OD500
    this.od1000 = od1000; // OD1000
    this.od2000 = od2000; // OD2000
    this.od3000 = od3000; // OD3000
    this.od4000 = od4000; // OD4000
    this.od6000 = od6000; // OD6000
    this.od8000 = od8000; // OD8000
    this.ptaOD = ptaOD; // PTA OD
    this.oi500 = oi500; // OI500
    this.oi1000 = oi1000; // OI1000
    this.oi2000 = oi2000; // OI2000
    this.oi3000 = oi3000; // OI3000
    this.oi4000 = oi4000; // OI4000
    this.oi6000 = oi6000; // OI6000
    this.oi8000 = oi8000; // OI8000
    this.ptaOI = ptaOI; // PTA OI
    this.controlSegunPve = controlSegunPve; // CONTROL SEGUN PVE
    this.confirmatoria = confirmatoria; // CONFIRMATORIA
    this.remisionOrl = remisionOrl; // REMISION ORL
    this.pruebasComplementarias = pruebasComplementarias; // PRUEBAS COMPLEMENTARIAS
    this.limpiezaDeOido = limpiezaDeOido; // LIMPIEZA DE OIDO
    this.limpiezaOd = limpiezaOd; // LIMPIEZA OD
    this.limpiezaOi = limpiezaOi; // LIMPIEZA OI
    this.reposoAuditivoExtralab = reposoAuditivoExtralab; // REPOSO AUDITIVO EXTRALAB
    this.rotarDiaadematelefonica = rotarDiaadematelefonica; // ROTAR DIADEMATELEFONICA
    this.conducirConVentanasCerradas = conducirConVentanasCerradas; // CONDUCIR CON VENTANAS CERRADAS
    this.usoDeEppAuditivo = usoDeEppAuditivo; // USO DE EPP AUDITIVO
    this.controlesMensuales = controlesMensuales; // CONTROLES MENSUALES
    this.controlesBimestrales = controlesBimestrales; // CONTROLES BIMESTRALES
    this.controlesTrimestrales = controlesTrimestrales; // CONTROLES TRIMESTRALES
    this.controles6Meses = controles6Meses; // CONTROLES 6 MESES
    this.controles1Anio = controles1Anio; // CONTROLES 1 ANIO
    this.diagPpal = diagPpal; // DIAGNOSTICO PPAL
    this.diagInterno = diagInterno; // DIAGNOSTICO INTERNO
    this.diagGatiSo = diagGatiSo; // DIAGNOSTICO GATI SO
  }

  /**
   * Registers audio data to a spreadsheet.
   *
   * @param {object} data - The audio data to be registered.
   * @param {string} sheetName - The name of the sheet to register the data in.
   * @param {object} spreadsheet - The spreadsheet object to register the data in.
   * @return {string} The result of the registration ("ok" if successful).
   */
  static registerAudio(data, sheetName, spreadsheet) {
    const rowRegister = spreadsheet.getSheetByName(sheetName);
    try {
      rowRegister.appendRow(Object.values(data));
      return "success";
    } catch (error) {
      Logger.log(error.message);
    }
  };

}

/**
 * Inserts audio data into a spreadsheet.
 *
 * @param {Object} data - the audio data to be inserted
 * @param {string} sheetName - the name of the sheet in the spreadsheet
 * @param {Spreadsheet} spreadsheet - the spreadsheet to insert the data into
 * @return {string} - a message indicating the success of the operation
 */
function insertAudio(data, sheetName, spreadsheet) {
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

    /** 
     * Calculates the ageRange, working, ptaOD and ptaOI 
     */
    const age = ageRange(arrayData[9]);
    arrayData[10] = age;
    const working = numberWorking(arrayData[18]);
    arrayData[19] = working;
    const ptaOD = ptaInfo(arrayData[37], arrayData[38], arrayData[39], arrayData[40]);
    arrayData[44] = ptaOD.toFixed(2);
    const ptaOI = ptaInfo(arrayData[45], arrayData[46], arrayData[47], arrayData[48]);
    arrayData[52] = ptaOI.toFixed(2);

    const register = new audio(...arrayData);
    audio.registerAudio(register, sheetName, spreadsheet);
    return "Success";
  } catch (error) {
    Logger.log(`Error: ${error.message}`);
  }
}

