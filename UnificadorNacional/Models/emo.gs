class emo {
  constructor(
    contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", numberIdentification = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", numberOfChildrenRec = "", race = "", civilStatus = "", scholarship = "", post = "", postRec = "", durationWorking = "", antiquity = "",
    riesgosFisicosRuido = 0, riesgosFisicosIluminacion = 0, riesgosFisicosVibracion = 0, riesgosFisicosTemperaturaExtremas = 0, riesgosFisicosPresAtmosferica = 0, riesgosFisicosRadIonizantes = 0, riesgosFisicosRadNoIonizantes = 0, riesgosFisicosOtrosFisicos = "NO REFIERE", riesgosBiologicosVirus = 0, riesgosBiologicosBacterias = 0, riesgosBiologicosHongos = 0, riesgosBiologicosRicketsias = 0, riesgosBiologicosParasitos = 0, riesgosBiologicosFluidos = 0, riesgosBiologicosPicaduras = 0, riesgosBiologicosMordeduras = 0, riesgosBiologicosOtrosBiologicos = "NO REFEIERE", riesgosQuimicosPolvos = 0, riesgosQuimicosFibras = 0, riesgosQuimicosLiquidos = 0, riesgosQuimicosGases = 0, riesgosQuimicosVapores = 0, riesgosQuimicosHumos = 0, riesgosQuimicosMaterialParticulado = 0, riesgosQuimicosOtrosQuimicos = "NO REFIERE", riesgosPsicosGestionOrganizacional = 0, riesgosPsicosCaractDelGrupo = 0, riesgosPsicosInterfasesTarea = 0, riesgosPsicosCaractOrganizacion = 0, riesgosPsicosCondiciones = 0, riesgosPsicosJornada = 0, riesgosPsicosOtrosLaboral = "NO REFIERE", riesgosBiomecanicosPostura = 0, riesgosBiomecanicosEsfuerzo = 0, riesgosBiomecanicosMovRepetitivo = 0, riesgosBiomecanicosManipulacionCarga = 0, riesgosBiomecanicosOtrosBiomecanicos = "NO REFIERE", condicionesDeSeguridadMecanicos = 0, condicionesDeSeguridadElectricos = 0, condicionesDeSeguridadLocativo = 0, condicionesDeSeguridadTecnologico = 0, condicionesDeSeguridadAccDeTransito = 0, condicionesDeSeguridadPublicos = 0, condicionesDeSeguridadTrabajoEnAlturas = 0, condicionesDeSeguridadEspaciosConfinados = 0, condicionesDeSeguridadOtrosDeSeguridad = "NO REFIERE", fenomenosNaturalesSismo = 0, fenomenosNaturalesTerremoto = 0, fenomenosNaturalesVendaval = 0, fenomenosNaturalesInundacion = 0, fenomenosNaturalesDerrumbe = 0, fenomenosNaturalesPrecipitaciones = 0, fenomenosNaturalesOtrosNaturales = 0,
    fechaAccidente = "", accidentePasoEmpresa = "", tipoAccidente = "", naturalezaLesion = "", parteAfectada = "", incapacidad = "", secuelas = "", nombreEnfermedad = "", etapa = "", observacionesEnfermedad = "", actFisica = "", fuma = "", consumoAlcohol = "", peso = "", talla = "", imc = "", clasificacion = "", tensionArterial = "", frecCardiaca = "", frecRespiratoria = "", perimetroAbdominal = "", lateralidad = "",
    dc0 = 0, dd0 = 0, dc1 = 0, dd1 = 0, dc2 = 0, dd2 = 0, dc3 = 0, dd3 = 0, dc4 = 0, dd4 = 0, dc5 = 0, dd5 = 0, dc6 = 0, dd6 = 0, dc7 = 0, dd7 = 0, dc8 = 0, dd8 = 0, dc9 = 0, dd9 = 0, observacionesDiags = "", conceptoDeEvaluacion = "", observacionesConcepto = "",
    emp1 = "NO APLICA", empConp1 = "NO APLICA", empObs1 = "NO APLICA", emp2 = "NO APLICA", empConp2 = "NO APLICA", empObs2 = "NO APLICA", emp3 = "NO APLICA", empConp3 = "NO APLICA", empObs3 = "NO APLICA", emp4 = "NO APLICA", empConp4 = "NO APLICA", empObs4 = "NO APLICA", emp5 = "NO APLICA", empConp5 = "NO APLICA", empObs5 = "NO APLICA", emp6 = "NO APLICA", empConp6 = "NO APLICA", empObs6 = "NO APLICA", emp7 = "NO APLICA", empConp7 = "NO APLICA", empObs7 = "NO APLICA", emp8 = "NO APLICA", empConp8 = "NO APLICA", empObs8 = "NO APLICA", emp9 = "NO APLICA", empConp9 = "NO APLICA", empObs9 = "NO APLICA", recomendacionesEspecificas = ""
  ) {
    this.contractedName = contractedName; // Nombre Contrato o Empresa
    this.origin = origin; // Origen
    this.destiny = destiny; // Destino
    this.city = city; // Ciudad
    this.income = income; // Ingreso
    this.examType = examType; // Tipo de examen
    this.date = date; // Fecha
    this.patient = patient; // Paciente
    this.numberIdentification = numberIdentification; // Numero de Identificacion
    this.age = age; // Edad
    this.range_age = range_age; // Rango de Edad
    this.stratum = stratum; // Estrato
    this.gender = gender; // Genero
    this.numberOfChildren = numberOfChildren; // Numero de Hijos
    this.numberOfChildrenRec = numberOfChildrenRec; // Numero de Hijos
    this.race = race; // Raza
    this.civilStatus = civilStatus; // Estado Civil
    this.scholarship = scholarship; // Beca
    this.post = post; // Puesto
    this.postRec = postRec; // Puesto
    this.durationWorking = durationWorking; // Duracion de Trabajo
    this.antiquity = antiquity; // Antiguedad
    this.riesgosFisicosRuido = riesgosFisicosRuido; // Riesgos Fisicos Ruido
    this.riesgosFisicosIluminacion = riesgosFisicosIluminacion; // Riesgos Fisicos Iluminacion
    this.riesgosFisicosVibracion = riesgosFisicosVibracion; // Riesgos Fisicos Vibracion
    this.riesgosFisicosTemperaturaExtremas = riesgosFisicosTemperaturaExtremas; // Riesgos Fisicos Temperatura Extremas
    this.riesgosFisicosPresAtmosferica = riesgosFisicosPresAtmosferica; // Riesgos Fisicos Pres Atmosferica
    this.riesgosFisicosRadIonizantes = riesgosFisicosRadIonizantes; // Riesgos Fisicos Rad Ionizantes
    this.riesgosFisicosRadNoIonizantes = riesgosFisicosRadNoIonizantes; // Riesgos Fisicos Rad No Ionizantes
    this.riesgosFisicosOtrosFisicos = riesgosFisicosOtrosFisicos; // Riesgos Fisicos Otros Fisicos
    this.riesgosBiologicosVirus = riesgosBiologicosVirus; // Riesgos Biologicos Virus
    this.riesgosBiologicosBacterias = riesgosBiologicosBacterias; // Riesgos Biologicos Bacterias
    this.riesgosBiologicosHongos = riesgosBiologicosHongos; // Riesgos Biologicos Hongos
    this.riesgosBiologicosRicketsias = riesgosBiologicosRicketsias; // Riesgos Biologicos Ricketsias
    this.riesgosBiologicosParasitos = riesgosBiologicosParasitos; // Riesgos Biologicos Parasitos
    this.riesgosBiologicosFluidos = riesgosBiologicosFluidos; // Riesgos Biologicos Fluidos
    this.riesgosBiologicosPicaduras = riesgosBiologicosPicaduras; // Riesgos Biologicos Picaduras
    this.riesgosBiologicosMordeduras = riesgosBiologicosMordeduras; // Riesgos Biologicos Mordeduras
    this.riesgosBiologicosOtrosBiologicos = riesgosBiologicosOtrosBiologicos; // Riesgos Biologicos Otros Biologicos
    this.riesgosQuimicosPolvos = riesgosQuimicosPolvos; // Riesgos Quimicos Polvos
    this.riesgosQuimicosFibras = riesgosQuimicosFibras; // Riesgos Quimicos Fibras
    this.riesgosQuimicosLiquidos = riesgosQuimicosLiquidos; // Riesgos Quimicos Liquidos
    this.riesgosQuimicosGases = riesgosQuimicosGases; // Riesgos Quimicos Gases
    this.riesgosQuimicosVapores = riesgosQuimicosVapores; // Riesgos Quimicos Vapores
    this.riesgosQuimicosHumos = riesgosQuimicosHumos; // Riesgos Quimicos Humos
    this.riesgosQuimicosMaterialParticulado = riesgosQuimicosMaterialParticulado; // Riesgos Quimicos Material Particulado
    this.riesgosQuimicosOtrosQuimicos = riesgosQuimicosOtrosQuimicos; // Riesgos Quimicos Otros Quimicos
    this.riesgosPsicosGestionOrganizacional = riesgosPsicosGestionOrganizacional; // Riesgos Psicos Gestion Organizacional
    this.riesgosPsicosCaractDelGrupo = riesgosPsicosCaractDelGrupo; // Riesgos Psicos Caract Del Grupo
    this.riesgosPsicosInterfasesTarea = riesgosPsicosInterfasesTarea; // Riesgos Psicos Interfases Tarea
    this.riesgosPsicosCaractOrganizacion = riesgosPsicosCaractOrganizacion; // Riesgos Psicos Caract Organizacion
    this.riesgosPsicosCondiciones = riesgosPsicosCondiciones; // Riesgos Psicos Condiciones
    this.riesgosPsicosJornada = riesgosPsicosJornada; // Riesgos Psicos Jornada
    this.riesgosPsicosOtrosLaboral = riesgosPsicosOtrosLaboral; // Riesgos Psicos Otros Laboral
    this.riesgosBiomecanicosPostura = riesgosBiomecanicosPostura; // Riesgos Biomecanicos Postura
    this.riesgosBiomecanicosEsfuerzo = riesgosBiomecanicosEsfuerzo; // Riesgos Biomecanicos Esfuerzo
    this.riesgosBiomecanicosMovRepetitivo = riesgosBiomecanicosMovRepetitivo; // Riesgos Biomecanicos Mov Repetitivo
    this.riesgosBiomecanicosOtrosRiesgos = riesgosBiomecanicosOtrosBiomecanicos; // Riesgos Biomecanicos Otros Riesgos
    this.riesgosBiomecanicosManipulacionCarga = riesgosBiomecanicosManipulacionCarga; // Riesgos Biomecanicos Manipulacion Carga
    this.condicionesDeSeguridadMecanicos = condicionesDeSeguridadMecanicos; // Condiciones De Seguridad Mecanicos
    this.condicionesDeSeguridadElectricos = condicionesDeSeguridadElectricos; // Condiciones De Seguridad Electricos
    this.condicionesDeSeguridadLocativo = condicionesDeSeguridadLocativo; // Condiciones De Seguridad Locativo
    this.condicionesDeSeguridadTecnologico = condicionesDeSeguridadTecnologico; // Condiciones De Seguridad Tecnologico
    this.condicionesDeSeguridadAccDeTransito = condicionesDeSeguridadAccDeTransito; // Condiciones De Seguridad Acc De Transito
    this.condicionesDeSeguridadPublicos = condicionesDeSeguridadPublicos; // Condiciones De Seguridad Publicos
    this.condicionesDeSeguridadTrabajoEnAlturas = condicionesDeSeguridadTrabajoEnAlturas; // Condiciones De Seguridad Trabajo En Alturas
    this.condicionesDeSeguridadEspaciosConfinados = condicionesDeSeguridadEspaciosConfinados; // Condiciones De Seguridad Espacios Confinados
    this.condicionesDeSeguridadOtrosDeSeguridad = condicionesDeSeguridadOtrosDeSeguridad; // Condiciones De Seguridad Otros De Seguridad
    this.fenomenosNaturalesSismo = fenomenosNaturalesSismo; // Fenomenos Naturales Sismo
    this.fenomenosNaturalesTerremoto = fenomenosNaturalesTerremoto; // Fenomenos Naturales Terremoto
    this.fenomenosNaturalesVendaval = fenomenosNaturalesVendaval; // Fenomenos Naturales Vendaval
    this.fenomenosNaturalesInundacion = fenomenosNaturalesInundacion; // Fenomenos Naturales Inundacion
    this.fenomenosNaturalesDerrumbe = fenomenosNaturalesDerrumbe; // Fenomenos Naturales Derrumbe
    this.fenomenosNaturalesPrecipitaciones = fenomenosNaturalesPrecipitaciones; // Fenomenos Naturales Precipitaciones
    this.fenomenosNaturalesOtrosNaturales = fenomenosNaturalesOtrosNaturales; // Fenomenos Naturales Otros Naturales
    this.fechaAccidente = fechaAccidente; // Fecha Accidente
    this.accidentePasoEmpresa = accidentePasoEmpresa; // Accidente Paso Empresa
    this.tipoAccidente = tipoAccidente; // Tipo Accidente
    this.naturalezaLesion = naturalezaLesion; // Naturaleza Lesion
    this.parteAfectada = parteAfectada; // Parte Afectada
    this.incapacidad = incapacidad; // Incapacidad
    this.secuelas = secuelas; // Secuelas
    this.nombreEnfermedad = nombreEnfermedad; // Nombre Enfermedad
    this.etapa = etapa; // Etapa
    this.observacionesEnfermedad = observacionesEnfermedad; // Observaciones Enfermedad
    this.actFisica = actFisica; // Act Fisica
    this.fuma = fuma; // Fuma
    this.consumoAlcohol = consumoAlcohol; // Consumo Alcohol
    this.peso = peso; // Peso
    this.talla = talla; // Talla
    this.imc = imc; // IMC
    this.clasificacion = clasificacion; // Clasificacion
    this.tensionArterial = tensionArterial; // Tension Arterial
    this.frecCardiaca = frecCardiaca; // Frec Cardiaca
    this.frecRespiratoria = frecRespiratoria; // Frec Respiratoria
    this.perimetroAbdominal = perimetroAbdominal; // Perimetro Abdominal
    this.lateralidad = lateralidad; // Lateralidad
    this.dc0 = dc0; // Diagnostico Codigo Ppal
    this.dd0 = dd0; // Diagnostico Descripcion Ppal
    this.dc1 = dc1; // Diagnostico Codigo 1
    this.dd1 = dd1; // Diagnostico Descripcion 1
    this.dc2 = dc2; // Diagnostico Codigo 2
    this.dd2 = dd2; // Diagnostico Descripcion 2
    this.dc3 = dc3; // Diagnostico Codigo 3
    this.dd3 = dd3; // Diagnostico Descripcion 3
    this.dc4 = dc4; // Diagnostico Codigo 4
    this.dd4 = dd4; // Diagnostico Descripcion 4
    this.dc5 = dc5; // Diagnostico Codigo 5
    this.dd5 = dd5; // Diagnostico Descripcion 5
    this.dc6 = dc6; // Diagnostico Codigo 6
    this.dd6 = dd6; // Diagnostico Descripcion 6
    this.dc7 = dc7; // Diagnostico Codigo 7
    this.dd7 = dd7; // Diagnostico Descripcion 7
    this.dc8 = dc8; // Diagnostico Codigo 8
    this.dd8 = dd8; // Diagnostico Descripcion 8
    this.dc9 = dc9; // Diagnostico Codigo 9
    this.dd9 = dd9; // Diagnostico Descripcion 9
    this.observacionesDiags = observacionesDiags; // Observaciones Diags
    this.conceptoDeEvaluacion = conceptoDeEvaluacion; // Concepto De Evaluacion
    this.observacionesConcepto = observacionesConcepto; // Observaciones Concepto
    this.emp1 = emp1; // enfasis 1
    this.empConp1 = empConp1; // Concepto Enfasis 1
    this.empObs1 = empObs1; // Observaciones Enfasis 1
    this.emp2 = emp2; // enfasis 2
    this.empConp2 = empConp2; // Concepto Enfasis 2
    this.empObs2 = empObs2; // Observaciones Enfasis 2
    this.emp3 = emp3; // enfasis 3
    this.empConp3 = empConp3; // Concepto Enfasis 3
    this.empObs3 = empObs3; // Observaciones Enfasis 3
    this.emp4 = emp4; // enfasis 4
    this.empConp4 = empConp4; // Concepto Enfasis 4
    this.empObs4 = empObs4; // Observaciones Enfasis 4
    this.emp5 = emp5; // enfasis 5
    this.empConp5 = empConp5; // Concepto Enfasis 5
    this.empObs5 = empObs5; // Observaciones Enfasis 5
    this.emp6 = emp6; // enfasis 6
    this.empConp6 = empConp6; // Concepto Enfasis 6
    this.empObs6 = empObs6; // Observaciones Enfasis 6
    this.emp7 = emp7; // enfasis 7
    this.empConp7 = empConp7; // Concepto Enfasis 7
    this.empObs7 = empObs7; // Observaciones Enfasis 7
    this.emp8 = emp8; // enfasis 8
    this.empConp8 = empConp8; // Concepto Enfasis 8
    this.empObs8 = empObs8; // Observaciones Enfasis 8
    this.emp9 = emp9; // enfasis 9
    this.empConp9 = empConp9; // Concepto Enfasis 9
    this.empObs9 = empObs9; // Observaciones Enfasis 9
    this.recomendacionesEspecificas = recomendacionesEspecificas; // Recomendaciones Especificas
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
      return "success";
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
    emo.registerEmo(register, sheetName, spreadsheet);
    return 'success';
  } catch (error) {
    Logger.log(error.message);
  }
}
