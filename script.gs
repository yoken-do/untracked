
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
  let url = ''; // Google Sheet URL
  var spread = SpreadsheetApp.openByUrl(url);
  var webAppSheet = spread.getSheetByName("LIST_NAME");
  webAppSheet.appendRow([name]);
}
