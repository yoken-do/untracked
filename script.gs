const SHEET_URL = "";
const LIST_NAME = "";

// Триггер doGet(e) запускается автоматически, 
// когда пользователь посещает веб-приложение 
// или когда программа отправляет HTTP-запрос GET в веб-приложение.
function doGet(e)
{
	return HtmlService.createHtmlOutputFromFile('index');
}

// Функция добавления строки
function addEntry(name) // передаем один параметр
{
  var spread = SpreadsheetApp.openByUrl(SHEET_URL);
  var webAppSheet = spread.getSheetByName(LIST_NAME);
  webAppSheet.appendRow([name]);
}
