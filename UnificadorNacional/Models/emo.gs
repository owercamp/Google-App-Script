function insertEmo(data, sheetName, spreadsheet) {
  const rowRegister = spreadsheet.getSheetByName(sheetName);
  const arrayData = [];
  let max = 0;

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
          arrayData[22] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosFisicosIluminacion':
          arrayData[23] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosFisicosVibracion':
          arrayData[24] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosFisicosTemperaturaExtremas':
          arrayData[25] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosFisicosPresAtmosferica':
          arrayData[26] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosFisicosRadIonizantes':
          arrayData[27] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosFisicosRadNoIonizantes':
          arrayData[28] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosFisicosOtrosFisicos':
          arrayData[29] = (data[iterator]) ? data[iterator] : "NO REFIERE";
          break;
        case 'riesgosBiologicosVirus':
          arrayData[30] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiologicosBacterias':
          arrayData[31] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiologicosHongos':
          arrayData[32] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiologicosRicketsias':
          arrayData[33] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiologicosParasitos':
          arrayData[34] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiologicosFluidos':
          arrayData[35] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiologicosPicaduras':
          arrayData[36] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiologicosMordeduras':
          arrayData[37] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiologicosOtrosBiologicos':
          arrayData[38] = (data[iterator]) ? data[iterator] : "NO REFEIERE";
          break;
        case 'riesgosQuimicosPolvos':
          arrayData[39] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosQuimicosFibras':
          arrayData[40] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosQuimicosLiquidos':
          arrayData[41] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosQuimicosGases':
          arrayData[42] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosQuimicosVapores':
          arrayData[43] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosQuimicosHumos':
          arrayData[44] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosQuimicosMaterialParticulado':
          arrayData[45] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosQuimicosOtrosQuimicos':
          arrayData[46] = (data[iterator]) ? data[iterator] : "NO REFIERE";
          break;
        case 'riesgosPsicosGestionOrganizacional':
          arrayData[47] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosPsicosCaractDelGrupo':
          arrayData[48] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosPsicosInterfasesTarea':
          arrayData[49] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosPsicosCaractOrganizacion':
          arrayData[50] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosPsicosCondiciones':
          arrayData[51] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosPsicosJornada':
          arrayData[52] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosPsicosOtrosLaboral':
          arrayData[53] = (data[iterator]) ? data[iterator] : "NO REFIERE";
          break;
        case 'riesgosBiomecanicosPostura':
          arrayData[54] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiomecanicosEsfuerzo':
          arrayData[55] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiomecanicosMovRepetitivo':
          arrayData[56] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiomecanicosManipulacionCarga':
          arrayData[57] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'riesgosBiomecanicosOtrosBiomecanicos':
          arrayData[58] = (data[iterator]) ? data[iterator] : "NO REFIERE";
          break;
        case 'condicionesDeSeguridadMecanicos':
          arrayData[59] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'condicionesDeSeguridadElectricos':
          arrayData[60] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'condicionesDeSeguridadLocativo':
          arrayData[61] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'condicionesDeSeguridadTecnologico':
          arrayData[62] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'condicionesDeSeguridadAccDeTransito':
          arrayData[63] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'condicionesDeSeguridadPublicos':
          arrayData[64] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'condicionesDeSeguridadTrabajoEnAlturas':
          arrayData[65] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'condicionesDeSeguridadEspaciosConfinados':
          arrayData[66] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'condicionesDeSeguridadOtrosDeSeguridad':
          arrayData[67] = (data[iterator]) ? data[iterator] : "NO REFIERE";
          break;
        case 'fenomenosNaturalesSismo':
          arrayData[68] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'fenomenosNaturalesTerremoto':
          arrayData[69] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'fenomenosNaturalesVendaval':
          arrayData[70] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'fenomenosNaturalesInundacion':
          arrayData[71] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'fenomenosNaturalesDerrumbe':
          arrayData[72] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'fenomenosNaturalesPrecipitaciones':
          arrayData[73] = (data[iterator]) ? data[iterator] : 0;
          break;
        case 'fenomenosNaturalesOtrosNaturales':
          arrayData[74] = (data[iterator]) ? data[iterator] : "NO REFIERE";
          break;
        case 'fechaAccidente':
          arrayData[75] = data[iterator];
          break;
        case 'accidentePasoEmpresa':
          arrayData[76] = data[iterator];
          break;
        case 'tipoAccidente':
          arrayData[77] = data[iterator];
          break;
        case 'naturalezaLesion':
          arrayData[78] = data[iterator];
          break;
        case 'parteAfectada':
          arrayData[79] = data[iterator];
          break;
        case 'incapacidad':
          arrayData[80] = data[iterator];
          break;
        case 'secuelas':
          arrayData[81] = data[iterator];
          break;
        case 'nombreEnfermedad':
          arrayData[82] = data[iterator];
          break;
        case 'etapa':
          arrayData[83] = data[iterator];
          break;
        case 'observacionesEnfermedad':
          arrayData[84] = data[iterator];
          break;
        case 'actFisica':
          arrayData[85] = data[iterator];
          break;
        case 'fuma':
          arrayData[86] = data[iterator];
          break;
        case 'consumoAlcohol':
          arrayData[87] = data[iterator];
          break;
        case 'peso':
          arrayData[88] = data[iterator];
          break;
        case 'talla':
          arrayData[89] = data[iterator];
          break;
        case 'tensionArterial':
          arrayData[92] = data[iterator];
          break;
        case 'frecCardiaca':
          arrayData[93] = data[iterator];
          break;
        case 'frecRespiratoria':
          arrayData[94] = data[iterator];
          break;
        case 'perimetroAbdominal':
          arrayData[95] = data[iterator];
          break;
        case 'lateralidad':
          arrayData[96] = data[iterator];
          break;
        case 'diag':
          const diags = data[iterator];
          let arrayDataCod = 97, arrayDataDiag = 98;
          const cods = Object.keys(diags).filter(cod => cod.includes("CODIGO"));
          const diagnostics = Object.keys(diags).filter(diag => !diag.includes("CODIGO"));
          
          /** Creates the array for the cods **/
          max = 10;
          for (const cod of cods.sort()) {
            if (max <= 10 && max >= 1) {
              arrayData[arrayDataCod] = (diags[cod]) ? diags[cod] : 0;
              arrayDataCod += 2;
              max--;
            }
          }
          
          /** Creates the array for the diagnostics **/
          max = 10;
          for (const diag of diagnostics.sort()) {
            if (max <= 10 && max >= 1) {
              arrayData[arrayDataDiag] = (diags[diag]) ? diags[diag] : 0;
              arrayDataDiag += 2;
              max--;
            }
          }
          break;
        case 'observacionesDiags':
          arrayData[117] = data[iterator];
          break;
        case 'conceptoDeEvaluacion':
          arrayData[118] = data[iterator];
          break;
        case 'observacionesConcepto':
          arrayData[119] = data[iterator];
          break;
        case 'emphasis':
          const emphas = data[iterator];
          let arrayDataEmp = 120, arrayDataEmpConcept = 121, arrayDataEmpObs = 122;
          arrayData.fill('NO APLICA', arrayDataEmp, 147);
          const emps = Object.keys(emphas).filter(emp => (!emp.includes("CONCEPTO") && !emp.includes("OBSERVACIONES")));
          const concepts = Object.keys(emphas).filter(concept => concept.includes("CONCEPTO"));
          const observations = Object.keys(emphas).filter(obs => obs.includes("OBSERVACIONES"));

          /** Creates the array for the emphasis **/
          max = 9;
          for (const emp of emps.sort()) {
            if (max <= 9 && max >= 1) {
              if (max === 9) {
                arrayData[arrayDataEmp] = "OSTEOMUSCULAR";
              } else {
                arrayData[arrayDataEmp] = (emphas[emp] !== "") ? emphas[emp] : "NO APLICA";
              }
              arrayDataEmp += 3;
              max--;
            }
          }

          /** Creates the array for the concepts emphasis **/
          max = 9;
          for (const con of concepts.sort()) {
            if (max <= 9 && max >= 1) {
              if (max === 9) {
                arrayData[arrayDataEmpConcept] = "REALIZADO";
              } else {
                arrayData[arrayDataEmpConcept] = (emphas[con] !== "") ? emphas[con] : "NO APLICA";
              }
              arrayDataEmpConcept += 3;
              max--;
            }
          }

          /** Creates the array for the observations emphasis **/
          max = 9;
          for (const obs of observations.sort()) {
            if (max <= 9 && max >= 1) {
              if (max === 9) {
                arrayData[arrayDataEmpObs] = "NO REFIERE";
              } else {
                arrayData[arrayDataEmpObs] = (emphas[obs] !== "") ? emphas[obs] : "NO APLICA";
              }
              arrayDataEmpObs += 3;
              max--;
            }
          }

          
          break;
        case 'recomendacionesEspecificas':
          arrayData[147] = data[iterator];
          break;
      }
    }

    /** Calculates the IMC, N Children, ageRange and durationWorking **/
    const age = ageRange(arrayData[9]);
    arrayData[10] = age;
    const childrens = numberChildrens(arrayData[13]);
    arrayData[14] = childrens;
    const working = numberWorking(arrayData[20]);
    arrayData[21] = working;
    const imc = imc2(arrayData[88], arrayData[89]);
    arrayData[90] = imc[0].toFixed(2);
    arrayData[91] = imc[1];

    rowRegister.appendRow(arrayData)
    return 'ok';
  } catch (error) {
    Logger.log(error.message);
  }
}