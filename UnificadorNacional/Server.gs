
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
function include(file){
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function insertData(data) {

  try {
    const information = JSON.parse(data);
    Logger.log(information);
    return "OK";
  } catch (error) {
    return error.message;
  }
}
