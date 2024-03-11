function habilitarFormulario() {
  // Reemplaza 'ingresar el ID de formulario' con el ID real de tu formulario
  const formulario = FormApp.openById('148Hysy1qFgSigmFiPw29X7TveWH7hfsDXhtMtzWS7ZE');

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric"
  };

  let correos = [
    "diana.perez@soandes.co",
    "angie.ruiz@soandes.co"
  ];

  let fechaActual = new Intl.DateTimeFormat("es-ES", options).format(new Date);

  // Define el rango horario durante el cual el formulario estará habilitado (por ejemplo, de 9:00 a 17:00)
  const horaInicio1 = 8;
  const horaFin1 = 12;
  const horaInicio2 = 14;
  const horaFin2 = 17;
  let status;
  let statusInitials = formulario.isAcceptingResponses();

  const dia = fechaActual.split(",");

  const horaActual = parseInt(dia[2].trim());

  if (["lunes", "martes", "miercoles", "jueves"].includes(dia[0].trim())) {
    let greeting;
    if (horaActual >= 0 && horaActual < 12) {
      greeting = "Buenos dias";
    } else if (horaActual >= 12 && horaActual < 18) {
      greeting = "Buenas tardes";
    } else if (horaActual >= 18 && horaActual <= 23) {
      greeting = "Buenas noches";
    }

    if ((horaActual >= horaInicio1 && horaActual < horaFin1) || (horaActual >= horaInicio2 && horaActual < horaFin2)) {
      formulario.setAcceptingResponses(true); // Habilita el formulario
      status = formulario.isAcceptingResponses();
    } else {
      formulario.setAcceptingResponses(false); // Deshabilita el formulario
      status = formulario.isAcceptingResponses();
    }

    // verificamos el estado del formulario se ha cambiado se realiza el envio del correo informativo
    if (status !== statusInitials) {
      let nombres = '';
      correos.forEach(element => {
        let separador = element.split(".")[0].trim();
        (nombres !== "") ? nombres += `${nombres}, ${separador}` : nombres += separador;
      });

      MailApp.sendEmail({
        to: correos,
        subject: `Estado del Formulario ${formulario.getTitle()}`,
        htmlBody: `${greeting}, ${nombres}<br><br>El estado actual del formulario <b>${formulario.getTitle()}</b> es: <span style="background-color: #00008B; padding: 5px; border-radius: 5px; color: white;">${(status === true) ? "Habilitado" : "Deshabilitado"}</span><br><br>Atentamente,<br><br>Equipo Soandes - Google Apps Script`,
      });
    }
  }
}