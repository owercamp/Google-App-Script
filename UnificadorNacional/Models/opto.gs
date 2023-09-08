class opto extends emoGraph {
  constructor(
    contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", numberIdentification = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", race = "", civilStatus = "", scholarship = "", post = "", durationWorking = "", antiquity = "", visioAntLaboralIluminacionInadecuada = 0, visioAntLaboralUsuarioComputador = 0, visioAntLaboralVisioRadiacionesUv = 0, visioAntLaboralCambiosTemperatura = 0, visioAntLaboralMalaventilacion = 0, visioAntLaboralGasesToxicos = 0, sintomasFotofobia = 0, sintomasOjoRojo = 0, sintomasLagrimeo = 0, sintomasVisionBorrosa = 0, sintomasArdor = 0, sintomasVisionDoble = 0, sintomasCansancio = 0, sintomasMalavisionCercana = 0, sintomasDolor = 0, sintomasMalavisionLejana = 0, sintomasSecrecion = 0, sintomasCefalea = 0, otrosSintomas = "NO REFIERE", cabezaParpados = "", cabezaParpadosObs = "", cabezaConjuntivas = "", cabezaConjuntivasObs = "", cabezaEscleras = "", cabezaEsclerasObs = "", cabezaPupillas = "", cabezaPupillasObs = "", motOculCovertTestLejos = "", motOculCovertTestCerca = "", estadoDeCorreccion = "", patologiaOcular = "", diagPpal = "", diagObs = "", diagRel1 = "", diagRel2 = "", diagRel3 = "", recCorreccionVisualParaTrabajar = 0, recUsoArVideoTerminal = 0, recUsoDeLentesDeProteccionSolar = 0, recUsoEppVisual = 0, recPausasActivas = 0, recUsoRxVisionProxima = 0, recUsoRxDescanso = 0, recUsoPermanenteRxOptica = 0, recPyp = 0, recLubricanteOcular = 0, recomendacionesObs = "NO REFIERE", remValoracionOftalm = 0, remTopografiaCornea = 0, remTratamientoOrtop = 0, remTestFarnsworth = 0, realizarPruebaAmbulatoria = 0, remisionesObs = "NO REFIERE", controlesMensual = 0, controlesBimestrales = 0, controlesTrimestrales = 0, controles6Meses = 0, controles1Anio = 0, controlesConfirmatoria = 0
  ) {
    super(contractedName, origin, destiny, city, income, examType, date, patient, numberIdentification, age, range_age, stratum, gender, numberOfChildren, race, civilStatus, scholarship, post, durationWorking, antiquity);
    this.visioAntLaboralIluminacionInadecuada = visioAntLaboralIluminacionInadecuada;
    this.visioAntLaboralUsuarioComputador = visioAntLaboralUsuarioComputador;
    this.visioAntLaboralVisioRadiacionesUv = visioAntLaboralVisioRadiacionesUv;
    this.visioAntLaboralCambiosTemperatura = visioAntLaboralCambiosTemperatura;
    this.visioAntLaboralMalaventilacion = visioAntLaboralMalaventilacion;
    this.visioAntLaboralGasesToxicos = visioAntLaboralGasesToxicos;
    this.sintomasFotofobia = sintomasFotofobia;
    this.sintomasOjoRojo = sintomasOjoRojo;
    this.sintomasLagrimeo = sintomasLagrimeo;
    this.sintomasVisionBorrosa = sintomasVisionBorrosa;
    this.sintomasArdor = sintomasArdor;
    this.sintomasVisionDoble = sintomasVisionDoble;
    this.sintomasCansancio = sintomasCansancio;
    this.sintomasMalavisionCercana = sintomasMalavisionCercana;
    this.sintomasDolor = sintomasDolor;
    this.sintomasMalavisionLejana = sintomasMalavisionLejana;
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
    this.motOculCovertTestLejos = motOculCovertTestLejos;
    this.motOculCovertTestCerca = motOculCovertTestCerca;
    this.estadoDeCorreccion = estadoDeCorreccion;
    this.patologiaOcular = patologiaOcular;
    this.diagPpal = diagPpal;
    this.diagObs = diagObs;
    this.diagRel1 = diagRel1;
    this.diagRel2 = diagRel2;
    this.diagRel3 = diagRel3;
    this.recCorreccionVisualParaTrabajar = recCorreccionVisualParaTrabajar;
    this.recUsoArVideoTerminal = recUsoArVideoTerminal;
    this.recUsoDeLentesDeProteccionSolar = recUsoDeLentesDeProteccionSolar;
    this.recUsoEppVisual = recUsoEppVisual;
    this.recPausasActivas = recPausasActivas;
    this.recUsoRxVisionProxima = recUsoRxVisionProxima;
    this.recUsoRxDescanso = recUsoRxDescanso;
    this.recUsoPermanenteRxOptica = recUsoPermanenteRxOptica;
    this.recPyp = recPyp;
    this.recLubricanteOcular = recLubricanteOcular;
    this.recomendacionesObs = recomendacionesObs;
    this.remValoracionOftalm = remValoracionOftalm;
    this.remTopografiaCornea = remTopografiaCornea;
    this.remTratamientoOrtop = remTratamientoOrtop;
    this.remTestFarnsworth = remTestFarnsworth;
    this.realizarPruebaAmbulatoria = realizarPruebaAmbulatoria;
    this.remisionesObs = remisionesObs;
    this.controlesMensual = controlesMensual;
    this.controlesBimestrales = controlesBimestrales;
    this.controlesTrimestrales = controlesTrimestrales;
    this.controles6Meses = controles6Meses;
    this.controles1Anio = controles1Anio;
    this.controlesConfirmatoria = controlesConfirmatoria;
  }

  /**
   * Registers the opto data into the specified sheet of the given spreadsheet.
   *
   * @param {any} data - The data to be registered.
   * @param {string} sheetName - The name of the sheet to register the data in.
   * @param {object} spreadsheet - The spreadsheet object.
   * @return {string} Returns "Success" if the data is successfully registered.
   */
  static registerOpto(data, sheetName, spreadsheet) {
    const rowRegister = spreadsheet.getSheetByName(sheetName);
    try {
      rowRegister.appendRow(Object.values(data));
      return "Success";
    } catch (error) {
      Logger.log(error.message);
    }
  }
}
/**
 * Inserts opto data into a spreadsheet.
 *
 * @param {Object} data - the data to be inserted
 * @param {string} sheetName - the name of the sheet to insert the data into
 * @param {Spreadsheet} spreadsheet - the spreadsheet to insert the data into
 */
function insertOpto(data, sheetName, spreadsheet) {
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
        case 'visioAntLaboralIluminacionInadecuada':
          arrayData[20] = data[iterator];
          break;
        case 'visioAntLaboralUsuarioComputador':
          arrayData[21] = data[iterator];
          break;
        case 'visioAntLaboralVisioRadiacionesUv':
          arrayData[22] = data[iterator];
          break;
        case 'visioAntLaboralCambiosTemperatura':
          arrayData[23] = data[iterator];
          break;
        case 'visioAntLaboralMalaventilacion':
          arrayData[24] = data[iterator];
          break;
        case 'visioAntLaboralGasesToxicos':
          arrayData[25] = data[iterator];
          break;
        case 'sintomasFotofobia':
          arrayData[26] = data[iterator];
          break;
        case 'sintomasOjoRojo':
          arrayData[27] = data[iterator];
          break;
        case 'sintomasLagrimeo':
          arrayData[28] = data[iterator];
          break;
        case 'sintomasVisionBorrosa':
          arrayData[29] = data[iterator];
          break;
        case 'sintomasArdor':
          arrayData[30] = data[iterator];
          break;
        case 'sintomasVisionDoble':
          arrayData[31] = data[iterator];
          break;
        case 'sintomasCansancio':
          arrayData[32] = data[iterator];
          break;
        case 'sintomasMalavisionCercana':
          arrayData[33] = data[iterator];
          break;
        case 'sintomasDolor':
          arrayData[34] = data[iterator];
          break;
        case 'sintomasMalavisionLejana':
          arrayData[35] = data[iterator];
          break;
        case 'sintomasSecrecion':
          arrayData[36] = data[iterator];
          break;
        case 'sintomasCefalea':
          arrayData[37] = data[iterator];
          break;
        case 'otrosSintomas':
          arrayData[38] = data[iterator];
          break;
        case 'cabezaParpados':
          arrayData[39] = data[iterator];
          break;
        case 'cabezaParpadosObs':
          arrayData[40] = data[iterator];
          break;
        case 'cabezaConjuntivas':
          arrayData[41] = data[iterator];
          break;
        case 'cabezaConjuntivasObs':
          arrayData[42] = data[iterator];
          break;
        case 'cabezaEscleras':
          arrayData[43] = data[iterator];
          break;
        case 'cabezaEsclerasObs':
          arrayData[44] = data[iterator];
          break;
        case 'cabezaPupillas':
          arrayData[45] = data[iterator];
          break;
        case 'cabezaPupillasObs':
          arrayData[46] = data[iterator];
          break;
        case 'motOculCovertTestLejos':
          arrayData[47] = data[iterator];
          break;
        case 'motOculCovertTestCerca':
          arrayData[48] = data[iterator];
          break;
        case 'estadoDeCorreccion':
          arrayData[49] = data[iterator];
          break;
        case 'patologiaOcular':
          arrayData[50] = data[iterator];
          break;
        case 'diagPpal':
          arrayData[51] = data[iterator];
          break;
        case 'diagObs':
          arrayData[52] = data[iterator];
          break;
        case 'diagRel1':
          arrayData[53] = data[iterator];
          break;
        case 'diagRel2':
          arrayData[54] = data[iterator];
          break;
        case 'diagRel3':
          arrayData[55] = data[iterator];
          break;
        case 'recCorreccionVisualParaTrabajar':
          arrayData[56] = data[iterator];
          break;
        case 'recUsoArVideoTerminal':
          arrayData[57] = data[iterator];
          break;
        case 'recUsoDeLentesDeProteccionSolar':
          arrayData[58] = data[iterator];
          break;
        case 'recUsoEppVisual':
          arrayData[59] = data[iterator];
          break;
        case 'recPausasActivas':
          arrayData[60] = data[iterator];
          break;
        case 'recUsoRxVisionProxima':
          arrayData[61] = data[iterator];
          break;
        case 'recUsoRxDescanso':
          arrayData[62] = data[iterator];
          break;
        case 'recUsoPermanenteRxOptica':
          arrayData[63] = data[iterator];
          break;
        case 'recPyp':
          arrayData[64] = data[iterator];
          break;
        case 'recLubricanteOcular':
          arrayData[65] = data[iterator];
          break;
        case 'recomendacionesObs':
          arrayData[66] = data[iterator];
          break;
        case 'remValoracionOftalm':
          arrayData[67] = data[iterator];
          break;
        case 'remTopografiaCornea':
          arrayData[68] = data[iterator];
          break;
        case 'remTratamientoOrtop':
          arrayData[69] = data[iterator];
          break;
        case 'remTestFarnsworth':
          arrayData[70] = data[iterator];
          break;
        case 'realizarPruebaAmbulatoria':
          arrayData[71] = data[iterator];
          break;
        case 'remisionesObs':
          arrayData[72] = data[iterator];
          break;
        case 'controlesMensual':
          arrayData[73] = data[iterator];
          break;
        case 'controlesBimestrales':
          arrayData[74] = data[iterator];
          break;
        case 'controlesTrimestrales':
          arrayData[75] = data[iterator];
          break;
        case 'controles6Meses':
          arrayData[76] = data[iterator];
          break;
        case 'controles1Anio':
          arrayData[77] = data[iterator];
          break;
        case 'controlesConfirmatoria':
          arrayData[78] = data[iterator];
          break;
      }
    }

    /** 
     * Calculates the ageRange and numberWorking 
     */
    const age = ageRange(arrayData[9]);
    arrayData[10] = age;
    const working = numberWorking(arrayData[18]);
    arrayData[19] = working;

    const register = new opto(...arrayData);
    const response = opto.registerOpto(register, sheetName, spreadsheet);
    return response;

  } catch (error) {
    Logger.log(error.message);
  }
}