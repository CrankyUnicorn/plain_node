const fs = require('fs');
const { resolve } = require('path');
const { login_user, logout_user } = require('../modules/backoffice_module');
const sm = require('../modules/Session_Manager');

function backoffice_controller(request, response) {

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


    function get_backoffice_files(type) {
      promisses_array = new Array();
      results = new Array();

      promisses_array.push(get_file('./views/html/html_start.html'));
      promisses_array.push(get_file('./views/html/html_header.html'));
      promisses_array.push(get_file('./views/html/html_backoffice.html'));
      promisses_array.push(get_file('./views/html/html_footer.html'));
      promisses_array.push(get_file('./views/html/html_backoffice_script.html'));
      promisses_array.push(get_file('./views/html/html_end.html'));

      Promise.all(promisses_array).then(function ([start, header, content, footer, script_a, end]) {
        
        if (type == 'login' || type == 'welcome' || type == 'session' ) { results.push(start); }
        if (type == 'login' || type == 'welcome' || type == 'session' ) { results.push(header); }
        if (type == 'login' || type == 'welcome' || type == 'session' ) { results.push(content); }
        if (type == 'login' || type == 'welcome' || type == 'session' ) { results.push(footer); }
        if (type == 'login' )                                           { results.push(script_a); }
        if (type == 'login' || type == 'welcome' || type == 'session' ) { results.push(end); }

        build_page(results)
        //console.log(results);

      });

    }

    if (true_url.searchParams.get('logout')) {
      logout_user();
      get_backoffice_files('login');

    } else if (sm.getUser(0)) {
      get_backoffice_files('session');
      //console.log("backoffice_controller.sm.getUser_IN");

    } else if (true_url.searchParams.get('login')) {
      let email = true_url.searchParams.get('email');
      let password = true_url.searchParams.get('password');
      login_user(email, password);
      get_backoffice_files('welcome');
      //console.log("backoffice_controller.login_user");

    } else {
      get_backoffice_files('login');
      //console.log("backoffice_controller.sm.get_login_files");
    }


  } else {

    response.writeHead(400, { 'Content-Type': 'text/html' });
    response.write('400 Bad request!')
    response.end();
  }

}

module.exports = { backoffice_controller };