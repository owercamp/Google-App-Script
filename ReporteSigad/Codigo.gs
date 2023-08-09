/**
 * A description of the entire function.
 *
 * @return {Object} The evaluated output of the template.
 */
function doGet() {
  let template = HtmlService.createTemplateFromFile('Index');
  let output = template.evaluate();

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

/**
 * Opens an informe by creating an HTML output and displaying it in a modal dialog.
 *
 * @return {HtmlOutput} The HTML output of the informe.
 */
function abrirInforme() {
  var html = HtmlService.createHtmlOutput('<html>'
    + '<script>' +
    "var urlToOpen = 'https://script.google.com/a/macros/soandes.co/s/AKfycbw7y_3I_3T6kMvEjsaoahFMsueIDId8SBpKShLxPrY/dev';" +
    "var winRef = window.open(urlToOpen);" +
    "google.script.host.close();"
    + '</script>'
    + '</html>')
    .setWidth(90).setHeight(1);
  SpreadsheetApp.getUi().showModalDialog(html, "Abriendo Informe");
}

/**
 * Returns an array of years, infoYears, colors, and backgrounds based on the given yearSelect.
 *
 * @param {type} yearSelect - The selected year to filter the data. If not provided, all years will be included.
 * @return {type} response - An array containing the following:
 *                          - years: An array of unique years.
 *                          - infoYears: An array of counts for each year.
 *                          - colors: An array of randomly generated colors in the format 'rgb(red, green, blue)'.
 *                          - backgrounds: An array of randomly generated background colors in the format 'rgba(red, green, blue, alpha)'.
 */
function getYears(yearSelect) {
  let years = [];
  let response = [];
  let infoYears = [];
  let colors = [];
  let backgrounds = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sh = spreadsheet.getSheetByName("orden_lista_trabajadores");
  let values = sh.getRange(2, 1, sh.getLastRow(), sh.getLastColumn()).getValues().filter(e => (e[0] != "") ? e : "");

  if (yearSelect) {
    values.map(item => {
      if (!years.includes(item[6]) && item[6] == yearSelect) {
        years.push(item[6]);
      }
    })

    years.map(year => {
      let sum = 0;
      values.map(element => {
        if (year == element[6] && element[6] == yearSelect) {
          sum += 1;
        }
      })
      infoYears.push(sum);
      let red = Math.round((Math.random() * 255).toFixed(0));
      let green = Math.round((Math.random() * 255).toFixed(0));
      let blue = Math.round((Math.random() * 255).toFixed(0));
      let color = `rgb(${red},${green},${blue})`;
      let background = `rgba(${red},${green},${blue},.6)`;
      colors.push(color);
      backgrounds.push(background);
    })
  } else {
    values.map(item => {
      if (!years.includes(item[6])) {
        years.push(item[6]);
      }
    })

    years.map(year => {
      let sum = 0;
      values.map(element => {
        if (year == element[6]) {
          sum += 1;
        }
      })
      infoYears.push(sum);
      let red = Math.round((Math.random() * 255).toFixed(0));
      let green = Math.round((Math.random() * 255).toFixed(0));
      let blue = Math.round((Math.random() * 255).toFixed(0));
      let color = `rgb(${red},${green},${blue})`;
      let background = `rgba(${red},${green},${blue},.6)`;
      colors.push(color);
      backgrounds.push(background);
    })
  }

  response[0] = years;
  response[1] = infoYears;
  response[2] = colors;
  response[3] = backgrounds;

  return response;
}

/**
 * Retrieves information about cities based on the provided year.
 *
 * @param {number} year - The year to filter the cities by.
 * @return {Array} An array containing information about the cities, including the city names, the number of registrations, colors, and backgrounds.
 */
function getCities(year) {
  let cities = [];
  let register = [];
  let infoCities = [];
  let colors = [];
  let backgrounds = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sh = spreadsheet.getSheetByName('orden_lista_trabajadores');
  let values = sh.getRange(2, 1, sh.getLastRow(), sh.getLastColumn()).getValues().filter(e => (e[0] != "") ? e : "").sort();

  if (year) {
    values.map(element => {
      if (!cities.includes(element[3]) && element[6] == year) {
        cities.push(element[3]);
      }
    })

    cities.map(city => {
      let sum = 0;
      values.map(item => {
        if (item[3] == city && item[6] == year) {
          sum += 1
        }
      })
      register.push(sum);
      let red = Math.round((Math.random() * 255).toFixed(0));
      let green = Math.round((Math.random() * 255).toFixed(0));
      let blue = Math.round((Math.random() * 255).toFixed(0));
      let color = `rgb(${red},${green},${blue})`;
      let background = `rgba(${red},${green},${blue},.6)`;
      colors.push(color);
      backgrounds.push(background);
    })
  } else {
    values.map(element => {
      if (!cities.includes(element[3])) {
        cities.push(element[3]);
      }
    })

    cities.map(city => {
      let sum = 0;
      values.map(item => {
        if (item[3] == city) {
          sum += 1
        }
      })
      register.push(sum);
      let red = Math.round((Math.random() * 255).toFixed(0));
      let green = Math.round((Math.random() * 255).toFixed(0));
      let blue = Math.round((Math.random() * 255).toFixed(0));
      let color = `rgb(${red},${green},${blue})`;
      let background = `rgba(${red},${green},${blue},.6)`;
      colors.push(color);
      backgrounds.push(background);
    })
  }
  infoCities[0] = cities;
  infoCities[1] = register;
  infoCities[2] = colors;
  infoCities[3] = backgrounds;
  return infoCities;
}

/**
 * Retrieves information about companies based on the given year.
 *
 * @param {number} year - The year to filter the companies by.
 * @return {Array} An array containing information about the companies, including their names, the number of times they appear in the dataset, and color and background values for visualization purposes.
 */
function getCompanies(year) {
  let companies = [];
  let register = [];
  let infocompanies = [];
  let colors = [];
  let backgrounds = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sh = spreadsheet.getSheetByName('orden_lista_trabajadores');
  let values = sh.getRange(2, 1, sh.getLastRow(), sh.getLastColumn()).getValues().filter(e => (e[0] != "") ? e : "").sort();

  if (year) {
    values.map(element => {
      if (!companies.includes(element[4]) && element[6] == year) {
        companies.push(element[4]);
      }
    })

    companies.map(item => {
      let sum = 0;
      values.map(element => {
        if (item == element[4] && element[6] == year) {
          sum += 1;
        }
      })
      register.push(sum);
      let red = Math.round((Math.random() * 255).toFixed(0));
      let green = Math.round((Math.random() * 255).toFixed(0));
      let blue = Math.round((Math.random() * 255).toFixed(0));
      let color = `rgb(${red},${green},${blue})`;
      let background = `rgba(${red},${green},${blue},.6)`;
      colors.push(color);
      backgrounds.push(background);
    })
  } else {
    values.map(element => {
      if (!companies.includes(element[4])) {
        companies.push(element[4]);
      }
    })

    companies.map(item => {
      let sum = 0;
      values.map(element => {
        if (item == element[4]) {
          sum += 1;
        }
      })
      register.push(sum);
      let red = Math.round((Math.random() * 255).toFixed(0));
      let green = Math.round((Math.random() * 255).toFixed(0));
      let blue = Math.round((Math.random() * 255).toFixed(0));
      let color = `rgb(${red},${green},${blue})`;
      let background = `rgba(${red},${green},${blue},.6)`;
      colors.push(color);
      backgrounds.push(background);
    })
  }

  infocompanies[0] = companies;
  infocompanies[1] = register;
  infocompanies[2] = colors;
  infocompanies[3] = backgrounds;

  return infocompanies;
}

