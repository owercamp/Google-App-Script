/**
 * Inserts a new register in the "Registro" sheet of the active spreadsheet,
 * only if the active cell is in column 3 and the active sheet is "Registro".
 *
 * @return {void} This function does not return anything.
 */
function insertRegister() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sh = spreadsheet.getActiveSheet().getName();
  const column = spreadsheet.getActiveSheet().getActiveCell().getColumn();

  if (column == 3 && sh == "Registro") {
    const fecha = new Date();
    const opcionesFecha = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    const opcionesHora = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const fechacorta = {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }

    const fechaFormateada = new Intl.DateTimeFormat('es-ES', opcionesFecha).format(fecha);
    const horaFormateada = new Intl.DateTimeFormat('es-ES', opcionesHora).format(fecha);
    const cortaFormateada = new Intl.DateTimeFormat('es-ES', fechacorta).format(fecha);
    spreadsheet.getActiveSheet().getActiveCell().offset(0, -2).setValue(`${fechaFormateada} ${horaFormateada}`)
    spreadsheet.getActiveSheet().getActiveCell().offset(0, -1).setValue(cortaFormateada)
  }
}
