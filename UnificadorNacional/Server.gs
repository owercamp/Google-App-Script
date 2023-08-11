
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
