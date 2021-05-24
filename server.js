//const fs = require('fs');
//const path = require('path');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const file_access = require('./modules/File_Access');
const index_controller = require('./controllers/index_controller');
const backoffice_controller = require('./controllers/backoffice_controller');

const file_access_instant = new file_access();

const PORT = 3000;


http.createServer(function (request, response) {


  true_url = new URL(request.url, 'http://' + request.headers.host + '/');
  console.log('request url: ', request.url);
  //console.log('request full url: ', true_url);
  //console.log('request pathname: ', true_url.pathname);
  console.log('request query: ', true_url.searchParams.get('name'));
  var filePath = '.' + true_url.pathname;


  //gate controller for pages
  if (filePath == './') {
    filePath = './index.html';
    console.log('file access: ', file_access_instant.get_file(response, filePath));

  } else if (filePath == './test') {
    index_controller(request, response);

  } else if (filePath == './backoffice') {
    backoffice_controller(request, response);

  } else {
    console.log('file access: ', file_access_instant.get_file(response, filePath));
  }

}).listen(PORT);

console.log(`Server running at localhost:${PORT}/`);