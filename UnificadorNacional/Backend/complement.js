class complement extends emoGraph {
  constructor(contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", typeID = "CC", numberIdentification = "", dateOfBirth = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", numberOfChildrenRec = "", race = "", civilStatus = "", scholarship = "", post = "", postRec = "", durationWorking = "", antiquity = "", procedimiento = "", diagPpal = "", diagPpalObs = "", diagRel1 = 0, diagRel2 = 0, diagRel3 = 0) {
    super(contractedName, origin, destiny, city, income, examType, date, patient, typeID, numberIdentification, dateOfBirth, age, range_age, stratum, gender, numberOfChildren, numberOfChildrenRec, race, civilStatus, scholarship, post, postRec, durationWorking, antiquity);
    this.procedimiento = procedimiento;
    this.diagPpal = diagPpal;
    this.diagPpalObs = diagPpalObs;
    this.diagRel1 = diagRel1;
    this.diagRel2 = diagRel2;
    this.diagRel3 = diagRel3;
  }

  /**
   * Registers complementary data in the specified sheet of a spreadsheet.
   *
   * @param {any} data - The data to be registered.
   * @param {string} sheetName - The name of the sheet.
   * @param {Spreadsheet} spreadsheet - The spreadsheet object.
   */
  static registerComplementary(data, sheetName, spreadsheet) {
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
 * Inserts complementary data into a spreadsheet.
 *
 * @param {Object} data - An object containing the data to be inserted.
 * @param {string} sheetName - The name of the sheet where the data will be inserted.
 * @param {Spreadsheet} spreadsheet - The spreadsheet object where the data will be inserted.
 * @return {void} This function does not return a value.
 */
function insertComplementary(data, sheetName, spreadsheet) {
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
        case 'tipoIdentificacion':
          arrayData[8] = data[iterator];
          break;
        case 'numberIdentification':
          arrayData[9] = data[iterator];
          break;
        case 'fechaDeNacimiento':
          arrayData[10] = data[iterator];
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
        case 'post':
          arrayData[20] = data[iterator];
          break;
        case 'procedimiento':
          arrayData[24] = data[iterator];
          break;
        case 'diagPpal':
          arrayData[25] = data[iterator];
          break;
        case 'diagPpalObs':
          arrayData[26] = data[iterator];
          break;
        case 'diagRel1':
          arrayData[27] = data[iterator];
          break;
        case 'diagRel2':
          arrayData[28] = data[iterator];
          break;
        case 'diagRel3':
          arrayData[29] = data[iterator];
          break;
      }
    }

    /** 
     * Calculates the ageRange
     */
    const age = ageRange(arrayData[11]);
    arrayData[12] = age;

    const register = new complement(...arrayData);
    delete register.numberOfChildrenRec;
    delete register.scholarship;
    delete register.postRec;
    delete register.durationWorking;
    delete register.antiquity;
    const response = complement.registerComplementary(register, sheetName, spreadsheet);
    return response;
  } catch (error) {
    Logger.log(error.message);
  }
}
