function doGet() {
  let template = HtmlService.createTemplateFromFile("Index");
  let output = template.evaluate();

  return output;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getExamns() {
  let exam = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 1, sheet.getMaxRows(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");

  values.forEach(element => {
    exam.push(element[0]);
  })
  return exam;
}

function getStratum() {
  let stratum = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 3, sheet.getMaxRows(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");

  values.forEach(element => {
    stratum.push(element[0]);
  })
  return stratum;
}

function getGender() {
  let gender = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 5, sheet.getMaxRows(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");

  values.forEach(element => {
    gender.push(element[0]);
  })
  return gender;
}

function getRace(){
  let race = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 7, sheet.getMaxRows(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");

  values.forEach(element => {
    race.push(element[0]);
  })
  return race;
}

function getCivilStatus(){
  let civilStatus = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 9, sheet.getMaxRows(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");

  values.forEach(element => {
    civilStatus.push(element[0]);
  })
  return civilStatus;
}

function getScholarship(){
  let scholarship = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 11, sheet.getMaxRows(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");

  values.forEach(element => {
    scholarship.push(element[0]);
  })
  return scholarship;
}

function getEmphasis(){
  let scholarship = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 13, sheet.getMaxRows(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");

  values.forEach(element => {
    scholarship.push(element[0]);
  })
  return scholarship;
}

function getPhysicalActivity(){
  let activity = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 15, sheet.getMaxRows(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");

  values.forEach(element => {
    activity.push(element[0]);
  })
  return activity;
}

function getSmoke(){
  let smoke = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 17, sheet.getMaxRows(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");

  values.forEach(element => {
    smoke.push(element[0]);
  })
  return smoke;
}

function getHardDrink(){
  let drink = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 19, sheet.getMaxRows(), 1);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");

  values.forEach(element => {
    drink.push(element[0]);
  })
  return drink;
}

function getConceptEmphasis(enfasis){
  let concept = [];
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Data");
  let rows = sheet.getRange(2, 21, sheet.getMaxRows(), 2);
  let values = rows.getValues().filter(e => (e[0] != "") ? e : "");
  
  values.forEach(element =>{
    if(element[0] == enfasis){
      concept.push(element[1]);
    }
  })
  return concept;
}
