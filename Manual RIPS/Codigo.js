/**
 * Generates the HTML output for the web app.
 *
 * @return {Object} The HTML output.
 */
function doGet() {
  let template = HtmlService.createTemplateFromFile('index');
  let output = template.evaluate();

  return output;
}

/**
 * Generates a function comment for the given function body.
 *
 * @param {string} file - The file to include.
 * @return {string} The content of the included file.
 */
function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();  
}

function getDocuments() {
  let document = DocumentApp.getActiveDocument();
  let body = document.getBody();
  let text = body.asBody().getText();
  return JSON.stringify(text);
}
