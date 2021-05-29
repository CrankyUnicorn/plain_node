const fs = require('fs');
const { resolve } = require('path');
//const { login_user, logout_user } = require('../modules/backoffice_module');
//const sm = require('../modules/Session_Manager');

function frontpage_controller(request, response) {

  true_url = new URL(request.url, 'http://' + request.headers.host + '/');
  //console.log('request url: ', request.url);
  //console.log('request full url: ', true_url);
  //console.log('request pathname: ', true_url.pathname);
  console.log('request query: ', true_url.searchParams);


  response.writeHead(200, { 'Content-Type': 'text/html' });

  if (request.method === 'GET') {

    function get_file(file_path) {
      return new Promise((resolve, reject) => {

        fs.readFile(file_path, null, function (error, file_data) {
          if (error) {
            response.writeHead(404);
            response.write('File not Found!')
            response.end();
            reject('404');
          } else {
            resolve(file_data);
          }

        });
      });
    }

    function build_page() {
      return new Promise((resolve, reject) => {
        http_page = ''
        results.forEach(element => {  http_page += element; });
        response.write(http_page);
        response.end();
      });
    }


    function get_backoffice_files() {
      promisses_array = new Array();
      results = new Array();

      promisses_array.push(get_file('./views/html/frontpage/html_start.html'));
      promisses_array.push(get_file('./views/html/frontpage/html_frontpage_structure_script.html'));
      promisses_array.push(get_file('./views/html/frontpage/html_end.html'));

      Promise.all(promisses_array).then(function ([start, script_structure, end]) {
        
         results.push(start); 
         results.push(script_structure); 
         results.push(end); 

        build_page(results)
        //console.log(results);

      });

    }

   
    get_backoffice_files();

  } else {

    response.writeHead(400, { 'Content-Type': 'text/html' });
    response.write('400 Bad request!')
    response.end();
  }

}

module.exports = { frontpage_controller };