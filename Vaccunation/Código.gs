function doGet() {
  let template = HtmlService.createTemplateFromFile("Index");
  let output = template.evaluate();

  return output;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getSpecialty() {
  let specialty = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Clasificación");
  let rows = sheet.getRange(2, 1, sheet.getLastRow(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");


  values.forEach(item =>{
    if(!specialty.includes(item[0])){
      specialty.push(item[0]);
    }
  });

  return specialty;
}

function getCollaborators(){
  let collaborators = [];
  let collaborator = [];
  let sum = [];
  let sum2 = [];
  let datos = [];
  let colors = [];
  let colors2 = [];
  let backgrounds = [];
  let backgrounds2 = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sh = spreadsheet.getSheetByName("Historia Clinica");
  let sh2 = spreadsheet.getSheetByName("Informe Ventas");
  let data = sh.getRange(2,13, sh.getLastRow(),1);
  let data2 = sh2.getRange(2,1, sh.getLastRow(),1);
  let values = data.getValues().filter(e => (e[0] != "") ? e : "");
  let values2 = data2.getValues().filter(e => (e[0] != "") ? e : "");

/**
 * Limpieza de duplicados
 */
  values.forEach(item =>{
    if(!collaborators.includes(item[0])){
      collaborators.push(item[0]);
    }
  });

  /**
   * Cambio a uppercase
   */
  collaborators.sort();
  collaborators.map(e =>{
  
    let suma = 0;
    values.sort();
    values.map(professional =>{
      if(professional[0] == e){
        suma++;
      }
    })
    sum.push(suma);
    
    suma = 0;
    values2.sort();
    values2.map(info =>{
      if(info[0] == e){
        suma++;
      }
    })
    sum2.push(suma);

    collaborator.push(e.toString().toUpperCase());
    let red = Math.round((Math.random()*255).toFixed(0));
    let green = Math.round((Math.random()*255).toFixed(0));
    let blue = Math.round((Math.random()*255).toFixed(0));
    let color = `rgb(${red},${green},${blue})`;
    let background = `rgba(${red},${green},${blue},.6)`;
    colors.push(color);
    backgrounds.push(background);
    
    let red2 = Math.round((Math.random()*255).toFixed(0));
    let green2 = Math.round((Math.random()*255).toFixed(0));
    let blue2 = Math.round((Math.random()*255).toFixed(0));
    let color2 = `rgb(${red2},${green2},${blue2})`;
    let background2 = `rgba(${red2},${green2},${blue2},.6)`;
    colors2.push(color2);
    backgrounds2.push(background2);
  })

  datos[0] = collaborator;
  datos[1] = sum;
  datos[2] = colors;
  datos[3] = backgrounds;
  datos[4] = sum2;
  datos[5] = colors2;
  datos[6] = backgrounds2;

  return datos;
}

function getHeadquartersInvoice(){
  let invoices = [];
  let sumHistory = [];
  let sumInfo = [];
  let datos = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sh = spreadsheet.getSheetByName("Historia Clinica");
  let sh2 = spreadsheet.getSheetByName("Informe Ventas");
  let invoice = sh.getRange(2,4,sh.getLastRow(),1).getValues();
  let invoice2 = sh2.getRange(4,2,sh2.getLastRow(),1).getValues();
  let values = invoice.filter(e => (e[0] != "") ? e : "").sort();
  let values2 = invoice2.filter(e => (e[0] != "") ? e : "").sort();

  /**
 * Limpieza de duplicados
 */
  values.forEach(item =>{
    if(!invoices.includes(item[0])){
      invoices.push(item[0]);
    }
  });

  /**
   * datos para la grafica
   */

  invoices.forEach(item =>{
    let sumInvoiceHistory = 0;
    let sumInvoiceInfo = 0;

    values.map(element =>{
      if(element[0] == item){
        sumInvoiceHistory++
      }
    })
    sumHistory.push(sumInvoiceHistory);

    values2.forEach(element =>{
      if(element[0] == item){
        sumInvoiceInfo++
      }
    })
    sumInfo.push(sumInvoiceInfo);


  });

  datos[0] = invoices;
  datos[1] = sumHistory;
  datos[2] = sumInfo;

  return datos;
}

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

function id() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let row = spreadsheet.getActiveSheet().getCurrentCell().getRow();
  let column = spreadsheet.getActiveSheet().getCurrentCell().getColumn();
  Logger.log(`${row} - ${column} - ${spreadsheet.getSheetId()}`);
}

function clearCC() {
  Utilities.sleep(2000);
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let ui = SpreadsheetApp.getUi();
  let tooltip = SpreadsheetApp.getActive();
  let column = spreadsheet.getActiveSheet().getActiveRange().getColumn();

  if (column == 1 && spreadsheet.getSheetName() == "Historia Clinica" && spreadsheet.getActiveSheet().getRange(2, 1).getValue() != "") {
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName("Historia Clinica"));
    let proccess = ui.alert("¿Desea iniciar la separación del tipo de Identificación y su Número?", ui.ButtonSet.YES_NO);
    if (proccess == ui.Button.YES) {
      tooltip.toast("Procesando la información POR FAVOR ESPERE", "📇 Procesando", 5000);
      let range = spreadsheet.getActiveSheet().getRange(2, 1, spreadsheet.getActiveSheet().getLastRow(), 1).getValues();
      spreadsheet.getActiveSheet().getRange("A2").activate();
      range.forEach(element => {
        let splitElement = element.toLocaleString().split(" ");
        spreadsheet.getActiveSheet().getActiveCell().setValue(splitElement[1]);
        spreadsheet.getActiveSheet().getActiveCell().offset(1, 0).activate();
      })
      spreadsheet.getActiveSheet().getRange("A2").activate();
      tooltip.toast("Ejecución Completa", "🎖️ Exito");
      ui.alert("separación completada satisfactoriamente", ui.ButtonSet.OK);
    }
  }
}


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
      <div><p style="color: blue;">Nota:</p><p>Puede continuar usando el ordenador con normalidad</p></div>`)
      .setWidth(400)
      .setHeight(300);
    SpreadsheetApp.getUi().showModelessDialog(htmlOutput, '📇 Procesando');

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

    spreadsheet.getSheetByName("Informe Ventas").getRange("$L4").activate();
    let ran;
    let historys = spreadsheet.getSheetByName("Historia Clinica").getRange(2, 1, spreadsheet.getSheetByName("Historia Clinica").getLastRow(), 14).getValues();
    while (spreadsheet.getCurrentCell().activate().getValue() != "") {
      ran = spreadsheet.getSheetByName("Informe Ventas").getCurrentCell().getRow();
      let lt = spreadsheet.getSheetByName("Informe Ventas").getRange(ran, 17, 1, spreadsheet.getSheetByName("Informe Ventas").getLastColumn()).getValues();
      spreadsheet.getCurrentCell().offset(0, 3).setValue(await COUNTEXAMS(lt));
      spreadsheet.getCurrentCell().offset(0, 4).setValue(await WASPRESENTED(spreadsheet.getSheetByName("Informe Ventas").getCurrentCell().offset(0, 3).getValue(), spreadsheet.getSheetByName("Informe Ventas").getCurrentCell().offset(0, 1).getValue(), historys, spreadsheet.getSheetByName("Informe Ventas").getRange(1, 2).getValue()));
      spreadsheet.getCurrentCell().offset(1, 0).activate();
    }
    spreadsheet.getSheetByName("Informe Ventas").getRange("$O4").activate();

    htmlOutput = HtmlService
      .createHtmlOutput(`<div><p>Ejecución Completa</p></div>`)
      .setWidth(300)
      .setHeight(100);
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, '🎖️ Exito');
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
function WASPRESENTED(num_exam, id, rango, especial) {

  let def = "Sin Registro";
  for (let x = 0; x < rango.length; x++) {
    let exp = specialty(rango[0][8]);
    if (rango[x][0].toString() == id && exp == especial && num_exam == 0) {
      def = "Con Registro";
    }
  }
  return def;
}

function specialty(data = "Certificado Evaluación Medico Ocupacional") {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let clasi = spreadsheet.getSheetByName("Clasificación").getRange(2, 6, spreadsheet.getSheetByName("Clasificación").getLastRow(), 2).getValues().filter(e => (e[0] != "") ? e : "");
  clasi.forEach(element => {
    if (element[0] == data) {
      return element[1];
    }
  })
}



