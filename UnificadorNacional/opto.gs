function insertOpto(data, sheetName, spreadsheet) {
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
        case 'visioAntLaboralIluminacionInadecuada':
          arrayData[20] = data[iterator];
          break;
        case 'visioAntLaboralUsuarioComputador':
          arrayData[21] = data[iterator];
          break;
        case 'visioAntLaboralVisioRadiacionesUv':
          arrayData[22] = data[iterator];
          break;
        case 'visioAntLaboralCambiosTemperatura':
          arrayData[23] = data[iterator];
          break;
        case 'visioAntLaboralMalaventilacion':
          arrayData[24] = data[iterator];
          break;
        case 'visioAntLaboralGasesToxicos':
          arrayData[25] = data[iterator];
          break;
        case 'sintomasFotofobia':
          arrayData[26] = data[iterator];
          break;
        case 'sintomasOjoRojo':
          arrayData[27] = data[iterator];
          break;
        case 'sintomasLagrimeo':
          arrayData[28] = data[iterator];
          break;
        case 'sintomasVisionBorrosa':
          arrayData[29] = data[iterator];
          break;
        case 'sintomasArdor':
          arrayData[30] = data[iterator];
          break;
        case 'sintomasVisionDoble':
          arrayData[31] = data[iterator];
          break;
        case 'sintomasCansancio':
          arrayData[32] = data[iterator];
          break;
        case 'sintomasMalavisionCercana':
          arrayData[33] = data[iterator];
          break;
        case 'sintomasDolor':
          arrayData[34] = data[iterator];
          break;
        case 'sintomasMalavisionLejana':
          arrayData[35] = data[iterator];
          break;
        case 'sintomasSecrecion':
          arrayData[36] = data[iterator];
          break;
        case 'sintomasCefalea':
          arrayData[37] = data[iterator];
          break;
        case 'otrosSintomas':
          arrayData[38] = data[iterator];
          break;
        case 'cabezaParpados':
          arrayData[39] = data[iterator];
          break;
        case 'cabezaParpadosObs':
          arrayData[40] = data[iterator];
          break;
        case 'cabezaConjuntivas':
          arrayData[41] = data[iterator];
          break;
        case 'cabezaConjuntivasObs':
          arrayData[42] = data[iterator];
          break;
        case 'cabezaEscleras':
          arrayData[43] = data[iterator];
          break;
        case 'cabezaEsclerasObs':
          arrayData[44] = data[iterator];
          break;
        case 'cabezaPupillas':
          arrayData[45] = data[iterator];
          break;
        case 'cabezaPupillasObs':
          arrayData[46] = data[iterator];
          break;
        case 'motOculCovertTestLejos':
          arrayData[47] = data[iterator];
          break;
        case 'motOculCovertTestCerca':
          arrayData[48] = data[iterator];
          break;
        case 'estadoDeCorreccion':
          arrayData[49] = data[iterator];
          break;
        case 'patologiaOcular':
          arrayData[50] = data[iterator];
          break;
        case 'diagPpal':
          arrayData[51] = data[iterator];
          break;
        case 'diagObs':
          arrayData[52] = data[iterator];
          break;
        case 'diagRel1':
          arrayData[53] = data[iterator];
          break;
        case 'diagRel2':
          arrayData[54] = data[iterator];
          break;
        case 'diagRel3':
          arrayData[55] = data[iterator];
          break;
        case 'recCorreccionVisualParaTrabajar':
          arrayData[56] = data[iterator];
          break;
        case 'recUsoArVideoTerminal':
          arrayData[57] = data[iterator];
          break;
        case 'recUsoDeLentesDeProteccionSolar':
          arrayData[58] = data[iterator];
          break;
        case 'recUsoEppVisual':
          arrayData[59] = data[iterator];
          break;
        case 'recPausasActivas':
          arrayData[60] = data[iterator];
          break;
        case 'recUsoRxVisionProxima':
          arrayData[61] = data[iterator];
          break;
        case 'recUsoRxDescanso':
          arrayData[62] = data[iterator];
          break;
        case 'recUsoPermanenteRxOptica':
          arrayData[63] = data[iterator];
          break;
        case 'recPyp':
          arrayData[64] = data[iterator];
          break;
        case 'recLubricanteOcular':
          arrayData[65] = data[iterator];
          break;
        case 'recomendacionesObs':
          arrayData[66] = data[iterator];
          break;
        case 'remValoracionOftalm':
          arrayData[67] = data[iterator];
          break;
        case 'remTopografiaCornea':
          arrayData[68] = data[iterator];
          break;
        case 'remTratamientoOrtop':
          arrayData[69] = data[iterator];
          break;
        case 'remTestFarnsworth':
          arrayData[70] = data[iterator];
          break;
        case 'realizarPruebaAmbulatoria':
          arrayData[71] = data[iterator];
          break;
        case 'remisionesObs':
          arrayData[72] = data[iterator];
          break;
        case 'controlesMensual':
          arrayData[73] = data[iterator];
          break;
        case 'controlesBimestrales':
          arrayData[74] = data[iterator];
          break;
        case 'controlesTrimestrales':
          arrayData[75] = data[iterator];
          break;
        case 'controles6Meses':
          arrayData[76] = data[iterator];
          break;
        case 'controles1Anio':
          arrayData[77] = data[iterator];
          break;
        case 'controlesConfirmatoria':
          arrayData[78] = data[iterator];
          break;
      }
    }

    /** Calculates the ageRange and numberWorking **/
    const age = ageRange(arrayData[9]);
    arrayData[10] = age;
    const working = numberWorking(arrayData[18]);
    arrayData[19] = working;

    rowRegister.appendRow(arrayData);
  } catch (error) {
    Logger.log(error.message);
  }
}