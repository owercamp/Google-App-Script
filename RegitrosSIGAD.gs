/***
 * funciones para adjuntar correos
 */
function leidy() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.getActiveSheet().getActiveCell().setValue('leidy.sanchez@soandes.co, gestiondocumental@soandes.co, diana.ortiz@soandes.co');
}
function camila() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.getActiveSheet().getActiveCell().setValue('camila.gonzalez@soandes.co, gestiondocumental@soandes.co, diana.ortiz@soandes.co');
}
function natalia() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.getActiveSheet().getActiveCell().setValue('natalia.guerrero@soandes.co, gestiondocumental@soandes.co, diana.ortiz@soandes.co');
}
function diana() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.getActiveSheet().getActiveCell().setValue('diana.perdomo@soandes.co, gestiondocumental@soandes.co, diana.ortiz@soandes.co');
}
function katherine() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.getActiveSheet().getActiveCell().setValue('katherine.sanchez@soandes.co, gestiondocumental@soandes.co, diana.ortiz@soandes.co');
}
function katherine() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.getActiveSheet().getActiveCell().setValue('juan.avila@soandes.co, gestiondocumental@soandes.co, diana.ortiz@soandes.co');
}

function onOpen(e) {
  SpreadsheetApp.getUi()
    .createMenu('GESTORES DB')
    .addItem('Leidy sanchez', `leidy`)
    .addItem('Camila gonzalez', 'camila')
    .addItem('Natalia guerrero', 'natalia')
    .addItem('Diana perdomo', 'diana')
    .addItem('Katherine sanchez', 'katherine')
    .addItem('Juan avila', 'juan')
    .addToUi();
}

function Auto_Increment() {
  let spreadsheet = SpreadsheetApp.getActive();
  let row = spreadsheet.getActiveCell().getRow();
  let column = spreadsheet.getActiveCell().getColumn();

  if (spreadsheet.getActiveSheet().getRange(row, 2).getValue() != "" && column == 2) {
    let data_value = spreadsheet.getActiveSheet().getRange((row - 1), 3).getValue();
    let split = data_value.toString().split("-");
    let au = parseInt(split[1]) + 1;
    spreadsheet.getActiveSheet().getRange(row, 3).setValue(`ICS-0${au}`);
    spreadsheet.getActiveSheet().getRange(row, 4).setValue("PENDIENTE");
    Filtro(row);
  }
};

function enviarCorreo() {
  let spreadsheet = SpreadsheetApp.getActive();
  let date = new Date();
  let hour = date.getHours();
  let hi;
  let ui = SpreadsheetApp.getUi();
  let text = "";

  if (hour >= 0 && hour < 12) {
    hi = "Buenos dias";
  } else if (hour >= 12 && hour < 18) {
    hi = "Buenas tardes";
  } else if (hour >= 18 && hour <= 23) {
    hi = "Buenas noches";
  }

  if (spreadsheet.getActiveCell().getColumn() == 4 && spreadsheet.getActiveCell().getValue() == "ENTREGADO") {
    let msg = ui.alert("¿hay novedades de registros al importar la información?", ui.ButtonSet.YES_NO);

    if (msg == ui.Button.YES) {
      let textCapture = ui.prompt("indice las novedades encontradas:", ui.ButtonSet.OK)
      text = `<b style='color:red'>Importante:</b><br> ${textCapture.getResponseText()}`
    }
    let signature = Gmail.Users.Settings.SendAs.list("me").sendAs.filter(function (account) { if (account.isDefault) { return true } })[0].signature;

    MailApp.sendEmail({
      to: spreadsheet.getActiveCell().offset(0, 2).getValue(),
      /* to: "owerion22@gmail.com", */
      subject: spreadsheet.getActiveCell().offset(0, -2).getValue(),
      htmlBody: hi + "<br><br>Se generó la orden número (" +
        spreadsheet.getActiveCell().offset(0, -1).getValue() +
        ")  para el informe del cliente " + spreadsheet.getActiveCell().offset(0, -2).getValue() +
        ". por favor validar.<br><br>" + text + "<br><br>" + signature
    });

    SpreadsheetApp.getUi().alert("Correo Enviado Satisfactoriamente")

  }
}

function Filtro(row) {
  let spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().getFilter().remove();
  spreadsheet.getRange('B2:F' + row).activate();
  spreadsheet.getRange('B2:F' + row).createFilter();
  spreadsheet.getActiveRangeList().setBorder(true, true, true, true, true, true, '#000000', SpreadsheetApp.BorderStyle.SOLID);
}
