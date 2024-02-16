/**
 * Calculates the cardiovascular risk of a patient based on their age, cholesterol, HDL, blood pressure, smoking status, diabetes status, and sex.
 * @param {number} age The number to int.
 * @param {number} cholesterol The number to int.
 * @param {number} hdl The number to int.
 * @param {number} bloodPressure The text to string.
 * @param {number} smoking The text to string.
 * @param {number} diabetes The text to string.
 * @param {number} sex The text to string.
 * @return the percentage of suffering cardiovascular risk in 10 years.
 * @customfunction
*/
function FRAMINGHAM(age, cholesterol, hdl, bloodPressure, smoking, diabetes, sex) {

  if (age === "" && cholesterol === "" && hdl === "" && bloodPressure === "" && smoking === "" && diabetes === "" && sex === "") {
    return "";
  }
  if (["", "#N/A"].includes(age)) {
    return `El valor ${(age == "") ? "VACIO" : age} para la edad no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(cholesterol)) {
    return `El valor ${(cholesterol == "") ? "VACIO" : cholesterol} para el colesterol no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(hdl)) {
    return `El valor ${(hdl == "") ? "VACIO" : hdl} para el HDL no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(bloodPressure)) {
    return `El valor ${(bloodPressure == "") ? "VACIO" : bloodPressure} para la tensión arterial no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(smoking)) {
    return `El valor ${(smoking == "") ? "VACIO" : smoking} para fumar no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(diabetes)) {
    return `El valor ${(diabetes == "") ? "VACIO" : diabetes} para la diabetes no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(sex)) {
    return `El valor ${(sex == "") ? "VACIO" : sex} para el sexo no esta permitido y es requeridos!`;
  }

  const tmpSystolic = parseInt(bloodPressure.toString().split("/")[0]);
  const tmpDiastolic = parseInt(bloodPressure.toString().split("/")[1]);
  const pointSmoking = parseInt(validatedSmoking(smoking));

  if (["MASCULINO", "HOMBRE"].includes(sex.toString().toUpperCase())) {
    try {
      const pointAge = parseInt(validatedAge("MASCULINO", age));
      const pointDiabetes = parseInt(validatedDiabetes("MASCULINO", diabetes));
      const pointCholesterol = parseInt(validatedCholesterol("MASCULINO", cholesterol));
      const pointHDL = parseInt(validatedHDL("MASCULINO", hdl));
      const pointBloodPressure = parseInt(validatedBloodPressure("MASCULINO", tmpSystolic, tmpDiastolic));
      const response = validatedFramingham("MASCULINO", pointAge, pointDiabetes, pointCholesterol, pointHDL, pointBloodPressure, pointSmoking);

      return `Riesgo de EVC(10 Años) - ${response}`;
    } catch (error) {
      return error.message;
    }
  } else if (["FEMENINO", "MUJER"].includes(sex.toString().toUpperCase())) {
    try {
      const pointAge = parseInt(validatedAge("FEMENINO", age));
      const pointDiabetes = parseInt(validatedDiabetes("FEMENINO", diabetes));
      const pointCholesterol = parseInt(validatedCholesterol("FEMENINO", cholesterol));
      const pointHDL = parseInt(validatedHDL("FEMENINO", hdl));
      const pointBloodPressure = parseInt(validatedBloodPressure("FEMENINO", tmpSystolic, tmpDiastolic));

      const response = validatedFramingham("FEMENINO", pointAge, pointDiabetes, pointCholesterol, pointHDL, pointBloodPressure, pointSmoking);
      return `Riesgo de EVC(10 Años) - ${response}`;
    } catch (error) {
      return error.message;
    }
  } else {
    return "El sexo ingresado no corresponde a los requeridos \"MASCULINO | HOMBRE\" o \"FEMENINO | MUJER\"";
  }
}

/**
 * Validates the age based on sex and returns a value.
 *
 * @param {string} sex - The sex of the person.
 * @param {number|string} age - The age of the person.
 * @return {number|string} The value based on the age and sex.
 */
function validatedAge(sex, age) {
  const ageOfValidated = parseInt(age);
  switch (sex) {
    case "MASCULINO":
      switch (true) {
        case (ageOfValidated <= 34):
          return -1;
          break;
        case (ageOfValidated >= 35 && ageOfValidated <= 39):
          return 0;
          break;
        case (ageOfValidated >= 40 && ageOfValidated <= 44):
          return 1;
          break;
        case (ageOfValidated >= 45 && ageOfValidated <= 49):
          return 2;
          break;
        case (ageOfValidated >= 50 && ageOfValidated <= 54):
          return 3;
          break;
        case (ageOfValidated >= 55 && ageOfValidated <= 59):
          return 4;
          break;
        case (ageOfValidated >= 60 && ageOfValidated <= 64):
          return 5;
          break;
        case (ageOfValidated >= 65 && ageOfValidated <= 69):
          return 6;
          break;
        case (ageOfValidated >= 70 && ageOfValidated <= 74):
          return 7;
          break;
        default:
          return "Valor fuera de los rangos permitidos";
      }
      break;
    case "FEMENINO":
      switch (true) {
        case (ageOfValidated < 30):
          return -1;
          break;
        case (ageOfValidated >= 30 && ageOfValidated <= 34):
          return -9;
          break;
        case (ageOfValidated >= 35 && ageOfValidated <= 39):
          return -4;
          break;
        case (ageOfValidated >= 40 && ageOfValidated <= 44):
          return 0;
          break;
        case (ageOfValidated >= 45 && ageOfValidated <= 49):
          return 3;
          break;
        case (ageOfValidated >= 50 && ageOfValidated <= 54):
          return 6;
          break;
        case (ageOfValidated >= 55 && ageOfValidated <= 59):
          return 7;
          break;
        case (ageOfValidated >= 60 && ageOfValidated <= 74):
          return 8;
          break;
        default:
          return "Valor fuera de los rangos permitidos";
      }
      break;
  }
}

/**
 * A function that validates diabetes based on sex.
 *
 * @param {string} sex - The sex of the person.
 * @param {string|number} diabetes - The diabetes status of the person.
 * @return {number} The validated diabetes value.
 */
function validatedDiabetes(sex, diabetes) {
  switch (sex) {
    case "MASCULINO":
      switch (true) {
        case (diabetes == "SI" || diabetes == 1):
          return 2;
          break;
        default:
          return 0;
          break;
      }
      break;
    case "FEMENINO":
      switch (true) {
        case (diabetes == "SI" || diabetes == 1):
          return 4;
          break;
        default:
          return 0;
          break;
      }
      break;
  }
}

/**
 * Validates the smoking input and returns a corresponding value.
 *
 * @param {string|number} smoking - The smoking input to be validated.
 * @return {number} The validated value for the smoking input.
 */
function validatedSmoking(smoking) {
  switch (true) {
    case (smoking == "SI" || smoking == 1 || smoking == "FUMA"):
      return 2;
      break;
    default:
      return 0;
      break;
  }
}

/**
 * Calculates the cholesterol level based on the sex and cholesterol value.
 *
 * @param {string} sex - The sex of the person. Can be "MASCULINO" or "FEMENINO".
 * @param {number} cholesterol - The cholesterol value.
 * @return {number} The calculated cholesterol level.
 */
function validatedCholesterol(sex, cholesterol) {
  switch (sex) {
    case "MASCULINO":
      switch (true) {
        case (cholesterol < 160):
          return -3;
          break;
        case (cholesterol >= 160 && cholesterol <= 199):
          return 0;
          break;
        case (cholesterol >= 200 && cholesterol <= 239):
          return 1;
          break;
        case (cholesterol >= 240 && cholesterol <= 279):
          return 2;
          break;
        case (cholesterol >= 280):
          return 3;
          break;
      }
      break;
    case "FEMENINO":
      switch (true) {
        case (cholesterol < 160):
          return -2;
          break;
        case (cholesterol >= 160 && cholesterol <= 199):
          return 0;
          break;
        case (cholesterol >= 200 && cholesterol <= 279):
          return 1;
          break;
        case (cholesterol >= 280):
          return 3;
          break;
      }
      break;
  }
}

/**
 * Returns the validated HDL value based on the sex and HDL level.
 *
 * @param {string} sex - The sex of the person ("MASCULINO" or "FEMENINO").
 * @param {number} hdl - The HDL level.
 * @return {number} The validated HDL value.
 */
function validatedHDL(sex, hdl) {
  switch (sex) {
    case "MASCULINO":
      switch (true) {
        case (hdl < 35):
          return 2;
          break;
        case (hdl >= 35 && hdl <= 44):
          return 1;
          break;
        case (hdl >= 45 && hdl <= 59):
          return 0;
          break;
        default:
          return -2;
          break;
      }
      break;
    case "FEMENINO":
      switch (true) {
        case (hdl < 35):
          return 5;
          break;
        case (hdl >= 35 && hdl <= 44):
          return 2;
          break;
        case (hdl >= 45 && hdl <= 49):
          return 1;
          break;
        case (hdl >= 50 && hdl <= 59):
          return 0;
          break;
        default:
          return -2;
          break;
      }
      break;
  }

}

/**
 * Determines the validated blood pressure based on the sex, systolic, and diastolic values.
 *
 * @param {string} sex - The sex of the patient. Possible values are "MASCULINO" or "FEMENINO".
 * @param {number} systolic - The systolic blood pressure value.
 * @param {number} diastolic - The diastolic blood pressure value.
 * @return {number} The validated blood pressure value.
 */
function validatedBloodPressure(sex, systolic, diastolic) {
  let tmpSystolic = 0;
  let tmpDiastolic = 0;
  switch (sex) {
    case "MASCULINO":
      /** @type {number} systolic */
      switch (true) {
        case (systolic <= 129):
          tmpSystolic = 0;
          break;
        case (systolic >= 130 && systolic <= 139):
          tmpSystolic = 1;
          break;
        case (systolic >= 140 && systolic <= 159):
          tmpSystolic = 2;
          break;
        case (systolic >= 160):
          tmpSystolic = 3;
      }
      /** @type {number} diastolic */
      switch (true) {
        case (diastolic <= 84):
          tmpDiastolic = 0;
          break;
        case (diastolic >= 85 && diastolic <= 89):
          tmpDiastolic = 1;
          break;
        case (diastolic >= 90 && diastolic <= 99):
          tmpDiastolic = 2;
          break;
        case (diastolic >= 100):
          tmpDiastolic = 3;
          break;
      }
      break;
    case "FEMENINO":
      /** @type {number} systolic */
      switch (true) {
        case (systolic < 120):
          tmpSystolic = -3;
          break;
        case (systolic >= 120 && systolic <= 139):
          tmpSystolic = 0;
          break;
        case (systolic >= 140 && systolic <= 159):
          tmpSystolic = 2;
          break;
        case (systolic >= 160):
          tmpSystolic = 3;
      }
      /** @type {number} diastolic */
      switch (true) {
        case (diastolic < 80):
          tmpDiastolic = -3;
          break;
        case (diastolic >= 80 && diastolic <= 89):
          tmpDiastolic = 0;
          break;
        case (diastolic >= 90 && diastolic <= 99):
          tmpDiastolic = 2;
          break;
        case (diastolic >= 100):
          tmpDiastolic = 3;
          break;
      }
      break;
  }

  return (tmpSystolic >= tmpDiastolic) ? tmpSystolic : tmpDiastolic;
}

/**
 * Calculates the Framingham risk score for cardiovascular disease based on the input parameters.
 *
 * @param {string} sex - The gender of the patient. Either "MASCULINO" or "FEMENINO".
 * @param {number} age - The age of the patient.
 * @param {number} diabetes - The presence of diabetes in the patient (0 or 1).
 * @param {number} cholesterol - The cholesterol level of the patient.
 * @param {number} hdl - The HDL cholesterol level of the patient.
 * @param {number} bloodPressure - The blood pressure of the patient.
 * @param {number} smoking - The smoking status of the patient (0 or 1).
 * @return {string} The Framingham risk category based on the input parameters.
 */
function validatedFramingham(sex, age, diabetes, cholesterol, hdl, bloodPressure, smoking) {
  const total = parseInt(age + diabetes + cholesterol + hdl + bloodPressure + smoking);
  switch (sex) {
    case "MASCULINO":
      switch (true) {
        case (total <= -1):
          return "2% Bajo";
          break;
        case (total >= -1 && total <= 1):
          return "3% Bajo";
          break;
        case (total == 2):
          return "4% Bajo";
          break;
        case (total == 3):
          return "5% Bajo";
          break;
        case (total == 4):
          return "7% Bajo";
          break;
        case (total == 5):
          return "8% Bajo";
          break;
        case (total == 6):
          return "10% Moderado";
          break;
        case (total == 7):
          return "13% Moderado";
          break;
        case (total == 8):
          return "16% Moderado";
          break;
        case (total == 9):
          return "20% Moderado";
          break;
        case (total == 10):
          return "25% Alto";
          break;
        case (total == 11):
          return "31% Alto";
          break;
        case (total == 12):
          return "37% Alto";
          break;
        case (total == 13):
          return "45% Alto";
          break;
        case (total >= 14):
          return "53% Alto";
          break;
      }
      break;
    case "FEMENINO":
      switch (true) {
        case (total <= -2):
          return "1% Bajo";
          break;
        case (total >= -1 && total <= 1):
          return "2% Bajo";
          break;
        case (total == 2 || total == 3):
          return "3% Bajo";
          break;
        case (total == 4 || total == 5):
          return "4% Bajo";
          break;
        case (total == 6):
          return "5% Bajo";
          break;
        case (total == 7):
          return "6% Bajo";
          break;
        case (total == 8):
          return "7% Bajo";
          break;
        case (total == 9):
          return "8% Bajo";
          break;
        case (total == 10):
          return "10% Moderado";
          break;
        case (total == 11):
          return "11% Moderado";
          break;
        case (total == 12):
          return "13% Moderado";
          break;
        case (total == 13):
          return "15% Moderado";
          break;
        case (total == 14):
          return "18% Moderado";
          break;
        case (total == 15):
          return "20% Moderado";
          break;
        case (total == 16):
          return "24% Alto";
          break;
        case (total >= 17):
          return "27% Alto";
          break;
      }
      break;
  }
}

const metabolic = {
  ta: "Tensión Arterial",
  pa: "Perimetro Abdominal",
  hdl: "HDL",
  trig: "Triglicéridos",
  glic: "Glicemia"
}
/**
 * Check if a person has Metabolic Syndrome based on their health parameters.
 *
 * @param {string} sex - The gender of the person. Can be "MASCULINO" or "FEMENINO".
 * @param {string} bloodPressure - The blood pressure of the person in the format "systolic/diastolic".
 * @param {number} abdominalPerimeter - The abdominal perimeter of the person in centimeters.
 * @param {number} hdl - The HDL cholesterol level of the person in mg/dL.
 * @param {number} triglycerides - The triglycerides level of the person in mg/dL.
 * @param {number} glycemia - The glycemia level of the person in mg/dL.
 * @return {string} The result of the evaluation. Either "Presenta SINDROME METABOLICO con alteraciones en: {list of affected parameters}" or "Sin Alteraciones".
 * @customfunction
 */
function SINDROME_METABOLICO(sex, bloodPressure, abdominalPerimeter, hdl, triglycerides, glycemia) {

  if (sex === "" && bloodPressure === "" && abdominalPerimeter === "" && hdl === "" && triglycerides === "" && glycemia === "") {
    return "";
  }
  if (["", "#N/A"].includes(sex)) {
    return `El valor ${(sex == "") ? "VACIO" : sex} para el sexo no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(bloodPressure)) {
    return `El valor ${(bloodPressure == "") ? "VACIO" : bloodPressure} para la tensión arterial no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(abdominalPerimeter)) {
    return `El valor ${(abdominalPerimeter == "") ? "VACIO" : abdominalPerimeter} para el perimetro abdominal no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(hdl)) {
    return `El valor ${(hdl == "") ? "VACIO" : hdl} para el HDL no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(triglycerides)) {
    return `El valor ${(triglycerides == "") ? "VACIO" : triglycerides} para los triglicéridos no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(glycemia)) {
    return `El valor ${(glycemia == "") ? "VACIO" : glycemia} para la glicemia no esta permitido y es requeridos!`;
  }

  const systolic = (bloodPressure.toString().split("/")[0] >= 130) ? 1 : 0;
  const diastolic = (bloodPressure.toString().split("/")[1] >= 85) ? 1 : 0;
  const triglyceridesMet = (triglycerides >= 150) ? 1 : 0;
  const glycemiaMet = (glycemia >= 100) ? 1 : 0;
  let bloodPressureMet = 0, abdominalPerimeterMet = 0, hdlMet = 0;

  if (["MASCULINO", "HOMBRE"].includes(sex)) {
    abdominalPerimeterMet = (abdominalPerimeter >= 102) ? 1 : 0;
    hdlMet = (hdl < 40) ? 1 : 0;
  } else if (["FEMENINO", "MUJER"].includes(sex)) {
    abdominalPerimeterMet = (abdominalPerimeter >= 88) ? 1 : 0;
    hdlMet = (hdl < 50) ? 1 : 0;
  }
  bloodPressureMet = (systolic >= diastolic) ? systolic : diastolic;

  let msg = [];

  if (bloodPressureMet > 0) {
    msg.push(metabolic.ta);
  }
  if (abdominalPerimeterMet > 0) {
    msg.push(metabolic.pa);
  }
  if (hdlMet > 0) {
    msg.push(metabolic.hdl);
  }
  if (triglyceridesMet > 0) {
    msg.push(metabolic.trig);
  }
  if (glycemiaMet > 0) {
    msg.push(metabolic.glic);
  }

  if ((triglyceridesMet + glycemiaMet + bloodPressureMet + abdominalPerimeterMet + hdlMet) >= 3) {
    return `Presenta SINDROME METABOLICO con alteraciones en: ${msg.toString().replaceAll(",", ", ")}`;
  }
  return `Sin Alteraciones`;
}

/**
 * Calculates the level of arterogenicity based on the cholesterol and HDL values.
 *
 * @param {number} cholesterol - The value of cholesterol.
 * @param {number} hdl - The value of HDL.
 * @return {string} The level of arterogenicity.
 * @customfunction
 */
function ARTEROGENICO(cholesterol, hdl) {

  if (cholesterol === "" || hdl === "") {
    return "";
  }
  if (["", "#N/A"].includes(cholesterol)) {
    return `El valor ${(cholesterol == "") ? "VACIO" : cholesterol} para el colesterol no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(hdl)) {
    return `El valor ${(hdl == "") ? "VACIO" : hdl} para el HDL no esta permitido y es requeridos!`;
  }

  const result = parseFloat(cholesterol / hdl).toFixed(2);

  if (result < 3.5) {
    return `${result} Minimo`;
  } else if (result >= 3.5 && result <= 4.5) {
    return `${result} Moderado`;
  } else if (result >= 4.5) {
    return `${result} Maximo`;
  }
}

/**
 * A description of the entire function.
 *
 * @return {Promise<void>} - A promise that resolves when the function completes.
 */
async function TODO() {
  await EliminarArchivosEnDirectorio("182TKvhuRb0CE2oFL22oV3bnXDFb-Maa3", "1iqbrT26U-SJFbbWW8tZodsqMehX3FK2AwiyLNfQSs5s");
  const book = await CopyBook();
  await TransponerYReemplazarFormulas(book, SpreadsheetApp.getActiveSheet().getName());
  SpreadsheetApp.getActiveSpreadsheet().getRange("A5").getValue();
  SpreadsheetApp.getActiveSpreadsheet().getRange("A5").setValue(book);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [];
  menuEntries.push({ name: "Descargar Libro", functionName: "ExportSpecificBook" });
  ss.updateMenu("ADMINISTRACIÓN ENEL", menuEntries);
  var htmlOutput = HtmlService.createHtmlOutput('<div><p>Para descargar el libro Generado Vaya a:</p><br/><p>ADMINISTRACIÓN ENEL > Descargar Libro</p></div>')
    .setWidth(300)
    .setHeight(150);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Descargar Archivo');
}

/**
 * Creates a copy of the active spreadsheet in Google Drive.
 *
 * @return {string} The ID of the copied spreadsheet.
 */
function CopyBook() {
  let libroActivo = SpreadsheetApp.getActiveSpreadsheet();
  // Crear una copia del libro activo en Google Drive
  let copiaLibro = DriveApp.getFileById(libroActivo.getId()).makeCopy();
  // return el id del libro
  return copiaLibro.getId();
}

/**
 * Transponer y reemplazar fórmulas en una hoja de cálculo.
 *
 * @param {string} id - El ID de la hoja de cálculo.
 * @return {void} No devuelve ningún valor.
 */
async function TransponerYReemplazarFormulas(id, name) {
  // Obtén el libro por su ID
  var libro = SpreadsheetApp.openById(id);

  // Selecciona la hoja por su nombre
  var hoja = libro.getSheetByName(name);

  // Define el rango en A1Notation (AA3:AC)
  var rangoA1Notation = "AA3:AC" + hoja.getLastRow();

  let valores = hoja.getRange(rangoA1Notation).getValues();
  let dataText = [];

  // Inicializa dataText como un array bidimensional
  for (var i = 0; i < valores.length; i++) {
    dataText[i] = [];
  }

  for (var num = 0; num < valores.length; num++) {
    dataText[num][0] = valores[num][0].toString();
    dataText[num][1] = valores[num][1].toString();
    dataText[num][2] = valores[num][2].toString();
  }

  await hoja.getRange(rangoA1Notation).setValues(dataText);
}

function RemoveMenu() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [];
  menuEntries.push({ name: "Generar Libro", functionName: "TODO" });
  menuEntries.push({ name: "Informes", functionName: "abrirInforme" });
  menuEntries.push({ name: "Verificar Intervención", functionName: "verified" });
  ss.updateMenu("ADMINISTRACIÓN ENEL", menuEntries);
}

/**
 * Export a specific book from the active spreadsheet.
 *
 * @return {string} Returns "Success" if the export is successful.
 */
async function ExportSpecificBook() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet(); // Abre la hoja de cálculo específica usando su ID
  let id = spreadsheet.getRange("A5").getValue();
  var exportUrl = 'https://docs.google.com/spreadsheets/d/' + id + '/export?exportFormat=xlsx&format=xlsx'; // URL para exportar a formato XLSX

  // Hacemos la petición para pedir el fichero exportado
  var response = UrlFetchApp.fetch(exportUrl, { muteHttpExceptions: true, headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() } });

  // Creamos el fichero con el binario que nos devuelve la petición anterior
  var blob = response.getBlob();
  blob = blob.setName(spreadsheet.getName() + '.xlsx'); // Establece el nombre del archivo

  // Convertimos el blob a base64
  var blobData = Utilities.base64Encode(blob.getBytes());

  // Creamos un enlace de descarga y mostramos una ventana modal con el enlace
  var htmlOutput = HtmlService.createHtmlOutput('<a href="data:application/octet-stream;base64,' + blobData + '" download="' + blob.getName() + '"><button>Descargar archivo</button></a>')
    .setWidth(300)
    .setHeight(50);

  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Descargar Archivo');
  RemoveMenu();
  spreadsheet.getRange("A5").setValue(spreadsheet.getRange("A6").getValue());
}

/**
 * Deletes a book in Drive.
 *
 * @param {string} libroId - The ID of the book to be deleted.
 * @return {string} - Returns "Success" if the book was deleted successfully.
 */
function EliminarArchivosEnDirectorio(driveFolderId, archivoId) {
  // Obtener el directorio de Google Drive por su ID
  var folder = DriveApp.getFolderById(driveFolderId);

  // Obtener todos los archivos en el directorio
  var files = folder.getFiles();

  // Iterar sobre los archivos y eliminarlos si no coinciden con el ID proporcionado
  while (files.hasNext()) {
    var file = files.next();
    var fileId = file.getId();

    // Verificar si el archivo actual no coincide con el archivo especificado por su ID
    if (fileId !== archivoId) {
      // Mover el archivo a la papelera
      try {
        file.setTrashed(true);
      } catch (e) {
        Logger.log(e);
      }
    }
  }

  return "Success";
}


/**
 * Executes when the spreadsheet is opened.
 *
 * @param {Object} e - The event object.
 */
function onOpen(e) {
  try {
    const menu = SpreadsheetApp.getUi().createMenu('ADMINISTRACIÓN ENEL');
    const recipients = {
      'Generar Libro': 'TODO',
      'Informes': 'abrirInforme',
      'Verificar Intervención': 'verified'
    };
    for (const [name, recipient] of Object.entries(recipients)) {
      menu.addItem(name, recipient);
    }
    menu.addToUi();
  } catch (error) {
    Logger.log(`${error.name}: ${error.message}`);
  }
}

/**
 * A description of the entire function.
 *
 * @return {Object} The evaluated output of the template.
 */
function doGet() {
  let template = HtmlService.createTemplateFromFile('Index');
  let output = template.evaluate()
    .setTitle("Apps Script | ENEL")
    .setFaviconUrl("https://soaics.grupoaltum.com.co/assets/media/logos/favicon.png");

  return output;
}

/**
 * Includes the content of a specified file.
 *
 * @param {string} filename - The name of the file to include.
 * @return {string} The content of the specified file.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function abrirInforme() {
  var html = HtmlService.createHtmlOutput('<html>'
    + '<script>' +
    "var urlToOpen = 'https://script.google.com/a/macros/soandes.co/s/AKfycbxJSQj4l5mLlfwyJKFhOj1Aqwvrw8vzTWZgf2luoSPb/dev';" +
    "var winRef = window.open(urlToOpen);" +
    "google.script.host.close();"
    + '</script>'
    + '</html>')
    .setWidth(90).setHeight(1);
  SpreadsheetApp.getUi().showModalDialog(html, "Abriendo Informe");
}

function getCentrals() {
  const dataSheet = SpreadsheetApp.getActiveSpreadsheet();
  const information = [];
  let years = [];
  dataSheet.getSheets().forEach((sheet) => {
    if (sheet.getName().includes("RCV")) {
      let name = sheet.getName().split("-")[1];
      years.push(name);
    }
  })
  const sheet = dataSheet.getSheetByName("RCV-2023");
  const data = sheet.getRange(3, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  let info;

  info = data.filter(e => (e[0] != "") ? e : "");

  information[0] = info.sort();
  information[1] = years;

  return JSON.stringify(information);
}

function getGeneral(params = "", years = "2023") {
  const dataSheet = SpreadsheetApp.getActiveSpreadsheet();
  let name_sheet = `RCV-${years}`;
  const sheet = dataSheet.getSheetByName(name_sheet);
  Logger.log(`${name_sheet} - ${years}`);
  const data = sheet.getRange(3, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  let info;

  if (params === "" || params === "TODAS") {
    info = data.filter(e => (e[0] != "") ? e : "");
  } else {
    info = data.filter(e => (e[0] != "" && e[4] == params) ? e : "");
  }

  return JSON.stringify(info.sort(function (a, b) { return a[6] - b[6]; }));
}

function removePoint() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getActiveSheet();
  const column = sheet.getActiveCell().getColumn();
  const row = sheet.getActiveCell().getRow();
  const num = (sheet.getName() === "RCV-2023" || sheet.getName() === "RCV-2024") ? 31 : 32;
  const my_value = sheet.getActiveCell().getValue();
  const validateDate = isNaN(Date.parse(my_value));

  if (column >= num && sheet.getRange(row, column).getValue() !== "" && validateDate === true) {
    let remove = sheet.getActiveCell().getValue().toString().replaceAll(",", ";");
    sheet.getRange(row, column).setValue(remove);
  }
}

const pointer = {
  framingham: 27,
  aterogenia: 29,
  sindrome: 28,
  clasificacion: 30
}

/**
 * Generate classifications based on certain conditions.
 *
 * @param {none} This function does not take any parameters.
 * @return {none} This function does not return any value.
 */
function classifications() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  if (["RCV-2023", "RCV-2024"].includes(spreadsheet.getActiveSheet().getName())) {
    const sheet = spreadsheet.getActiveSheet();
    const row = sheet.getActiveCell().getRow();
    const column = sheet.getActiveCell().getColumn();

    if (column >= 13 && column <= 29) {
      let framingham = sheet.getRange(row, pointer.framingham).getValue();
      let aterogenia = sheet.getRange(row, pointer.aterogenia).getValue();
      let sindrome = sheet.getRange(row, pointer.sindrome).getValue();

      if (framingham === null || aterogenia === null || sindrome === null) {
        let campos = `${(framingham === "") ? "-Framingham" : ""} ${(aterogenia === "") ? " -Aterogenia" : ""} ${(sindrome === "") ? " -Sindrome Metabolico" : ""}`;
        sheet.getRange(row, pointer.clasificacion).setValue(`clasificación no permitida faltan campos ${campos}`);
      }

      if (
        (framingham.includes("Alto") || framingham.includes("Moderado"))
        && aterogenia.includes("Maximo")
        && sindrome.includes("Presenta SINDROME METABOLICO")
      ) {
        sheet.getRange(row, pointer.clasificacion).setValue("ALTO");
      } else if (
        (framingham.includes("Bajo") || framingham.includes("Moderado"))
        && ((aterogenia.includes("Maximo") || aterogenia.includes("Moderado")) || sindrome.includes("Presenta SINDROME METABOLICO"))
      ) {
        sheet.getRange(row, pointer.clasificacion).setValue("MEDIO");
      } else if (
        (framingham.includes("Bajo") || framingham.includes("Moderado"))
        && (aterogenia.includes("Moderado") || aterogenia.includes("Minimo"))
        && sindrome.includes("Sin Alteraciones")
      ) {
        sheet.getRange(row, pointer.clasificacion).setValue("BAJO");
      } else {
        sheet.getRange(row, pointer.clasificacion).setValue("Sin Clasificación los parametros no corresponden");
      }
    }
  }
}

/**
 * Executes the verification process for the entire spreadsheet.
 *
 * @param {Spreadsheet} spreadsheet - The active spreadsheet object.
 * @return {void} This function does not return anything.
 */
function verified() {
  const spreadsheet = SpreadsheetApp.getActiveSheet();

  if (["RCV-2023", "RCV-2024"].includes(spreadsheet.getName())) {
    spreadsheet.getRange("AB3").activate();

    while (spreadsheet.getActiveCell().getValue()[0] !== undefined) {
      classifications();
      spreadsheet.getActiveCell().offset(1, 0).activate();
    }
  }
}

/**
 * Clears the contents and formatting of specific ranges in the active spreadsheet.
 *
 * @return {void}
 */
function clearContents() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getActiveSheet();
  const range = sheet.getRange(3, 1, sheet.getLastRow(), 26);
  const functions = sheet.getRange(3, 27, sheet.getLastRow(), 4);
  const totalRows = sheet.getRange(3, 1, sheet.getLastRow(), 30);

  range.clearContent();
  range.clearFormat();
  functions.clearFormat();
  totalRows.activate();
  sheet.getActiveRangeList().setBorder(true, true, true, true, true, true, '#000000', SpreadsheetApp.BorderStyle.SOLID);
}