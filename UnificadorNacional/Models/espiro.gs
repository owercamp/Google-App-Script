function insertEspiro(data, sheetName, spreadsheet) {
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
        case 'alegias':
          arrayData[20] = data[iterator];
          break;
        case 'alergiasObs':
          arrayData[21] = data[iterator];
          break;
        case 'tuberculosis':
          arrayData[22] = data[iterator];
          break;
        case 'tosCronica':
          arrayData[23] = data[iterator];
          break;
        case 'gripasFrecuentes':
          arrayData[24] = data[iterator];
          break;
        case 'faringitis':
          arrayData[25] = data[iterator];
          break;
        case 'faringoamigdalitis':
          arrayData[26] = data[iterator];
          break;
        case 'rinitis':
          arrayData[27] = data[iterator];
          break;
        case 'sinusitis':
          arrayData[28] = data[iterator];
          break;
        case 'cxTorax':
          arrayData[29] = data[iterator];
          break;
        case 'cxToraxObs':
          arrayData[30] = data[iterator];
          break;
        case 'asmaBronquial':
          arrayData[31] = data[iterator];
          break;
        case 'bronquitis':
          arrayData[32] = data[iterator];
          break;
        case 'neumonia':
          arrayData[33] = data[iterator];
          break;
        case 'trumaCostal':
          arrayData[34] = data[iterator];
          break;
        case 'cancer':
          arrayData[35] = data[iterator];
          break;
        case 'cancerObs':
          arrayData[36] = data[iterator];
          break;
        case 'otrosRespiratorios':
          arrayData[37] = data[iterator];
          break;
        case 'riesgoQuimicoPolvos':
          arrayData[38] = data[iterator];
          break;
        case 'riesgoQuimicoFibras':
          arrayData[39] = data[iterator];
          break;
        case 'riesgoQuimicoLiquidos':
          arrayData[40] = data[iterator];
          break;
        case 'riesgoQuimicoGases':
          arrayData[41] = data[iterator];
          break;
        case 'riesgoQuimicoVapos':
          arrayData[42] = data[iterator];
          break;
        case 'riesgoQuimicoHumos':
          arrayData[43] = data[iterator];
          break;
        case 'riesgoQuimicoMaterialParticulado':
          arrayData[44] = data[iterator];
          break;
        case 'otrosRiesgosQuimicos':
          arrayData[45] = data[iterator];
          break;
        case 'eppEspecificoTapaboca':
          arrayData[46] = data[iterator];
          break;
        case 'eppEspecificoRespirador':
          arrayData[47] = data[iterator];
          break;
        case 'actFisica':
          arrayData[48] = data[iterator];
          break;
        case 'fuma':
          arrayData[49] = data[iterator];
          break;
        case 'cigarrillosDia':
          arrayData[50] = data[iterator];
          break;
        case 'frecuencia':
          arrayData[51] = data[iterator];
          break;
        case 'tiempoEnAnios':
          arrayData[52] = data[iterator];
          break;
        case 'interpretacion':
          arrayData[53] = data[iterator];
          break;
        case 'peso':
          arrayData[54] = data[iterator];
          break;
        case 'talla':
          arrayData[55] = data[iterator];
          break;
        case 'fvcPredDiag':
          arrayData[58] = data[iterator];
          break;
        case 'fvcTeorDiag':
          arrayData[59] = data[iterator];
          break;
        case 'fev1PredDiag':
          arrayData[60] = data[iterator];
          break;
        case 'fev1TeorDiag':
          arrayData[61] = data[iterator];
          break;
        case 'fev1FvcPredDiag':
          arrayData[62] = data[iterator];
          break;
        case 'fev1FvcTeorDiag':
          arrayData[63] = data[iterator];
          break;
        case 'pefPredDiag':
          arrayData[64] = data[iterator];
          break;
        case 'pefTeorDiag':
          arrayData[65] = data[iterator];
          break;
        case 'fef2575PredDiag':
          arrayData[66] = data[iterator];
          break;
        case 'fef2575TeorDiag':
          arrayData[67] = data[iterator];
          break;
        case 'diagPpal':
          arrayData[68] = data[iterator];
          break;
        case 'diagObs':
          arrayData[69] = data[iterator];
          break;
        case 'diagRel1':
          arrayData[70] = data[iterator];
          break;
        case 'diagRel2':
          arrayData[71] = data[iterator];
          break;
        case 'diagRel3':
          arrayData[72] = data[iterator];
          break;
        case 'tipoInterpretacion':
          arrayData[73] = data[iterator];
          break;
        case 'tipoGrado':
          arrayData[74] = data[iterator];
          break;
        case 'resultadoEspiroMetria':
          arrayData[75] = data[iterator];
          break;
        case 'recGralesDejarDeFumar':
          arrayData[76] = data[iterator];
          break;
        case 'recGralesContinuarControlesEps':
          arrayData[77] = data[iterator];
          break;
        case 'recGralesBajarDePeso':
          arrayData[78] = data[iterator];
          break;
        case 'recGralesTomarRayosXTorax':
          arrayData[79] = data[iterator];
          break;
        case 'recGralesRealizarEjerc3XSemana':
          arrayData[80] = data[iterator];
          break;
        case 'recGralesValoracEPSXNeumologia':
          arrayData[81] = data[iterator];
          break;
        case 'recLabUtilizarEpr':
          arrayData[82] = data[iterator];
          break;
        case 'recLabIngresarSve':
          arrayData[83] = data[iterator];
          break;
        case 'controlesMensual':
          arrayData[84] = data[iterator];
          break;
        case 'controlesBimestrales':
          arrayData[85] = data[iterator];
          break;
        case 'controlesTrimestral':
          arrayData[86] = data[iterator];
          break;
        case 'controlesSemestral':
          arrayData[87] = data[iterator];
          break;
        case 'controlesAnual':
          arrayData[88] = data[iterator];
          break;
        case 'controlesConfirmatoria':
          arrayData[89] = data[iterator];
          break;
        case 'tecnicaAceptable':
          arrayData[90] = data[iterator];
          break;
      }
    }

    const age = ageRange(arrayData[9]);
    arrayData[10] = age;
    const working = numberWorking(arrayData[18]);
    arrayData[19] = working;

    const imc = imc2(arrayData[54], arrayData[55]);
    arrayData[56] = imc[0].toFixed(2);
    arrayData[57] = imc[1];

    rowRegister.appendRow(arrayData);
    return "ok";

  } catch (error) {
    Logger.log(error.message);
  }
}