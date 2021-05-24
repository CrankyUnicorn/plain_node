//const http = require('http');
const fs = require('fs');
const { resolve } = require('path');


function index_controller(request, response) {

  response.writeHead(200, { 'Content-Type': 'text/html' });

  //redirect favicon request to a null result
  /* 
    if (request.url === '/resources/imagens/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();
    return;
  } */

  //request and response
  if (request.method === 'GET') {
    const path_node_script = './server.js'
    /*
    fs.readFile('./views/html/html_start.html', null, function (error, data_start) {
      if (error) {

        response.writeHead(404);
        response.write('File not Found!')

      } else {

        fs.readFile('./views/html/html_end.html', null, function (error, data_end) {
          if (error) {

            response.writeHead(404);
            response.write('File not Found!')

          } else {

            const path_node_script = './server.js'

            fs.readFile(path_node_script, null, function (error, data_server) {
              if (error) {

                response.writeHead(404);
                response.write('File not Found!')

              } else {


                response.write(`${data_start}\<h2\>${path_node_script}\</h2\>\<br\><code>${data_server}</code>${data_end}`);
              }
              response.end();
            });

          }
        });

      }
    });
  */

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
        response.write(`${results[0]}${results[1]}${results[2]}\<h2\>${path_node_script}\</h2\>\<br\><code>${results[3]}</code>${results[4]}${results[5]}`);
        response.end();
      });
    }

    function get_all_files() {
      promisses_array =  new Array();
      results = new Array();

      promisses_array.push(get_file('./views/html/html_start.html'));
      promisses_array.push(get_file('./views/html/html_header_server.html'));
      promisses_array.push(get_file('./views/html/html_header.html'));
      promisses_array.push(get_file('./server.js'));
      promisses_array.push(get_file('./views/html/html_footer.html'));
      promisses_array.push(get_file('./views/html/html_end.html'));
      
      Promise.all(promisses_array).then(function([a,b,c,d,e,f]){
        results.push(a);
        results.push(b);
        results.push(c);
        results.push(d);
        results.push(e);

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

module.exports = index_controller;