class osteo extends emoGraph {
  constructor(
    contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", numberIdentification = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", numberOfChildrenRec = "", race = "", civilStatus = "", scholarship = "", post = "", postRec = "", durationWorking = "", antiquity = "", cervicalgia = 0, cervicalgiaObs = "NO REFIERE", epicondilitis = 0, epicondilitisObs = "NO REFIERE", lumbalgia = 0, lumbalgiaObs = "NO REFIERE", sTunelCarpo = 0, sTunelCarpoObs = "NO REFIERE", fracturas = 0, fracturasObs = "NO REFIERE", tendinitis = 0, tendinitisObs = "NO REFIERE", lesionEnMeniscos = 0, lesionEnMeniscosObs = "NO REFIERE", esguinces = 0, esguincesObs = "NO REFIERE", hombroDoloroso = 0, hombroDolorosoObs = "NO REFIERE", radiculopatia = 0, radiculopatiaObs = "NO REFIERE", bursitis = 0, bursitisObs = "NO REFIERE", artrosis = 0, artrosisObs = "NO REFIERE", escoliosis = 0, escoliosisObs = "NO REFIERE", retraccionesMusculares = 0, retraccionesMuscularesObs = "NO REFIERE", malformaciones = 0, malformacionesObs = "NO REFIERE", discopatias = 0, discopatiasObs = "NO REFIERE", fibromalgia = 0, fibromalgiaObs = "NO REFIERE", otrosAntOsteomusculares = "NO REFIERE", peso = "", talla = "", diagPpal = "EXAMEN DE SALUD OCUPACIONAL", diagPpalObs = "", diagRel1 = 0, diagRel2 = 0, diagRel3 = 0, recPersActFisicaCardio3xSemana = 0, recPersFort15Repeticiones3Series = 0, recPersEjercEstiramiento20Seg = 0, recPersAutocuidado = 0, recPersSeguimientoMedico = 0, recOcupSvePrevensionLesiones = 0, recOcupManipulacionDeCarga = 0, recOcupPausasActivas = 0, recOcupAnalisisErgonomicos = 0, recOcupEvidarPosturasForzadas = 0, recomOcupacionales = "", recomGrales = ""
  ) {
    super(contractedName, origin, destiny, city, income, examType, date, patient, numberIdentification, age, range_age, stratum, gender, numberOfChildren, numberOfChildrenRec, race, civilStatus, scholarship, post, postRec, durationWorking, antiquity);
    this.cervicalgia = cervicalgia;
    this.cervicalgiaObs = cervicalgiaObs;
    this.epicondilitis = epicondilitis;
    this.epicondilitisObs = epicondilitisObs;
    this.lumbalgia = lumbalgia;
    this.lumbalgiaObs = lumbalgiaObs;
    this.sTunelCarpo = sTunelCarpo;
    this.sTunelCarpoObs = sTunelCarpoObs;
    this.fracturas = fracturas;
    this.fracturasObs = fracturasObs;
    this.tendinitis = tendinitis;
    this.tendinitisObs = tendinitisObs;
    this.lesionEnMeniscos = lesionEnMeniscos;
    this.lesionEnMeniscosObs = lesionEnMeniscosObs;
    this.esguinces = esguinces;
    this.esguincesObs = esguincesObs;
    this.hombroDoloroso = hombroDoloroso;
    this.hombroDolorosoObs = hombroDolorosoObs;
    this.radiculopatia = radiculopatia;
    this.radiculopatiaObs = radiculopatiaObs;
    this.bursitis = bursitis;
    this.bursitisObs = bursitisObs;
    this.artrosis = artrosis;
    this.artrosisObs = artrosisObs;
    this.escoliosis = escoliosis;
    this.escoliosisObs = escoliosisObs;
    this.retraccionesMusculares = retraccionesMusculares;
    this.retraccionesMuscularesObs = retraccionesMuscularesObs;
    this.malformaciones = malformaciones;
    this.malformacionesObs = malformacionesObs;
    this.discopatias = discopatias;
    this.discopatiasObs = discopatiasObs;
    this.fibromalgia = fibromalgia;
    this.fibromalgiaObs = fibromalgiaObs;
    this.otrosAntOsteomusculares = otrosAntOsteomusculares;
    this.peso = peso;
    this.talla = talla;
    this.diagPpal = diagPpal;
    this.diagPpalObs = diagPpalObs;
    this.diagRel1 = diagRel1;
    this.diagRel2 = diagRel2;
    this.diagRel3 = diagRel3;
    this.recPersActFisicaCardio3xSemana = recPersActFisicaCardio3xSemana;
    this.recPersFort15Repeticiones3Series = recPersFort15Repeticiones3Series;
    this.recPersEjercEstiramiento20Seg = recPersEjercEstiramiento20Seg;
    this.recPersAutocuidado = recPersAutocuidado;
    this.recPersSeguimientoMedico = recPersSeguimientoMedico;
    this.recOcupSvePrevensionLesiones = recOcupSvePrevensionLesiones;
    this.recOcupManipulacionDeCarga = recOcupManipulacionDeCarga;
    this.recOcupPausasActivas = recOcupPausasActivas;
    this.recOcupAnalisisErgonomicos = recOcupAnalisisErgonomicos;
    this.recOcupEvidarPosturasForzadas = recOcupEvidarPosturasForzadas;
    this.recomOcupacionales = recomOcupacionales;
    this.recomGrales = recomGrales;
  }


  /**
   * Registers the given data in the specified sheet of the spreadsheet.
   *
   * @param {any} data - The data to be registered.
   * @param {string} sheetName - The name of the sheet to register the data in.
   * @param {Spreadsheet} spreadsheet - The spreadsheet object to register the data in.
   * @return {string} - Returns "Success" if the registration is successful.
   */
  static registerOsteo(data, sheetName, spreadsheet) {
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
 * Inserts data into the Osteo class.
 *
 * @param {object} data - the data to be inserted
 * @param {string} sheetName - the name of the sheet
 * @param {object} spreadsheet - the spreadsheet object
 */
function insertOsteo(data, sheetName, spreadsheet) {
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
        case 'race':
          arrayData[15] = data[iterator];
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
        case 'cervicalgia':
          arrayData[22] = data[iterator];
          break;
        case 'cervicalgiaObs':
          arrayData[23] = data[iterator];
          break;
        case 'epicondilitis':
          arrayData[24] = data[iterator];
          break;
        case 'epicondilitisObs':
          arrayData[25] = data[iterator];
          break;
        case 'lumbalgia':
          arrayData[26] = data[iterator];
          break;
        case 'lumbalgiaObs':
          arrayData[27] = data[iterator];
          break;
        case 'sTunelCarpo':
          arrayData[28] = data[iterator];
          break;
        case 'sTunelCarpoObs':
          arrayData[29] = data[iterator];
          break;
        case 'fracturas':
          arrayData[30] = data[iterator];
          break;
        case 'fracturasObs':
          arrayData[31] = data[iterator];
          break;
        case 'tendinitis':
          arrayData[32] = data[iterator];
          break;
        case 'tendinitisObs':
          arrayData[33] = data[iterator];
          break;
        case 'lesionEnMeniscos':
          arrayData[34] = data[iterator];
          break;
        case 'lesionEnMeniscosObs':
          arrayData[35] = data[iterator];
          break;
        case 'esguinces':
          arrayData[36] = data[iterator];
          break;
        case 'esguincesObs':
          arrayData[37] = data[iterator];
          break;
        case 'hombroDoloroso':
          arrayData[38] = data[iterator];
          break;
        case 'hombroDolorosoObs':
          arrayData[39] = data[iterator];
          break;
        case 'radiculopatia':
          arrayData[40] = data[iterator];
          break;
        case 'radiculopatiaObs':
          arrayData[41] = data[iterator];
          break;
        case 'bursitis':
          arrayData[42] = data[iterator];
          break;
        case 'bursitisObs':
          arrayData[43] = data[iterator];
          break;
        case 'artrosis':
          arrayData[44] = data[iterator];
          break;
        case 'artrosisObs':
          arrayData[45] = data[iterator];
          break;
        case 'escoliosis':
          arrayData[46] = data[iterator];
          break;
        case 'escoliosisObs':
          arrayData[47] = data[iterator];
          break;
        case 'retraccionesMusculares':
          arrayData[48] = data[iterator];
          break;
        case 'retraccionesMuscularesObs':
          arrayData[49] = data[iterator];
          break;
        case 'malformaciones':
          arrayData[50] = data[iterator];
          break;
        case 'malformacionesObs':
          arrayData[51] = data[iterator];
          break;
        case 'discopatias':
          arrayData[52] = data[iterator];
          break;
        case 'discopatiasObs':
          arrayData[53] = data[iterator];
          break;
        case 'fibromalgia':
          arrayData[54] = data[iterator];
          break;
        case 'fibromalgiaObs':
          arrayData[55] = data[iterator];
          break;
        case 'otrosAntOsteomusculares':
          arrayData[56] = data[iterator];
          break;
        case 'peso':
          arrayData[57] = data[iterator];
          break;
        case 'talla':
          arrayData[58] = data[iterator];
          break;
        case 'diagPpal':
          arrayData[61] = data[iterator];
          break;
        case 'diagPpalObs':
          arrayData[62] = data[iterator];
          break;
        case 'diagRel1':
          arrayData[63] = data[iterator];
          break;
        case 'diagRel2':
          arrayData[64] = data[iterator];
          break;
        case 'diagRel3':
          arrayData[65] = data[iterator];
          break;
        case 'recPersActFisicaCardio3xSemana':
          arrayData[66] = data[iterator];
          break;
        case 'recPersFort15Repeticiones3Series':
          arrayData[67] = data[iterator];
          break;
        case 'recPersEjercEstiramiento20Seg':
          arrayData[68] = data[iterator];
          break;
        case 'recPersAutocuidado':
          arrayData[69] = data[iterator];
          break;
        case 'recPersSeguimientoMedico':
          arrayData[70] = data[iterator];
          break;
        case 'recOcupSvePrevensionLesiones':
          arrayData[71] = data[iterator];
          break;
        case 'recOcupManipulacionDeCarga':
          arrayData[72] = data[iterator];
          break;
        case 'recOcupPausasActivas':
          arrayData[73] = data[iterator];
          break;
        case 'recOcupAnalisisErgonomicos':
          arrayData[74] = data[iterator];
          break;
        case 'recOcupEvidarPosturasForzadas':
          arrayData[75] = data[iterator];
          break;
        case 'recomOcupacionales':
          arrayData[76] = data[iterator];
          break;
        case 'recomGrales':
          arrayData[77] = data[iterator];
          break;
      }
    }

    const age = ageRange(arrayData[9]);
    arrayData[10] = age;
    const working = workingRange(arrayData[20]);
    arrayData[21] = working;
    const imc = imc2(arrayData[57], arrayData[58]);
    arrayData[59] = imc[0].toFixed(2);
    arrayData[60] = imc[1];

    const register = new osteo(...arrayData);
    delete register.stratum;
    delete register.numberOfChildren;
    delete register.numberOfChildrenRec;
    delete register.postRec;
    const response = osteo.registerOsteo(register, sheetName, spreadsheet);
    return response;

  } catch (error) {
    Logger.log(error);
  }

}

