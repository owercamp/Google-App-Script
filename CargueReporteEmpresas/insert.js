
/**
 * Executes the `doGet` function.
 *
 * @return {Template} The evaluated output template.
 */
function doGet() {
  // const template = HtmlService.createTemplateFromFile("index");
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

/**
 * Retrieves the 'Consolidado' sheet from the active spreadsheet and 
 * returns an array of values from the second row of the sheet, 
 * excluding any empty values.
 *
 * @return {Array} An array of values from the 'Consolidado' sheet.
 */
function getSigad() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Consolidado");
  const ranges = spreadsheet.getRange(2, 1, 1, spreadsheet.getLastColumn()).getValues()[0].filter(e => (e != "") ? e : "");

  return ranges;
}


/**
 * Gets the client information from the "Consolidado" sheet in the active spreadsheet.
 *
 * @return {Array[]} The client information in reverse order.
 */
function getClientInformation() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Consolidado");
  const information = spreadsheet.getRange(3, 2, 13, spreadsheet.getLastColumn()).getValues();

  return information;
}

const informations = {
  /**
   * Opens a new window with the specified URL and closes the current window.
   *
   * @return {HtmlOutput} The HTML output object representing the new window.
   */
  openGraph() {
    var html = HtmlService.createHtmlOutput('<html>'
    + '<script>' +
    "var urlToOpen = 'https://script.google.com/a/macros/soandes.co/s/AKfycbxxYErn5WzKSO4WmKlByr2GzHgRbwx3nFsSZhWAmMR1/dev';" +
    "var winRef = window.open(urlToOpen);" +
    "google.script.host.close();"
    + '</script>'
    + '</html>')
    .setWidth(90).setHeight(1);
  SpreadsheetApp.getUi().showModalDialog(html, "Abriendo Informe");
  },
  /**
   * Insert a register in the active spreadsheet.
   *
   * @return {void} This function does not return anything.
   */
  insertRegister() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getActiveSheet();
    const column = sh.getActiveCell().getColumn();
    const date = new Date();

    if (column === 3 && sh.getName() === "Registro") {
      const formattedDate = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const formattedHour = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const formattedShort = date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });

      sh.getActiveCell().offset(0, -2).setValue(`${formattedDate} ${formattedHour}`);
      sh.getActiveCell().offset(0, -1).setValue(formattedShort);
      sh.getActiveCell().offset(0, 4).setValue(date.getMonth() + 1);
      sh.getActiveCell().offset(0, 5).setValue(date.getFullYear());
    }
  }
}

/**
 * Executes when the spreadsheet is opened.
 *
 * @param {Object} e - The event object.
 */
function onOpen(e) {
  const menu = SpreadsheetApp.getUi().createMenu('Visualizar Reporte');
  let recipients = {}
  if (Session.getActiveUser() == 'ower.campos@soandes.co') {
    recipients = {
    'Reporte Graficas': 'informations.openGraph',
    'Registrar Fecha': 'informations.insertRegister'
    }
  } else {
    recipients ={
      'graficas': 'informations.openGraph'
    }
  }
  for (const [name, recipient] of Object.entries(recipients).sort()) {
    menu.addItem(name, recipient);
  }
  menu.addToUi();
}

function prueba() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName("Registro");
  sh.getActiveCell().setValue("prueba");  
}
