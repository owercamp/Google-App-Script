class audio extends emoGraph {
  constructor(
    contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", typeID = "", numberIdentification = "", dateOfBirth = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", numberOfChildrenRec = "", race = "", civilStatus = "", scholarship = "", post = "", postRec = "", durationWorking = "", antiquity = "", eppEspecificoAuditivo = 0, eppEspecificoAuditivoCopa = 0, eppEspecificoAuditivoInsercion = 0, eppEspecificoAuditivoDoble = 0, pabellonAuricoidoDer = "NORMAL", pabellonAuricoidoDerObs = "SIN HALLAZGOS", pabellonAuricoidoIzq = "NORMAL", pabellonAuricoidoIzqObs = "SIN HALLAZGOS", conductoAuditoidoDer = "NORMAL", conductoAuditoidoDerObs = "SIN HALLAZGOS", conductoAuditoidoIzq = "NORMAL", conductoAuditoidoIzqObs = "SIN HALLAZGOS", membranaTimpoidoDer = "NORMAL", membranaTimpoidoDerObs = "SIN HALLAZGOS", membranaTimpoidoIzq = "NORMAL", membranaTimpoidoIzqObs = "SIN HALLAZGOS", tipoDeExamen = "VIA AEREA", od500 = 0, od1000 = 0, od2000 = 0, od3000 = 0, od4000 = 0, od6000 = 0, od8000 = 0, ptaOD = 0, oi500 = 0, oi1000 = 0, oi2000 = 0, oi3000 = 0, oi4000 = 0, oi6000 = 0, oi8000 = 0, ptaOI = 0, controlSegunPve = 0, confirmatoria = 0, remisionOrl = 0, pruebasComplementarias = 0, limpiezaDeOido = 0, limpiezaOd = 0, limpiezaOi = 0, reposoAuditivoExtralab = 0, rotarDiaadematelefonica = 0, conducirConVentanasCerradas = 0, usoDeEppAuditivo = 0, controlesMensuales = 0, controlesBimestrales = 0, controlesTrimestrales = 0, controles6Meses = 0, controles1Anio = 0, diagPpal = "", diagInterno = "", diagGatiSo = ""
  ) {
    super(contractedName, origin, destiny, city, income, examType, date, patient, typeID, numberIdentification, dateOfBirth, age, range_age, stratum, gender, numberOfChildren, numberOfChildrenRec, race, civilStatus, scholarship, post, postRec, durationWorking, antiquity);
    this.eppEspecificoAuditivo = eppEspecificoAuditivo;
    this.eppEspecificoAuditivoCopa = eppEspecificoAuditivoCopa;
    this.eppEspecificoAuditivoInsercion = eppEspecificoAuditivoInsercion;
    this.eppEspecificoAuditivoDoble = eppEspecificoAuditivoDoble;
    this.pabellonAuricoidoDer = pabellonAuricoidoDer;
    this.pabellonAuricoidoDerObs = pabellonAuricoidoDerObs;
    this.pabellonAuricoidoIzq = pabellonAuricoidoIzq;
    this.pabellonAuricoidoIzqObs = pabellonAuricoidoIzqObs;
    this.conductoAuditoidoDer = conductoAuditoidoDer;
    this.conductoAuditoidoDerObs = conductoAuditoidoDerObs;
    this.conductoAuditoidoIzq = conductoAuditoidoIzq;
    this.conductoAuditoidoIzqObs = conductoAuditoidoIzqObs;
    this.membranaTimpoidoDer = membranaTimpoidoDer;
    this.membranaTimpoidoDerObs = membranaTimpoidoDerObs;
    this.membranaTimpoidoIzq = membranaTimpoidoIzq;
    this.membranaTimpoidoIzqObs = membranaTimpoidoIzqObs;
    this.tipoDeExamen = tipoDeExamen;
    this.od500 = od500;
    this.od1000 = od1000;
    this.od2000 = od2000;
    this.od3000 = od3000;
    this.od4000 = od4000;
    this.od6000 = od6000;
    this.od8000 = od8000;
    this.ptaOD = ptaOD;
    this.oi500 = oi500;
    this.oi1000 = oi1000;
    this.oi2000 = oi2000;
    this.oi3000 = oi3000;
    this.oi4000 = oi4000;
    this.oi6000 = oi6000;
    this.oi8000 = oi8000;
    this.ptaOI = ptaOI;
    this.controlSegunPve = controlSegunPve;
    this.confirmatoria = confirmatoria;
    this.remisionOrl = remisionOrl;
    this.pruebasComplementarias = pruebasComplementarias;
    this.limpiezaDeOido = limpiezaDeOido;
    this.limpiezaOd = limpiezaOd;
    this.limpiezaOi = limpiezaOi;
    this.reposoAuditivoExtralab = reposoAuditivoExtralab;
    this.rotarDiaadematelefonica = rotarDiaadematelefonica;
    this.conducirConVentanasCerradas = conducirConVentanasCerradas;
    this.usoDeEppAuditivo = usoDeEppAuditivo;
    this.controlesMensuales = controlesMensuales;
    this.controlesBimestrales = controlesBimestrales;
    this.controlesTrimestrales = controlesTrimestrales;
    this.controles6Meses = controles6Meses;
    this.controles1Anio = controles1Anio;
    this.diagPpal = diagPpal;
    this.diagInterno = diagInterno;
    this.diagGatiSo = diagGatiSo;
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
      return "Success";
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
          arrayData[9] = data[iterator];
          break;
        case 'age':
          arrayData[11] = data[iterator];
          break;
        case 'stratum':
          arrayData[13] = data[iterator];
          break;
        case 'gender':
          arrayData[14] = data[iterator];
          break;
        case 'numberOfChildren':
          arrayData[15] = data[iterator];
          break;
        case 'race':
          arrayData[17] = data[iterator];
          break;
        case 'civilStatus':
          arrayData[18] = data[iterator];
          break;
        case 'scholarship':
          arrayData[19] = data[iterator];
          break;
        case 'post':
          arrayData[20] = data[iterator];
          break;
        case 'durationWorking':
          arrayData[22] = data[iterator];
          break;
        case 'eppEspecificoAuditivo':
          arrayData[24] = data[iterator];
          break;
        case 'eppEspecificoAuditivoCopa':
          arrayData[25] = data[iterator];
          break;
        case 'eppEspecificoAuditivoInsercion':
          arrayData[26] = data[iterator];
          break;
        case 'eppEspecificoAuditivoDoble':
          arrayData[27] = data[iterator];
          break;
        case 'pabellonAuricoidoDer':
          arrayData[28] = data[iterator];
          break;
        case 'pabellonAuricoidoDerObs':
          arrayData[29] = data[iterator];
          break;
        case 'pabellonAuricoidoIzq':
          arrayData[30] = data[iterator];
          break;
        case 'pabellonAuricoidoIzqObs':
          arrayData[31] = data[iterator];
          break;
        case 'conductoAuditoidoDer':
          arrayData[32] = data[iterator];
          break;
        case 'conductoAuditoidoDerObs':
          arrayData[33] = data[iterator];
          break;
        case 'conductoAuditoidoIzq':
          arrayData[34] = data[iterator];
          break;
        case 'conductoAuditoidoIzqObs':
          arrayData[35] = data[iterator];
          break;
        case 'membranaTimpoidoDer':
          arrayData[36] = data[iterator];
          break;
        case 'membranaTimpoidoDerObs':
          arrayData[37] = data[iterator];
          break;
        case 'membranaTimpoidoIzq':
          arrayData[38] = data[iterator];
          break;
        case 'membranaTimpoidoIzqObs':
          arrayData[39] = data[iterator];
          break;
        case 'tipoDeExamen':
          arrayData[40] = data[iterator];
          break;
        case 'od500':
          arrayData[41] = data[iterator];
          break;
        case 'od1000':
          arrayData[42] = data[iterator];
          break;
        case 'od2000':
          arrayData[43] = data[iterator];
          break;
        case 'od3000':
          arrayData[44] = data[iterator];
          break;
        case 'od4000':
          arrayData[45] = data[iterator];
          break;
        case 'od6000':
          arrayData[46] = data[iterator];
          break;
        case 'od8000':
          arrayData[47] = data[iterator];
          break;
        case 'oi500':
          arrayData[49] = data[iterator];
          break;
        case 'oi1000':
          arrayData[50] = data[iterator];
          break;
        case 'oi2000':
          arrayData[51] = data[iterator];
          break;
        case 'oi3000':
          arrayData[52] = data[iterator];
          break;
        case 'oi4000':
          arrayData[53] = data[iterator];
          break;
        case 'oi6000':
          arrayData[54] = data[iterator];
          break;
        case 'oi8000':
          arrayData[55] = data[iterator];
          break;
        case 'controlSegunPve':
          arrayData[57] = data[iterator];
          break;
        case 'confirmatoria':
          arrayData[58] = data[iterator];
          break;
        case 'remisionOrl':
          arrayData[59] = data[iterator];
          break;
        case 'pruebasComplementarias':
          arrayData[60] = data[iterator];
          break;
        case 'limpiezaDeOido':
          arrayData[61] = data[iterator];
          break;
        case 'limpiezaOd':
          arrayData[62] = data[iterator];
          break;
        case 'limpiezaOi':
          arrayData[63] = data[iterator];
          break;
        case 'reposoAuditivoExtralab':
          arrayData[64] = data[iterator];
          break;
        case 'rotarDiaadematelefonica':
          arrayData[65] = data[iterator];
          break;
        case 'conducirConVentanasCerradas':
          arrayData[66] = data[iterator];
          break;
        case 'usoDeEppAuditivo':
          arrayData[67] = data[iterator];
          break;
        case 'controlesMensuales':
          arrayData[68] = data[iterator];
          break;
        case 'controlesBimestrales':
          arrayData[69] = data[iterator];
          break;
        case 'controlesTrimestrales':
          arrayData[70] = data[iterator];
          break;
        case 'controles6Meses':
          arrayData[71] = data[iterator];
          break;
        case 'controles1Anio':
          arrayData[72] = data[iterator];
          break;
        case 'diagPpal':
          arrayData[73] = data[iterator];
          break;
        case 'diagInterno':
          arrayData[74] = data[iterator];
          break;
        case 'diagGatiSo':
          arrayData[75] = data[iterator];
          break;
      }
    }

    /** 
     * Calculates the ageRange, working, ptaOD and ptaOI 
     */
    const age = ageRange(arrayData[11]);
    arrayData[12] = age;
    const working = numberWorking(arrayData[22]);
    arrayData[23] = working;
    const ptaOD = ptaInfo(arrayData[41], arrayData[42], arrayData[43], arrayData[44]);
    arrayData[48] = ptaOD.toFixed(2);
    const ptaOI = ptaInfo(arrayData[49], arrayData[50], arrayData[51], arrayData[52]);
    arrayData[56] = ptaOI.toFixed(2);

    const register = new audio(...arrayData);
    delete register.typeID;
    delete register.dateOfBirth;
    delete register.numberOfChildrenRec;
    delete register.postRec;
    const response = audio.registerAudio(register, sheetName, spreadsheet);
    return response;
  } catch (error) {
    Logger.log(`Error: ${error.message}`);
  }
}
