/**
 * Calculates the cardiovascular risk of a patient based on their age, cholesterol, HDL, blood pressure, smoking status, diabetes status, and sex.
 * @param {number} age The number to int.
 * @param {number} cholesterol The number to int.
 * @param {number} hdl The number to int.
 * @param {number} bloodPressure The text to string.
 * @param {number} smoking The text to string.
 * @param {number} diabetes The text to string.
 * @param {number} sex The text to string.
 * @return the percentage of suffering cardiovascular risk in 10 years.
 * @customfunction
*/
function FRAMINGHAM(age, cholesterol, hdl, bloodPressure, smoking, diabetes, sex) {

  if (age === "" && cholesterol === "" && hdl === "" && bloodPressure === "" && smoking === "" && diabetes === "" && sex === "") {
    return "";
  }
  if (["", "#N/A"].includes(age)) {
    return `El valor ${age} para la edad no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(cholesterol)) {
    return `El valor ${cholesterol} para el colesterol no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(hdl)) {
    return `El valor ${hdl} para el HDL no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(bloodPressure)) {
    return `El valor ${bloodPressure} para la tensión arterial no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(smoking)) {
    return `El valor ${smoking} para fumar no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(diabetes)) {
    return `El valor ${diabetes} para la diabetes no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(sex)) {
    return `El valor ${sex} para el sexo no esta permitido y es requeridos!`;
  }

  const tmpSystolic = parseInt(bloodPressure.toString().split("/")[0]);
  const tmpDiastolic = parseInt(bloodPressure.toString().split("/")[1]);
  const pointSmoking = parseInt(validatedSmoking(smoking));

  if (["MASCULINO", "HOMBRE"].includes(sex.toString().toUpperCase())) {
    try {
      const pointAge = parseInt(validatedAge("MASCULINO", age));
      const pointDiabetes = parseInt(validatedDiabetes("MASCULINO", diabetes));
      const pointCholesterol = parseInt(validatedCholesterol("MASCULINO", cholesterol));
      const pointHDL = parseInt(validatedHDL("MASCULINO", hdl));
      const pointBloodPressure = parseInt(validatedBloodPressure("MASCULINO", tmpSystolic, tmpDiastolic));
      const response = validatedFramingham("MASCULINO", pointAge, pointDiabetes, pointCholesterol, pointHDL, pointBloodPressure, pointSmoking);

      return `Riesgo de EVC(10 Años) - ${response}`;
    } catch (error) {
      return error.message;
    }
  } else if (["FEMENINO", "MUJER"].includes(sex.toString().toUpperCase())) {
    try {
      const pointAge = parseInt(validatedAge("FEMENINO", age));
      const pointDiabetes = parseInt(validatedDiabetes("FEMENINO", diabetes));
      const pointCholesterol = parseInt(validatedCholesterol("FEMENINO", cholesterol));
      const pointHDL = parseInt(validatedHDL("FEMENINO", hdl));
      const pointBloodPressure = parseInt(validatedBloodPressure("FEMENINO", tmpSystolic, tmpDiastolic));

      const response = validatedFramingham("FEMENINO", pointAge, pointDiabetes, pointCholesterol, pointHDL, pointBloodPressure, pointSmoking);
      return `Riesgo de EVC(10 Años) - ${response}`;
    } catch (error) {
      return error.message;
    }
  } else {
    return "El sexo ingresado no corresponde a los requeridos \"MASCULINO | HOMBRE\" o \"FEMENINO | MUJER\"";
  }
}

/**
 * Validates the age based on sex and returns a value.
 *
 * @param {string} sex - The sex of the person.
 * @param {number|string} age - The age of the person.
 * @return {number|string} The value based on the age and sex.
 */
function validatedAge(sex, age) {
  const ageOfValidated = parseInt(age);
  switch (sex) {
    case "MASCULINO":
      switch (true) {
        case (ageOfValidated <= 34):
          return -1;
          break;
        case (ageOfValidated >= 35 && ageOfValidated <= 39):
          return 0;
          break;
        case (ageOfValidated >= 40 && ageOfValidated <= 44):
          return 1;
          break;
        case (ageOfValidated >= 45 && ageOfValidated <= 49):
          return 2;
          break;
        case (ageOfValidated >= 50 && ageOfValidated <= 54):
          return 3;
          break;
        case (ageOfValidated >= 55 && ageOfValidated <= 59):
          return 4;
          break;
        case (ageOfValidated >= 60 && ageOfValidated <= 64):
          return 5;
          break;
        case (ageOfValidated >= 65 && ageOfValidated <= 69):
          return 6;
          break;
        case (ageOfValidated >= 70 && ageOfValidated <= 74):
          return 7;
          break;
        default:
          return "Valor fuera de los rangos permitidos";
      }
      break;
    case "FEMENINO":
      switch (true) {
        case (ageOfValidated < 30):
          return -1;
          break;
        case (ageOfValidated >= 30 && ageOfValidated <= 34):
          return -9;
          break;
        case (ageOfValidated >= 35 && ageOfValidated <= 39):
          return -4;
          break;
        case (ageOfValidated >= 40 && ageOfValidated <= 44):
          return 0;
          break;
        case (ageOfValidated >= 45 && ageOfValidated <= 49):
          return 3;
          break;
        case (ageOfValidated >= 50 && ageOfValidated <= 54):
          return 6;
          break;
        case (ageOfValidated >= 55 && ageOfValidated <= 59):
          return 7;
          break;
        case (ageOfValidated >= 60 && ageOfValidated <= 74):
          return 8;
          break;
        default:
          return "Valor fuera de los rangos permitidos";
      }
      break;
  }
}

/**
 * A function that validates diabetes based on sex.
 *
 * @param {string} sex - The sex of the person.
 * @param {string|number} diabetes - The diabetes status of the person.
 * @return {number} The validated diabetes value.
 */
function validatedDiabetes(sex, diabetes) {
  switch (sex) {
    case "MASCULINO":
      switch (true) {
        case (diabetes == "SI" || diabetes == 1):
          return 2;
          break;
        default:
          return 0;
          break;
      }
      break;
    case "FEMENINO":
      switch (true) {
        case (diabetes == "SI" || diabetes == 1):
          return 4;
          break;
        default:
          return 0;
          break;
      }
      break;
  }
}

/**
 * Validates the smoking input and returns a corresponding value.
 *
 * @param {string|number} smoking - The smoking input to be validated.
 * @return {number} The validated value for the smoking input.
 */
function validatedSmoking(smoking) {
  switch (true) {
    case (smoking == "SI" || smoking == 1 || smoking == "FUMA"):
      return 2;
      break;
    default:
      return 0;
      break;
  }
}

/**
 * Calculates the cholesterol level based on the sex and cholesterol value.
 *
 * @param {string} sex - The sex of the person. Can be "MASCULINO" or "FEMENINO".
 * @param {number} cholesterol - The cholesterol value.
 * @return {number} The calculated cholesterol level.
 */
function validatedCholesterol(sex, cholesterol) {
  switch (sex) {
    case "MASCULINO":
      switch (true) {
        case (cholesterol < 160):
          return -3;
          break;
        case (cholesterol >= 160 && cholesterol <= 199):
          return 0;
          break;
        case (cholesterol >= 200 && cholesterol <= 239):
          return 1;
          break;
        case (cholesterol >= 240 && cholesterol <= 279):
          return 2;
          break;
        case (cholesterol >= 280):
          return 3;
          break;
      }
      break;
    case "FEMENINO":
      switch (true) {
        case (cholesterol < 160):
          return -2;
          break;
        case (cholesterol >= 160 && cholesterol <= 199):
          return 0;
          break;
        case (cholesterol >= 200 && cholesterol <= 279):
          return 1;
          break;
        case (cholesterol >= 280):
          return 3;
          break;
      }
      break;
  }
}

/**
 * Returns the validated HDL value based on the sex and HDL level.
 *
 * @param {string} sex - The sex of the person ("MASCULINO" or "FEMENINO").
 * @param {number} hdl - The HDL level.
 * @return {number} The validated HDL value.
 */
function validatedHDL(sex, hdl) {
  switch (sex) {
    case "MASCULINO":
      switch (true) {
        case (hdl < 35):
          return 2;
          break;
        case (hdl >= 35 && hdl <= 44):
          return 1;
          break;
        case (hdl >= 45 && hdl <= 59):
          return 0;
          break;
        default:
          return -2;
          break;
      }
      break;
    case "FEMENINO":
      switch (true) {
        case (hdl < 35):
          return 5;
          break;
        case (hdl >= 35 && hdl <= 44):
          return 2;
          break;
        case (hdl >= 45 && hdl <= 49):
          return 1;
          break;
        case (hdl >= 50 && hdl <= 59):
          return 0;
          break;
        default:
          return -2;
          break;
      }
      break;
  }

}

/**
 * Determines the validated blood pressure based on the sex, systolic, and diastolic values.
 *
 * @param {string} sex - The sex of the patient. Possible values are "MASCULINO" or "FEMENINO".
 * @param {number} systolic - The systolic blood pressure value.
 * @param {number} diastolic - The diastolic blood pressure value.
 * @return {number} The validated blood pressure value.
 */
function validatedBloodPressure(sex, systolic, diastolic) {
  let tmpSystolic = 0;
  let tmpDiastolic = 0;
  switch (sex) {
    case "MASCULINO":
      /** @type {number} systolic */
      switch (true) {
        case (systolic <= 129):
          tmpSystolic = 0;
          break;
        case (systolic >= 130 && systolic <= 139):
          tmpSystolic = 1;
          break;
        case (systolic >= 140 && systolic <= 159):
          tmpSystolic = 2;
          break;
        case (systolic >= 160):
          tmpSystolic = 3;
      }
      /** @type {number} diastolic */
      switch (true) {
        case (diastolic <= 84):
          tmpDiastolic = 0;
          break;
        case (diastolic >= 85 && diastolic <= 89):
          tmpDiastolic = 1;
          break;
        case (diastolic >= 90 && diastolic <= 99):
          tmpDiastolic = 2;
          break;
        case (diastolic >= 100):
          tmpDiastolic = 3;
          break;
      }
      break;
    case "FEMENINO":
      /** @type {number} systolic */
      switch (true) {
        case (systolic < 120):
          tmpSystolic = -3;
          break;
        case (systolic >= 120 && systolic <= 139):
          tmpSystolic = 0;
          break;
        case (systolic >= 140 && systolic <= 159):
          tmpSystolic = 2;
          break;
        case (systolic >= 160):
          tmpSystolic = 3;
      }
      /** @type {number} diastolic */
      switch (true) {
        case (diastolic < 80):
          tmpDiastolic = -3;
          break;
        case (diastolic >= 80 && diastolic <= 89):
          tmpDiastolic = 0;
          break;
        case (diastolic >= 90 && diastolic <= 99):
          tmpDiastolic = 2;
          break;
        case (diastolic >= 100):
          tmpDiastolic = 3;
          break;
      }
      break;
  }

  return (tmpSystolic >= tmpDiastolic) ? tmpSystolic : tmpDiastolic;
}

/**
 * Calculates the Framingham risk score for cardiovascular disease based on the input parameters.
 *
 * @param {string} sex - The gender of the patient. Either "MASCULINO" or "FEMENINO".
 * @param {number} age - The age of the patient.
 * @param {number} diabetes - The presence of diabetes in the patient (0 or 1).
 * @param {number} cholesterol - The cholesterol level of the patient.
 * @param {number} hdl - The HDL cholesterol level of the patient.
 * @param {number} bloodPressure - The blood pressure of the patient.
 * @param {number} smoking - The smoking status of the patient (0 or 1).
 * @return {string} The Framingham risk category based on the input parameters.
 */
function validatedFramingham(sex, age, diabetes, cholesterol, hdl, bloodPressure, smoking) {
  const total = parseInt(age + diabetes + cholesterol + hdl + bloodPressure + smoking);
  switch (sex) {
    case "MASCULINO":
      switch (true) {
        case (total <= -1):
          return "2% Bajo";
          break;
        case (total >= -1 && total <= 1):
          return "3% Bajo";
          break;
        case (total == 2):
          return "4% Bajo";
          break;
        case (total == 3):
          return "5% Bajo";
          break;
        case (total == 4):
          return "7% Bajo";
          break;
        case (total == 5):
          return "8% Bajo";
          break;
        case (total == 6):
          return "10% Moderado";
          break;
        case (total == 7):
          return "13% Moderado";
          break;
        case (total == 8):
          return "16% Moderado";
          break;
        case (total == 9):
          return "20% Moderado";
          break;
        case (total == 10):
          return "25% Alto";
          break;
        case (total == 11):
          return "31% Alto";
          break;
        case (total == 12):
          return "37% Alto";
          break;
        case (total == 13):
          return "45% Alto";
          break;
        case (total >= 14):
          return "53% Alto";
          break;
      }
      break;
    case "FEMENINO":
      switch (true) {
        case (total <= -2):
          return "1% Bajo";
          break;
        case (total >= -1 && total <= 1):
          return "2% Bajo";
          break;
        case (total == 2 || total == 3):
          return "3% Bajo";
          break;
        case (total == 4 || total == 5):
          return "4% Bajo";
          break;
        case (total == 6):
          return "5% Bajo";
          break;
        case (total == 7):
          return "6% Bajo";
          break;
        case (total == 8):
          return "7% Bajo";
          break;
        case (total == 9):
          return "8% Bajo";
          break;
        case (total == 10):
          return "10% Moderado";
          break;
        case (total == 11):
          return "11% Moderado";
          break;
        case (total == 12):
          return "13% Moderado";
          break;
        case (total == 13):
          return "15% Moderado";
          break;
        case (total == 14):
          return "18% Moderado";
          break;
        case (total == 15):
          return "20% Moderado";
          break;
        case (total == 16):
          return "24% Alto";
          break;
        case (total >= 17):
          return "27% Alto";
          break;
      }
      break;
  }
}

const metabolic = {
  ta: "Tensión Arterial",
  pa: "Perimetro Abdominal",
  hdl: "HDL",
  trig: "Triglicéridos",
  glic: "Glicemia"
}
/**
 * Check if a person has Metabolic Syndrome based on their health parameters.
 *
 * @param {string} sex - The gender of the person. Can be "MASCULINO" or "FEMENINO".
 * @param {string} bloodPressure - The blood pressure of the person in the format "systolic/diastolic".
 * @param {number} abdominalPerimeter - The abdominal perimeter of the person in centimeters.
 * @param {number} hdl - The HDL cholesterol level of the person in mg/dL.
 * @param {number} triglycerides - The triglycerides level of the person in mg/dL.
 * @param {number} glycemia - The glycemia level of the person in mg/dL.
 * @return {string} The result of the evaluation. Either "Presenta SINDROME METABOLICO con alteraciones en: {list of affected parameters}" or "Sin Alteraciones".
 * @customfunction
 */
function SINDROME_METABOLICO(sex, bloodPressure, abdominalPerimeter, hdl, triglycerides, glycemia) {

  if (sex === "" && bloodPressure === "" && abdominalPerimeter === "" && hdl === "" && triglycerides === "" && glycemia === "") {
    return "";
  }
  if (["", "#N/A"].includes(sex)) {
    return `El valor ${sex} para el sexo no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(bloodPressure)) {
    return `El valor ${bloodPressure} para la tensión arterial no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(abdominalPerimeter)) {
    return `El valor ${abdominalPerimeter} para el perimetro abdominal no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(hdl)) {
    return `El valor ${hdl} para el HDL no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(triglycerides)) {
    return `El valor ${triglycerides} para los triglicéridos no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(glycemia)) {
    return `El valor ${glycemia} para la glicemia no esta permitido y es requeridos!`;
  }

  const systolic = (bloodPressure.toString().split("/")[0] >= 130) ? 1 : 0;
  const diastolic = (bloodPressure.toString().split("/")[1] >= 85) ? 1 : 0;
  const triglyceridesMet = (triglycerides >= 150) ? 1 : 0;
  const glycemiaMet = (glycemia >= 100) ? 1 : 0;
  let bloodPressureMet = 0, abdominalPerimeterMet = 0, hdlMet = 0;

  if (["MASCULINO", "HOMBRE"].includes(sex)) {
    abdominalPerimeterMet = (abdominalPerimeter >= 102) ? 1 : 0;
    hdlMet = (hdl < 40) ? 1 : 0;
  } else if (["FEMENINO", "MUJER"].includes(sex)) {
    abdominalPerimeterMet = (abdominalPerimeter >= 88) ? 1 : 0;
    hdlMet = (hdl < 50) ? 1 : 0;
  }
  bloodPressureMet = (systolic >= diastolic) ? systolic : diastolic;

  let msg = [];

  if (bloodPressureMet > 0) {
    msg.push(metabolic.ta);
  }
  if (abdominalPerimeterMet > 0) {
    msg.push(metabolic.pa);
  }
  if (hdlMet > 0) {
    msg.push(metabolic.hdl);
  }
  if (triglyceridesMet > 0) {
    msg.push(metabolic.trig);
  }
  if (glycemiaMet > 0) {
    msg.push(metabolic.glic);
  }

  if ((triglyceridesMet + glycemiaMet + bloodPressureMet + abdominalPerimeterMet + hdlMet) >= 3) {
    return `Presenta SINDROME METABOLICO con alteraciones en: ${msg.toString().replaceAll(",",", ")}`;
  }
  return `Sin Alteraciones`;
}

/**
 * Calculates the level of arterogenicity based on the cholesterol and HDL values.
 *
 * @param {number} cholesterol - The value of cholesterol.
 * @param {number} hdl - The value of HDL.
 * @return {string} The level of arterogenicity.
 * @customfunction
 */
function ARTEROGENICO(cholesterol,hdl) {

  if (cholesterol === "" || hdl === "") {
    return "";
  }
  if (["", "#N/A"].includes(cholesterol)) {
    return `El valor ${cholesterol} para el colesterol no esta permitido y es requeridos!`;
  }
  if (["", "#N/A"].includes(hdl)) {
    return `El valor ${hdl} para el HDL no esta permitido y es requeridos!`;
  }
  
  const result = parseFloat(cholesterol / hdl).toFixed(2);
  
  if (result < 3.5) {
    return `${result} Minino`;
  }else if (result >= 3.5 && result <= 4.5) {
    return `${result} Moderado`;
  }else if (result >= 4.5) {
    return `${result} Maximo`;    
  }
}
