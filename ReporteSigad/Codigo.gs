function doGet() {
  let template = HtmlService.createTemplateFromFile('Index');
  let output = template.evaluate();

  return output;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

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

