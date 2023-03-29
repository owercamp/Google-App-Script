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

function getYears() {
  let years = [];
  let response = [];
  let infoYears = [];
  let colors = [];
  let backgrounds = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sh = spreadsheet.getSheetByName("orden_lista_trabajadores");
  let values = sh.getRange(2, 7, sh.getLastRow(), 1).getValues().filter(e => (e[0] != "") ? e : "");

  values.map(item => {
    if (!years.includes(item[0])) {
      years.push(item[0]);
    }
  })

  years.map(year => {
    let sum = 0;
    values.map(element => {
      if (year == element[0]) {
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

  response[0] = years;
  response[1] = infoYears;
  response[2] = colors;
  response[3] = backgrounds;

  return response;
}

function getCities() {
  let cities = [];
  let register = [];
  let infoCities = [];
  let colors = [];
  let backgrounds = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sh = spreadsheet.getSheetByName('orden_lista_trabajadores');
  let values = sh.getRange(2, 4, sh.getLastRow(), 1).getValues().filter(e => (e[0] != "") ? e : "").sort();

  values.map(element => {
    if (!cities.includes(element[0])) {
      cities.push(element[0]);
    }
  })

  cities.map(city => {
    let sum = 0;
    values.map(item => {
      if (item[0] == city) {
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
  infoCities[0] = cities;
  infoCities[1] = register;
  infoCities[2] = colors;
  infoCities[3] = backgrounds;
  return infoCities;
}

function getCompanies() {
  let companies = [];
  let register = [];
  let infocompanies = [];
  let colors = [];
  let backgrounds = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sh = spreadsheet.getSheetByName('orden_lista_trabajadores');
  let values = sh.getRange(2, 5, sh.getLastRow(), 1).getValues().filter(e => (e[0] != "") ? e : "").sort();

  values.map(element => {
    if (!companies.includes(element[0])) {
      companies.push(element[0]);
    }
  })

  companies.map(item => {
    let sum = 0;
    values.map(element => {
      if (item == element[0]) {
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

  infocompanies[0] = companies;
  infocompanies[1] = register;
  infocompanies[2] = colors;
  infocompanies[3] = backgrounds;

  return infocompanies;
}

