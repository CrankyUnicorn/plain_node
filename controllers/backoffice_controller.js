//const http = require('http');
const fs = require('fs');
const { resolve } = require('path');


function backoffice_controller(request, response) {

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
        response.write(`${results[0]}${results[1]}${results[2]}${results[3]}${results[4]}${results[5]}`);
        response.end();
      });
    }

    function get_all_files() {
      promisses_array =  new Array();
      results = new Array();

      promisses_array.push(get_file('./views/html/html_start.html'));
      promisses_array.push(get_file('./views/html/html_header.html'));
      promisses_array.push(get_file('./views/html/html_backoffice.html'));
      promisses_array.push(get_file('./views/html/html_footer.html'));
      promisses_array.push(get_file('./views/html/html_backoffice_script.html'));
      promisses_array.push(get_file('./views/html/html_end.html'));
      
      Promise.all(promisses_array).then(function([a,b,c,d,e,f]){
        results.push(a);
        results.push(b);
        results.push(c);
        results.push(d);
        results.push(e);
        results.push(f);

        build_page(results)
        //console.log(results);

      });
      
    }
    
    get_all_files();
    

  } else {

    response.writeHead(400, { 'Content-Type': 'text/html' });
    response.write('400 Bad request!')
    response.end();
  }

}

module.exports = backoffice_controller;