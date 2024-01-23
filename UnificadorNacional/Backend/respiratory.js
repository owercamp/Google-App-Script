class respiratory extends emoGraph {
  constructor(contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", typeID = "", numberIdentification = "", dateOfBirth = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", numberOfChildrenRec = "", race = "", civilStatus = "", scholarship = "", post = "", postRec = "", durationWorking = "", antiquity = "", tuberculosis = "SIN DATO", bronquitis = "SIN DATO", rinitis = "SIN DATO", sinusitis = "SIN DATO", tosCronicas = "SIN DATO", asmaBronquial = "SIN DATO", covid19 = "SIN DATO", enfermedadPulmonarCronica = "SIN DATO", gripafrequente = "SIN DATO", traumaCostal = "SIN DATO", cancer = "SIN DATO", faringitis = "SIN DATO", neumonia = "SIN DATO", faringoamigdalitis = "SIN DATO", otros = "NO", practicaDeporte = "NO", frecuencia = "", tabaquismo = "", frecuenciaTabaquismo = "", cigarrillos = "", fumando = "", fumandoTiempo = "", frecuenciaCardiaca = "", frecuenciaRespiratoria = "", temperatura = "", rxTorax = "SIN DATO", rxToraxDesc = "", medicacionActual = "SIN DATO", medicacionActualDesc = "", factorDeRiesgo = "NO", tiempoDeExposicion = "NO", usoDeEpr = "NO", usoDeEprDesc = "NO", materialParticulado = "NO", gases = "NO", vaposores = "NO", humos = "NO",
    biologicos = "NO", otros = "NO", tapabocaTela = "NO", mascarillaDesechable = "NO", mascarillaFiltro = "NO", mascarillaAutocontenido = "NO", cinco = "", cuatro = "", tres = "", dos = "", uno = "", cero = "", claseDeTorax = "", cifosis = "", escoliosis = "", patronRespiratorio = "", coordinacionEntreElToraxYElAbdomen = "", valor = "", interpretacion = "") {
    super(contractedName, origin, destiny, city, income, examType, date, patient, typeID, numberIdentification, dateOfBirth, age, range_age, stratum, gender, numberOfChildren, numberOfChildrenRec, race, civilStatus, scholarship, post, postRec, durationWorking, antiquity);
    this.tuberculosis = tuberculosis;
    this.bronquitis = bronquitis;
    this.rinitis = rinitis;
    this.sinusitis = sinusitis;
    this.tosCronicas = tosCronicas;
    this.asmaBronquial = asmaBronquial;
    this.covid19 = covid19;
    this.enfermedadPulmonarCronica = enfermedadPulmonarCronica;
    this.gripafrequente = gripafrequente;
    this.traumaCostal = traumaCostal;
    this.cancer = cancer;
    this.faringitis = faringitis;
    this.neumonia = neumonia;
    this.faringoamigdalitis = faringoamigdalitis;
    this.otros = otros;
    this.practicaDeporte = practicaDeporte;
    this.frecuencia = frecuencia;
    this.tabaquismo = tabaquismo;
    this.frecuenciaTabaquismo = frecuenciaTabaquismo;
    this.cigarrillos = cigarrillos;
    this.fumando = fumando;
    this.fumandoTiempo = fumandoTiempo;
    this.frecuenciaCardiaca = frecuenciaCardiaca;
    this.frecuenciaRespiratoria = frecuenciaRespiratoria;
    this.temperatura = temperatura;
    this.rxTorax = rxTorax;
    this.rxToraxDesc = rxToraxDesc;
    this.medicacionActual = medicacionActual;
    this.medicacionActualDesc = medicacionActualDesc;
    this.biologicos = biologicos;
    this.factorDeRiesgo = factorDeRiesgo;
    this.tiempoDeExposicion = tiempoDeExposicion;
    this.usoDeEpr = usoDeEpr;
    this.usoDeEprDesc = usoDeEprDesc;
    this.materialParticulado = materialParticulado;
    this.gases = gases;
    this.vaposores = vaposores;
    this.humos = humos;
    this.tapabocaTela = tapabocaTela;
    this.mascarillaDesechable = mascarillaDesechable;
    this.mascarillaFiltro = mascarillaFiltro;
    this.mascarillaAutocontenido = mascarillaAutocontenido;
    this.cinco = cinco;
    this.cuatro = cuatro;
    this.tres = tres;
    this.dos = dos;
    this.uno = uno;
    this.cero = cero;
    this.claseDeTorax = claseDeTorax;
    this.cifosis = cifosis;
    this.escoliosis = escoliosis;
    this.patronRespiratorio = patronRespiratorio;
    this.coordinacionEntreElToraxYElAbdomen = coordinacionEntreElToraxYElAbdomen;
    this.valor = valor;
    this.interpretacion = interpretacion;
  }

  /**
   * Registers respiratory data to a specified sheet in the given spreadsheet.
   *
   * @param {Object} data - the data to be registered
   * @param {string} sheetName - the name of the sheet to register the data
   * @param {Spreadsheet} spreadsheet - the spreadsheet to register the data
   * @return {void} 
   */
  static registerRespiratory(data, sheetName, spreadsheet) {
    const rowRegister = spreadsheet.getSheetByName(sheetName);
    try {
      rowRegister.appendRow(Object.values(data));
    } catch (error) {
      Logger.log(error.message);
    }
  }
}

function insertRespiratory(data, sheetName, spreadsheet) {
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
        case 'tuberculosis':
          arrayData[24] = data[iterator];
          break;
        case 'bronquitis':
          arrayData[25] = data[iterator];
          break;
        case 'rinitis':
          arrayData[26] = data[iterator];
          break;
        case 'sinusitis':
          arrayData[27] = data[iterator];
          break;
        case 'tosCronicas':
          arrayData[28] = data[iterator];
          break;
        case 'asmaBronquial':
          arrayData[29] = data[iterator];
          break;
        case 'covid19':
          arrayData[30] = data[iterator];
          break;
        case 'enfermedadPulmonarCronica':
          arrayData[31] = data[iterator];
          break;
        case 'gripafrequente':
          arrayData[32] = data[iterator];
          break;
        case 'traumaCostal':
          arrayData[33] = data[iterator];
          break;
        case 'cancer':
          arrayData[34] = data[iterator];
          break;
        case 'faringitis':
          arrayData[35] = data[iterator];
          break;
        case 'neumonia':
          arrayData[36] = data[iterator];
          break;
        case 'faringoamigdalitis':
          arrayData[37] = data[iterator];
          break;
        case 'otros':
          arrayData[38] = data[iterator];
          break;
        case 'practicaDeporte':
          arrayData[39] = data[iterator];
          break;
        case 'frecuencia':
          arrayData[40] = data[iterator];
          break;
        case 'tabaquismo':
          arrayData[41] = data[iterator];
          break;
        case 'frecuenciaTabaquismo':
          arrayData[42] = data[iterator];
          break;
        case 'cigarrillos':
          arrayData[43] = data[iterator];
          break;
        case 'fumando':
          arrayData[44] = data[iterator];
          break;
        case 'fumandoTiempo':
          arrayData[45] = data[iterator];
          break;
        case 'frecuenciaCardiaca':
          arrayData[46] = data[iterator];
          break;
        case 'frecuenciaRespiratoria':
          arrayData[47] = data[iterator];
          break;
        case 'temperatura':
          arrayData[48] = data[iterator];
          break;
        case 'rxTorax':
          arrayData[49] = data[iterator];
          break;
        case 'rxToraxDesc':
          arrayData[50] = data[iterator];
          break;
        case 'medicacionActual':
          arrayData[51] = data[iterator];
          break;
        case 'medicacionActualDesc':
          arrayData[52] = data[iterator];
          break;
        case 'factorDeRiesgo':
          arrayData[53] = data[iterator];
          break;
        case 'tiempoDeExposicion':
          arrayData[54] = data[iterator];
          break;
        case 'usoDeEpr':
          arrayData[55] = data[iterator];
          break;
        case 'usoDeEprDesc':
          arrayData[56] = data[iterator];
          break;
        case 'materialParticulado':
          arrayData[57] = data[iterator];
          break;
        case 'gases':
          arrayData[58] = data[iterator];
          break;
        case 'vaposores':
          arrayData[59] = data[iterator];
          break;
        case 'humos':
          arrayData[60] = data[iterator];
          break;
        case 'biologicos':
          arrayData[61] = data[iterator];
          break;
        case 'otros':
          arrayData[62] = data[iterator];
          break;
        case 'tapabocaTela':
          arrayData[63] = data[iterator];
          break;
        case 'mascarillaDesechable':
          arrayData[64] = data[iterator];
          break;
        case 'mascarillaFiltro':
          arrayData[65] = data[iterator];
          break;
        case 'mascarillaAutocontenido':
          arrayData[66] = data[iterator];
          break;
        case 'cinco':
          arrayData[67] = data[iterator];
          break;
        case 'cuatro':
          arrayData[68] = data[iterator];
          break;
        case 'tres':
          arrayData[69] = data[iterator];
          break;
        case 'dos':
          arrayData[70] = data[iterator];
          break;
        case 'uno':
          arrayData[71] = data[iterator];
          break;
        case 'cero':
          arrayData[72] = data[iterator];
          break;
        case 'claseDeTorax':
          arrayData[73] = data[iterator];
          break;
        case 'cifosis':
          arrayData[74] = data[iterator];
          break;
        case 'escoliosis':
          arrayData[75] = data[iterator];
          break;
        case 'patronRespiratorio':
          arrayData[76] = data[iterator];
          break;
        case 'coordinacionEntreElToraxYElAbdomen':
          arrayData[77] = data[iterator];
          break;
        case 'valor':
          arrayData[78] = data[iterator];
          break;
        case 'interpretacion':
          arrayData[79] = data[iterator];
          break;
      }
    }

    /** 
     * Calculates the ageRange and numberWorking 
     */
    const age = ageRange(arrayData[11]);
    arrayData[12] = age;
    const working = numberWorking(arrayData[22]);
    arrayData[23] = working;

    const register = new respiratory(...arrayData);
    delete register.income;
    delete register.examType;
    delete register.dateOfBirth;
    delete register.age;
    delete register.range_age;
    delete register.stratum;
    delete register.numberOfChildren;
    delete register.numberOfChildrenRec;
    delete register.race;
    delete register.civilStatus;
    delete register.scholarship;
    delete register.postRec;
    delete register.durationWorking;
    delete register.antiquity;

    const response = respiratory.registerRespiratory(register, sheetName, spreadsheet);
    return response;

  } catch (error) {
    Logger.log(error.message);
  }
}