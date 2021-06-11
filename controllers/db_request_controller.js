const fs = require('fs');
const { resolve } = require('path');
const { navbar_anchors, header_contents, articles_sections } = require('../modules/frontpage_module');
//const sm = require('../modules/Session_Manager');

function db_request_controller(request, response) {

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

    
    if (true_url.searchParams.get('navbar_anchor')) {
      //then comunicate with the server via a module method
      navbar_anchors((content_array)=>{
        //console.log(content_array);
        response.write(JSON.stringify(content_array));
        response.end();
        
        //get_frontoffice_as_page for a information sheet for debugging
      });
    } 

    //header_content
    if (true_url.searchParams.get('header_content')) {
      header_contents((content_array)=>{
        //console.log(content_array);
        response.write(JSON.stringify(content_array));
        response.end();
      });
    } 

    //body_selctions
    if (true_url.searchParams.get('article_sections')) {
      let target = true_url.searchParams.get('article_sections');
     if (target === 'top_three' || target === 'all') {
        articles_sections((content_array)=>{
        //console.log(content_array);
        response.write(JSON.stringify(content_array));
        response.end();
      }, target);
     }
    } 

  } else {

    response.writeHead(400, { 'Content-Type': 'text/html' });
    response.write('400 Bad request!')
    response.end();
  }

}

module.exports = { db_request_controller };