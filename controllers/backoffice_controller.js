const { log } = require('console');
const fs = require('fs');
const { resolve } = require('path');
const { insert_post, update_post, delete_post, delete_message, check_message, view_post, login_user, logout_user, view_contacts, view_statistics } = require('../modules/backoffice_module');
const sm = require('../modules/Session_Manager');

function backoffice_controller(request, response) {
  
  function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
  }


  true_url = new URL(request.url, 'http://' + request.headers.host + '/');
  //console.log('request url: ', request.url);
  //console.log('request full url: ', true_url);
  //console.log('request pathname: ', true_url.pathname);
  console.log('request query: ', true_url.searchParams);
  
  console.info("coockies received: ", parseCookies(request))
  var session_key = parseCookies(request).devlog_backoffice_session_key;
  console.info("init_session_key: ", session_key);

  
  
 
  
        

  /*FUNCTIONS----------------------------------------------------------------*/
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


  function build_page(results_data) {
    return new Promise((resolve, reject) => {
      http_page = ''
      results_data.forEach(element => {  http_page += element; });
      response.write(http_page);
      response.end();
    });
  }


  function build_json(results_data) {
    return new Promise((resolve, reject) => {
      response.write(JSON.stringify(results_data));
      response.end();
    });
  }


  function get_backoffice_files(type) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    
    promisses_array = new Array();
    results = new Array();

    promisses_array.push(get_file('./views/html/backoffice/html_start.html'));
    promisses_array.push(get_file('./views/html/backoffice/html_login_layout.html'));
    promisses_array.push(get_file('./views/html/backoffice/html_cpanel_layout.html'));
    promisses_array.push(get_file('./views/html/backoffice/html_end.html'));

    Promise.all(promisses_array).then(function ([start,  script_login, script_cpanel, end]) {
      
      if (type == 'login' || type == 'welcome' || type == 'session' ) { results.push(start); }
      if (type == 'login' )                                           { results.push(script_login); }
      else if (type == 'welcome' || type == 'session' )               { results.push(script_cpanel); }
      if (type == 'login' || type == 'welcome' || type == 'session' ) { results.push(end); }

      build_page(results);
      //console.log(results);
      
    });

  }


  /*CONDITIONS---------------------------------------------------------------*/
  //POST
  if(request.method === 'POST'){

    //post - actions

    //NEW 
    if (true_url.searchParams.get('operation')) {
      const operation_name = true_url.searchParams.get('operation');
      if (operation_name === 'new_post') {
        const post_title = true_url.searchParams.get('title');
        const post_subtitle = true_url.searchParams.get('subtitle');
        const post_content = true_url.searchParams.get('content');
        //console.log("".concat(post_title,post_subtitle,post_content));
        //insert new blog post in the database 

        insert_post(post_title, post_subtitle, post_content, ()=>{
          get_backoffice_files('session');
        });
      }
    }

    //EDIT
    if (true_url.searchParams.get('operation')) {
      const operation_name = true_url.searchParams.get('operation');
      if (operation_name === 'edit_post') {
        const post_id = true_url.searchParams.get('id');
        const post_title = true_url.searchParams.get('title');
        const post_subtitle = true_url.searchParams.get('subtitle');
        const post_content = true_url.searchParams.get('content');

        update_post(post_id, post_title, post_subtitle, post_content, ()=>{
          get_backoffice_files('session');
        });
      }
    }

    //DELETE POST
    if (true_url.searchParams.get('operation')) {
      const operation_name = true_url.searchParams.get('operation');
      if (operation_name === 'delete_post') {
        const post_id = true_url.searchParams.get('id');
        
        delete_post(post_id, ()=>{
          get_backoffice_files('session');
        });
      }
    }

    //DELETE MESSAGE
    if (true_url.searchParams.get('operation')) {
      const operation_name = true_url.searchParams.get('operation');
      if (operation_name === 'delete_message') {
        const post_id = true_url.searchParams.get('id');
        
        delete_message(post_id, ()=>{
          get_backoffice_files('session');
        });
      }
    }

    //CHECK MESSAGE
    if (true_url.searchParams.get('operation')) {
      const operation_name = true_url.searchParams.get('operation');
      if (operation_name === 'check_message') {
        const post_id = true_url.searchParams.get('id');
        
        check_message(post_id, ()=>{
          get_backoffice_files('session');
        });
      }
    }
    

  //GET
  } else if (request.method === 'GET') {

    //GET - ACTIONS
    if (true_url.searchParams.get('operation')) {
      const operation_name = true_url.searchParams.get('operation');
      
      //VIEW POSTS
      if (operation_name === 'view_posts') { 
        const page_value = true_url.searchParams.get('page');
        const multiple_value = true_url.searchParams.get('multiple');
        //insert new blog post in the database 
        view_post(page_value, multiple_value, (results_data)=>{
          build_json(results_data);
        });
      }

      //VIEW CONTACTS
      if (operation_name === 'view_contacts') { 
        const page_value = true_url.searchParams.get('page');
        const multiple_value = true_url.searchParams.get('multiple');
        //insert new blog post in the database 
        view_contacts(page_value, multiple_value, (results_data)=>{
          build_json(results_data);
        });
      }

      //VIEW STATISTICS 
      if (operation_name === 'view_statistics') { 
        const page_value = true_url.searchParams.get('page');
        const multiple_value = true_url.searchParams.get('multiple');
        //insert new blog post in the database 
        view_statistics(page_value, multiple_value, (results_data)=>{
          build_json(results_data);
        });
      }

    //SESSION ROUTING
    } else if (true_url.searchParams.get('logout')) { //if user wants to logout 
      response.setHeader('Set-Cookie', [`devlog_backoffice_session_key=`]);
        
      logout_user(session_key);
      get_backoffice_files('login');

    } else if (sm.getUser(session_key)) { //if session already open
      get_backoffice_files('session');
      //console.log("backoffice_controller.sm.getUser_IN");

    } else if (true_url.searchParams.get('login')) { //if user wants to login
      let email = true_url.searchParams.get('email');
      let password = true_url.searchParams.get('password');

      login_user(email, password,(key)=>{
        //sets cookie for session and timeout of around a day in 86409000ms
        console.info("<KEY>: ", key);
        response.setHeader('Set-Cookie', [`devlog_backoffice_session_key=${key}; expires=`+new Date(new Date().getTime()+3600000).toUTCString()]);
        
        get_backoffice_files('welcome');
      });
      
      //console.log("backoffice_controller.login_user");

    } else { // if none of the abouve show the login page
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