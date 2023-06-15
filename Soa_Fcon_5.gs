/**
 * Retrieves the currently active cell in the spreadsheet and logs its row and column.
 *
 * @return {void} This function does not return anything.
 */
function props() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();
  console.log(`fila => ${row}, Columna => ${column}`)
}

/**
 * Selects the previous sheet in the active spreadsheet and activates cell A1.
 *
 * @return {void} Nothing is returned.
 */
function selectSheet() {
  const spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  const previousSheetIndex = spreadsheet.getActiveSheet().getIndex() - 1;
  if (previousSheetIndex <= 0) { previousSheetIndex = spreadsheet.getSheets().length; }
  spreadsheet.setActiveSheet(spreadsheet.getSheets()[previousSheetIndex - 1], true);
  spreadsheet.getRange('A1').activate();
};

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
  const column = spreadsheet.getActiveCell().getColumn();
  const row = spreadsheet.getActiveCell().getRow();
  const name = spreadsheet.getActiveSheet().getName();

  if (column == 1 && spreadsheet.getActiveCell().getValue() != "" && name == "GESTOR") {
    providers(spreadsheet.getActiveCell().getValue(), row);
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

  if (name != "ESTADISTICA" && name != "DATA" && name != "GRUPOS") {
    for (var i = 0; i < values.length; ++i) {
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
 * Retrieves a list of medicals based on the city and type of medical
 * selected in the "GESTOR" sheet. The list is populated in the corresponding
 * cell of the "GESTOR" sheet and is validated against a master list of 
 * medicals in the "DATA" sheet. If there are no valid medicals for the 
 * selected city and type, the cell is cleared of any previous validation.
 *
 * @return {void}
 */
function medicals() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();
  const name = spreadsheet.getActiveSheet().getName();
  const city = spreadsheet.getActiveSheet().getRange(row, 1).getValue();

  if (column == 3 && name == "GESTOR") {
    const list_medicals = [];
    const spreadsheet2 = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet2.getSheetByName("DATA");
    const rows = sheet.getRange(2, 12, sheet.getLastRow(), 3);
    const values = rows.getValues().filter(e => (e[0] != "") ? e : "");

    for (var i = 0; i < values.length; ++i) {
      if (values[i][0] == city && values[i][1] == spreadsheet.getActiveSheet().getRange(row, 3).getValue()) {
        list_medicals.push(values[i][2]);
      }
    }

    const medical = SpreadsheetApp.getActive();
    if (list_medicals.length > 0) {
      medical.getActiveSheet().getRange(row, 19).setDataValidation(SpreadsheetApp.newDataValidation()
        .setAllowInvalid(false)
        .requireValueInList(list_medicals, true)
        .build());
    } else {
      medical.getActiveSheet().getRange(row, 19).clearDataValidations();
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
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();
  const values = spreadsheet.getActiveCell().getValue();
  const name = spreadsheet.getActiveSheet().getName();

  if (column == 36 && name == "GESTOR") {
    let pos1 = values.toString().indexOf("(");
    let pos2 = values.toString().indexOf(")");
    let valuesInternals = values.toString().slice(pos1 + 1, pos2);
    let splitValues = valuesInternals.toString().split("-");
    let arrayColumns = spreadsheet.getRangeByName('Headers').getValues();
    spreadsheet.getActiveSheet().getRange(row, 37).setValue(""); // OPTOMETRIA
    spreadsheet.getActiveSheet().getRange(row, 38).setValue(""); // VISIOMETRIA
    spreadsheet.getActiveSheet().getRange(row, 41).setValue(""); // ESPIROMETRIA
    spreadsheet.getActiveSheet().getRange(row, 39).setValue(""); // AUDIOMETRIA
    spreadsheet.getActiveSheet().getRange(row, 88).setValue(""); // HCG
    spreadsheet.getActiveSheet().getRange(row, 92).setValue(""); // RH
    spreadsheet.getActiveSheet().getRange(row, 50).setValue(""); // OSTEOMUSCULAR


    splitValues.forEach(e => {
      arrayColumns[0].forEach(j => {
        let search = validate(e.trim());
        if (search == j.toString().trim()) {
          let ubi = arrayColumns[0].indexOf(j.toString().trim());
          let col = column + ubi + 1;
          spreadsheet.getActiveSheet().getRange(row, col).setValue("x");
        }
      });
    });
  }
}

/**
 * Validates a given value and returns a specific string based on the input.
 *
 * @param {string} value - The value to be validated.
 * @return {string} A string based on the input value or the same input value if it doesn't match any case.
 */
function validate(value) {
  switch (value) {
    case "AUDIOMETRIA":
      return "AUDIOMETRIA DE TONOS PUROS AEREOS Y OSEOS CON ENMASCARAMIENTO";
      break;
    case "OSTEOMUSCULAR":
      return "EXAMEN OSTEOMUSCULAR POR FISIOTERAPIA";
      break;
    case "RH":
      return "HEMOCLASIFICACION SISTEMA ABO DIRECTA POR MICROTECNICA_RH";
      break;
    case "HCG":
      return "GONADOTROPINA CORIONICA  EN ORINA O SUERO_HCG";
      break;
    default:
      return value;
      break;
  }
}

/**
 * This function diagnoses the active cell in a Google Sheets spreadsheet by checking if it is in column 35 of the
 * "GESTOR" sheet. If it is, the function checks the value of the cell and sets the value of a corresponding cell in
 * the same row to either "x" or an empty string based on the value of the cell. The corresponding cells are determined
 * by a switch statement that checks the value of the active cell.
 *
 * @return {void} This function does not return anything.
 */
function diagnoseActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();
  const name = spreadsheet.getActiveSheet().getName();

  if (column == 35 && name == "GESTOR") {
    switch (spreadsheet.getActiveSheet().getRange(row, column).getValue()) {
      case "RADIOGRAFIA DE COLUMNA LUMBOSACRA":
        (spreadsheet.getActiveSheet().getRange(row, 144).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 144).setValue("") : spreadsheet.getActiveSheet().getRange(row, 144).setValue("x");
        break;
      case "ELECTROCARDIOGRAMA DE RITMO O DE SUPERFICIE SOD_EKG":
        (spreadsheet.getActiveSheet().getRange(row, 145).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 145).setValue("") : spreadsheet.getActiveSheet().getRange(row, 145).setValue("x");
        break;
      case "RADIOGRAFIA DE RODILLAS COMPARATIVAS POSICION VERTICAL":
        (spreadsheet.getActiveSheet().getRange(row, 146).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 146).setValue("") : spreadsheet.getActiveSheet().getRange(row, 146).setValue("x");
        break;
      case "RADIOGRAFIA DE TORAX":
        (spreadsheet.getActiveSheet().getRange(row, 147).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 147).setValue("") : spreadsheet.getActiveSheet().getRange(row, 147).setValue("x");
        break;
      case "RADIOGRAFIA DE TORAX CON LECTURA ILO":
        (spreadsheet.getActiveSheet().getRange(row, 148).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 148).setValue("") : spreadsheet.getActiveSheet().getRange(row, 148).setValue("x");
        break;
      case "RESONANCIA MAGNETICA DE COLUMNA LUMBOSACRA SIMPLE":
        (spreadsheet.getActiveSheet().getRange(row, 149).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 149).setValue("") : spreadsheet.getActiveSheet().getRange(row, 149).setValue("x");
        break;
      case "TAC COLUMNA LUMBOSACRA":
        (spreadsheet.getActiveSheet().getRange(row, 150).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 150).setValue("") : spreadsheet.getActiveSheet().getRange(row, 150).setValue("x");
        break;
      case "RADIOGRAFIA DE COLUMNA DORSAL":
        (spreadsheet.getActiveSheet().getRange(row, 151).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 151).setValue("") : spreadsheet.getActiveSheet().getRange(row, 151).setValue("x");
        break;
      case "ELECTROCARDIOGRAFIA DINAMICA (HOLTER)_EKG HOLTER":
        (spreadsheet.getActiveSheet().getRange(row, 152).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 152).setValue("") : spreadsheet.getActiveSheet().getRange(row, 152).setValue("x");
        break;
      case "RADIOGRAFIA DE COLUMNA CERVICAL":
        (spreadsheet.getActiveSheet().getRange(row, 153).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 153).setValue("") : spreadsheet.getActiveSheet().getRange(row, 153).setValue("x");
        break;
      case "RADIOGRAFIA DE COLUMNA DORSOLUMBAR":
        (spreadsheet.getActiveSheet().getRange(row, 154).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 154).setValue("") : spreadsheet.getActiveSheet().getRange(row, 154).setValue("x");
        break;
      case "ELECTROENCEFALOGRAMA CONVENCIONAL_EEG":
        (spreadsheet.getActiveSheet().getRange(row, 155).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 155).setValue("") : spreadsheet.getActiveSheet().getRange(row, 155).setValue("x");
        break;
      case "RADIOGRAFIA DE PIE (AP,LATERAL)":
        (spreadsheet.getActiveSheet().getRange(row, 156).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 156).setValue("") : spreadsheet.getActiveSheet().getRange(row, 156).setValue("x");
        break;
      case "RADIOGRAFIA DE COLUMNA UNION CERVICO DORSAL":
        (spreadsheet.getActiveSheet().getRange(row, 157).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 157).setValue("") : spreadsheet.getActiveSheet().getRange(row, 157).setValue("x");
        break;
    }
  }
}

/**
 * Sets the value of certain cells based on the active cell's content.
 *
 * @return {void} This function does not return anything.
 */
function drugsActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();
  const name = spreadsheet.getActiveSheet().getName();

  if (column == 34 && name == "GESTOR") {
    spreadsheet.getActiveSheet().getRange(row, 135).setValue("");
    spreadsheet.getActiveSheet().getRange(row, 136).setValue("");
    spreadsheet.getActiveSheet().getRange(row, 133).setValue("");
    spreadsheet.getActiveSheet().getRange(row, 134).setValue("");

    switch (spreadsheet.getActiveSheet().getRange(row, column).getValue()) {
      case "2 SUSTANCIAS":
        spreadsheet.getActiveSheet().getRange(row, 135).setValue("x");
        break;
      case "3 SUSTANCIAS":
        spreadsheet.getActiveSheet().getRange(row, 136).setValue("x");
        break;
      case "5 SUSTANCIAS":
        spreadsheet.getActiveSheet().getRange(row, 133).setValue("x");
        break;
      case "10 SUSTANCIAS":
        spreadsheet.getActiveSheet().getRange(row, 134).setValue("x");
        break;
    }
  }
}

function laboratoryActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();
  const name = spreadsheet.getActiveSheet().getName();

  if (column == 33 && name == "GESTOR") {
    switch (spreadsheet.getActiveSheet().getRange(row, column).getValue()) {
      case "KOH PARA HONGOS":
        (spreadsheet.getActiveSheet().getRange(row, 96).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 96).setValue("") : spreadsheet.getActiveSheet().getRange(row, 96).setValue("x");
        break;
      case "FROTIS DE GARGANTA":
        (spreadsheet.getActiveSheet().getRange(row, 98).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 98).setValue("") : spreadsheet.getActiveSheet().getRange(row, 98).setValue("x");
        break;
      case "GLUCOSA EN SUERO U OTRO FLUIDO DIFERENTE A ORINA_GLICEMIA":
        (spreadsheet.getActiveSheet().getRange(row, 107).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 107).setValue("") : spreadsheet.getActiveSheet().getRange(row, 107).setValue("x");
        break;
      case "PERFIL LIPIDICO":
        (spreadsheet.getActiveSheet().getRange(row, 106).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 106).setValue("") : spreadsheet.getActiveSheet().getRange(row, 106).setValue("x");
        break;
      case "HEMOGRAMA III":
        (spreadsheet.getActiveSheet().getRange(row, 89).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 89).setValue("") : spreadsheet.getActiveSheet().getRange(row, 89).setValue("x");
        break;
      case "HEMOGRAMA IV":
        (spreadsheet.getActiveSheet().getRange(row, 90).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 90).setValue("") : spreadsheet.getActiveSheet().getRange(row, 90).setValue("x");
        break;
      case "HEMOGRAMA V":
        (spreadsheet.getActiveSheet().getRange(row, 91).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 91).setValue("") : spreadsheet.getActiveSheet().getRange(row, 91).setValue("x");
        break;
      case "HEMOCLASIFICACION SISTEMA ABO DIRECTA POR MICROTECNICA RH":
        (spreadsheet.getActiveSheet().getRange(row, 92).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 92).setValue("") : spreadsheet.getActiveSheet().getRange(row, 92).setValue("x");
        break;
      case "COPROLOGICO":
        (spreadsheet.getActiveSheet().getRange(row, 99).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 99).setValue("") : spreadsheet.getActiveSheet().getRange(row, 99).setValue("x");
        break;
      case "GONADOTROPINA CORIONICA EN ORINA O SUERO HCG":
        (spreadsheet.getActiveSheet().getRange(row, 88).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 88).setValue("") : spreadsheet.getActiveSheet().getRange(row, 88).setValue("x");
        break;
      case "CREATININA":
        (spreadsheet.getActiveSheet().getRange(row, 109).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 109).setValue("") : spreadsheet.getActiveSheet().getRange(row, 109).setValue("x");
        break;
      case "COLESTEROL TOTAL":
        (spreadsheet.getActiveSheet().getRange(row, 104).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 104).setValue("") : spreadsheet.getActiveSheet().getRange(row, 104).setValue("x");
        break;
      case "COLESTEROL DE ALTA DENSIDAD_HDL":
        (spreadsheet.getActiveSheet().getRange(row, 102).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 102).setValue("") : spreadsheet.getActiveSheet().getRange(row, 102).setValue("x");
        break;
      case "COLESTEROL DE BAJA DENSIDAD_LDL":
        (spreadsheet.getActiveSheet().getRange(row, 103).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 103).setValue("") : spreadsheet.getActiveSheet().getRange(row, 103).setValue("x");
        break;
      case "TRIGLICERIDOS":
        (spreadsheet.getActiveSheet().getRange(row, 105).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 105).setValue("") : spreadsheet.getActiveSheet().getRange(row, 105).setValue("x");
        break;
      case "TRANSAMINASA TGP":
        (spreadsheet.getActiveSheet().getRange(row, 112).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 112).setValue("") : spreadsheet.getActiveSheet().getRange(row, 112).setValue("x");
        break;
      case "TRANSAMINASA TGO":
        (spreadsheet.getActiveSheet().getRange(row, 113).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 113).setValue("") : spreadsheet.getActiveSheet().getRange(row, 113).setValue("x");
        break;
      case "UROANALISIS PO":
        (spreadsheet.getActiveSheet().getRange(row, 95).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 95).setValue("") : spreadsheet.getActiveSheet().getRange(row, 95).setValue("x");
        break;
      case "NITROGENO UREICO_BUN":
        (spreadsheet.getActiveSheet().getRange(row, 110).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 110).setValue("") : spreadsheet.getActiveSheet().getRange(row, 110).setValue("x");
        break;
      case "FOSFATASA ALCALINA":
        (spreadsheet.getActiveSheet().getRange(row, 120).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 120).setValue("") : spreadsheet.getActiveSheet().getRange(row, 120).setValue("x");
        break;
      case "SEROLOGIA NO ESTA":
        (spreadsheet.getActiveSheet().getRange(row, 120).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 120).setValue("") : spreadsheet.getActiveSheet().getRange(row, 120).setValue("x");
        break;
      case "BILIRRUBINAS TOTAL Y DIRECTA":
        (spreadsheet.getActiveSheet().getRange(row, 119).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 119).setValue("") : spreadsheet.getActiveSheet().getRange(row, 119).setValue("x");
        break;
      case "CRIOAGLUTININAS":
        (spreadsheet.getActiveSheet().getRange(row, 132).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 132).setValue("") : spreadsheet.getActiveSheet().getRange(row, 132).setValue("x");
        break;
      case "COPROCULTIVO":
        (spreadsheet.getActiveSheet().getRange(row, 101).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 101).setValue("") : spreadsheet.getActiveSheet().getRange(row, 101).setValue("x");
        break;
      case "ALCOHOLEMIA":
        (spreadsheet.getActiveSheet().getRange(row, 111).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 111).setValue("") : spreadsheet.getActiveSheet().getRange(row, 111).setValue("x");
        break;
      case "GLUCOSA PRE Y POST CARGA DE GLUCOSA_GLICEMIA CON CARGA":
        (spreadsheet.getActiveSheet().getRange(row, 108).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 108).setValue("") : spreadsheet.getActiveSheet().getRange(row, 108).setValue("x");
        break;
      case "CULTIVO PARA MICROORGANISMOS_GARGANTA":
        (spreadsheet.getActiveSheet().getRange(row, 100).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 100).setValue("") : spreadsheet.getActiveSheet().getRange(row, 100).setValue("x");
        break;
      case "RECUENTO DE RETICULOCITOS METODO MANUAL":
        (spreadsheet.getActiveSheet().getRange(row, 116).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 116).setValue("") : spreadsheet.getActiveSheet().getRange(row, 116).setValue("x");
        break;
      case "FROTIS NASAL":
        (spreadsheet.getActiveSheet().getRange(row, 97).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 97).setValue("") : spreadsheet.getActiveSheet().getRange(row, 97).setValue("x");
        break;
      case "HEPATITIS B ANTICUERPOS S (ANTI_HBS)":
        (spreadsheet.getActiveSheet().getRange(row, 127).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 127).setValue("") : spreadsheet.getActiveSheet().getRange(row, 127).setValue("x");
        break;
      case "EXTENDIDO DE SANGRE PERIFERICA ESTUDIO DE MORFOLOGIA_FSP":
        (spreadsheet.getActiveSheet().getRange(row, 114).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 114).setValue("") : spreadsheet.getActiveSheet().getRange(row, 114).setValue("x");
        break;
      case "HEMOGLOBINA GLICOSILADA":
        (spreadsheet.getActiveSheet().getRange(row, 118).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 118).setValue("") : spreadsheet.getActiveSheet().getRange(row, 118).setValue("x");
        break;
      case "COLINESTERASA SERICA":
        (spreadsheet.getActiveSheet().getRange(row, 94).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 94).setValue("") : spreadsheet.getActiveSheet().getRange(row, 94).setValue("x");
        break;
      case "COLINESTERASA EN ERITROCITOS (ACETILCOLINESTERASA)":
        (spreadsheet.getActiveSheet().getRange(row, 93).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 93).setValue("") : spreadsheet.getActiveSheet().getRange(row, 93).setValue("x");
        break;
      case "HORMONA LUTEINIZANTE (LH)":
        (spreadsheet.getActiveSheet().getRange(row, 122).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 122).setValue("") : spreadsheet.getActiveSheet().getRange(row, 122).setValue("x");
        break;
      case "HORMONA ESTIMULANTE DEL TIROIDES_TSH":
        (spreadsheet.getActiveSheet().getRange(row, 123).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 123).setValue("") : spreadsheet.getActiveSheet().getRange(row, 123).setValue("x");
        break;
      case "ANTIGENO ESPECIFICO DE PROSTATA_PSA":
        (spreadsheet.getActiveSheet().getRange(row, 128).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 128).setValue("") : spreadsheet.getActiveSheet().getRange(row, 128).setValue("x");
        break;
      case "MICROALBUMINURIA ORINA AL AZAR":
        (spreadsheet.getActiveSheet().getRange(row, 117).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 117).setValue("") : spreadsheet.getActiveSheet().getRange(row, 117).setValue("x");
        break;
      case "MICROALBUMINURIA 24 HORAS":
        (spreadsheet.getActiveSheet().getRange(row, 131).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 131).setValue("") : spreadsheet.getActiveSheet().getRange(row, 131).setValue("x");
        break;
      case "HEMOGLOBINA":
        (spreadsheet.getActiveSheet().getRange(row, 115).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 115).setValue("") : spreadsheet.getActiveSheet().getRange(row, 115).setValue("x");
        break;
      case "TRYPANOSOMA CRUZI ANTICUERPOS IG G":
        (spreadsheet.getActiveSheet().getRange(row, 126).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 126).setValue("") : spreadsheet.getActiveSheet().getRange(row, 126).setValue("x");
        break;
      case "TIROXINA TOTAL_T4":
        (spreadsheet.getActiveSheet().getRange(row, 124).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 124).setValue("") : spreadsheet.getActiveSheet().getRange(row, 124).setValue("x");
        break;
      case "TRIYODOTIRONINA TOTAL_T3":
        (spreadsheet.getActiveSheet().getRange(row, 125).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 125).setValue("") : spreadsheet.getActiveSheet().getRange(row, 125).setValue("x");
        break;
      case "GOTA GRUESA (HEMOPARASITOS)":
        (spreadsheet.getActiveSheet().getRange(row, 130).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 130).setValue("") : spreadsheet.getActiveSheet().getRange(row, 130).setValue("x");
        break;
      case "HEMATOCRITO":
        (spreadsheet.getActiveSheet().getRange(row, 129).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 129).setValue("") : spreadsheet.getActiveSheet().getRange(row, 129).setValue("x");
        break;
      case "GAMMA GLUTAMIL TRANSFERASA":
        (spreadsheet.getActiveSheet().getRange(row, 121).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 121).setValue("") : spreadsheet.getActiveSheet().getRange(row, 121).setValue("x");
        break;
      case "CHAGAS ANTICUERPOS IGC":
        (spreadsheet.getActiveSheet().getRange(row, 279).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 279).setValue("") : spreadsheet.getActiveSheet().getRange(row, 279).setValue("x");
    }
  }
}

/**
 * Executes actions based on the value of a cell in a Google Sheets spreadsheet.
 *
 * @return {void} No return value.
 */
function covidActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();
  const name = spreadsheet.getActiveSheet().getName();

  if (column == 32 && name == "GESTOR") {
    spreadsheet.getActiveSheet().getRange(row, 159).setValue("");
    spreadsheet.getActiveSheet().getRange(row, 142).setValue("");
    spreadsheet.getActiveSheet().getRange(row, 143).setValue("");

    switch (spreadsheet.getActiveSheet().getRange(row, column).getValue()) {
      case "PRUEBA RAPIDA ANTICUERPOS (INMUNOGLOBULINA IGM- IGG)":
        spreadsheet.getActiveSheet().getRange(row, 159).setValue("x");
        break;
      case "PRUEBA CONFIRMATORIA PCR":
        spreadsheet.getActiveSheet().getRange(row, 142).setValue("x");
        break;
      case "PRUEBA RAPIDA ANTIGENOS":
        spreadsheet.getActiveSheet().getRange(row, 143).setValue("x");
        break;
    }
  }
}

/**
 * Updates the value of a cell in the active Google Sheets spreadsheet based on the conditions specified.
 *
 * @return {void} No return value.
 */
function vaccineActive() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();
  const name = spreadsheet.getActiveSheet().getName();

  if (column == 31 && name == "GESTOR") {
    switch (spreadsheet.getActiveSheet().getRange(row, column).getValue()) {
      case "VACUNACION CONTRA HEPATITIS A":
        (spreadsheet.getActiveSheet().getRange(row, 141).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 141).setValue("") : spreadsheet.getActiveSheet().getRange(row, 141).setValue("x");
        break;
      case "VACUNACION CONTRA HEPATITIS B":
        (spreadsheet.getActiveSheet().getRange(row, 139).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 139).setValue("") : spreadsheet.getActiveSheet().getRange(row, 139).setValue("x");
        break;
      case "VACUNACION CONTRA FIEBRE AMARILLA":
        (spreadsheet.getActiveSheet().getRange(row, 138).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 138).setValue("") : spreadsheet.getActiveSheet().getRange(row, 138).setValue("x");
        break;
      case "VACUNACION CONTRA INFLUENZA":
        (spreadsheet.getActiveSheet().getRange(row, 140).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 140).setValue("") : spreadsheet.getActiveSheet().getRange(row, 140).setValue("x");
        break;
      case "ADMINISTRACION DE ANTITOXINA TETANICA SOD":
        (spreadsheet.getActiveSheet().getRange(row, 137).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 137).setValue("") : spreadsheet.getActiveSheet().getRange(row, 137).setValue("x");
        break;
      case "FIEBRE TIFOIDEA":
        (spreadsheet.getActiveSheet().getRange(row, 278).getValue().toString().toUpperCase() == "X") ? spreadsheet.getActiveSheet().getRange(row, 278).setValue("") : spreadsheet.getActiveSheet().getRange(row, 278).setValue("x");
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

/**
 * Updates a Google Spreadsheet with checked values based on the selected exam type.
 *
 * @return {void} This function does not return anything.
 */
function checkedExam() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const activeExam = spreadsheet.getActiveCell().getValue();
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();
  const name = spreadsheet.getActiveSheet().getName();

  if (column == 8 && name == "GESTOR") {
    spreadsheet.getActiveSheet().getRange(row, 22).setValue("");
    spreadsheet.getActiveSheet().getRange(row, 25).setValue("");
    spreadsheet.getActiveSheet().getRange(row, 23).setValue("");
    spreadsheet.getActiveSheet().getRange(row, 24).setValue("");
    spreadsheet.getActiveSheet().getRange(row, 27).setValue("");
    spreadsheet.getActiveSheet().getRange(row, 26).setValue("");

    switch (activeExam) {
      case "PRE-INGRESO":
        spreadsheet.getActiveSheet().getRange(row, 22).setValue("x");
        break;
      case "PERIODICO":
        spreadsheet.getActiveSheet().getRange(row, 25).setValue("x");
        break;
      case "EGRESO":
        spreadsheet.getActiveSheet().getRange(row, 23).setValue("x");
        break;
      case "POST INCAPACIDAD":
        spreadsheet.getActiveSheet().getRange(row, 24).setValue("x");
        break;
      case "TRABAJO ESPECIAL":
        spreadsheet.getActiveSheet().getRange(row, 27).setValue("x");
        break;
      case "PERIODICO CON SEGUIMIENTO":
        spreadsheet.getActiveSheet().getRange(row, 26).setValue("x");
        break;
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

  SpreadsheetApp.getActive().toast("Realizando consulta por favor espere","Consulta");

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
    SpreadsheetApp.getActive().toast("Consulta finalizada","Correcto");
}
