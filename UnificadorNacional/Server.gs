
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
            Logger.log(response);
          }
          break;
        case "audiometry":
          for (const audio of information[iterator]) {
            const response = insertAudio(audio, "AUDIO", spreadsheet);
            Logger.log(response);
          }
        case "optometry":
          for (const opto of information[iterator]) {
            const response = insertOpto(opto, "OPTO", spreadsheet);
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
 * @param {number} age - The age to determine the age range for.
 * @return {string} The age range corresponding to the given age.
 */
function ageRange(age) {
  if (age <= 19) {
    return '0 MENOR O IGUAL A 19 AÑOS';
  } else if (age >= 20 && age <= 29) {
    return '1 DE 20 A 29 AÑOS';
  } else if (age >= 30 && age <= 39) {
    return '2 DE 30 A 39 AÑOS';
  } else if (age >= 40 && age <= 49) {
    return '3 DE 40 A 49 AÑOS';
  } else if (age >= 50 && age <= 59) {
    return '4 DE 50 A 59 AÑOS';
  } else if (age >= 60 && age <= 91) {
    return '60 O MAS AÑOS';
  } else if (age >= 91) {
    return 'VALOR NO VALIDO';
  }
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
 * Determines the working status based on the given number.
 *
 * @param {number} number - The number to determine the working status.
 * @return {string} The working status based on the given number.
 */
function numberWorking(number) {
  if (!number) {
    return 'SIN DATO';
  } else if (number < 1) {
    return '1 MENOS DE 1 AÑO';
  } else if (number >= 1 && number <= 5) {
    return '2 DE 1 A 5 AÑOS';
  } else if (number >= 6 && number <= 10) {
    return '3 DE 6 A 10 AÑOS';
  } else if (number >= 11 && number <= 15) {
    return '4 DE 11 A 15 AÑOS';
  } else if (number >= 16) {
    return 'MAS DE 16 AÑOS';
  } else if (number == 'SIN DATO' || number == 'SIN DATOS') {
    return 'SIN DATO';
  }
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
  const dataIMC = [];
  if (!weight || !size) {
    return '';
  } else {
    dataIMC[0] = weight / Math.pow(size, 2);

    if (dataIMC[0] < 18.5) {
      dataIMC[1] = '1 PESO BAJO';
    } else if (dataIMC[0] >= 18.5 && dataIMC[0] < 25) {
      dataIMC[1] = '2 NORMAL';
    } else if (dataIMC[0] >= 25 && dataIMC[0] < 30) {
      dataIMC[1] = '3 SOBREPESO';
    } else if (dataIMC[0] >= 30 && dataIMC[0] < 35) {
      dataIMC[1] = '4 OBESIDAD GRADO I';
    } else if (dataIMC[0] >= 35 && dataIMC[0] < 40) {
      dataIMC[1] = '5 OBESIDAD GRADO II';
    } else if (dataIMC[0] >= 40 && dataIMC[0] < 50) {
      dataIMC[1] = '6 OBESIDAD GRADO III';
    } else {
      dataIMC[1] = 'CAMPO SIN VALOR';
    }

    return dataIMC;
  }
}

/**
 * Calculates the average of the given numbers.
 *
 * @param {...number} rest - The numbers to calculate the average of.
 * @return {number} The average of the given numbers.
 */
function ptaInfo(...rest) {
  
  const sum = 0;
  rest.forEach(element => {
    sum += (element) ? element : 0;
  });

  return sum / rest.length;
  
}

/**
 * Calculates the sum of all the given numbers.
 *
 * @param {...number} rest - The numbers to be added.
 * @return {number} The sum of the given numbers.
 */
function diagnosticsImp(...rest) {
  let sum = 0;

  rest.forEach(element => {
    sum+=element;
  });
  return sum;
}

