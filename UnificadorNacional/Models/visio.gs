class visio extends emoGraph {
  constructor(
    contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", typeID = "", numberIdentification = "", dateOfBirth = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", numberOfChildrenRec = "", race = "", civilStatus = "", scholarship = "", post = "", postRec = "", durationWorking = "", antiquity = "", iluminacionInade = 0, radiacionesUv = 0, malaVentilacion = 0, gasesToxicos = 0, sintomasFotofobia = 0, sintomasOjoRojo = 0, sintomasLagrimeno = 0, sintomasVisionBorrosa = 0, sintomasArdor = 0, sintomasVisionDoble = 0, sintomasCansancio = 0, sintomasMalaVisionCercana = 0, sintomasDolor = 0, sintomasMalaVisionLejana = 0, sintomasSecrecion = 0, sintomasCefalea = 0, otrosSintomas = "SIN DATO", cabezaParpados = "NORMAL", cabezaParpadosObs = "SIN HALLAZGOS", cabezaConjuntivas = "NORMAL", cabezaConjuntivasObs = "SIN HALLAZGOS", cabezaEscleras = "NORMAL", cabezaEsclerasObs = "SIN HALLAZGOS", cabezaPupillas = "NORMAL", cabezaPupillasObs = "SIN HALLAZGOS", impVlOdNormal = 0, impVlOiNormal = 0, impVpOdNormal = 0, impVpOiNormal = 0, impVlOdDisminuido = 0, impVlOiDisminuido = 0, impVpOdDisminuido = 0, impVpOiDisminuido = 0, impVlOdNormalRx = 0, impVlOiNormalRx = 0, impVpOdNormalRx = 0, impVpOiNormalRx = 0, impVlOdDisminuidoRx = 0, impVlOiDisminuidoRx = 0, impVpOdDisminuidoRx = 0, impVpOiDisminuidoRx = 0, resultVisio = "", impDiagObs = "NO REFIERE", recCorrecionVisualParaTrabajar = 0, recUsoRxParaVisionProx = 0, recUsoArVideoTrmina = 0, recUsoRxDescanso = 0, recUsoLentesProt__Solar = 0, recUsoPermanenteRxOptica = 0, recUsoEppVisual = 0, recPyp = 0, recPausasActivas = 0, recLubricanteOcular = 0, recomendacionesObs = "NO REFIERE", remValoracionOftalm_ = 0, remValoracionOpto__Completa = 0, remTopografiaCornea = 0, remTratam__Ortoptica = 0, remTestFarnsworth = 0, realizarPruebaAmbulatoria = 0, otrosRemisiones = 0, controlMensual = 0, controlesBimestrales = 0, controlTrimestral = 0, control6Meses = 0, control1Ano = 0, controlConfirmatoria = 0
  ) {
    super(contractedName, origin, destiny, city, income, examType, date, patient, typeID, numberIdentification, dateOfBirth, age, range_age, stratum, gender, numberOfChildren, numberOfChildrenRec, race, civilStatus, scholarship, post, postRec, durationWorking, antiquity);
    this.iluminacionInade = iluminacionInade;
    this.radiacionesUv = radiacionesUv;
    this.malaVentilacion = malaVentilacion;
    this.gasesToxicos = gasesToxicos;
    this.sintomasFotofobia = sintomasFotofobia;
    this.sintomasOjoRojo = sintomasOjoRojo;
    this.sintomasLagrimeno = sintomasLagrimeno;
    this.sintomasVisionBorrosa = sintomasVisionBorrosa;
    this.sintomasArdor = sintomasArdor;
    this.sintomasVisionDoble = sintomasVisionDoble;
    this.sintomasCansancio = sintomasCansancio;
    this.sintomasMalaVisionCercana = sintomasMalaVisionCercana;
    this.sintomasDolor = sintomasDolor;
    this.sintomasMalaVisionLejana = sintomasMalaVisionLejana;
    this.sintomasSecrecion = sintomasSecrecion;
    this.sintomasCefalea = sintomasCefalea;
    this.otrosSintomas = otrosSintomas;
    this.cabezaParpados = cabezaParpados;
    this.cabezaParpadosObs = cabezaParpadosObs;
    this.cabezaConjuntivas = cabezaConjuntivas;
    this.cabezaConjuntivasObs = cabezaConjuntivasObs;
    this.cabezaEscleras = cabezaEscleras;
    this.cabezaEsclerasObs = cabezaEsclerasObs;
    this.cabezaPupillas = cabezaPupillas;
    this.cabezaPupillasObs = cabezaPupillasObs;
    this.impVlOdNormal = impVlOdNormal;
    this.impVlOiNormal = impVlOiNormal;
    this.impVpOdNormal = impVpOdNormal;
    this.impVpOiNormal = impVpOiNormal;
    this.impVlOdDisminuido = impVlOdDisminuido;
    this.impVlOiDisminuido = impVlOiDisminuido;
    this.impVpOdDisminuido = impVpOdDisminuido;
    this.impVpOiDisminuido = impVpOiDisminuido;
    this.impVlOdNormalRx = impVlOdNormalRx;
    this.impVlOiNormalRx = impVlOiNormalRx;
    this.impVpOdNormalRx = impVpOdNormalRx;
    this.impVpOiNormalRx = impVpOiNormalRx;
    this.impVlOdDisminuidoRx = impVlOdDisminuidoRx;
    this.impVlOiDisminuidoRx = impVlOiDisminuidoRx;
    this.impVpOdDisminuidoRx = impVpOdDisminuidoRx;
    this.impVpOiDisminuidoRx = impVpOiDisminuidoRx;
    this.resultVisio = resultVisio;
    this.impDiagObs = impDiagObs;
    this.recCorrecionVisualParaTrabajar = recCorrecionVisualParaTrabajar;
    this.recUsoRxParaVisionProx = recUsoRxParaVisionProx;
    this.recUsoArVideoTrmina = recUsoArVideoTrmina;
    this.recUsoRxDescanso = recUsoRxDescanso;
    this.recUsoLentesProt__Solar = recUsoLentesProt__Solar;
    this.recUsoPermanenteRxOptica = recUsoPermanenteRxOptica;
    this.recUsoEppVisual = recUsoEppVisual;
    this.recPyp = recPyp;
    this.recPausasActivas = recPausasActivas;
    this.recLubricanteOcular = recLubricanteOcular;
    this.recomendacionesObs = recomendacionesObs;
    this.remValoracionOftalm_ = remValoracionOftalm_;
    this.remValoracionOpto__Completa = remValoracionOpto__Completa;
    this.remTopografiaCornea = remTopografiaCornea;
    this.remTratam__Ortoptica = remTratam__Ortoptica;
    this.remTestFarnsworth = remTestFarnsworth;
    this.realizarPruebaAmbulatoria = realizarPruebaAmbulatoria;
    this.otrosRemisiones = otrosRemisiones;
    this.controlMensual = controlMensual;
    this.controlesBimestrales = controlesBimestrales;
    this.controlTrimestral = controlTrimestral;
    this.control6Meses = control6Meses;
    this.control1Ano = control1Ano;
    this.controlConfirmatoria = controlConfirmatoria;
  }

  /**
   * Inserts the given data into the specified sheet of a spreadsheet.
   *
   * @param {any} data - The data to be inserted.
   * @param {string} sheetName - The name of the sheet in the spreadsheet.
   * @param {Spreadsheet} spreadsheet - The spreadsheet object.
   * @return {string} - Returns "Success" if the data is successfully inserted.
   */
  static registerVisio(data, sheetName, spreadsheet) {
    const rowRegister = spreadsheet.getSheetByName(sheetName);
    try {
      rowRegister.appendRow(Object.values(data));
      return "Success";
    } catch (error) {
      Logger.log(error);
    }
  }
}
/**
 * Inserts visio data into a spreadsheet.
 *
 * @param {Object} data - the data to be inserted
 * @param {string} sheetName - the name of the sheet to insert the data into
 * @param {Spreadsheet} spreadsheet - the spreadsheet to insert the data into
 */
function insertVisio(data, sheetName, spreadsheet) {
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
        case 'iluminacionInade':
          arrayData[24] = data[iterator];
          break;
        case 'radiacionesUv':
          arrayData[25] = data[iterator];
          break;
        case 'malaVentilacion':
          arrayData[26] = data[iterator];
          break;
        case 'gasesToxicos':
          arrayData[27] = data[iterator];
          break;
        case 'sintomasFotofobia':
          arrayData[28] = data[iterator];
          break;
        case 'sintomasOjoRojo':
          arrayData[29] = data[iterator];
          break;
        case 'sintomasLagrimeno':
          arrayData[30] = data[iterator];
          break;
        case 'sintomasVisionBorrosa':
          arrayData[31] = data[iterator];
          break;
        case 'sintomasArdor':
          arrayData[32] = data[iterator];
          break;
        case 'sintomasVisionDoble':
          arrayData[33] = data[iterator];
          break;
        case 'sintomasCansancio':
          arrayData[34] = data[iterator];
          break;
        case 'sintomasMalaVisionCercana':
          arrayData[35] = data[iterator];
          break;
        case 'sintomasDolor':
          arrayData[36] = data[iterator];
          break;
        case 'sintomasMalaVisionLejana':
          arrayData[37] = data[iterator];
          break;
        case 'sintomasSecrecion':
          arrayData[38] = data[iterator];
          break;
        case 'sintomasCefalea':
          arrayData[39] = data[iterator];
          break;
        case 'otrosSintomas':
          arrayData[40] = data[iterator];
          break;
        case 'cabezaParpados':
          arrayData[41] = data[iterator];
          break;
        case 'cabezaParpadosObs':
          arrayData[42] = data[iterator];
          break;
        case 'cabezaConjuntivas':
          arrayData[43] = data[iterator];
          break;
        case 'cabezaConjuntivasObs':
          arrayData[44] = data[iterator];
          break;
        case 'cabezaEscleras':
          arrayData[45] = data[iterator];
          break;
        case 'cabezaEsclerasObs':
          arrayData[46] = data[iterator];
          break;
        case 'cabezaPupillas':
          arrayData[47] = data[iterator];
          break;
        case 'cabezaPupillasObs':
          arrayData[48] = data[iterator];
          break;
        case 'impVlOdNormal':
          arrayData[49] = data[iterator];
          break;
        case 'impVlOiNormal':
          arrayData[50] = data[iterator];
          break;
        case 'impVpOdNormal':
          arrayData[51] = data[iterator];
          break;
        case 'impVpOiNormal':
          arrayData[52] = data[iterator];
          break;
        case 'impVlOdDisminuido':
          arrayData[53] = data[iterator];
          break;
        case 'impVlOiDisminuido':
          arrayData[54] = data[iterator];
          break;
        case 'impVpOdDisminuido':
          arrayData[55] = data[iterator];
          break;
        case 'impVpOiDisminuido':
          arrayData[56] = data[iterator];
          break;
        case 'impVlOdNormalRx':
          arrayData[57] = data[iterator];
          break;
        case 'impVlOiNormalRx':
          arrayData[58] = data[iterator];
          break;
        case 'impVpOdNormalRx':
          arrayData[59] = data[iterator];
          break;
        case 'impVpOiNormalRx':
          arrayData[60] = data[iterator];
          break;
        case 'impVlOdDisminuidoRx':
          arrayData[61] = data[iterator];
          break;
        case 'impVlOiDisminuidoRx':
          arrayData[62] = data[iterator];
          break;
        case 'impVpOdDisminuidoRx':
          arrayData[63] = data[iterator];
          break;
        case 'impVpOiDisminuidoRx':
          arrayData[64] = data[iterator];
          break;
        case 'impDiagObs':
          arrayData[66] = data[iterator];
          break;
        case 'recCorrecionVisualParaTrabajar':
          arrayData[67] = data[iterator];
          break;
        case 'recUsoRxParaVisionProx':
          arrayData[68] = data[iterator];
          break;
        case 'recUsoArVideoTrmina':
          arrayData[69] = data[iterator];
          break;
        case 'recUsoRxDescanso':
          arrayData[70] = data[iterator];
          break;
        case 'recUsoLentesProt__Solar':
          arrayData[71] = data[iterator];
          break;
        case 'recUsoPermanenteRxOptica':
          arrayData[72] = data[iterator];
          break;
        case 'recUsoEppVisual':
          arrayData[73] = data[iterator];
          break;
        case 'recPyp':
          arrayData[74] = data[iterator];
          break;
        case 'recPausasActivas':
          arrayData[75] = data[iterator];
          break;
        case 'recLubricanteOcular':
          arrayData[76] = data[iterator];
          break;
        case 'recomendacionesObs':
          arrayData[77] = data[iterator];
          break;
        case 'remValoracionOftalm_':
          arrayData[78] = data[iterator];
          break;
        case 'remValoracionOpto__Completa':
          arrayData[79] = data[iterator];
          break;
        case 'remTopografiaCornea':
          arrayData[80] = data[iterator];
          break;
        case 'remTratam__Ortoptica':
          arrayData[81] = data[iterator];
          break;
        case 'remTestFarnsworth':
          arrayData[82] = data[iterator];
          break;
        case 'realizarPruebaAmbulatoria':
          arrayData[83] = data[iterator];
          break;
        case 'otrosRemisiones':
          arrayData[84] = data[iterator];
          break;
        case 'controlMensual':
          arrayData[85] = data[iterator];
          break;
        case 'controlesBimestrales':
          arrayData[86] = data[iterator];
          break;
        case 'controlTrimestral':
          arrayData[87] = data[iterator];
          break;
        case 'control6Meses':
          arrayData[88] = data[iterator];
          break;
        case 'control1Ano':
          arrayData[89] = data[iterator];
          break;
        case 'controlConfirmatoria':
          arrayData[90] = data[iterator];
          break;
      }
    }

    /** 
     * Calculates the ageRange, numberWorking and totalImp 
     */
    const age = ageRange(arrayData[11]);
    arrayData[12] = age;
    const working = numberWorking(arrayData[22]);
    arrayData[23] = working;
    const totalImp = diagnosticsImp(arrayData[49], arrayData[50], arrayData[51], arrayData[52], arrayData[53], arrayData[54], arrayData[55], arrayData[56], arrayData[57], arrayData[58], arrayData[59], arrayData[60], arrayData[61], arrayData[62], arrayData[63], arrayData[64]);
    arrayData[65] = isNaN(totalImp) ? `Valor no valido ${totalImp}` : totalImp;

    const register = new visio(...arrayData);
    delete register.typeID;
    delete register.dateOfBirth;
    delete register.numberOfChildrenRec;
    delete register.postRec;
    const response = visio.registerVisio(register, sheetName, spreadsheet);
    return response;

  } catch (error) {
    console.log(error.message);
  }
}
