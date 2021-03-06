const fs = require('fs');
const { resolve } = require('path');
const { navbar_anchors, header_contents, articles_sections, insert_contact, search_sections } = require('../modules/frontpage_module');
//const sm = require('../modules/Session_Manager');

function frontpage_controller(request, response) {

  true_url = new URL(request.url, 'http://' + request.headers.host + '/');
  //console.log('request url: ', request.url);
  //console.log('request full url: ', true_url);
  //console.log('request pathname: ', true_url.pathname);
  console.log('request query: ', true_url.searchParams);


  response.writeHead(200, { 'Content-Type': 'text/html' });

  

    //FUNCTIONS
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

    function build_json(results_data) {
      return new Promise((resolve, reject) => {
        response.write(JSON.stringify(results_data));
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


  //CONDITIONS
  //GET
  if (request.method === 'GET') {
   
    

    if (true_url.searchParams.get('navbar_anchor')) {
      //then comunicate with the server via a module method
      navbar_anchors((content_array)=>{
        console.log(content_array);
        response.write(JSON.stringify(content_array));
        response.end();
        
        //get_frontoffice_as_page for a information sheet for debugging
      });
    } 

    //header_content
    else if (true_url.searchParams.get('header_content')) {
      header_contents((content_array)=>{
        //console.log(content_array);
        response.write(JSON.stringify(content_array));
        response.end();
      });
    } 

    //body_selections
    else if (true_url.searchParams.get('article_sections')) {
      let target = true_url.searchParams.get('article_sections');
      if (target === 'top_three' || target === 'all') {
        
        articles_sections((content_array)=>{
          //console.log(content_array);
          response.write(JSON.stringify(content_array));
          response.end();
        }, target);

      }else if(target === 'id'){
        let id = true_url.searchParams.get('id');

        articles_sections((content_array)=>{
          //console.log(content_array);
          response.write(JSON.stringify(content_array));
          response.end();
        }, id);
     
      }else if(target === 'all_ids'){
        
        articles_sections((content_array)=>{
          //console.log(content_array);
          response.write(JSON.stringify(content_array));
          response.end();
        }, "return_ids");
      }

    //search form sections
    }else if (true_url.searchParams.get('article_sections_search')) {
      let search_target = true_url.searchParams.get('article_sections_search');

      search_sections((content_array)=>{
        response.write(JSON.stringify(content_array));
        response.end();
      },search_target);

    }

    else {
      let target = true_url.searchParams.get('page'); 
      console.log("target:",target);
      if ( target ) {
        get_frontoffice_files(target);
      }else{
        get_frontoffice_files('index');
      }
    }

  }else if (request.method === 'POST') { //POST

    if (true_url.searchParams.get('contact')) {
      let name = true_url.searchParams.get('name');
      let email = true_url.searchParams.get('email');
      let message = true_url.searchParams.get('message');

      //then comunicate with the server via a module method
      insert_contact((content_array)=>{
        console.log(content_array);
        response.write(JSON.stringify(content_array));
        response.end();
        
        //get_frontoffice_as_page for a information sheet for debugging
      }, name, email, message);
    } 


  } else {

    response.writeHead(400, { 'Content-Type': 'text/html' });
    response.write('400 Bad request!')
    response.end();
  }

}

module.exports = { frontpage_controller };