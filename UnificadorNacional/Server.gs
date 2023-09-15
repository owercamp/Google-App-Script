
class emoGraph {
  constructor(contractedName = "", origin = "", destiny = "", city = "", income = "", examType = "", date = "", patient = "", numberIdentification = "", age = "", range_age = "", stratum = "", gender = "", numberOfChildren = "", race = "", civilStatus = "", scholarship = "", post = "", durationWorking = "", antiquity = "") {
    this.contractedName = contractedName; // CONTRATO
    this.origin = origin; // ORIGEN
    this.destiny = destiny; // DESTINO
    this.city = city; // CIUDAD
    this.income = income; // INGRESO
    this.examType = examType; // TIPO EXAMEN
    this.date = date; // FECHA
    this.patient = patient; // PACIENTE
    this.numberIdentification = numberIdentification; // NUMERO DE IDENTIFICACION
    this.age = age; // EDAD
    this.range_age = range_age; // RANGO EDAD
    this.stratum = stratum; // ESTRATO
    this.gender = gender; // GENERO
    this.numberOfChildren = numberOfChildren; // NUMERO DE HIJOS
    this.race = race; // RAZA
    this.civilStatus = civilStatus; // ESTADO CIVIL
    this.scholarship = scholarship; // ESCOLARIDAD
    this.post = post; // CARGO
    this.durationWorking = durationWorking; // DURACION DE TRABAJO
    this.antiquity = antiquity; // ANTIGUEDAD
  }
}
/**
 * Retrieves the content to be displayed when the web app is accessed.
 *
 * @return {HtmlOutput} The HTML content to be displayed.
 */
function doGet() {
  const template = HtmlService.createTemplateFromFile("index");
  const outputTemplate = template.evaluate();

  return outputTemplate;
}

/**
 * Includes the content of a file in the HTML output.
 *
 * @param {string} file - The name of the file to include.
 * @return {string} The content of the included file.
 */
function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function insertData(data) {
  const spreadsheet = SpreadsheetApp.openById("1rgYxBiE-4rWifkEWNx7er6aG-yKN9cx3hum15TWzePI");

  try {
    const information = data;
    const keys = Object.keys(information);
    for (const iterator of keys) {
      switch (iterator) {
        case "emo":
          for (const emo of information[iterator]) {
            const response = insertEmo(emo, "EMO", spreadsheet);
          }
          break;
        case "audiometry":
          for (const audio of information[iterator]) {
            const response = insertAudio(audio, "AUDIO", spreadsheet);
          }
          break;
        case "optometry":
          for (const opto of information[iterator]) {
            const response = insertOpto(opto, "OPTO", spreadsheet);
          }
          break;
        case "visiometrics":
          for (const visio of information[iterator]) {
            const response = insertVisio(visio, "VISIO", spreadsheet);
          }
          break;
        case "spirometry":
          for (const spiro of information[iterator]) {
            const response = insertEspiro(spiro, "ESPIRO", spreadsheet);
            Logger.log(response);
          }
      }
    }
    return keys;
  } catch (error) {
    return error.message;
  }
}


/**
 * Determines the age range based on the given age.
 *
 * @param {number} age - The age to determine the range for.
 * @return {string} The corresponding age range.
 */
function ageRange(age) {
  if (age <= 19) return '0 MENOR O IGUAL A 19 AÑOS';
  if (age <= 29) return '1 DE 20 A 29 AÑOS';
  if (age <= 39) return '2 DE 30 A 39 AÑOS';
  if (age <= 49) return '3 DE 40 A 49 AÑOS';
  if (age <= 59) return '4 DE 50 A 59 AÑOS';
  if (age <= 91) return '60 O MAS AÑOS';
  return 'VALOR NO VALIDO';
}

/**
 * Returns the number of children based on the input.
 *
 * @param {number|string} childrens - The number of children or "SIN DATO" or "SIN DATOS".
 * @return {string} The number of children or a string indicating the number of children.
 */
function numberChildrens(childrens) {
  if (!childrens) {
    return 'SIN DATO';
  } else if (childrens >= 3) {
    return `3 O MAS HIJOS`;
  } else if (childrens == 'SIN DATO' || childrens == 'SIN DATOS') {
    return 'SIN DATO';
  } else {
    return `${childrens} HIJO`;
  }
}

/**
 * Determines the working years based on the given number.
 *
 * @param {number} number - The number to determine the working years.
 * @return {string} The working years category.
 */
function numberWorking(number) {
  if (!number) return 'SIN DATO';
  if (number < 1) return '1 MENOS DE 1 AÑO';
  if (number >= 1 && number <= 5) return '2 DE 1 A 5 AÑOS';
  if (number >= 6 && number <= 10) return '3 DE 6 A 10 AÑOS';
  if (number >= 11 && number <= 15) return '4 DE 11 A 15 AÑOS';
  if (number >= 16) return 'MAS DE 16 AÑOS';
  if (number == 'SIN DATO' || number == 'SIN DATOS') return 'SIN DATO';
}

/**
 * Calculate the Body Mass Index (IMC) given the weight and size.
 *
 * @param {number} weight - The weight of the person.
 * @param {number} size - The size of the person.
 * @return {array} An array containing the calculated IMC and its corresponding category.
 * The IMC value is at index 0 and the category is at index 1.
 */
function imc2(weight, size) {
  if (!weight || !size) {
    return '';
  }

  const imc = weight / (size * size);
  let category = '';

  if (imc < 18.5) {
    category = '1 PESO BAJO';
  } else if (imc < 25) {
    category = '2 NORMAL';
  } else if (imc < 30) {
    category = '3 SOBREPESO';
  } else if (imc < 35) {
    category = '4 OBESIDAD GRADO I';
  } else if (imc < 40) {
    category = '5 OBESIDAD GRADO II';
  } else if (imc < 50) {
    category = '6 OBESIDAD GRADO III';
  } else {
    category = 'CAMPO SIN VALOR';
  }

  return [imc, category];
}

/**
 * Calculates the average of the given numbers.
 *
 * @param {...number} rest - The numbers to calculate the average of.
 * @return {number} The average of the given numbers.
 */
function ptaInfo(...rest) {
  const sum = rest.reduce((acc, element) => acc + element, 0);
  return sum / rest.length;
}

/**
 * Calculates the sum of all the given numbers.
 *
 * @param {...number} rest - The numbers to be added.
 * @return {number} The sum of the given numbers.
 */
function diagnosticsImp(...rest) {
  return rest.reduce((sum, element) => sum + parseInt(element), 0);
}

