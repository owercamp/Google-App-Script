/***
 * mails from users
 */
const mailUser = {
  leidySanchez: "leidy.sanchez@soandes.co",
  camilaGonzalez: "camila.gonzalez@soandes.co",
  nataliaGuerrero: "natalia.guerrero@soandes.co",
  dianaPerdomo: "diana.perdomo@soandes.co",
  katherineSanchez: "katherine.sanchez@soandes.co",
  juanAvila: "juan.avila@soandes.co",
  monicaMarroquin: "monica.marroquin@soandes.co",
  gestionDocumental: "gestiondocumental@soandes.co",
  dianaOrtiz: "diana.ortiz@soandes.co"
}

const mailToSend = {
  leidySanchez() {
    mailSend(mailUser.leidySanchez, mailUser.gestionDocumental, mailUser.dianaOrtiz);
  },
  camilaGonzalez() {
    mailSend(mailUser.camilaGonzalez, mailUser.gestionDocumental, mailUser.dianaOrtiz);
  },
  nataliaGuerrero() {
    mailSend(mailUser.nataliaGuerrero, mailUser.gestionDocumental, mailUser.dianaOrtiz);
  },
  dianaPerdomo() {
    mailSend(mailUser.dianaPerdomo, mailUser.gestionDocumental, mailUser.dianaOrtiz);
  },
  katherineSanchez() {
    mailSend(mailUser.katherineSanchez, mailUser.gestionDocumental, mailUser.dianaOrtiz);
  },
  juanAvila() {
    mailSend(mailUser.juanAvila, mailUser.gestionDocumental, mailUser.dianaOrtiz);
  },
  monicaMarroquin() {
    mailSend(mailUser.monicaMarroquin, mailUser.gestionDocumental, mailUser.dianaOrtiz);
  }
}

/**
 * Sends an email containing the manager, group, and director information
 * to the active cell in the current spreadsheet.
 *
 * @param {Object} manager - The manager information to be included in the email.
 * @param {Object} group - The group information to be included in the email.
 * @param {Object} director - The director information to be included in the email.
 * @return {void} This function does not return a value.
 */
const mailSend = (manager, group, director) => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.getActiveSheet().getActiveCell().setValue(`${manager}, ${group}, ${director}`);
}

/**
 * Creates a custom menu in the Google Sheets UI that allows the user to send emails to specific recipients based on their name.
 *
 * @param {Object} e - the event object triggered by opening the Google Sheet
 * @return {void} does not return a value
 */
function onOpen(e) {
  SpreadsheetApp.getUi()
    .createMenu('GESTORES DB')
    .addItem('Leidy Sanchez', `mailToSend.leidySanchez`)
    .addItem('Camila Gonzalez', 'mailToSend.camilaGonzalez')
    .addItem('Natalia Guerrero', 'mailToSend.nataliaGuerrero')
    .addItem('Diana Perdomo', 'mailToSend.dianaPerdomo')
    .addItem('Katherine Sanchez', 'mailToSend.katherineSanchez')
    .addItem('Juan Avila', 'mailToSend.juanAvila')
    .addItem('Monica Marroquin', 'mailToSend.monicaMarroquin')
    .addToUi();
}

/**
 * A function that automatically increments a counter and sets values in a Google Sheets row.
 *
 * @return {void} 
 */
function Auto_Increment() {
  const spreadsheet = SpreadsheetApp.getActive();
  const row = spreadsheet.getActiveCell().getRow();
  const column = spreadsheet.getActiveCell().getColumn();

  if (spreadsheet.getActiveSheet().getRange(row, 2).getValue() != "" && column == 2) {
    const data_value = spreadsheet.getActiveSheet().getRange((row - 1), 3).getValue();
    const split = data_value.toString().split("-");
    const au = parseInt(split[1]) + 1;
    spreadsheet.getActiveSheet().getRange(row, 3).setValue(`ICS-${("0000" + au).slice(-4)}`);
    spreadsheet.getActiveSheet().getRange(row, 4).setValue("PENDIENTE");
    Filtro(row);
  }
};

/**
 * Sends an email with the information of a generated order to the email address listed in the corresponding row of the spreadsheet.
 *
 * @return {void} No return value.
 */
function enviarCorreo() {
  const spreadsheet = SpreadsheetApp.getActive();
  const date = new Date();
  const hour = date.getHours();
  let hi;
  let text = "";

  if (hour >= 0 && hour < 12) {
    hi = "Buenos dias";
  } else if (hour >= 12 && hour < 18) {
    hi = "Buenas tardes";
  } else if (hour >= 18 && hour <= 23) {
    hi = "Buenas noches";
  }

  if (spreadsheet.getActiveCell().getColumn() == 4 && spreadsheet.getActiveCell().getValue() == "ENTREGADO") {
    const msg = spreadsheet.getActiveCell().offset(0, 3).getValue();
    if (msg) {
      const separateSplit = msg.toString().split("*");

      let list = "<ul>"
      separateSplit.map(item => {
        if (item) {
          list += `<li>${item}</li>`;
        }
      });
      list += "</ul>";

      text = `<b style='color:red'>Importante:</b><br>${list}`;
    }
    const signature = Gmail.Users.Settings.SendAs.list("me").sendAs.filter(function (account) { if (account.isDefault) { return true } })[0].signature;

    MailApp.sendEmail({
      to: spreadsheet.getActiveCell().offset(0, 2).getValue(),
      /*to: "ower.campos@soandes.co",*/
      subject: spreadsheet.getActiveCell().offset(0, -2).getValue(),
      htmlBody: hi + "<br><br>Se generó la orden número (" +
        spreadsheet.getActiveCell().offset(0, -1).getValue() +
        ")  para el informe del cliente " + spreadsheet.getActiveCell().offset(0, -2).getValue() +
        ". por favor validar.<br><br>" + text + "<br><br>" + signature
    });

    SpreadsheetApp.getUi().alert("Correo Enviado Satisfactoriamente")

  }
}

/**
 * Applies a filter to a specific range in the active sheet and adds a border to it.
 *
 * @param {number} row - The number of rows to include in the filter range
 * @return {void} - Does not return anything
 */
function Filtro(row) {
  const spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().getFilter().remove();
  spreadsheet.getRange('B2:G' + row).activate();
  spreadsheet.getRange('B2:G' + row).createFilter();
  spreadsheet.getActiveRangeList().setBorder(true, true, true, true, true, true, '#000000', SpreadsheetApp.BorderStyle.SOLID);
}
