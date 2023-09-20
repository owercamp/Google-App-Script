class espiro extends emoGraph {
  constructor(
    contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", numberIdentification = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", numberOfChildrenRec = "", race = "", civilStatus = "", scholarship = "", post = "", postRec = "", durationWorking = "", antiquity = "", alegias = 0, alergiasObs = "NO REFIERE", tuberculosis = 0, tosCronica = 0, gripasFrecuentes = 0, faringitis = 0, faringoamigdalitis = 0, rinitis = 0, sinusitis = 0, cxTorax = 0, cxToraxObs = "NO REFIERE", asmaBronquial = 0, bronquitis = 0, neumonia = 0, trumaCostal = 0, cancer = 0, cancerObs = "NO REFIERE", otrosRespiratorios = "NO REFIERE", riesgoQuimicoPolvos = 0, riesgoQuimicoFibras = 0, riesgoQuimicoLiquidos = 0, riesgoQuimicoGases = 0, riesgoQuimicoVapos = 0, riesgoQuimicoHumos = 0, riesgoQuimicoMaterialParticulado = 0, otrosRiesgosQuimicos = "NO REFIERE", eppEspecificoTapaboca = 0, eppEspecificoRespirador = 0, actFisica = "", fuma = "", cigarrillosDia = "", frecuencia = "", tiempoEnAnios = "", interpretacion = "", peso = "", talla = "", imc = "", clasiIMC = "", fvcPredDiag = "", fvcTeorDiag = "", fev1PredDiag = "", fev1TeorDiag = "", fev1FvcPredDiag = "", fev1FvcTeorDiag = "", pefPredDiag = "", pefTeorDiag = "", fef2575PredDiag = "", fef2575TeorDiag = "", diagPpal = "", diagObs = "NO REFIERE", diagRel1 = 0, diagRel2 = 0, diagRel3 = 0, tipoInterpretacion = "", tipoGrado = "", resultadoEspiroMetria = "", recGralesDejarDeFumar = 0, recGralesContinuarControlesEps = 0, recGralesBajarDePeso = 0, recGralesTomarRayosXTorax = 0, recGralesRealizarEjerc3XSemana = 0, recGralesValoracEPSXNeumologia = 0, recLabUtilizarEpr = 0, recLabIngresarSve = 0, controlesMensual = 0, controlesBimestrales = 0, controlesTrimestral = 0, controlesSemestral = 0, controlesAnual = 0, controlesConfirmatoria = 0, tecnicaAceptable = ""
  ) {
    super(contractedName, origin, destiny, city, income, examType, date, patient, numberIdentification, age, range_age, stratum, gender, numberOfChildren, numberOfChildrenRec, race, civilStatus, scholarship, post, postRec, durationWorking, antiquity);
    this.alegias = alegias;
    this.alergiasObs = alergiasObs;
    this.tuberculosis = tuberculosis;
    this.tosCronica = tosCronica;
    this.gripasFrecuentes = gripasFrecuentes;
    this.faringitis = faringitis;
    this.faringoamigdalitis = faringoamigdalitis;
    this.rinitis = rinitis;
    this.sinusitis = sinusitis;
    this.cxTorax = cxTorax;
    this.cxToraxObs = cxToraxObs;
    this.asmaBronquial = asmaBronquial;
    this.bronquitis = bronquitis;
    this.neumonia = neumonia;
    this.trumaCostal = trumaCostal;
    this.cancer = cancer;
    this.cancerObs = cancerObs;
    this.otrosRespiratorios = otrosRespiratorios;
    this.riesgoQuimicoPolvos = riesgoQuimicoPolvos;
    this.riesgoQuimicoFibras = riesgoQuimicoFibras;
    this.riesgoQuimicoLiquidos = riesgoQuimicoLiquidos;
    this.riesgoQuimicoGases = riesgoQuimicoGases;
    this.riesgoQuimicoVapos = riesgoQuimicoVapos;
    this.riesgoQuimicoHumos = riesgoQuimicoHumos;
    this.riesgoQuimicoMaterialParticulado = riesgoQuimicoMaterialParticulado;
    this.otrosRiesgosQuimicos = otrosRiesgosQuimicos;
    this.eppEspecificoTapaboca = eppEspecificoTapaboca;
    this.eppEspecificoRespirador = eppEspecificoRespirador;
    this.actFisica = actFisica;
    this.fuma = fuma;
    this.cigarrillosDia = cigarrillosDia;
    this.frecuencia = frecuencia;
    this.tiempoEnAnios = tiempoEnAnios;
    this.interpretacion = interpretacion;
    this.peso = peso;
    this.talla = talla;
    this.imc = imc;
    this.clasiIMC = clasiIMC;
    this.fvcPredDiag = fvcPredDiag;
    this.fvcTeorDiag = fvcTeorDiag;
    this.fev1PredDiag = fev1PredDiag;
    this.fev1TeorDiag = fev1TeorDiag;
    this.fev1FvcPredDiag = fev1FvcPredDiag;
    this.fev1FvcTeorDiag = fev1FvcTeorDiag;
    this.pefPredDiag = pefPredDiag;
    this.pefTeorDiag = pefTeorDiag;
    this.fef2575PredDiag = fef2575PredDiag;
    this.fef2575TeorDiag = fef2575TeorDiag;
    this.diagPpal = diagPpal;
    this.diagObs = diagObs;
    this.diagRel1 = diagRel1;
    this.diagRel2 = diagRel2;
    this.diagRel3 = diagRel3;
    this.tipoInterpretacion = tipoInterpretacion;
    this.tipoGrado = tipoGrado;
    this.resultadoEspiroMetria = resultadoEspiroMetria;
    this.recGralesDejarDeFumar = recGralesDejarDeFumar;
    this.recGralesContinuarControlesEps = recGralesContinuarControlesEps;
    this.recGralesBajarDePeso = recGralesBajarDePeso;
    this.recGralesTomarRayosXTorax = recGralesTomarRayosXTorax;
    this.recGralesRealizarEjerc3XSemana = recGralesRealizarEjerc3XSemana;
    this.recGralesValoracEPSXNeumologia = recGralesValoracEPSXNeumologia;
    this.recLabUtilizarEpr = recLabUtilizarEpr;
    this.recLabIngresarSve = recLabIngresarSve;
    this.controlesMensual = controlesMensual;
    this.controlesBimestrales = controlesBimestrales;
    this.controlesTrimestral = controlesTrimestral;
    this.controlesSemestral = controlesSemestral;
    this.controlesAnual = controlesAnual;
    this.controlesConfirmatoria = controlesConfirmatoria;
    this.tecnicaAceptable = tecnicaAceptable;
  }

  /**
   * Registers the given data into the specified sheet in the provided spreadsheet.
   *
   * @param {Object} data - The data to be registered.
   * @param {string} sheetName - The name of the sheet.
   * @param {Spreadsheet} spreadsheet - The spreadsheet to register the data into.
   * @return {string} Returns "Success" if the registration is successful.
   */
  static registerSpiro(data, sheetName, spreadsheet) {
    const rowRegister = spreadsheet.getSheetByName(sheetName);
    try {
      rowRegister.appendRow(Object.values(data));
      return "Success";
    } catch (error) {
      Logger.log(error.message);
    }
  }
}

function insertEspiro(data, sheetName, spreadsheet) {
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
          arrayData[15] = data[iterator];
          break;
        case 'civilStatus':
          arrayData[16] = data[iterator];
          break;
        case 'scholarship':
          arrayData[17] = data[iterator];
          break;
        case 'post':
          arrayData[18] = data[iterator];
          break;
        case 'durationWorking':
          arrayData[20] = data[iterator];
          break;
        case 'alegias':
          arrayData[22] = data[iterator];
          break;
        case 'alergiasObs':
          arrayData[23] = data[iterator];
          break;
        case 'tuberculosis':
          arrayData[24] = data[iterator];
          break;
        case 'tosCronica':
          arrayData[25] = data[iterator];
          break;
        case 'gripasFrecuentes':
          arrayData[26] = data[iterator];
          break;
        case 'faringitis':
          arrayData[27] = data[iterator];
          break;
        case 'faringoamigdalitis':
          arrayData[28] = data[iterator];
          break;
        case 'rinitis':
          arrayData[29] = data[iterator];
          break;
        case 'sinusitis':
          arrayData[30] = data[iterator];
          break;
        case 'cxTorax':
          arrayData[31] = data[iterator];
          break;
        case 'cxToraxObs':
          arrayData[32] = data[iterator];
          break;
        case 'asmaBronquial':
          arrayData[33] = data[iterator];
          break;
        case 'bronquitis':
          arrayData[34] = data[iterator];
          break;
        case 'neumonia':
          arrayData[35] = data[iterator];
          break;
        case 'trumaCostal':
          arrayData[36] = data[iterator];
          break;
        case 'cancer':
          arrayData[37] = data[iterator];
          break;
        case 'cancerObs':
          arrayData[38] = data[iterator];
          break;
        case 'otrosRespiratorios':
          arrayData[39] = data[iterator];
          break;
        case 'riesgoQuimicoPolvos':
          arrayData[40] = data[iterator];
          break;
        case 'riesgoQuimicoFibras':
          arrayData[41] = data[iterator];
          break;
        case 'riesgoQuimicoLiquidos':
          arrayData[42] = data[iterator];
          break;
        case 'riesgoQuimicoGases':
          arrayData[43] = data[iterator];
          break;
        case 'riesgoQuimicoVapos':
          arrayData[44] = data[iterator];
          break;
        case 'riesgoQuimicoHumos':
          arrayData[45] = data[iterator];
          break;
        case 'riesgoQuimicoMaterialParticulado':
          arrayData[46] = data[iterator];
          break;
        case 'otrosRiesgosQuimicos':
          arrayData[47] = data[iterator];
          break;
        case 'eppEspecificoTapaboca':
          arrayData[48] = data[iterator];
          break;
        case 'eppEspecificoRespirador':
          arrayData[49] = data[iterator];
          break;
        case 'actFisica':
          arrayData[50] = data[iterator];
          break;
        case 'fuma':
          arrayData[51] = data[iterator];
          break;
        case 'cigarrillosDia':
          arrayData[52] = data[iterator];
          break;
        case 'frecuencia':
          arrayData[53] = data[iterator];
          break;
        case 'tiempoEnAnios':
          arrayData[54] = data[iterator];
          break;
        case 'interpretacion':
          arrayData[55] = data[iterator];
          break;
        case 'peso':
          arrayData[56] = data[iterator];
          break;
        case 'talla':
          arrayData[57] = data[iterator];
          break;
        case 'fvcPredDiag':
          arrayData[60] = data[iterator];
          break;
        case 'fvcTeorDiag':
          arrayData[61] = data[iterator];
          break;
        case 'fev1PredDiag':
          arrayData[62] = data[iterator];
          break;
        case 'fev1TeorDiag':
          arrayData[63] = data[iterator];
          break;
        case 'fev1FvcPredDiag':
          arrayData[64] = data[iterator];
          break;
        case 'fev1FvcTeorDiag':
          arrayData[65] = data[iterator];
          break;
        case 'pefPredDiag':
          arrayData[66] = data[iterator];
          break;
        case 'pefTeorDiag':
          arrayData[67] = data[iterator];
          break;
        case 'fef2575PredDiag':
          arrayData[68] = data[iterator];
          break;
        case 'fef2575TeorDiag':
          arrayData[69] = data[iterator];
          break;
        case 'diagPpal':
          arrayData[70] = data[iterator];
          break;
        case 'diagObs':
          arrayData[71] = data[iterator];
          break;
        case 'diagRel1':
          arrayData[72] = data[iterator];
          break;
        case 'diagRel2':
          arrayData[73] = data[iterator];
          break;
        case 'diagRel3':
          arrayData[74] = data[iterator];
          break;
        case 'tipoInterpretacion':
          arrayData[75] = data[iterator];
          break;
        case 'tipoGrado':
          arrayData[76] = data[iterator];
          break;
        case 'resultadoEspiroMetria':
          arrayData[77] = data[iterator];
          break;
        case 'recGralesDejarDeFumar':
          arrayData[78] = data[iterator];
          break;
        case 'recGralesContinuarControlesEps':
          arrayData[79] = data[iterator];
          break;
        case 'recGralesBajarDePeso':
          arrayData[80] = data[iterator];
          break;
        case 'recGralesTomarRayosXTorax':
          arrayData[81] = data[iterator];
          break;
        case 'recGralesRealizarEjerc3XSemana':
          arrayData[82] = data[iterator];
          break;
        case 'recGralesValoracEPSXNeumologia':
          arrayData[83] = data[iterator];
          break;
        case 'recLabUtilizarEpr':
          arrayData[84] = data[iterator];
          break;
        case 'recLabIngresarSve':
          arrayData[85] = data[iterator];
          break;
        case 'controlesMensual':
          arrayData[86] = data[iterator];
          break;
        case 'controlesBimestrales':
          arrayData[87] = data[iterator];
          break;
        case 'controlesTrimestral':
          arrayData[88] = data[iterator];
          break;
        case 'controlesSemestral':
          arrayData[89] = data[iterator];
          break;
        case 'controlesAnual':
          arrayData[90] = data[iterator];
          break;
        case 'controlesConfirmatoria':
          arrayData[91] = data[iterator];
          break;
        case 'tecnicaAceptable':
          arrayData[92] = data[iterator];
          break;
      }
    }

    const age = ageRange(arrayData[9]);
    arrayData[10] = age;
    const working = numberWorking(arrayData[20]);
    arrayData[21] = working;

    const imc = imc2(arrayData[56], arrayData[57]);
    arrayData[58] = imc[0].toFixed(2);
    arrayData[59] = imc[1];

    const register = new espiro(...arrayData);
    delete register.numberOfChildrenRec;
    delete register.postRec;
    const response = espiro.registerSpiro(register, sheetName, spreadsheet);
    return response;

  } catch (error) {
    Logger.log(error.message);
  }
}