class insomnia extends emoGraph {
  constructor(contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", typeID = "", numberIdentification = "", dateOfBirth = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", numberOfChildrenRec = "", race = "", civilStatus = "", scholarship = "", post = "", postRec = "", durationWorking = "", antiquity = "", dificultadParaQuedarseDormido = "", dificultadParaMantenerElSueño = "", problemasParaDespertarMuyTemprano = "", insatisfechoSeEncuentraConSuPatronDeSueno = "", perceptibleParaOtrosConsideraSuProblema = "", estresadoEstaConSuProblemaDeSueno = "", interfieraConSuFuncionamientoDiario = "", alcohol = "", resultado = "") {
    super(contractedName, origin, destiny, city, income, examType, date, patient, typeID, numberIdentification, dateOfBirth, age, range_age, stratum, gender, numberOfChildren, numberOfChildrenRec, race, civilStatus, scholarship, post, postRec, durationWorking, antiquity);
    this.dificultadParaQuedarseDormido = dificultadParaQuedarseDormido;
    this.dificultadParaMantenerElSueño = dificultadParaMantenerElSueño;
    this.problemasParaDespertarMuyTemprano = problemasParaDespertarMuyTemprano;
    this.insatisfechoSeEncuentraConSuPatronDeSueno = insatisfechoSeEncuentraConSuPatronDeSueno;
    this.perceptibleParaOtrosConsideraSuProblema = perceptibleParaOtrosConsideraSuProblema;
    this.estresadoEstaConSuProblemaDeSueno = estresadoEstaConSuProblemaDeSueno;
    this.interfieraConSuFuncionamientoDiario = interfieraConSuFuncionamientoDiario;
    this.alcohol = alcohol;
    this.resultado = resultado;
  }

  /**
   * Registers the provided data in the specified sheet of the given spreadsheet.
   *
   * @param {Object} data - The data to be registered.
   * @param {string} sheetName - The name of the sheet in which the data will be registered.
   * @param {Spreadsheet} spreadsheet - The spreadsheet object in which the sheet is located.
   * @return {string} Returns "Success" if the data was successfully registered.
   */
  static registerInsomnia(data, sheetName, spreadsheet) {
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
 * Inserts data into the Insomnia sheet.
 *
 * @param {Object} data - The data to be inserted.
 * @param {string} sheetName - The name of the sheet.
 * @param {Object} spreadsheet - The spreadsheet object.
 */
function insertInsomnia(data, sheetName, spreadsheet) {
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
        case 'dificultadParaQuedarseDormido':
          arrayData[24] = data[iterator];
          break;
        case 'dificultadParaMantenerElSueño':
          arrayData[25] = data[iterator];
          break;
        case 'problemasParaDespertarMuyTemprano':
          arrayData[26] = data[iterator];
          break;
        case 'insatisfechoSeEncuentraConSuPatronDeSueno':
          arrayData[27] = data[iterator];
          break;
        case 'perceptibleParaOtrosConsideraSuProblema':
          arrayData[28] = data[iterator];
          break;
        case 'estresadoEstaConSuProblemaDeSueno':
          arrayData[29] = data[iterator];
          break;
        case 'interfieraConSuFuncionamientoDiario':
          arrayData[30] = data[iterator];
          break;
        case 'alcohol':
          arrayData[31] = data[iterator];
          break;
        case 'resultado':
          arrayData[32] = data[iterator];
          break;
      }
    }

    /** 
     * Calculates the ageRange
     */
    const age = ageRange(arrayData[11]);
    arrayData[12] = age;

    const register = new insomnia(...arrayData);
    delete register.typeID;
    delete register.dateOfBirth;
    delete register.numberOfChildrenRec;
    delete register.scholarship;
    delete register.postRec;
    delete register.durationWorking;
    delete register.antiquity;
    const response = insomnia.registerInsomnia(register, sheetName, spreadsheet);
    return response;
  } catch (error) {
    Logger.log(error.message);
  }
}
