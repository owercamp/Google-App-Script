/**
 * Inserts a new register in the "Registro" sheet of the active spreadsheet,
 * only if the active cell is in column 3 and the active sheet is "Registro".
 *
 * @return {void} This function does not return anything.
 */
function insertRegister() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getActiveSheet();
  const column = sh.getActiveCell().getColumn();
  const date = new Date();
  
  if (column === 3 && sh.getName() === "Registro") {
    const formattedDate = date.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'});
    const formattedHour = date.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    const formattedShort = date.toLocaleDateString('es-ES', {day: '2-digit', month: 'short', year: 'numeric'});
    
    sh.getActiveCell().offset(0, -2).setValue(`${formattedDate} ${formattedHour}`);
    sh.getActiveCell().offset(0, -1).setValue(formattedShort);
  }
}
