const fs = require('fs');
const { resolve } = require('path');
//const { navbar_anchors } = require('../modules/frontpage_module');
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
            if (!response.writableEnded) {
             
              response.writeHead(404);
              response.write('File not Found!')
              response.end();
              reject('404'); 
            }
          } else {
            resolve(file_data);
          }

        });
      });
    }

    function build_page(result_data) {
      return new Promise((resolve, reject) => {
        http_page = ''
        result_data.forEach(element => {  http_page += element; });
        response.write(http_page);
        response.end();
      });
    }


    function get_frontoffice_files(page_name) {

      promisses_array = new Array();
      results = new Array();

      promisses_array.push(get_file('./views/html/frontpage/html_start.html'));
      promisses_array.push(get_file('./views/html/frontpage/html_home_layout.html'));
      promisses_array.push(get_file('./views/html/frontpage/html_about_layout.html'));
      promisses_array.push(get_file('./views/html/frontpage/html_contact_layout.html'));
      promisses_array.push(get_file('./views/html/frontpage/html_blog_layout.html'));
      promisses_array.push(get_file('./views/html/frontpage/html_end.html'));

      Promise.all(promisses_array).then(function ([start, home_layout, about_layout, contact_layout, blog_layout, end]) {
        
        results.push(start); 
        if (page_name === 'index' || 
            page_name === 'home' ) {
           results.push(home_layout); }
        else if (page_name === 'about') { results.push(about_layout); }
        else if (page_name === 'contact') { results.push(contact_layout); }
        else if (page_name === 'blog') { results.push(blog_layout); }
        results.push(end); 

        build_page(results)
        //console.log(results);

      });

    }

    const target = true_url.searchParams.get('page'); 
    console.log("target:",target);
    if ( target ) {
      get_frontoffice_files(target);
    }else{
      get_frontoffice_files('index');
    }

  } else {

    response.writeHead(400, { 'Content-Type': 'text/html' });
    response.write('400 Bad request!')
    response.end();
  }

}

module.exports = { frontpage_controller };