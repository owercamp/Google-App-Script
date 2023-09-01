/**
 * Retrieves the active spreadsheet and cell, as well as the active sheet name, then checks if the current 
 * active cell is in column 1, has a value, and if the active sheet name is "GESTOR". If all are true, call the 
 * providers function with the value of the active cell and row as parameters, and set the value of the cell 
 * at the same row and column 21 to be 'INTRAMURAL'.
 *
 * @return {void} No return value.
 */
function list() {
  const spreadsheet = SpreadsheetApp.getActive();
  const activeCell = spreadsheet.getActiveCell();
  const column = activeCell.getColumn();
  const row = activeCell.getRow();
  const name = spreadsheet.getActiveSheet().getName();

  if (column === 1 && activeCell.getValue() && name === "GESTOR") {
    providers(activeCell.getValue(), row);
    spreadsheet.getActiveSheet().getRange(row, 21).setValue('INTRAMURAL');
  }
}

/**
 * Returns a list of providers from the "DATA" sheet for a given city.
 *
 * @param {string} city - The name of the city to retrieve providers for.
 * @param {number} row - The row number to set the data validation for.
 * @return {void} This function does not return anything.
 */
function providers(city, row) {
  const list_providers = [];
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName("DATA");
  const rows = sheet.getRange(2, 3, sheet.getMaxRows(), 2);
  const values = rows.getValues().filter(e => (e[0] != "") ? e : "");
  const name = spreadsheet.getActiveSheet().getName();

  if (!["ESTADISTICA", "DATA", "GRUPOS"].includes(name)) {
    for (let i = 0; i < values.length; ++i) {
      if (values[i][0] == city && values[i][0] != "") {
        list_providers.push(values[i][1]);
      }
    }

    const provider = SpreadsheetApp.getActive();
    provider.getActiveSheet().getRange(row, 3).setDataValidation(SpreadsheetApp.newDataValidation()
      .setAllowInvalid(false)
      .requireValueInList(list_providers, true)
      .build());
  }
}

/**
 * Generates a function comment for the given function body.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function medicals() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const activeSheet = spreadsheet.getActiveSheet();
  const row = activeSheet.getActiveCell().getRow();
  const column = activeSheet.getActiveCell().getColumn();
  const name = activeSheet.getName();
  const city = activeSheet.getRange(row, 1).getValue();

  if (column == 3 && name == "GESTOR") {
    const list_medicals = [];
    const spreadsheet2 = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet2.getSheetByName("DATA");
    const rows = sheet.getRange(2, 12, sheet.getLastRow(), 3);
    const values = rows.getValues().filter(e => (e[0] != "") ? e : "");

    values.forEach(([c, t, m]) => {
      if (c === city && t === spreadsheet.getActiveSheet().getRange(row, 3).getValue()) {
        listMedicals.push(m);
      }
    });

    const activeSpreadsheet = SpreadsheetApp.getActive();
    const activeSheet = activeSpreadsheet.getActiveSheet();
    const cellRange = activeSheet.getRange(row, 19);

    if (listMedicals.length > 0) {
      const newDataValidation = SpreadsheetApp.newDataValidation()
        .setAllowInvalid(false)
        .requireValueInList(listMedicals, true)
        .build();
      cellRange.setDataValidation(newDataValidation);
    } else {
      cellRange.clearDataValidations();
    }
  }
}

/**
 * Retrieves data from the active spreadsheet and sets values to specific cells based on conditions.
 *
 * @return {void} Returns nothing.
 */
function familys() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const activeCell = spreadsheet.getActiveCell();
  const row = activeCell.getRow();
  const column = activeCell.getColumn();
  const values = activeCell.getValue();
  const name = spreadsheet.getActiveSheet().getName();

  if (column === 36 && name === "GESTOR") {
    const headersRange = spreadsheet.getRangeByName('Headers');
    const arrayColumns = headersRange.getValues();
    try {
      const rangeValues = values.toString().match(/\(([^)]+)\)/)[1];
      const splitValues = rangeValues.toString().split("-");
      const rangeSheet = spreadsheet.getActiveSheet();
      const range = rangeSheet.getRange(row, 37, 1, 56);
  
      range.clearContent();
  
      splitValues.forEach(e => {
        arrayColumns[0].forEach((j, index) => {
          const search = validate(e.trim());
          if (search === j.toString().trim()) {
            const col = column + index + 1;
            rangeSheet.getRange(row, col).setValue("x");
          }
        });
      });
    } catch (error) {
      const rangeSheet = spreadsheet.getActiveSheet();
      const range = rangeSheet.getRange(row, 37, 1, 56);
  
      range.clearContent();
      Logger.log(error.message);
    }
  }
}

/**
 * Maps a value to its corresponding description based on a predefined mapping.
 *
 * @param {string} value - The value to be mapped.
 * @return {string} The corresponding description if it exists in the mapping, otherwise the original value.
 */
function validate(value) {
  const mapping = {
    "AUDIOMETRIA": "AUDIOMETRIA DE TONOS PUROS AEREOS Y OSEOS CON ENMASCARAMIENTO",
    "OSTEOMUSCULAR": "EXAMEN OSTEOMUSCULAR POR FISIOTERAPIA",
    "RH": "HEMOCLASIFICACION SISTEMA ABO DIRECTA POR MICROTECNICA_RH",
    "HCG": "GONADOTROPINA CORIONICA  EN ORINA O SUERO_HCG"
  };

  return mapping[value] || value;
}

/**
 * Diagnose the active spreadsheet cell.
 *
 * @return {undefined} undefined
 */
function diagnoseActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const activeSheet = spreadsheet.getActiveSheet();
  const activeCell = spreadsheet.getActiveCell();
  const row = activeCell.getRow();
  const column = activeCell.getColumn();
  const name = activeSheet.getName();

  // Define a mapping of column names to target columns
  const columnMapping = {
    "RADIOGRAFIA DE COLUMNA LUMBOSACRA": 144,
    "ELECTROCARDIOGRAMA DE RITMO O DE SUPERFICIE SOD_EKG": 145,
    "RADIOGRAFIA DE RODILLAS COMPARATIVAS POSICION VERTICAL": 146,
    "RADIOGRAFIA DE TORAX": 147,
    "RADIOGRAFIA DE TORAX CON LECTURA ILO": 148,
    "RESONANCIA MAGNETICA DE COLUMNA LUMBOSACRA SIMPLE": 149,
    "TAC COLUMNA LUMBOSACRA": 150,
    "RADIOGRAFIA DE COLUMNA DORSAL": 151,
    "ELECTROCARDIOGRAFIA DINAMICA (HOLTER)_EKG HOLTER": 152,
    "RADIOGRAFIA DE COLUMNA CERVICAL": 153,
    "RADIOGRAFIA DE COLUMNA DORSOLUMBAR": 154,
    "ELECTROENCEFALOGRAMA CONVENCIONAL_EEG": 155,
    "RADIOGRAFIA DE PIE (AP,LATERAL)": 156,
    "RADIOGRAFIA DE COLUMNA UNION CERVICO DORSAL": 157
  };

  if (column === 35 && name === "GESTOR") {
    const columnName = activeSheet.getRange(row, column).getValue();
    const targetColumn = columnMapping[columnName];

    if (targetColumn !== undefined) {
      const currentValue = activeSheet.getRange(row, targetColumn).getValue().toString().toUpperCase();
      activeSheet.getRange(row, targetColumn).setValue(currentValue === "X" ? "" : "x");
    }
  }
}

/**
 * Executes when the "drugsActive" function is called.
 *
 * @return {undefined} Does not return a value.
 */
function drugsActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const activeSheet = spreadsheet.getActiveSheet();
  const activeCell = spreadsheet.getActiveCell();
  const row = activeCell.getRow();
  const column = activeCell.getColumn();
  const name = activeSheet.getName();

  // Define a mapping of column names to target columns
  const columnMapping = {
    "2 SUSTANCIAS": 135,
    "3 SUSTANCIAS": 136,
    "5 SUSTANCIAS": 133,
    "10 SUSTANCIAS": 134
  }

  if (column === 34 && name === "GESTOR") {
    activeSheet.getRange(row, 133, 1, 4).clearContent();
    const columnName = activeSheet.getRange(row, column).getValue();
    const targetColumn = columnMapping[columnName];

    if (targetColumn !== undefined) {
      const currentValue = activeSheet.getRange(row, targetColumn).getValue().toString().toUpperCase();
      activeSheet.getRange(row, targetColumn).setValue(currentValue === "X" ? "" : "x");
    }
  }
}

/**
 * Checks if the laboratory is active.
 *
 * @return {undefined} No return value.
 */
function laboratoryActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const activeSheet = spreadsheet.getActiveSheet();
  const activeCell = spreadsheet.getActiveCell();
  const row = activeCell.getRow();
  const column = activeCell.getColumn();
  const name = activeSheet.getName();

  // Define a mapping of column names to target columns
  const columnMapping = {
    "KOH PARA HONGOS": 96,
    "FROTIS DE GARGANTA": 98,
    "GLUCOSA EN SUERO U OTRO FLUIDO DIFERENTE A ORINA_GLICEMIA": 107,
    "PERFIL LIPIDICO": 106,
    "HEMOGRAMA III": 89,
    "HEMOGRAMA IV": 90,
    "HEMOGRAMA V": 91,
    "HEMOCLASIFICACION SISTEMA ABO DIRECTA POR MICROTECNICA RH": 92,
    "COPROLOGICO": 99,
    "GONADOTROPINA CORIONICA EN ORINA O SUERO HCG": 88,
    "CREATININA": 109,
    "COLESTEROL TOTAL": 104,
    "COLESTEROL DE ALTA DENSIDAD_HDL": 102,
    "COLESTEROL DE BAJA DENSIDAD_LDL": 103,
    "TRIGLICERIDOS": 105,
    "TRANSAMINASA TGP": 112,
    "TRANSAMINASA TGO": 113,
    "UROANALISIS PO": 95,
    "NITROGENO UREICO_BUN": 110,
    "FOSFATASA ALCALINA": 120,
    // "SEROLOGIA": 0,
    "BILIRRUBINAS TOTAL Y DIRECTA": 119,
    "CRIOAGLUTININAS": 132,
    "COPROCULTIVO": 101,
    "ALCOHOLEMIA": 111,
    "GLUCOSA PRE Y POST CARGA DE GLUCOSA_GLICEMIA CON CARGA": 108,
    "CULTIVO PARA MICROORGANISMOS_GARGANTA": 100,
    "RECUENTO DE RETICULOCITOS METODO MANUAL": 116,
    "FROTIS NASAL": 97,
    "HEPATITIS B ANTICUERPOS S (ANTI_HBS)": 127,
    "EXTENDIDO DE SANGRE PERIFERICA ESTUDIO DE MORFOLOGIA_FSP": 114,
    "HEMOGLOBINA GLICOSILADA": 118,
    "COLINESTERASA SERICA": 94,
    "COLINESTERASA EN ERITROCITOS (ACETILCOLINESTERASA)": 93,
    "HORMONA LUTEINIZANTE (LH)": 122,
    "HORMONA ESTIMULANTE DEL TIROIDES_TSH": 123,
    "ANTIGENO ESPECIFICO DE PROSTATA_PSA": 128,
    "MICROALBUMINURIA ORINA AL AZAR": 117,
    "MICROALBUMINURIA 24 HORAS": 131,
    "HEMOGLOBINA": 115,
    "TRYPANOSOMA CRUZI ANTICUERPOS IG G": 126,
    "TIROXINA TOTAL_T4": 124,
    "TRIYODOTIRONINA TOTAL_T3": 125,
    "GOTA GRUESA (HEMOPARASITOS)": 130,
    "HEMATOCRITO": 129,
    "GAMMA GLUTAMIL TRANSFERASA": 121,
    "CHAGAS ANTICUERPOS IGC": 279,
  }

  if (column === 33 && name === "GESTOR") {
    const columnName = activeSheet.getRange(row, column).getValue();
    const targetColumn = columnMapping[columnName];

    if (targetColumn !== undefined) {
      const currentValue = activeSheet.getRange(row, targetColumn).getValue().toString().toUpperCase();
      activeSheet.getRange(row, targetColumn).setValue(currentValue === "X" ? "" : "x");
    }
  }
}

/**
 * Generates the function comment for the given function body.
 *
 * @return {undefined} No return value
 */
function covidActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const activeSheet = spreadsheet.getActiveSheet();
  const activeCell = spreadsheet.getActiveCell();
  const row = activeCell.getRow();
  const column = activeCell.getColumn();
  const name = activeSheet.getName();

  // Define a mapping of column names to target columns
  const columnMapping = {
    "PRUEBA CONFIRMATORIA PCR": 142,
    "PRUEBA RAPIDA ANTIGENOS": 143,
    "PRUEBA RAPIDA ANTICUERPOS (INMUNOGLOBULINA IGM- IGG)": 159
  }

  if (column === 32 && name === "GESTOR") {
    activeSheet.getRange(row, 159, 1, 1).clearContent();
    activeSheet.getRange(row, 142, 1, 2).clearContent();
    const columnName = activeSheet.getRange(row, column).getValue();
    const targetColumn = columnMapping[columnName];

    if (targetColumn !== undefined) {
      const currentValue = activeSheet.getRange(row, targetColumn).getValue().toString().toUpperCase();
      activeSheet.getRange(row, targetColumn).setValue(currentValue === "X" ? "" : "x");
    }
  }
}


/**
 * Checks if the vaccine is active and updates the corresponding cell value.
 *
 * @return {void} No return value.
 */
function vaccineActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const activeSheet = spreadsheet.getActiveSheet();
  const activeCell = spreadsheet.getActiveCell();
  const row = activeCell.getRow();
  const column = activeCell.getColumn();
  const name = activeSheet.getName();

  // Define a mapping of column names to target columns
  const columnMapping = {
    "VACUNACION CONTRA HEPATITIS A": 141,
    "VACUNACION CONTRA HEPATITIS B": 139,
    "VACUNACION CONTRA FIEBRE AMARILLA": 138,
    "VACUNACION CONTRA INFLUENZA": 140,
    "ADMINISTRACION DE ANTITOXINA TETANICA SOD": 137,
    "FIEBRE TIFOIDEA": 278
  }

  if (column === 31 && name === "GESTOR") {
    const columnName = activeSheet.getRange(row, column).getValue();
    const targetColumn = columnMapping[columnName];

    if (targetColumn !== undefined) {
      const currentValue = activeSheet.getRange(row, targetColumn).getValue().toString().toUpperCase();
      activeSheet.getRange(row, targetColumn).setValue(currentValue === "X" ? "" : "x");
    }
  }
}

/**
 * This function checks if the active cell is on column 30 in the sheet named "GESTOR". If it is, 
 * this function performs certain actions based on the value of the active cell in the same row. 
 * Specifically, it sets certain cells in the active row to "x", depending on the active cell value. 
 *
 * @return {void}
 */
function emphasisActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();
  const name = spreadsheet.getActiveSheet().getName();

  if (column == 30 && name == "GESTOR") {

    switch (spreadsheet.getActiveSheet().getRange(row, column).getValue()) {
      case "AEROPORTUARIO":
        spreadsheet.getActiveSheet().getRange(row, 39).setValue("x");// AUDIOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 37).setValue("x");// OPTOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 92).setValue("x");// HEMOCLASIFICACION RH
        spreadsheet.getActiveSheet().getRange(row, 45).setValue("x");// PRUEBAS PSICOTECNICAS PARA OPERATIVOS
        spreadsheet.getActiveSheet().getRange(row, 57).setValue("x");// EXPLORACIÓN DEL OLFATO
        spreadsheet.getActiveSheet().getRange(row, 134).setValue("x");// DROGAS DE ABUSO_10 SUSTANCIAS
        spreadsheet.getActiveSheet().getRange(row, 51).setValue("x");// ALCOHOL EN ALIENTO
        break
      case "ALTURAS MASCULINO":
        spreadsheet.getActiveSheet().getRange(row, 28).setValue("x");// ALTURAS
        spreadsheet.getActiveSheet().getRange(row, 39).setValue("x");// AUDIOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 37).setValue("x");// OPTOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 89).setValue("x");// HEMOGRAFIA III
        spreadsheet.getActiveSheet().getRange(row, 107).setValue("x");// GLUCOSA EN SUERO U OTRO FLUIDO DIFERENTE A ORINA_GLICEMIA
        spreadsheet.getActiveSheet().getRange(row, 106).setValue("x");// PERFIL LIPIDICO
        break;
      case "ALTURAS FEMENINO":
        spreadsheet.getActiveSheet().getRange(row, 28).setValue("x");// ALTURAS
        spreadsheet.getActiveSheet().getRange(row, 39).setValue("x");// AUDIOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 37).setValue("x");// OPTOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 89).setValue("x");// HEMOGRAFIA III
        spreadsheet.getActiveSheet().getRange(row, 107).setValue("x");// GLUCOSA EN SUERO U OTRO FLUIDO DIFERENTE A ORINA_GLICEMIA
        spreadsheet.getActiveSheet().getRange(row, 106).setValue("x");// PERFIL LIPIDICO
        spreadsheet.getActiveSheet().getRange(row, 88).setValue("x");// GONADOTROPINA CORIONICA  EN ORINA O SUERO_HCG
        break;
      case "ALTURAS+ESPACIOS CONFINADOS MASCULINO":
        spreadsheet.getActiveSheet().getRange(row, 28).setValue("x");// ALTURAS
        spreadsheet.getActiveSheet().getRange(row, 39).setValue("x");// AUDIOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 37).setValue("x");// OPTOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 89).setValue("x");// HEMOGRAFIA III
        spreadsheet.getActiveSheet().getRange(row, 107).setValue("x");// GLUCOSA EN SUERO U OTRO FLUIDO DIFERENTE A ORINA_GLICEMIA
        spreadsheet.getActiveSheet().getRange(row, 106).setValue("x");// PERFIL LIPIDICO
        spreadsheet.getActiveSheet().getRange(row, 62).setValue("x");// ESPACIOS CONFINADOS
        spreadsheet.getActiveSheet().getRange(row, 41).setValue("x");// ESPIROMETRIA
        break;
      case "ALTURAS+ESPACIOS CONFINADOS FEMENINO":
        spreadsheet.getActiveSheet().getRange(row, 28).setValue("x");// ALTURAS
        spreadsheet.getActiveSheet().getRange(row, 39).setValue("x");// AUDIOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 37).setValue("x");// OPTOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 89).setValue("x");// HEMOGRAFIA III
        spreadsheet.getActiveSheet().getRange(row, 107).setValue("x");// GLUCOSA EN SUERO U OTRO FLUIDO DIFERENTE A ORINA_GLICEMIA
        spreadsheet.getActiveSheet().getRange(row, 106).setValue("x");// PERFIL LIPIDICO
        spreadsheet.getActiveSheet().getRange(row, 62).setValue("x");// ESPACIOS CONFINADOS
        spreadsheet.getActiveSheet().getRange(row, 41).setValue("x");// ESPIROMETRIA
        spreadsheet.getActiveSheet().getRange(row, 88).setValue("x");// GONADOTROPINA CORIONICA  EN ORINA O SUERO_HCG
        break;
      case "MANIPULACION DE ALIMENTOS":
        spreadsheet.getActiveSheet().getRange(row, 98).setValue("x");// FROTIS DE GARGANTA
        spreadsheet.getActiveSheet().getRange(row, 96).setValue("x");// KOH PARA HONGOS
        spreadsheet.getActiveSheet().getRange(row, 99).setValue("x");// COPROLOGICO
        break;
      case "SEGURIDAD VIAL":
        spreadsheet.getActiveSheet().getRange(row, 39).setValue("x");// AUDIOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 37).setValue("x");// OPTOMETRIA
        spreadsheet.getActiveSheet().getRange(row, 44).setValue("x");// PRUEBAS PSICOTECNICAS PARA CONDUCTORES
        spreadsheet.getActiveSheet().getRange(row, 46).setValue("x");// PRUEBA PSICOSENSOMETRICA
        break;
    }
  }
}

function checkedExam() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const activeSheet = spreadsheet.getActiveSheet();
  const activeCell = spreadsheet.getActiveCell();
  const row = activeCell.getRow();
  const column = activeCell.getColumn();
  const name = activeSheet.getName();

  // Define a mapping of column names to target columns
  const columnMapping = {
    "PRE-INGRESO": 22,
    "EGRESO": 23,
    "POST INCAPACIDAD": 24,
    "PERIODICO": 25,
    "PERIODICO CON SEGUIMIENTO": 26,
    "TRABAJO ESPECIAL": 27
  }

  if (column == 8 && name == "GESTOR") {
    activeSheet.getRange(row, 22, 1, 6).clearContent();
    const columnName = activeSheet.getRange(row, column).getValue();
    const targetColumn = columnMapping[columnName];

    if (targetColumn !== undefined) {
      const currentValue = activeSheet.getRange(row, targetColumn).getValue().toString().toUpperCase();
      activeSheet.getRange(row, targetColumn).setValue(currentValue === "X" ? "" : "x");
    }
  }
}

/**
 * Retrieves a list of exams from a Google Sheets document based on the active cell's row and column.
 *
 * @return {void} No return value.
 */
function listExams() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const row = spreadsheet.getActiveSheet().getActiveCell().getRow();
  const column = spreadsheet.getActiveSheet().getActiveCell().getColumn();

  SpreadsheetApp.getActive().toast("Realizando consulta por favor espere", "Consulta");

  const spreadsheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ORDEN");
  spreadsheet2.getRange('B14').activate();
  const currentCell = spreadsheet2.getCurrentCell();
  spreadsheet2.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate();
  currentCell.activateAsCurrentCell();
  spreadsheet2.getActiveRangeList().clear({ contentsOnly: true, skipFilteredRows: true });
  spreadsheet2.getRange('B14').activate();

  if (row == 4 && column == 7) {
    const sheet = spreadsheet.getSheetByName("ORDEN");
    const cc = sheet.getRange(4, 7).getValue();
    const ordenDate = sheet.getRange(8, 7).getValue().toLocaleDateString();
    const sheetData = spreadsheet.getSheetByName("GESTOR");
    const ccArray = sheetData.getRange(7, 11, sheetData.getLastRow(), sheetData.getLastColumn()).getValues();
    const exams = sheetData.getRange(6, 37, 1, sheetData.getLastColumn()).getValues();
    let item;
    const myExam = [];

    ccArray.find(element => (element[0] == cc && element[5].toLocaleDateString() == ordenDate) ? item = ccArray.indexOf(element) : "");

    const data = ccArray[item];
    const examArray = data.slice(26);

    const indices = [];
    const element = 'X';
    const selected = examArray.map(e => { return e.toUpperCase() })
    const idx = selected.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = selected.indexOf(element, idx + 1);
    }
    indices.map(e => myExam.push(exams[0][e]))

    sheet.getRange("B14").activate();
    myExam.map(register => {
      sheet.getActiveCell().setValue(register);
      sheet.getActiveCell().offset(1, 0).activate();
    })
  }
  SpreadsheetApp.getActive().toast("Consulta finalizada", "Correcto");
}
