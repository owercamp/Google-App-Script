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
        case 'riesgosBiomecanicosPostura':
          arrayData[54] = data[iterator];
          break;
        case 'riesgosBiomecanicosEsfuerzo':
          arrayData[55] = data[iterator];
          break;
        case 'riesgosBiomecanicosMovRepetitivo':
          arrayData[56] = data[iterator];
          break;
        case 'riesgosBiomecanicosManipulacionCarga':
          arrayData[57] = data[iterator];
          break;
        case 'riesgosBiomecanicosOtrosBiomecanicos':
          arrayData[58] = data[iterator];
          break;
        case 'condicionesDeSeguridadMecanicos':
          arrayData[59] = data[iterator];
          break;
        case 'condicionesDeSeguridadElectricos':
          arrayData[60] = data[iterator];
          break;
        case 'condicionesDeSeguridadLocativo':
          arrayData[61] = data[iterator];
          break;
        case 'condicionesDeSeguridadTecnologico':
          arrayData[62] = data[iterator];
          break;
        case 'condicionesDeSeguridadAccDeTransito':
          arrayData[63] = data[iterator];
          break;
        case 'condicionesDeSeguridadPublicos':
          arrayData[64] = data[iterator];
          break;
        case 'condicionesDeSeguridadTrabajoEnAlturas':
          arrayData[65] = data[iterator];
          break;
        case 'condicionesDeSeguridadEspaciosConfinados':
          arrayData[66] = data[iterator];
          break;
        case 'condicionesDeSeguridadOtrosDeSeguridad':
          arrayData[67] = data[iterator];
          break;
        case 'fenomenosNaturalesSismo':
          arrayData[68] = data[iterator];
          break;
        case 'fenomenosNaturalesTerremoto':
          arrayData[69] = data[iterator];
          break;
        case 'fenomenosNaturalesVendaval':
          arrayData[70] = data[iterator];
          break;
        case 'fenomenosNaturalesInundacion':
          arrayData[71] = data[iterator];
          break;
        case 'fenomenosNaturalesDerrumbe':
          arrayData[72] = data[iterator];
          break;
        case 'fenomenosNaturalesPrecipitaciones':
          arrayData[73] = data[iterator];
          break;
        case 'fenomenosNaturalesOtrosNaturales':
          arrayData[74] = data[iterator];
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

/**
 * Determines the age range based on the given age.
 *
 * @param {number} age - The age to determine the age range for.
 * @return {string} The age range corresponding to the given age.
 */
function ageRange(age) {
  if (age <= 19) {
    return '0 MENOR O IGUAL A 19 AÑOS';
  } else if (age >= 20 && age <= 29) {
    return '1 DE 20 A 29 AÑOS';
  } else if (age >= 30 && age <= 39) {
    return '2 DE 30 A 39 AÑOS';
  } else if (age >= 40 && age <= 49) {
    return '3 DE 40 A 49 AÑOS';
  } else if (age >= 50 && age <= 59) {
    return '4 DE 50 A 59 AÑOS';
  } else if (age >= 60 && age <= 91) {
    return '60 O MAS AÑOS';
  } else if (age >= 91) {
    return 'VALOR NO VALIDO';
  }
}

/**
 * Returns the number of children based on the input.
 *
 * @param {number|string} childrens - The number of children or "SIN DATO" or "SIN DATOS".
 * @return {string} The number of children or a string indicating the number of children.
 */
function numberChildrens(childrens) {
  if (!childrens) {
    return 'SIN DATO';
  } else if (childrens >= 3) {
    return `3 O MAS HIJOS`;
  } else if (childrens == 'SIN DATO' || childrens == 'SIN DATOS') {
    return 'SIN DATO';
  } else {
    return `${childrens} HIJO`;
  }
}

/**
 * Determines the working status based on the given number.
 *
 * @param {number} number - The number to determine the working status.
 * @return {string} The working status based on the given number.
 */
function numberWorking(number) {
  if (!number) {
    return 'SIN DATO';
  } else if (number < 1) {
    return '1 MENOS DE 1 AÑO';
  } else if (number >= 1 && number <= 5) {
    return '2 DE 1 A 5 AÑOS';
  } else if (number >= 6 && number <= 10) {
    return '3 DE 6 A 10 AÑOS';
  } else if (number >= 11 && number <= 15) {
    return '4 DE 11 A 15 AÑOS';
  } else if (number >= 16) {
    return 'MAS DE 16 AÑOS';
  }else if(number == 'SIN DATO' || number == 'SIN DATOS') {
    return 'SIN DATO';
  }
}

/**
 * Calculate the Body Mass Index (IMC) given the weight and size.
 *
 * @param {number} weight - The weight of the person.
 * @param {number} size - The size of the person.
 * @return {array} An array containing the calculated IMC and its corresponding category.
 * The IMC value is at index 0 and the category is at index 1.
 */
function imc2(weight, size) {
  const dataIMC = [];
  if (!weight || !size) {
    return '';
  } else {
    dataIMC[0] = weight / Math.pow(size, 2);

    if (dataIMC[0] < 18.5) {
      dataIMC[1] = '1 PESO BAJO';
    } else if (dataIMC[0] >= 18.5 && dataIMC[0] < 25) {
      dataIMC[1] = '2 NORMAL';
    } else if (dataIMC[0] >= 25 && dataIMC[0] < 30) {
      dataIMC[1] = '3 SOBREPESO';
    } else if (dataIMC[0] >= 30 && dataIMC[0] < 35) {
      dataIMC[1] = '4 OBESIDAD GRADO I';
    } else if (dataIMC[0] >= 35 && dataIMC[0] < 40) {
      dataIMC[1] = '5 OBESIDAD GRADO II';
    } else if (dataIMC[0] >= 40 && dataIMC[0] < 50) {
      dataIMC[1] = '6 OBESIDAD GRADO III';
    } else {
      dataIMC[1] = 'CAMPO SIN VALOR';
    }

    return dataIMC;
  }
}
