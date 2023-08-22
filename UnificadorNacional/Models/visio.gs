/**
 * Inserts visio data into a spreadsheet.
 *
 * @param {Object} data - the data to be inserted
 * @param {string} sheetName - the name of the sheet to insert the data into
 * @param {Spreadsheet} spreadsheet - the spreadsheet to insert the data into
 */
function insertVisio(data, sheetName, spreadsheet) {
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
          arrayData[14] = data[iterator];
          break;
        case 'civilStatus':
          arrayData[15] = data[iterator];
          break;
        case 'scholarship':
          arrayData[16] = data[iterator];
          break;
        case 'post':
          arrayData[17] = data[iterator];
          break;
        case 'durationWorking':
          arrayData[18] = data[iterator];
          break;
        case 'iluminacionInade':
          arrayData[20] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'radiacionesUv':
          arrayData[21] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'malaVentilacion':
          arrayData[22] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'gasesToxicos':
          arrayData[23] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasFotofobia':
          arrayData[24] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasOjoRojo':
          arrayData[25] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasLagrimeno':
          arrayData[26] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasVisionBorrosa':
          arrayData[27] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasArdor':
          arrayData[28] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasVisionDoble':
          arrayData[29] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasCansancio':
          arrayData[30] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasMalaVisionCercana':
          arrayData[31] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasDolor':
          arrayData[32] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasMalaVisionLejana':
          arrayData[33] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasSecrecion':
          arrayData[34] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'sintomasCefalea':
          arrayData[35] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'otrosSintomas':
          arrayData[36] = (data[iterator]) ? data[iterator] : "SIN DATO";
          break;
        case 'cabezaParpados':
          arrayData[37] = (data[iterator]) ? data[iterator] : "NORMAL";
          break;
        case 'cabezaParpadosObs':
          arrayData[38] = (data[iterator]) ? data[iterator] : "SIN HALLAZGOS";
          break;
        case 'cabezaConjuntivas':
          arrayData[39] = (data[iterator]) ? data[iterator] : "NORMAL";
          break;
        case 'cabezaConjuntivasObs':
          arrayData[40] = (data[iterator]) ? data[iterator] : "SIN HALLAZGOS";
          break;
        case 'cabezaEscleras':
          arrayData[41] = (data[iterator]) ? data[iterator] : "NORMAL";
          break;
        case 'cabezaEsclerasObs':
          arrayData[42] = (data[iterator]) ? data[iterator] : "SIN HALLAZGOS";
          break;
        case 'cabezaPupillas':
          arrayData[43] = (data[iterator]) ? data[iterator] : "NORMAL";
          break;
        case 'cabezaPupillasObs':
          arrayData[44] = (data[iterator]) ? data[iterator] : "SIN HALLAZGOS";
          break;
        case 'impVlOdNormal':
          arrayData[45] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVlOiNormal':
          arrayData[46] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVpOdNormal':
          arrayData[47] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVpOiNormal':
          arrayData[48] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVlOdDisminuido':
          arrayData[49] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVlOiDisminuido':
          arrayData[50] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVpOdDisminuido':
          arrayData[51] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVpOiDisminuido':
          arrayData[52] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVlOdNormalRx':
          arrayData[53] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVlOiNormalRx':
          arrayData[54] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVpOdNormalRx':
          arrayData[55] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVpOiNormalRx':
          arrayData[56] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVlOdDisminuidoRx':
          arrayData[57] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVlOiDisminuidoRx':
          arrayData[58] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVpOdDisminuidoRx':
          arrayData[59] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impVpOiDisminuidoRx':
          arrayData[60] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'impDiagObs':
          arrayData[62] = (data[iterator]) ? data[iterator] : "NO REFIERE";
          break;
        case 'recCorrecionVisualParaTrabajar':
          arrayData[63] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'recUsoRxParaVisionProx':
          arrayData[64] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'recUsoArVideoTrmina':
          arrayData[65] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'recUsoRxDescanso':
          arrayData[66] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'recUsoLentesProt__Solar':
          arrayData[67] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'recUsoPermanenteRxOptica':
          arrayData[68] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'recUsoEppVisual':
          arrayData[69] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'recPyp':
          arrayData[70] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'recPausasActivas':
          arrayData[71] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'recLubricanteOcular':
          arrayData[72] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'recomendacionesObs':
          arrayData[73] = (data[iterator]) ? data[iterator] : "NO REFIERE";
          break;
        case 'remValoracionOftalm_':
          arrayData[74] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'remValoracionOpto__Completa':
          arrayData[75] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'remTopografiaCornea':
          arrayData[76] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'remTratam__Ortoptica':
          arrayData[77] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'remTestFarnsworth':
          arrayData[78] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'realizarPruebaAmbulatoria':
          arrayData[79] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'otrosRemisiones':
          arrayData[80] = (data[iterator]) ? data[iterator] : "NO REFIERE";
          break;
        case 'controlMensual':
          arrayData[81] = data[iterator];
          break;
        case 'controlesBimestrales':
          arrayData[82] = data[iterator];
          break;
        case 'controlTrimestral':
          arrayData[83] = data[iterator];
          break;
        case 'control6Meses':
          arrayData[84] = data[iterator];
          break;
        case 'control1Ano':
          arrayData[85] = data[iterator];
          break;
        case 'controlConfirmatoria':
          arrayData[86] = data[iterator];
          break;
      }
    }

    /** 
     * Calculates the ageRange, numberWorking and totalImp 
     */
    const age = ageRange(arrayData[9]);
    arrayData[10] = age;
    const working = numberWorking(arrayData[18]);
    arrayData[19] = working;
    const totalImp = diagnosticsImp(arrayData[45],arrayData[46],arrayData[47],arrayData[48],arrayData[49],arrayData[50],arrayData[51],arrayData[52],arrayData[53],arrayData[54],arrayData[55],arrayData[56],arrayData[57],arrayData[58],arrayData[59],arrayData[60]);
    arrayData[61] = totalImp;

    rowRegister.appendRow(arrayData);
    return "ok";
    
  } catch (error) {
    console.log(error.message);
  }
}
