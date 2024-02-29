/**
 * Multiplies an input value by 2.
 * @param {number} input The number to double.
 * @return The input multiplied by 2.
 * @customfunction
*/
function PRUEBA(input) {
  return input * 2;
}

/***
 * mails from users
 */
const mailUser = {
  leidySanchez: {
    mail: "leidy.sanchez@soandes.co",
    withOutComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> Se informa a la Señorita Leidy Sanchez por favor realice el envio de la nota correspondiente`,
    withComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> La nota corresponde a la informada por la Señorita Leidy Sanchez`
  },
  camilaGonzalez: {
    mail: "camila.gonzalez@soandes.co",
    withOutComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> Se informa a la Señorita Camila Gonzalez por favor realice el envio de la nota correspondiente`,
    withComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> La nota corresponde a la informada por la Señorita Camila Gonzalez`
  },
  nataliaGuerrero: {
    mail: "natalia.guerrero@soandes.co",
    withOutComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> Se informa a la Señorita Natalia Guerrero por favor realice el envio de la nota correspondiente`,
    withComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> La nota corresponde a la informada por la Señorita Natalia Guerrero`
  },
  santiagoRodriguez: {
    mail: "santiago.rodriguez@soandes.co",
    withOutComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> Se informa a el Señor Santiago Rodriguez por favor realice el envio de la nota correspondiente`,
    withComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> La nota corresponde a la informada por el Señor Santiago Rodriguez`
  },
  katherineSanchez: {
    mail: "katherine.sanchez@soandes.co",
    withOutComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> Se informa a la Señora Katherine Sanchez por favor realice el envio de la nota correspondiente`,
    withComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> La nota corresponde a la informada por la Señora Katherine Sanchez`
  },
  juanAvila: {
    mail: "juan.avila@soandes.co",
    withOutComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> Se informa a el Señor Juan Avila por favor realice el envio de la nota correspondiente`,
    withComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> La nota corresponde a la informada por el Señor Juan Avila`
  },
  monicaMarroquin: {
    mail: "monica.marroquin@soandes.co",
    withOutComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> Se informa a la Señora Monica Marroquin por favor realice el envio de la nota correspondiente`,
    withComment: `\n<br/><br/><strong style="color:red">OJO:</strong><br/> La nota corresponde a la informada por la Señora Monica Marroquin`
  },
  gestionDocumental: "gestiondocumental@soandes.co",
  dianaOrtiz: "diana.ortiz@soandes.co"
}

const mailToSend = {
  leidySanchez: {
    mail() {
      const { leidySanchez, gestionDocumental, dianaOrtiz } = mailUser;
      mailSend(leidySanchez.mail, gestionDocumental, dianaOrtiz);
    },
    withComment() {
      const { leidySanchez } = mailUser;
      mailSendWithComment(leidySanchez.withComment);
    },
    withOutComment() {
      const { leidySanchez } = mailUser;
      mailSendWithOutComment(leidySanchez.withOutComment);
    }
  },
  camilaGonzalez: {
    mail() {
      const { camilaGonzalez, gestionDocumental, dianaOrtiz } = mailUser;
      mailSend(camilaGonzalez.mail, gestionDocumental, dianaOrtiz);
    },
    withComment() {
      const { camilaGonzalez } = mailUser;
      mailSendWithComment(camilaGonzalez.withComment);
    },
    withOutComment() {
      const { camilaGonzalez } = mailUser;
      mailSendWithOutComment(camilaGonzalez.withOutComment);
    }
  },
  nataliaGuerrero: {
    mail() {
      const { nataliaGuerrero, gestionDocumental, dianaOrtiz } = mailUser;
      mailSend(nataliaGuerrero.mail, gestionDocumental, dianaOrtiz);
    },
    withComment() {
      const { nataliaGuerrero } = mailUser;
      mailSendWithComment(nataliaGuerrero.withComment);
    },
    withOutComment() {
      const { nataliaGuerrero } = mailUser;
      mailSendWithOutComment(nataliaGuerrero.withOutComment);
    }
  },
  santiagoRodriguez: {
    mail() {
      const { santiagoRodriguez, gestionDocumental, dianaOrtiz } = mailUser;
      mailSend(santiagoRodriguez.mail, gestionDocumental, dianaOrtiz);
    },
    withComment() {
      const { santiagoRodriguez } = mailUser;
      mailSendWithComment(santiagoRodriguez.withComment);
    },
    withOutComment() {
      const { santiagoRodriguez } = mailUser;
      mailSendWithOutComment(santiagoRodriguez.withOutComment);
    }
  },
  katherineSanchez: {
    mail() {
      const { katherineSanchez, gestionDocumental, dianaOrtiz } = mailUser;
      mailSend(katherineSanchez.mail, gestionDocumental, dianaOrtiz);
    },
    withComment() {
      const { katherineSanchez } = mailUser;
      mailSendWithComment(katherineSanchez.withComment);
    },
    withOutComment() {
      const { katherineSanchez } = mailUser;
      mailSendWithOutComment(katherineSanchez.withOutComment);
    }
  },
  juanAvila: {
    mail() {
      const { juanAvila, gestionDocumental, dianaOrtiz } = mailUser;
      mailSend(juanAvila.mail, gestionDocumental, dianaOrtiz);
    },
    withComment() {
      const { juanAvila } = mailUser;
      mailSendWithComment(juanAvila.withComment);
    },
    withOutComment() {
      const { juanAvila } = mailUser;
      mailSendWithOutComment(juanAvila.withOutComment);
    }
  },
  monicaMarroquin: {
    mail() {
      const { monicaMarroquin, gestionDocumental, dianaOrtiz } = mailUser;
      mailSend(monicaMarroquin.mail, gestionDocumental, dianaOrtiz);
    },
    withComment() {
      const { monicaMarroquin } = mailUser;
      mailSendWithComment(monicaMarroquin.withComment);
    },
    withOutComment() {
      const { monicaMarroquin } = mailUser;
      mailSendWithOutComment(monicaMarroquin.withOutComment);
    }
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
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    spreadsheet.getActiveSheet().getActiveCell().setValue(`${manager}, ${group}, ${director}`);
  } catch (error) {
    Logger.log(`${error.name}: ${error.message}`);
  }
}

/**
 * Sends an email with the given message.
 *
 * @param {string} mail - the message to be sent in the email
 * @return {void} 
 */
const mailSendWithComment = (mail) => {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let message = spreadsheet.getActiveSheet().getActiveCell().getValue();
    if (["La nota corresponde a"].includes(message)) {
      message += message;
    } else {
      message += mail;
    }
    spreadsheet.getActiveSheet().getActiveCell().setValue(message);
  } catch (error) {
    Logger.log(`${error.name}: ${error.message}`);
  }
}
/**
 * Sends mail and updates spreadsheet with message.
 *
 * @param {string} mail - the mail to be sent
 * @return {void} 
 */
const mailSendWithOutComment = (mail) => {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let message = spreadsheet.getActiveSheet().getActiveCell().getValue();
    if (["Se informa a"].includes(message)) {
      message += message;
    } else {
      message += mail;
    }
    spreadsheet.getActiveSheet().getActiveCell().setValue(message);
  } catch (error) {
    Logger.log(`${error.name}: ${error.message}`);
  }
}

/**
 * Creates a custom menu in the Google Sheets UI that allows the user to send emails to specific recipients based on their name.
 *
 * @param {Object} e - the event object triggered by opening the Google Sheet
 * @return {void} does not return a value
 */
function onOpen(e) {
  try {
    const menu = SpreadsheetApp.getUi();
    menu.createMenu('GESTORES DB')
      .addSubMenu(menu.createMenu('Leidy Sanchez')
        .addItem('Correos', 'mailToSend.leidySanchez.mail')
        .addItem('Nota Anexada', 'mailToSend.leidySanchez.withComment')
        .addItem('Solicitud de Nota', 'mailToSend.leidySanchez.withOutComment')
      )
      .addSubMenu(menu.createMenu('Camila Gonzalez')
        .addItem('Correo', 'mailToSend.camilaGonzalez.mail')
        .addItem('Nota Anexada', 'mailToSend.camilaGonzalez.withComment')
        .addItem('Solicitud de Nota', 'mailToSend.camilaGonzalez.withOutComment')
      )
      .addSubMenu(menu.createMenu('Natalia Guerrero')
        .addItem('Correo', 'mailToSend.nataliaGuerrero.mail')
        .addItem('Nota Anexada', 'mailToSend.nataliaGuerrero.withComment')
        .addItem('Solicitud de Nota', 'mailToSend.nataliaGuerrero.withOutComment')
      )
      .addSubMenu(menu.createMenu('Santiago Rodriguez')
        .addItem('Correo', 'mailToSend.santiagoRodriguez.mail')
        .addItem('Nota Anexada', 'mailToSend.santiagoRodriguez.withComment')
        .addItem('Solicitud de Nota', 'mailToSend.santiagoRodriguez.withOutComment')
      )
      .addSubMenu(menu.createMenu('Juan Avila')
        .addItem('Correo', 'mailToSend.juanAvila.mail')
        .addItem('Nota Anexada', 'mailToSend.juanAvila.withComment')
        .addItem('Solicitud de Nota', 'mailToSend.juanAvila.withOutComment')
      )
      .addSubMenu(menu.createMenu('Monica Marroquin')
        .addItem('Correo', 'mailToSend.monicaMarroquin.mail')
        .addItem('Nota Anexada', 'mailToSend.monicaMarroquin.withComment')
        .addItem('Solicitud de Nota', 'mailToSend.monicaMarroquin.withOutComment')
      )
      .addToUi();
  } catch (error) {
    Logger.log(`${error.name}: ${error.message}`);
  }

  // try {
  //   const menu = SpreadsheetApp.getUi().createMenu('GESTORES DB');
  //   const recipients = {
  //     'Leidy Sanchez': 'mailToSend.leidySanchez',
  //     'Camila Gonzalez': 'mailToSend.camilaGonzalez',
  //     'Natalia Guerrero': 'mailToSend.nataliaGuerrero',
  //     'Santiago Rodriguez': 'mailToSend.santiagoRodriguez',
  //     'Katherine Sanchez': 'mailToSend.katherineSanchez',
  //     'Juan Avila': 'mailToSend.juanAvila',
  //     'Monica Marroquin': 'mailToSend.monicaMarroquin'
  //   };
  //   for (const [name, recipient] of Object.entries(recipients).sort()) {
  //     menu.addItem(name, recipient);
  //   }
  //   menu.addToUi();
  // } catch (error) {
  //   Logger.log(`${error.name}: ${error.message}`);
  // }
}

/**
 * A function that automatically increments a counter and sets values in a Google Sheets row.
 *
 * @return {void} 
 */
function auto_Increment() {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const cell = sheet.getActiveCell();
    const row = cell.getRow();
    const column = cell.getColumn();

    if (column !== 2 || sheet.getRange(row, 2).isBlank()) return;

    cell.setValue(cell.getValue().toString().toLocaleUpperCase());
    const data_value = sheet.getRange(row - 1, 3).getValue();
    const [, au] = data_value.toString().split('-');
    const incremented = parseInt(au, 10) + 1;
    sheet.getRange(row, 3).setValue(`ICS-${('0000' + incremented).slice(-4)}`);
    sheet.getRange(row, 4).setValue('PENDIENTE');
    applyFilterAndBorder(row);
  } catch (error) {
    Logger.log(`${error.name}: ${error.message}`);
  }
}

/**
 * Sends an email with the information of a generated order to the email address listed in the corresponding row of the spreadsheet.
 *
 * @return {void} No return value.
 */
function enviarCorreo() {
  try {
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
  } catch (error) {
    Logger.log(`${error.name}: ${error.message}`);
  }
}

/**
 * Filters a specific range in the active sheet and adds a border to it.
 *
 * @param {number} rows - The number of rows to include in the filter range.
 * @return {void}
 */
function applyFilterAndBorder(row) {
  try {
    const spreadsheet = SpreadsheetApp.getActive();
    spreadsheet.getActiveSheet().getFilter().remove();
    spreadsheet.getRange('B2:G' + row).activate();
    spreadsheet.getRange('B2:G' + row).createFilter();
    spreadsheet.getActiveRangeList().setBorder(true, true, true, true, true, true, '#000000', SpreadsheetApp.BorderStyle.SOLID);
  } catch (error) {
    Logger.log(`${error.name}: ${error.message}`);
  }
}
