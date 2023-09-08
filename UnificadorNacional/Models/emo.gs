class emo {
  constructor(
    contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", numberIdentification = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", numberOfChildrenRec = "", race = "", civilStatus = "", scholarship = "", post = "", postRec = "", durationWorking = "", antiquity = "",
    riesgosFisicosRuido = 0, riesgosFisicosIluminacion = 0, riesgosFisicosVibracion = 0, riesgosFisicosTemperaturaExtremas = 0, riesgosFisicosPresAtmosferica = 0, riesgosFisicosRadIonizantes = 0, riesgosFisicosRadNoIonizantes = 0, riesgosFisicosOtrosFisicos = "NO REFIERE", riesgosBiologicosVirus = 0, riesgosBiologicosBacterias = 0, riesgosBiologicosHongos = 0, riesgosBiologicosRicketsias = 0, riesgosBiologicosParasitos = 0, riesgosBiologicosFluidos = 0, riesgosBiologicosPicaduras = 0, riesgosBiologicosMordeduras = 0, riesgosBiologicosOtrosBiologicos = "NO REFEIERE", riesgosQuimicosPolvos = 0, riesgosQuimicosFibras = 0, riesgosQuimicosLiquidos = 0, riesgosQuimicosGases = 0, riesgosQuimicosVapores = 0, riesgosQuimicosHumos = 0, riesgosQuimicosMaterialParticulado = 0, riesgosQuimicosOtrosQuimicos = "NO REFIERE", riesgosPsicosGestionOrganizacional = 0, riesgosPsicosCaractDelGrupo = 0, riesgosPsicosInterfasesTarea = 0, riesgosPsicosCaractOrganizacion = 0, riesgosPsicosCondiciones = 0, riesgosPsicosJornada = 0, riesgosPsicosOtrosLaboral = "NO REFIERE", riesgosBiomecanicosPostura = 0, riesgosBiomecanicosEsfuerzo = 0, riesgosBiomecanicosMovRepetitivo = 0, riesgosBiomecanicosManipulacionCarga = 0, riesgosBiomecanicosOtrosBiomecanicos = "NO REFIERE", condicionesDeSeguridadMecanicos = 0, condicionesDeSeguridadElectricos = 0, condicionesDeSeguridadLocativo = 0, condicionesDeSeguridadTecnologico = 0, condicionesDeSeguridadAccDeTransito = 0, condicionesDeSeguridadPublicos = 0, condicionesDeSeguridadTrabajoEnAlturas = 0, condicionesDeSeguridadEspaciosConfinados = 0, condicionesDeSeguridadOtrosDeSeguridad = "NO REFIERE", fenomenosNaturalesSismo = 0, fenomenosNaturalesTerremoto = 0, fenomenosNaturalesVendaval = 0, fenomenosNaturalesInundacion = 0, fenomenosNaturalesDerrumbe = 0, fenomenosNaturalesPrecipitaciones = 0, fenomenosNaturalesOtrosNaturales = 0,
    fechaAccidente = "", accidentePasoEmpresa = "", tipoAccidente = "", naturalezaLesion = "", parteAfectada = "", incapacidad = "", secuelas = "", nombreEnfermedad = "", etapa = "", observacionesEnfermedad = "", actFisica = "", fuma = "", consumoAlcohol = "", peso = "", talla = "", imc = "", clasificacion = "", tensionArterial = "", frecCardiaca = "", frecRespiratoria = "", perimetroAbdominal = "", lateralidad = "",
    diagCodPpal = 0, diagDesPpal = 0, diagCod1 = 0, diagDes1 = 0, diagCod2 = 0, diagDes2 = 0, diagCod3 = 0, diagDes3 = 0, diagCod4 = 0, diagDes4 = 0, diagCod5 = 0, diagDes5 = 0, diagCod6 = 0, diagDes6 = 0, diagCod7 = 0, diagDes7 = 0, diagCod8 = 0, diagDes8 = 0, diagCod9 = 0, diagDes9 = 0, observacionesDiags = "", conceptoDeEvaluacion = "", observacionesConcepto = "",
    emphasis1 = "NO APLICA", emphasisConcep1 = "NO APLICA", emphasisObs1 = "NO APLICA", emphasis2 = "NO APLICA", emphasisConcep2 = "NO APLICA", emphasisObs2 = "NO APLICA", emphasis3 = "NO APLICA", emphasisConcep3 = "NO APLICA", emphasisObs3 = "NO APLICA", emphasis4 = "NO APLICA", emphasisConcep4 = "NO APLICA", emphasisObs4 = "NO APLICA", emphasis5 = "NO APLICA", emphasisConcep5 = "NO APLICA", emphasisObs5 = "NO APLICA", emphasis6 = "NO APLICA", emphasisConcep6 = "NO APLICA", emphasisObs6 = "NO APLICA", emphasis7 = "NO APLICA", emphasisConcep7 = "NO APLICA", emphasisObs7 = "NO APLICA", emphasis8 = "NO APLICA", emphasisConcep8 = "NO APLICA", emphasisObs8 = "NO APLICA", emphasis9 = "NO APLICA", emphasisConcep9 = "NO APLICA", emphasisObs9 = "NO APLICA", recomendacionesEspecificas = ""
  ) {
    this.contractedName = contractedName;
    this.origin = origin;
    this.destiny = destiny;
    this.city = city;
    this.income = income;
    this.examType = examType;
    this.date = date;
    this.patient = patient;
    this.numberIdentification = numberIdentification;
    this.age = age;
    this.range_age = range_age;
    this.stratum = stratum;
    this.gender = gender;
    this.numberOfChildren = numberOfChildren;
    this.numberOfChildrenRec = numberOfChildrenRec;
    this.race = race;
    this.civilStatus = civilStatus;
    this.scholarship = scholarship;
    this.post = post;
    this.postRec = postRec;
    this.durationWorking = durationWorking;
    this.antiquity = antiquity;
    this.riesgosFisicosRuido = riesgosFisicosRuido;
    this.riesgosFisicosIluminacion = riesgosFisicosIluminacion;
    this.riesgosFisicosVibracion = riesgosFisicosVibracion;
    this.riesgosFisicosTemperaturaExtremas = riesgosFisicosTemperaturaExtremas;
    this.riesgosFisicosPresAtmosferica = riesgosFisicosPresAtmosferica;
    this.riesgosFisicosRadIonizantes = riesgosFisicosRadIonizantes;
    this.riesgosFisicosRadNoIonizantes = riesgosFisicosRadNoIonizantes;
    this.riesgosFisicosOtrosFisicos = riesgosFisicosOtrosFisicos;
    this.riesgosBiologicosVirus = riesgosBiologicosVirus;
    this.riesgosBiologicosBacterias = riesgosBiologicosBacterias;
    this.riesgosBiologicosHongos = riesgosBiologicosHongos;
    this.riesgosBiologicosRicketsias = riesgosBiologicosRicketsias;
    this.riesgosBiologicosParasitos = riesgosBiologicosParasitos;
    this.riesgosBiologicosFluidos = riesgosBiologicosFluidos;
    this.riesgosBiologicosPicaduras = riesgosBiologicosPicaduras;
    this.riesgosBiologicosMordeduras = riesgosBiologicosMordeduras;
    this.riesgosBiologicosOtrosBiologicos = riesgosBiologicosOtrosBiologicos;
    this.riesgosQuimicosPolvos = riesgosQuimicosPolvos;
    this.riesgosQuimicosFibras = riesgosQuimicosFibras;
    this.riesgosQuimicosLiquidos = riesgosQuimicosLiquidos;
    this.riesgosQuimicosGases = riesgosQuimicosGases;
    this.riesgosQuimicosVapores = riesgosQuimicosVapores;
    this.riesgosQuimicosHumos = riesgosQuimicosHumos;
    this.riesgosQuimicosMaterialParticulado = riesgosQuimicosMaterialParticulado;
    this.riesgosQuimicosOtrosQuimicos = riesgosQuimicosOtrosQuimicos;
    this.riesgosPsicosGestionOrganizacional = riesgosPsicosGestionOrganizacional;
    this.riesgosPsicosCaractDelGrupo = riesgosPsicosCaractDelGrupo;
    this.riesgosPsicosInterfasesTarea = riesgosPsicosInterfasesTarea;
    this.riesgosPsicosCaractOrganizacion = riesgosPsicosCaractOrganizacion;
    this.riesgosPsicosCondiciones = riesgosPsicosCondiciones;
    this.riesgosPsicosJornada = riesgosPsicosJornada;
    this.riesgosPsicosOtrosLaboral = riesgosPsicosOtrosLaboral;
    this.riesgosBiomecanicosPostura = riesgosBiomecanicosPostura;
    this.riesgosBiomecanicosEsfuerzo = riesgosBiomecanicosEsfuerzo;
    this.riesgosBiomecanicosMovRepetitivo = riesgosBiomecanicosMovRepetitivo;
    this.riesgosBiomecanicosOtrosRiesgos = riesgosBiomecanicosOtrosBiomecanicos;
    this.riesgosBiomecanicosManipulacionCarga = riesgosBiomecanicosManipulacionCarga;Carga
    this.condicionesDeSeguridadMecanicos = condicionesDeSeguridadMecanicos;
    this.condicionesDeSeguridadElectricos = condicionesDeSeguridadElectricos;
    this.condicionesDeSeguridadLocativo = condicionesDeSeguridadLocativo;
    this.condicionesDeSeguridadTecnologico = condicionesDeSeguridadTecnologico;
    this.condicionesDeSeguridadAccDeTransito = condicionesDeSeguridadAccDeTransito;Transito
    this.condicionesDeSeguridadPublicos = condicionesDeSeguridadPublicos;
    this.condicionesDeSeguridadTrabajoEnAlturas = condicionesDeSeguridadTrabajoEnAlturas;
    this.condicionesDeSeguridadEspaciosConfinados = condicionesDeSeguridadEspaciosConfinados;
    this.condicionesDeSeguridadOtrosDeSeguridad = condicionesDeSeguridadOtrosDeSeguridad;
    this.fenomenosNaturalesSismo = fenomenosNaturalesSismo;
    this.fenomenosNaturalesTerremoto = fenomenosNaturalesTerremoto;
    this.fenomenosNaturalesVendaval = fenomenosNaturalesVendaval;
    this.fenomenosNaturalesInundacion = fenomenosNaturalesInundacion;
    this.fenomenosNaturalesDerrumbe = fenomenosNaturalesDerrumbe;
    this.fenomenosNaturalesPrecipitaciones = fenomenosNaturalesPrecipitaciones;
    this.fenomenosNaturalesOtrosNaturales = fenomenosNaturalesOtrosNaturales;
    this.fechaAccidente = fechaAccidente;
    this.accidentePasoEmpresa = accidentePasoEmpresa;
    this.tipoAccidente = tipoAccidente;
    this.naturalezaLesion = naturalezaLesion;
    this.parteAfectada = parteAfectada;
    this.incapacidad = incapacidad;
    this.secuelas = secuelas;
    this.nombreEnfermedad = nombreEnfermedad;
    this.etapa = etapa;
    this.observacionesEnfermedad = observacionesEnfermedad;
    this.actFisica = actFisica;
    this.fuma = fuma;
    this.consumoAlcohol = consumoAlcohol;
    this.peso = peso;
    this.talla = talla;
    this.imc = imc;
    this.clasificacion = clasificacion;
    this.tensionArterial = tensionArterial;
    this.frecCardiaca = frecCardiaca;
    this.frecRespiratoria = frecRespiratoria;
    this.perimetroAbdominal = perimetroAbdominal;
    this.lateralidad = lateralidad;
    this.diagCodPpal = diagCodPpal;
    this.diagDesPpal = diagDesPpal;
    this.diagCod1 = diagCod1;
    this.diagDes1 = diagDes1;
    this.diagCod2 = diagCod2;
    this.diagDes2 = diagDes2;
    this.diagCod3 = diagCod3;
    this.diagDes3 = diagDes3;
    this.diagCod4 = diagCod4;
    this.diagDes4 = diagDes4;
    this.diagCod5 = diagCod5;
    this.diagDes5 = diagDes5;
    this.diagCod6 = diagCod6;
    this.diagDes6 = diagDes6;
    this.diagCod7 = diagCod7;
    this.diagDes7 = diagDes7;
    this.diagCod8 = diagCod8;
    this.diagDes8 = diagDes8;
    this.diagCod9 = diagCod9;
    this.diagDes9 = diagDes9;
    this.observacionesDiags = observacionesDiags;
    this.conceptoDeEvaluacion = conceptoDeEvaluacion;
    this.observacionesConcepto = observacionesConcepto;
    this.emphasis1 = emphasis1;
    this.emphasisConcep1 = emphasisConcep1;
    this.emphasisObs1 = emphasisObs1;
    this.emphasis2 = emphasis2;
    this.emphasisConcep2 = emphasisConcep2;
    this.emphasisObs2 = emphasisObs2;
    this.emphasis3 = emphasis3;
    this.emphasisConcep3 = emphasisConcep3;
    this.emphasisObs3 = emphasisObs3;
    this.emphasis4 = emphasis4;
    this.emphasisConcep4 = emphasisConcep4;
    this.emphasisObs4 = emphasisObs4;
    this.emphasis5 = emphasis5;
    this.emphasisConcep5 = emphasisConcep5;
    this.emphasisObs5 = emphasisObs5;
    this.emphasis6 = emphasis6;
    this.emphasisConcep6 = emphasisConcep6;
    this.emphasisObs6 = emphasisObs6;
    this.emphasis7 = emphasis7;
    this.emphasisConcep7 = emphasisConcep7;
    this.emphasisObs7 = emphasisObs7;
    this.emphasis8 = emphasis8;
    this.emphasisConcep8 = emphasisConcep8;
    this.emphasisObs8 = emphasisObs8;
    this.emphasis9 = emphasis9;
    this.emphasisConcep9 = emphasisConcep9;
    this.emphasisObs9 = emphasisObs9;
    this.recomendacionesEspecificas = recomendacionesEspecificas;
  }

  /**
   * Register Emo.
   *
   * @param {Object} data - The data to be registered.
   * @param {string} sheetName - The name of the sheet.
   * @param {object} spreadsheet - The spreadsheet object.
   * @return {string} The return value is "ok" if the registration is successful.
   */
  static registerEmo(data, sheetName, spreadsheet) {
    const rowRegister = spreadsheet.getSheetByName(sheetName);
    try {
      rowRegister.appendRow(Object.values(data));
      return "Success";
    } catch (error) {
      Logger.Log(error.message);
    }
  }
}
/**
 * Inserts emo data into a spreadsheet.
 *
 * @param {Object} data - the data to be inserted
 * @param {string} sheetName - the name of the sheet to insert the data into
 * @param {Spreadsheet} spreadsheet - the spreadsheet to insert the data into
 */
function insertEmo(data, sheetName, spreadsheet) {
  const arrayData = [];
  let max = 0;

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
        case 'riesgosFisicosRuido':
          arrayData[22] = data[iterator];
          break;
        case 'riesgosFisicosIluminacion':
          arrayData[23] = data[iterator];
          break;
        case 'riesgosFisicosVibracion':
          arrayData[24] = data[iterator];
          break;
        case 'riesgosFisicosTemperaturaExtremas':
          arrayData[25] = data[iterator];
          break;
        case 'riesgosFisicosPresAtmosferica':
          arrayData[26] = data[iterator];
          break;
        case 'riesgosFisicosRadIonizantes':
          arrayData[27] = data[iterator];
          break;
        case 'riesgosFisicosRadNoIonizantes':
          arrayData[28] = data[iterator];
          break;
        case 'riesgosFisicosOtrosFisicos':
          arrayData[29] = data[iterator];
          break;
        case 'riesgosBiologicosVirus':
          arrayData[30] = data[iterator];
          break;
        case 'riesgosBiologicosBacterias':
          arrayData[31] = data[iterator];
          break;
        case 'riesgosBiologicosHongos':
          arrayData[32] = data[iterator];
          break;
        case 'riesgosBiologicosRicketsias':
          arrayData[33] = data[iterator];
          break;
        case 'riesgosBiologicosParasitos':
          arrayData[34] = data[iterator];
          break;
        case 'riesgosBiologicosFluidos':
          arrayData[35] = data[iterator];
          break;
        case 'riesgosBiologicosPicaduras':
          arrayData[36] = data[iterator];
          break;
        case 'riesgosBiologicosMordeduras':
          arrayData[37] = data[iterator];
          break;
        case 'riesgosBiologicosOtrosBiologicos':
          arrayData[38] = data[iterator];
          break;
        case 'riesgosQuimicosPolvos':
          arrayData[39] = data[iterator];
          break;
        case 'riesgosQuimicosFibras':
          arrayData[40] = data[iterator];
          break;
        case 'riesgosQuimicosLiquidos':
          arrayData[41] = data[iterator];
          break;
        case 'riesgosQuimicosGases':
          arrayData[42] = data[iterator];
          break;
        case 'riesgosQuimicosVapores':
          arrayData[43] = data[iterator];
          break;
        case 'riesgosQuimicosHumos':
          arrayData[44] = data[iterator];
          break;
        case 'riesgosQuimicosMaterialParticulado':
          arrayData[45] = data[iterator];
          break;
        case 'riesgosQuimicosOtrosQuimicos':
          arrayData[46] = data[iterator];
          break;
        case 'riesgosPsicosGestionOrganizacional':
          arrayData[47] = data[iterator];
          break;
        case 'riesgosPsicosCaractDelGrupo':
          arrayData[48] = data[iterator];
          break;
        case 'riesgosPsicosInterfasesTarea':
          arrayData[49] = data[iterator];
          break;
        case 'riesgosPsicosCaractOrganizacion':
          arrayData[50] = data[iterator];
          break;
        case 'riesgosPsicosCondiciones':
          arrayData[51] = data[iterator];
          break;
        case 'riesgosPsicosJornada':
          arrayData[52] = data[iterator];
          break;
        case 'riesgosPsicosOtrosLaboral':
          arrayData[53] = data[iterator];
          break;
        case 'riesgosBiomecanicosPostura':
          arrayData[54] = data[iterator];
          break;
        case 'riesgosBiomecanicosEsfuerzo':
          arrayData[55] = data[iterator];
          break;
        case 'riesgosBiomecanicosMovRepetitivo':
          arrayData[56] = data[iterator];
          break;
        case 'riesgosBiomecanicosManipulacionCarga':
          arrayData[57] = data[iterator];
          break;
        case 'riesgosBiomecanicosOtrosBiomecanicos':
          arrayData[58] = data[iterator];
          break;
        case 'condicionesDeSeguridadMecanicos':
          arrayData[59] = data[iterator];
          break;
        case 'condicionesDeSeguridadElectricos':
          arrayData[60] = data[iterator];
          break;
        case 'condicionesDeSeguridadLocativo':
          arrayData[61] = data[iterator];
          break;
        case 'condicionesDeSeguridadTecnologico':
          arrayData[62] = data[iterator];
          break;
        case 'condicionesDeSeguridadAccDeTransito':
          arrayData[63] = data[iterator];
          break;
        case 'condicionesDeSeguridadPublicos':
          arrayData[64] = data[iterator];
          break;
        case 'condicionesDeSeguridadTrabajoEnAlturas':
          arrayData[65] = data[iterator];
          break;
        case 'condicionesDeSeguridadEspaciosConfinados':
          arrayData[66] = data[iterator];
          break;
        case 'condicionesDeSeguridadOtrosDeSeguridad':
          arrayData[67] = data[iterator];
          break;
        case 'fenomenosNaturalesSismo':
          arrayData[68] = data[iterator];
          break;
        case 'fenomenosNaturalesTerremoto':
          arrayData[69] = data[iterator];
          break;
        case 'fenomenosNaturalesVendaval':
          arrayData[70] = data[iterator];
          break;
        case 'fenomenosNaturalesInundacion':
          arrayData[71] = data[iterator];
          break;
        case 'fenomenosNaturalesDerrumbe':
          arrayData[72] = data[iterator];
          break;
        case 'fenomenosNaturalesPrecipitaciones':
          arrayData[73] = data[iterator];
          break;
        case 'fenomenosNaturalesOtrosNaturales':
          arrayData[74] = data[iterator];
          break;
        case 'fechaAccidente':
          arrayData[75] = data[iterator];
          break;
        case 'accidentePasoEmpresa':
          arrayData[76] = data[iterator];
          break;
        case 'tipoAccidente':
          arrayData[77] = data[iterator];
          break;
        case 'naturalezaLesion':
          arrayData[78] = data[iterator];
          break;
        case 'parteAfectada':
          arrayData[79] = data[iterator];
          break;
        case 'incapacidad':
          arrayData[80] = data[iterator];
          break;
        case 'secuelas':
          arrayData[81] = data[iterator];
          break;
        case 'nombreEnfermedad':
          arrayData[82] = data[iterator];
          break;
        case 'etapa':
          arrayData[83] = data[iterator];
          break;
        case 'observacionesEnfermedad':
          arrayData[84] = data[iterator];
          break;
        case 'actFisica':
          arrayData[85] = data[iterator];
          break;
        case 'fuma':
          arrayData[86] = data[iterator];
          break;
        case 'consumoAlcohol':
          arrayData[87] = data[iterator];
          break;
        case 'peso':
          arrayData[88] = data[iterator];
          break;
        case 'talla':
          arrayData[89] = data[iterator];
          break;
        case 'tensionArterial':
          arrayData[92] = data[iterator];
          break;
        case 'frecCardiaca':
          arrayData[93] = data[iterator];
          break;
        case 'frecRespiratoria':
          arrayData[94] = data[iterator];
          break;
        case 'perimetroAbdominal':
          arrayData[95] = data[iterator];
          break;
        case 'lateralidad':
          arrayData[96] = data[iterator];
          break;
        case 'diag':
          const diags = data[iterator];
          let arrayDataCod = 97, arrayDataDiag = 98;
          const cods = Object.keys(diags).filter(cod => cod.includes("CODIGO"));
          const diagnostics = Object.keys(diags).filter(diag => !diag.includes("CODIGO"));

          /** Creates the array for the cods **/
          max = 10;
          for (const cod of cods.sort()) {
            if (max <= 10 && max >= 1) {
              arrayData[arrayDataCod] = (diags[cod]) ? diags[cod] : 0;
              arrayDataCod += 2;
              max--;
            }
          }

          /** Creates the array for the diagnostics **/
          max = 10;
          for (const diag of diagnostics.sort()) {
            if (max <= 10 && max >= 1) {
              arrayData[arrayDataDiag] = (diags[diag]) ? diags[diag] : 0;
              arrayDataDiag += 2;
              max--;
            }
          }
          break;
        case 'observacionesDiags':
          arrayData[117] = data[iterator];
          break;
        case 'conceptoDeEvaluacion':
          arrayData[118] = data[iterator];
          break;
        case 'observacionesConcepto':
          arrayData[119] = data[iterator];
          break;
        case 'emphasis':
          const emphas = data[iterator];
          let arrayDataEmp = 120, arrayDataEmpConcept = 121, arrayDataEmpObs = 122;
          const emps = Object.keys(emphas).filter(emp => (!emp.includes("CONCEPTO") && !emp.includes("OBSERVACIONES")));
          const concepts = Object.keys(emphas).filter(concept => concept.includes("CONCEPTO"));
          const observations = Object.keys(emphas).filter(obs => obs.includes("OBSERVACIONES"));

          /** Creates the array for the emphasis **/
          max = 9;
          for (const emp of emps.sort()) {
            if (max <= 9 && max >= 1) {
              if (max === 9) {
                arrayData[arrayDataEmp] = "OSTEOMUSCULAR";
              } else {
                arrayData[arrayDataEmp] = (emphas[emp] !== "") ? emphas[emp] : "NO APLICA";
              }
              arrayDataEmp += 3;
              max--;
            }
          }
          for (let index = max; index > 0; index--) {
            arrayData[arrayDataEmp] = "NO APLICA";
            arrayDataEmp += 3;
          }

          /** Creates the array for the concepts emphasis **/
          max = 9;
          for (const con of concepts.sort()) {
            if (max <= 9 && max >= 1) {
              if (max === 9) {
                arrayData[arrayDataEmpConcept] = "REALIZADO";
              } else {
                arrayData[arrayDataEmpConcept] = (emphas[con] !== "") ? emphas[con] : "NO APLICA";
              }
              arrayDataEmpConcept += 3;
              max--;
            }
          }
          for (let index = max; index > 0; index--) {
            arrayData[arrayDataEmpConcept] = "NO APLICA";
            arrayDataEmpConcept += 3;
          }

          /** Creates the array for the observations emphasis **/
          max = 9;
          for (const obs of observations.sort()) {
            if (max <= 9 && max >= 1) {
              if (max === 9) {
                arrayData[arrayDataEmpObs] = "NO REFIERE";
              } else {
                arrayData[arrayDataEmpObs] = (emphas[obs] !== "") ? emphas[obs] : "NO APLICA";
              }
              arrayDataEmpObs += 3;
              max--;
            }
          }
          for (let index = max; index > 0; index--) {
            arrayData[arrayDataEmpObs] = "NO APLICA";
            arrayDataEmpObs += 3;
          }
          break;
        case 'recomendacionesEspecificas':
          arrayData[147] = data[iterator];
          break;
      }
    }

    /** 
     * Calculates the IMC, N Children, ageRange and durationWorking 
     */
    const age = ageRange(arrayData[9]);
    arrayData[10] = age;
    const childrens = numberChildrens(arrayData[13]);
    arrayData[14] = childrens;
    const working = numberWorking(arrayData[20]);
    arrayData[21] = working;
    const imc = imc2(arrayData[88], arrayData[89]);
    arrayData[90] = imc[0].toFixed(2);
    arrayData[91] = imc[1];

    const register = new emo(...arrayData);
    const response = emo.registerEmo(register, sheetName, spreadsheet);
    return response;
  } catch (error) {
    Logger.log(error.message);
  }
}
