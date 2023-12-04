/**
 * Gets the content to be displayed in the web app.
 *
 * @return {Object} The evaluated content to be displayed.
 */
function doGet() {
  let template = HtmlService.createTemplateFromFile("Index");
  let output = template.evaluate();

  return output;
}

/**
 * Returns the contents of the specified HTML file.
 *
 * @param {string} filename - The name of the HTML file.
 * @return {string} The content of the HTML file.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Retrieves the specialty values from the "Clasificación" sheet in the active spreadsheet.
 *
 * @return {Array} An array containing the unique specialty values.
 */
function getSpecialty() {
  let specialty = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Clasificación");
  let rows = sheet.getRange(2, 1, sheet.getLastRow(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");


  values.forEach(item => {
    if (!specialty.includes(item[0])) {
      specialty.push(item[0]);
    }
  });

  return specialty;
}

/**
 * Generates a list of collaborators based on the provided special parameter.
 *
 * @param {boolean} special - A flag indicating if the special parameter is provided
 * @return {Array} An array containing collaborator information
 */
function getCollaborators(special) {
  let collaborators = [];
  let collaborator = [];
  let sum = [];
  let datos = [];
  let colors = [];
  let backgrounds = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sh = spreadsheet.getSheetByName("Historia Clinica");
  let data = sh.getRange(2, 1, sh.getLastRow(), 14);
  let values = data.getValues().filter(e => (e[0] != "") ? e : "");
  let valuesClasi;

  /**
   * Limpieza de duplicados
   */
  if (special) {
    let shClasi = spreadsheet.getSheetByName("Clasificación");
    let dataClasi = shClasi.getRange(2, 6, shClasi.getLastRow(), 2);
    valuesClasi = dataClasi.getValues().filter(e => (e[0] != "" && e[1] == special) ? e : "");
    values.forEach(item => {
      valuesClasi.forEach(clasi => {
        if (!collaborators.includes(item[12]) && item[8] == clasi[0]) {
          collaborators.push(item[12]);
        }
      })
    });
  } else {
    values.forEach(item => {
      if (!collaborators.includes(item[12])) {
        collaborators.push(item[12]);
      }
    });
  }


  /**
   * Cambio a uppercase
   */
  collaborators.sort();
  collaborators.map(e => {

    let suma = 0;
    values.sort();
    values.map(professional => {
      if (professional[12] == e) {
        suma++;
      }
    })
    sum.push(suma);

    collaborator.push(e.toString().toUpperCase());
    let red = Math.round((Math.random() * 255).toFixed(0));
    let green = Math.round((Math.random() * 255).toFixed(0));
    let blue = Math.round((Math.random() * 255).toFixed(0));
    let color = `rgb(${red},${green},${blue})`;
    let background = `rgba(${red},${green},${blue},.6)`;
    colors.push(color);
    backgrounds.push(background);
  })

  datos[0] = collaborator;
  datos[1] = sum;
  datos[2] = colors;
  datos[3] = backgrounds;

  return datos;
}

/**
 * Retrieves the headquarters invoice data.
 *
 * @param {boolean} special - Specifies if the special flag is set.
 * @return {Array[]} The headquarters invoice data, including the invoices, sum of history, and sum of info.
 */
function getHeadquartersInvoice(special) {
  let invoices = [];
  let sumHistory = [];
  let sumInfo = [];
  let datos = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sh = spreadsheet.getSheetByName("Historia Clinica");
  let sh2 = spreadsheet.getSheetByName("Informe Ventas");
  let invoice = sh.getRange(2, 1, sh.getLastRow(), 14).getValues();
  let invoice2 = sh2.getRange(4, 1, sh2.getLastRow(), sh2.getLastColumn()).getValues();
  let values = invoice.filter(e => (e[3] != "") ? e : "");
  let values2 = invoice2.filter(e => (e[0] != "") ? e : "");
  let valuesClasi;

  /**
   * Limpieza de duplicados
   */
  values.sort();
  values.forEach(item => {
    if (!invoices.includes(item[3])) {
      invoices.push(item[3]);
    }
  });

  /**
   * datos para la grafica
   */
  if (special) {
    let arrayCups = [];
    let position = [];
    let headers = spreadsheet.getSheetByName("Informe ventas");
    let headersValues = headers.getRange(3, 1, 1, headers.getLastColumn()).getValues();
    let sh = spreadsheet.getSheetByName("Clasificación");
    let clasificacion = sh.getRange(2, 1, sh.getLastRow(), 3).getValues();
    let shClasi = spreadsheet.getSheetByName("Clasificación");
    let dataClasi = shClasi.getRange(2, 6, shClasi.getLastRow(), 2);
    valuesClasi = dataClasi.getValues().filter(e => (e[0] != "" && e[1] == special) ? e : "");

    /**
     * Captura de Cups
     */
    clasificacion.map(element => {
      if (element[0] == special) {
        arrayCups.push(element[2].toString());
      }
    })

    /**
     * Captura de indices para sumar segun especialidad
     */
    arrayCups.map(e => {
      headersValues[0].forEach(data => {
        if (e == data) {
          position.push(headersValues[0].indexOf(e));
        }
      })
    })


    invoices.forEach(item => {
      let sumInvoiceHistory = 0;
      let sumInvoiceInfo = 0;

      values.map(element => {
        valuesClasi.map(clasi => {
          if (element[3] == item && element[8] == clasi[0]) {
            sumInvoiceHistory++
          }
        })
      })
      sumHistory.push(sumInvoiceHistory);

      values2.forEach(element => {
        let sumInter = 0;
        position.forEach(pos => {
          let number = (element[pos] != "") ? parseInt(element[pos]) : 0;
          sumInter += number;
        })

        if (element[1] == item && sumInter > 0) {
          sumInvoiceInfo++;
        }
      })
      sumInfo.push(sumInvoiceInfo);
    });

  } else {
    invoices.forEach(item => {
      let sumInvoiceHistory = 0;
      let sumInvoiceInfo = 0;

      values.map(element => {
        if (element[3] == item) {
          sumInvoiceHistory++
        }
      })
      sumHistory.push(sumInvoiceHistory);

      values2.forEach(element => {
        if (element[1] == item) {
          sumInvoiceInfo++
        }
      })
      sumInfo.push(sumInvoiceInfo);
    });
  }


  datos[0] = invoices;
  datos[1] = sumHistory;
  datos[2] = sumInfo;

  return datos;
}

/**
 * Opens an informe by creating a new HTML document and opening it in a new window.
 *
 * @return {HtmlOutput} The HTML output object.
 */
function abrirInforme() {
  var html = HtmlService.createHtmlOutput('<html>'
    + '<script>' +
    "var urlToOpen = 'https://script.google.com/a/macros/soandes.co/s/AKfycbyk2dsjKCdFiPUJTmRRPbRg6CpOsK19AzxOSd94ZkI/dev';" +
    "var winRef = window.open(urlToOpen);" +
    "google.script.host.close();"
    + '</script>'
    + '</html>')
    .setWidth(90).setHeight(1);
  SpreadsheetApp.getUi().showModalDialog(html, "Abriendo Informe");
}

/**
 * Hide of column.
 *
 * @return {Promise<void>} A promise that resolves when the column is hidden.
 */
async function hideOfColumn() {
  /**
   * Seleccion de la informacion para realizxar la validación
   */
  let arrayCups = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  if (spreadsheet.getActiveSheet().getSheetName() == "Informe Ventas" && spreadsheet.getActiveSheet().getCurrentCell().getRow() == 1 && spreadsheet.getActiveSheet().getCurrentCell().getColumn() == 2) {

    let htmlOutput = HtmlService
      .createHtmlOutput(`<div><p>Procesando la información <b style="color: red;">POR FAVOR ESPERE</b></p></div>
    <iframe src="https://giphy.com/embed/ZO9b1ntYVJmjZlsWlm" width="360" height="160" frameBorder="0"></iframe>
    <div><p style="color: blue;">Nota:</p><p>Puede continuar usando el ordenador con normalidad</p></div>
    <div style="display: flex; width: 100%; justify-content: center;"><button onClick="apertura()"style="padding:0.5rem;background:#000000;color:#ffffff; border-color:#fbfbfb;border-radius:5px;">Grafica Informe</button></div><script>
    function apertura(){
      let url = 'https://script.google.com/a/macros/soandes.co/s/AKfycbyk2dsjKCdFiPUJTmRRPbRg6CpOsK19AzxOSd94ZkI/dev'
      window.open(url);
    }
    </script>`)
      .setWidth(400)
      .setHeight(400);
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, '📇 Procesando');

    let sh = spreadsheet.getSheetByName("Clasificación");
    let clasificacion = sh.getRange(2, 1, sh.getLastRow(), 3).getValues();

    /**
     * Selecciona los numeros cups de la hoja informes ventas para realizar el discriminado
     */
    let shActive = spreadsheet.getSheetByName("Informe Ventas");
    let headers = shActive.getRange(3, 1, 1, shActive.getLastColumn()).getValues();
    /** Reset **/
    try {
      headers[0].forEach(item => {
        spreadsheet.getSheetByName("Informe Ventas").showColumns(headers[0].indexOf(item) + 1);
      })
    } catch (e) {
      Logger.log(e);
    }

    /**
     * Captura del valor a discriminar
     */
    let valor = shActive.getRange("B1").getValue();

    /**
     * Captura de Cups a mostrar
     */
    clasificacion.map(element => {
      if (element[0] != valor) {
        arrayCups.push(element[2].toString());
      }
    })

    /**
     * Ocultamos los cups que no pertenecen a la especialidad y se encuentra en el listado de discriminación
     */
    headers[0].forEach(item => {
      arrayCups.forEach(element => {
        if (item == element) {
          spreadsheet.getSheetByName("Informe Ventas").hideColumns(headers[0].indexOf(item) + 1);
        }
      })
    })

    /**
     * Sumatoria de examenes
     */
    spreadsheet.getSheetByName("Informe Ventas").getRange("$L4").activate();
    let ran;
    while (spreadsheet.getCurrentCell().activate().getValue() != "") {
      ran = spreadsheet.getSheetByName("Informe Ventas").getCurrentCell().getRow();
      let lt = spreadsheet.getSheetByName("Informe Ventas").getRange(ran, 17, 1, spreadsheet.getSheetByName("Informe Ventas").getLastColumn()).getValues();
      spreadsheet.getCurrentCell().offset(0, 3).setValue(await COUNTEXAMS(lt));
      spreadsheet.getCurrentCell().offset(1, 0).activate();
    }

    spreadsheet.getSheetByName("Informe Ventas").getRange("$L4").activate();

    const NB_RETRY = 10;
    var nbSecPause = 1.5;
    var nbErr = 0;
    while (nbErr < NB_RETRY) {
      try {
        if (nbErr > 0) SpreadsheetApp.getActiveSpreadsheet().toast("Here we go again.");
        while (spreadsheet.getCurrentCell().activate().getValue() != "") {
          let sum = spreadsheet.getCurrentCell().offset(0, 3).getValue();
          let id = spreadsheet.getCurrentCell().offset(0, 1).getValue();
          spreadsheet.getCurrentCell().offset(0, 4).setValue(await WASPRESENTED(sum, id, valor));
          spreadsheet.getCurrentCell().offset(1, 0).activate();
        }

        spreadsheet.getSheetByName("Informe Ventas").getRange("$O4").activate();
        nbErr = 10;

        htmlOutput = HtmlService
          .createHtmlOutput(`<div><p>Ejecución Completa</p></div>`)
          .setWidth(300)
          .setHeight(100);
        SpreadsheetApp.getUi().showModalDialog(htmlOutput, '🎖️ Exito');
      }
      catch (error) {
        nbErr++;
        SpreadsheetApp.getActiveSpreadsheet().toast("Let's pause the system during " + nbSecPause + " seconds. Loop number: " + nbErr);
        Utilities.sleep(nbSecPause * 1000)
        nbSecPause += 0.5;
      }
    }
  }
}

/**
 * Count exams marked.
 * @param{object} input The range to counts. 
 * @return Count exams marked validated columns that are not hidden.
 * @customfunction
*/
function COUNTEXAMS(rango) {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sum = 0;

  for (let x = 0; x < rango[0].length; x++) {
    if (rango[0][x] != "" && spreadsheet.getSheetByName("Informe Ventas").isColumnHiddenByUser(17 + x) == false) {
      sum += 1;
    }
  }
  return sum;
}

/**
 * Confirms if a person showed up for an exam.
 * @param {number} num_exam The exam number.
 * @param {number} id The person's ID.
 * @param {object} rango The range to confirm if the person showed up.
 * @return Validated columns that are not hidden.
 * @customfunction
 */
function WASPRESENTED(num_exam, id, especial) {
  let register = [];
  let def = "Sin Registro";
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let dataFilter = spreadsheet.getSheetByName("Clasificación");
  let clasi = dataFilter.getRange(2, 6, dataFilter.getLastRow(), 2).getValues().filter(element => (element[1] != "" && element[1] == especial) ? element : "");
  let historys = spreadsheet.getSheetByName("Historia Clinica").getRange(2, 1, spreadsheet.getSheetByName("Historia Clinica").getLastRow(), 14).getValues();

  /**
   * separo los registros de la especialidad solicitada
   */
  historys.map(item => {
    clasi.map(element => {
      if (item[8] == element[0]) {
        register.push(item);
      }
    })
  })

  let yes = 0;
  register.map(reg => {
    if (reg[0] == id && num_exam == 0) {
      yes = 1;
    } else if (reg[0] == id && num_exam > 0) {
      yes = 2;
    }
  })

  if (yes == 1) {
    def = "Cuenta con registro en Historia Clinica";
  } else if (yes == 2) {
    def = "Cuenta con registro en Historia Clinica y en Facturación";
  }

  return def;
}

/**
 * Finds the specialty for a given data.
 *
 * @param {any} data - The data to search for the specialty.
 * @return {any} The specialty corresponding to the data.
 */
function specialty(data) {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let clasi = spreadsheet.getSheetByName("Clasificación").getRange(2, 6, spreadsheet.getSheetByName("Clasificación").getLastRow(), 2).getValues().filter(e => (e[0] != "") ? e : "");
  clasi.forEach(element => {
    if (element[0] == data) {
      return element[1];
    }
  })
}
