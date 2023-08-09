
/**
 * Retrieves the content to be displayed when the web app is accessed.
 *
 * @return {HtmlOutput} The HTML content to be displayed.
 */
function doGet() {
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

function insertData(data) {
  const spreadsheet = SpreadsheetApp.openById("1rgYxBiE-4rWifkEWNx7er6aG-yKN9cx3hum15TWzePI");

  try {
    const information = data;
    const keys = Object.keys(information);
    for (const iterator of keys) {
      switch (iterator) {
        case "emo":
          for (const emo of information[iterator]) {
            insertEmo(emo, "EMO", spreadsheet);
            return emo;
          }
          break;
      }
    }
    return keys;
  } catch (error) {
    return error.message;
  }
}

function insertEmo(data, sheetName, spreadsheet) {
  const rowRegister = spreadsheet.getSheetByName(sheetName);
  const arrayData = [];

  try {
    for (const iterator of Object.keys(data)) {

      switch (iterator) {
        case 'contractedName':
          arrayData[0] = data[iterator];
          break;
        case 'origin':
          arrayData[1] = data[iterator];
          break;
        case 'destiny':
          arrayData[2] = data[iterator];
          break;
        case 'city':
          arrayData[3] = data[iterator];
          break;
        case 'income':
          arrayData[4] = data[iterator];
          break;
        case 'examType':
          arrayData[5] = data[iterator];
          break;
        case 'date':
          arrayData[6] = data[iterator];
          break;
        case 'patient':
          arrayData[7] = data[iterator];
          break;
        case 'numberIdentification':
          arrayData[8] = data[iterator];
          break;
        case 'age':
          arrayData[9] = data[iterator];
          break;
        case 'stratum':
          arrayData[11] = data[iterator];
          break;
        case 'gender':
          arrayData[12] = data[iterator];
          break;
        case 'numberOfChildren':
          arrayData[13] = data[iterator];
          break;
        case 'race':
          arrayData[15] = data[iterator];
          break;
        case 'civilStatus':
          arrayData[16] = data[iterator];
          break;
        case 'scholarship':
          arrayData[17] = data[iterator];
          break;
        case 'post':
          arrayData[18] = data[iterator];
          break;
        case 'durationWorking':
          arrayData[20] = data[iterator];
          break;
        case 'riesgosFisicosRuido':
          arrayData[22] = data[iterator];
          break;
        case 'riesgosFisicosIluminacion':
          arrayData[23] = data[iterator];
          break;
        case 'riesgosFisicosVibracion':
          arrayData[24] = data[iterator];
          break;
        case 'riesgosFisicosTemperaturaExtremas':
          arrayData[25] = data[iterator];
          break;
        case 'riesgosFisicosPresAtmosferica':
          arrayData[26] = data[iterator];
          break;
        case 'riesgosFisicosRadIonizantes':
          arrayData[27] = data[iterator];
          break;
        case 'riesgosFisicosRadNoIonizantes':
          arrayData[28] = data[iterator];
          break;
        case 'riesgosFisicosOtrosFisicos':
          arrayData[29] = data[iterator];
          break;
        case 'riesgosBiologicosVirus':
          arrayData[30] = data[iterator];
          break;
        case 'riesgosBiologicosBacterias':
          arrayData[31] = data[iterator];
          break;
        case 'riesgosBiologicosHongos':
          arrayData[32] = data[iterator];
          break;
        case 'riesgosBiologicosRicketsias':
          arrayData[33] = data[iterator];
          break;
        case 'riesgosBiologicosParasitos':
          arrayData[34] = data[iterator];
          break;
        case 'riesgosBiologicosFluidos':
          arrayData[35] = data[iterator];
          break;
        case 'riesgosBiologicosPicaduras':
          arrayData[36] = data[iterator];
          break;
        case 'riesgosBiologicosMordeduras':
          arrayData[37] = data[iterator];
          break;
        case 'riesgosBiologicosOtrosBiologicos':
          arrayData[38] = data[iterator];
          break;
        case 'riesgosQuimicosPolvos':
          arrayData[39] = data[iterator];
          break;
        case 'riesgosQuimicosFibras':
          arrayData[40] = data[iterator];
          break;
        case 'riesgosQuimicosLiquidos':
          arrayData[41] = data[iterator];
          break;
        case 'riesgosQuimicosGases':
          arrayData[42] = data[iterator];
          break;
        case 'riesgosQuimicosVapores':
          arrayData[43] = data[iterator];
          break;
        case 'riesgosQuimicosHumos':
          arrayData[44] = data[iterator];
          break;
        case 'riesgosQuimicosMaterialParticulado':
          arrayData[45] = data[iterator];
          break;
        case 'riesgosQuimicosOtrosQuimicos':
          arrayData[46] = data[iterator];
          break;
        case 'riesgosPsicosGestionOrganizacional':
          arrayData[47] = data[iterator];
          break;
        case 'riesgosPsicosCaractDelGrupo':
          arrayData[48] = data[iterator];
          break;
        case 'riesgosPsicosInterfasesTarea':
          arrayData[49] = data[iterator];
          break;
        case 'riesgosPsicosCaractOrganizacion':
          arrayData[50] = data[iterator];
          break;
        case 'riesgosPsicosCondiciones':
          arrayData[51] = data[iterator];
          break;
        case 'riesgosPsicosJornada':
          arrayData[52] = data[iterator];
          break;
        case 'riesgosPsicosOtrosLaboral':
          arrayData[53] = data[iterator];
          break;





      }
    }
    Logger.log(arrayData);
  } catch (error) {
    return error.message;
  }
}
