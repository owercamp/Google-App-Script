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
  /**
   * Sends an email to Leidy Sanchez with the given mailUser properties.
   *
   * @param {object} mailUser - An object containing the properties for sending the email.
   * @return {void} This function does not return anything.
   */
  leidySanchez() {
    const { leidySanchez, gestionDocumental, dianaOrtiz } = mailUser;
    mailSend(leidySanchez, gestionDocumental, dianaOrtiz);
  },
  /**
   * Sends an email to Camila Gonzalez with the given mailUser properties.
   *
   * @param {object} mailUser - An object containing the properties for sending the email.
   * @return {void} This function does not return anything.
   */
  camilaGonzalez() {
    const { camilaGonzalez, gestionDocumental, dianaOrtiz } = mailUser;
    mailSend(camilaGonzalez, gestionDocumental, dianaOrtiz);
  },
  /**
   * Sends an email to Natalia Guerrero with the given mailUser properties.
   *
   * @param {object} mailUser - An object containing the properties for sending the email.
   * @return {void} This function does not return anything.
   */
  nataliaGuerrero() {
    const { nataliaGuerrero, gestionDocumental, dianaOrtiz } = mailUser;
    mailSend(nataliaGuerrero, gestionDocumental, dianaOrtiz);
  },
  /**
   * Sends an email to Diana Perdomo with the given mailUser properties.
   *
   * @param {object} mailUser - An object containing the properties for sending the email.
   * @return {void} This function does not return anything.
   */
  dianaPerdomo() {
    const { dianaPerdomo, gestionDocumental, dianaOrtiz } = mailUser;
    mailSend(dianaPerdomo, gestionDocumental, dianaOrtiz);
  },
  /**
   * Sends an email to Katherine Sanchez with the given mailUser properties.
   *
   * @param {object} mailUser - An object containing the properties for sending the email.
   * @return {void} This function does not return anything.
   */
  katherineSanchez() {
    const { katherineSanchez, gestionDocumental, dianaOrtiz } = mailUser;
    mailSend(katherineSanchez, gestionDocumental, dianaOrtiz);
  },
  /**
   * Sends an email to Juan Avila with the given mailUser properties.
   *
   * @param {object} mailUser - An object containing the properties for sending the email.
   * @return {void} This function does not return anything.
   */
  juanAvila() {
    const { juanAvila, gestionDocumental, dianaOrtiz } = mailUser;
    mailSend(juanAvila, gestionDocumental, dianaOrtiz);
  },
  /**
   * Sends an email to Monica Marroquin with the given mailUser properties.
   *
   * @param {object} mailUser - An object containing the properties for sending the email.
   * @return {void} This function does not return anything.
   */
  monicaMarroquin() {
    const { monicaMarroquin, gestionDocumental, dianaOrtiz } = mailUser;
    mailSend(monicaMarroquin, gestionDocumental, dianaOrtiz);
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
  const menu = SpreadsheetApp.getUi().createMenu('GESTORES DB');
  const recipients = {
    'Leidy Sanchez': 'mailToSend.leidySanchez',
    'Camila Gonzalez': 'mailToSend.camilaGonzalez',
    'Natalia Guerrero': 'mailToSend.nataliaGuerrero',
    'Diana Perdomo': 'mailToSend.dianaPerdomo',
    'Katherine Sanchez': 'mailToSend.katherineSanchez',
    'Juan Avila': 'mailToSend.juanAvila',
    'Monica Marroquin': 'mailToSend.monicaMarroquin'
  };
  for (const [name, recipient] of Object.entries(recipients)) {
    menu.addItem(name, recipient);
  }
  menu.addToUi();
}

/**
 * A function that automatically increments a counter and sets values in a Google Sheets row.
 *
 * @return {void} 
 */
function Auto_Increment() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const cell = sheet.getActiveCell();
  const row = cell.getRow();
  const column = cell.getColumn();
  
  if (column !== 2 || sheet.getRange(row, 2).isBlank()) return;

  const data_value = sheet.getRange(row - 1, 3).getValue();
  const [, au] = data_value.toString().split('-');
  const incremented = parseInt(au, 10) + 1;
  sheet.getRange(row, 3).setValue(`ICS-${('0000' + incremented).slice(-4)}`);
  sheet.getRange(row, 4).setValue('PENDIENTE');
  applyFilterAndBorder(row);
}

/**
 * Sends an email with the information of a generated order to the email address listed in the corresponding row of the spreadsheet.
 *
 * @return {void} No return value.
 */
function enviarCorreo() {
  const spreadsheet = SpreadsheetApp.getActive();
  const date = new Date();
  const hour = date.getHours();
  const emailCell = spreadsheet.getActiveCell().offset(0, 2);

  let greeting;
  if (hour >= 0 && hour < 12) {
    greeting = "Buenos dias";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Buenas tardes";
  } else if (hour >= 18 && hour <= 23) {
    greeting = "Buenas noches";
  }

  const activeCellValue = spreadsheet.getActiveCell().getValue();
  if (spreadsheet.getActiveCell().getColumn() === 4 && activeCellValue === "ENTREGADO") {
    const message = spreadsheet.getActiveCell().offset(0, 3).getValue();
    let text = "";
    if (message) {
      const separateSplit = message.toString().split("*");
      const list = separateSplit
        .filter(item => item)
        .map(item => `<li>${item}</li>`)
        .join("");
      text = `<b style='color:red'>Importante:</b><br><ul>${list}</ul>`;
    }

    const signature = Gmail.Users.Settings.SendAs.list("me")
      .sendAs.filter(account => account.isDefault)[0].signature;

    MailApp.sendEmail({
      to: emailCell.getValue(),
      subject: spreadsheet.getActiveCell().offset(0, -2).getValue(),
      htmlBody: `${greeting}<br><br>Se generó la orden número (${spreadsheet.getActiveCell().offset(0, -1).getValue()}) para el informe del cliente ${spreadsheet.getActiveCell().offset(0, -2).getValue()}. por favor validar.<br><br>${text}<br><br>${signature}`,
    });

    SpreadsheetApp.getUi().alert("Correo Enviado Satisfactoriamente");
  }
}

/**
 * Filters a specific range in the active sheet and adds a border to it.
 *
 * @param {number} rows - The number of rows to include in the filter range.
 * @return {void}
 */
function Filtro(row) {
  const spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().getFilter().remove();
  spreadsheet.getRange('B2:G' + row).activate();
  spreadsheet.getRange('B2:G' + row).createFilter();
  spreadsheet.getActiveRangeList().setBorder(true, true, true, true, true, true, '#000000', SpreadsheetApp.BorderStyle.SOLID);
}
