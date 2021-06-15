/*VARIABLES------------------------------------------------------------------*/
var view_post_parent_target = '';

/*MAIN DIV-------------------------------------------------------------------*/
function create_main_div(target){
  const main_div  = document.createElement("div");
  main_div.classList= "cun_codeblock cun_orange_glow";
  main_div.style= "";
  main_div.id= "main_div";
  target.appendChild(main_div);
}


/*LOGIN---------------------------------------------------------------------*/
function create_login_page_content() {
  const main_div = document.getElementById("main_div");

  const title = document.createElement("h1");
  title.textContent = "Backoffice Login";
  main_div.appendChild(title);

  const form = document.createElement("form");
  form.setAttribute("method", "");
  form.setAttribute("action", "");
  main_div.appendChild(form);

  const email_label = document.createElement("label");
  email_label.textContent = "Email:"
  email_label.style = "margin-right: 10px;"
  form.appendChild(email_label);

  const email_input = document.createElement("input");
  email_input.type = "text";
  email_input.name = "email";
  email_input.value = "";
  email_input.placeholder = "email";
  email_label.appendChild(email_input);

  const password_label = document.createElement("label");
  password_label.textContent = "Password"
  password_label.style = "margin-right: 10px;"
  form.appendChild(password_label);

  const password_input = document.createElement("input");
  password_input.type = "password";
  password_input.value = "password";
  password_input.value = "";
  password_input.placeholder = "password";
  password_label.appendChild(password_input);

  const login = document.createElement("input");
  login.type = "button";
  login.name = "login";
  login.value = "Login";
  login.addEventListener("click", () => { send_xmlhttprequest('backoffice', 'GET', ''.concat('login=login', '&email=',email_input.value, '&password=', password_input.value), () => {window.location.reload(); }) }, false);
  form.appendChild(login);
}


/*CPANEL---------------------------------------------------------------------*/
function create_cpanel_page_content() {
  const main_div = document.getElementById("main_div");

  const title = document.createElement("h1");
  title.textContent = "Backoffice cPanel";
  main_div.appendChild(title);

  const form = document.createElement("form");
  form.setAttribute("method", "");
  form.setAttribute("action", "");
  main_div.appendChild(form);

  const topic_title = document.createElement("h3");
  topic_title.textContent = "Welcome to cPanel";
  form.appendChild(topic_title);

  const new_post = document.createElement("input");
  new_post.type = "button";
  new_post.name = "new_post";
  new_post.value = "New Post";
  new_post.addEventListener("click", () => { }, false);
  form.appendChild(new_post);


  const logout = document.createElement("input");
  logout.type = "button";
  logout.name = "logout";
  logout.value = "Logout";
  logout.addEventListener("click", () => { send_xmlhttprequest('backoffice', 'GET', ''.concat('logout=logout'), () => { window.location.reload();}) }, false);
  form.appendChild(logout);
}


/*VIEW POSTS-----------------------------------------------------------------*/
function create_view_posts(target){
  view_post_parent_target = target;
  let main_div_element = document.getElementById(view_post_parent_target);
  
  var post_view_div;
  let post_view_element = document.getElementById('post_view_div');

  if (post_view_element) {
    while (post_view_element.firstChild) {
      post_view_element.removeChild(post_view_element.firstChild);
    }
    post_view_div = post_view_element;
  }else{
    
    post_view_div = document.createElement("div");
    post_view_div.classList = "";
    post_view_div.style = "margin-top:20px";
    post_view_div.id = "post_view_div";
    main_div_element.appendChild(post_view_div);
  }

  //div title
  const title = document.createElement("h4");
  title.textContent = "Post View List";
  post_view_div.appendChild(title);
  
  const post_view_table = document.createElement("table");
  post_view_table.classList = "";
  post_view_table.style = "";
  post_view_table.id = "";
  post_view_div.appendChild(post_view_table);

  const post_view_header = document.createElement("tr");
  post_view_table.appendChild(post_view_header);
  
  const titles = ['Title','Subtitle','Content'];
  var post_view_header_title = new Array();
  
  for (let i = 0; i < 3; i++) {
    post_view_header_title[i] = document.createElement("td");
    post_view_header_title[i].textContent = titles[i];
    post_view_header.appendChild(post_view_header_title[i]);
  }

  var post_view_row = new Array();
  var post_view_cell = new Array();

  for (let i = 0; i < view_post_contents.length; i++) {
    post_view_row = document.createElement("tr");
    post_view_table.appendChild(post_view_row);

    post_view_cell[i*3+i] = document.createElement("td");
    post_view_cell[i*3+i].textContent = view_post_contents[i][0];
    post_view_row.appendChild(post_view_cell[i*3+i]);

    post_view_cell[i*3+i] = document.createElement("td");
    post_view_cell[i*3+i].textContent = view_post_contents[i][1];
    post_view_row.appendChild(post_view_cell[i*3+i]);

    post_view_cell[i*3+i] = document.createElement("td");
    post_view_cell[i*3+i].textContent = view_post_contents[i][2];
    post_view_row.appendChild(post_view_cell[i*3+i]);
  }

}

/*POST CREATING--------------------------------------------------------------*/
function create_new_post(target){
  const main_div_element = document.getElementById(target);

  const post_div = document.createElement("div");
  post_div.classList = "";
  post_div.style = "margin-top:20px";
  post_div.id = "post_div";
  main_div_element.appendChild(post_div);
  
  //div title
  const title = document.createElement("h4");
  title.textContent = "Create New Post";
  post_div.appendChild(title);
  
  //table
  const table = document.createElement("table");
  post_div.appendChild(table);
  
  //title
  const table_row_1 = document.createElement("tr");
  table.appendChild(table_row_1);

  const table_cell_1 = document.createElement("td");
  table_row_1.appendChild(table_cell_1);

  const title_label = document.createElement("label");
  title_label.innerHTML = "Title &nbsp;"
  title_label.style = "display:block; margin: 0 10px;"
  table_cell_1.appendChild(title_label);

  const title_input = document.createElement("input");
  title_input.style = "display:block;";
  title_input.type = "text";
  title_input.name = "title_input";
  title_input.value = "";
  title_input.placeholder = "title";
  title_label.appendChild(title_input);
  
  //subtitle
  const table_row_2 = document.createElement("tr");
  table.appendChild(table_row_2);

  const table_cell_2 = document.createElement("td");
  table_row_2.appendChild(table_cell_2);
  
  const subtitle_label = document.createElement("label");
  subtitle_label.innerHTML = "Subtitle &nbsp;"
  subtitle_label.style = "display:block; margin: 0 10px;"
  table_cell_2.appendChild(subtitle_label);

  const subtitle_input = document.createElement("input");
  subtitle_input.style = "display:block;";
  subtitle_input.type = "text";
  subtitle_input.name = "subtitle_input";
  subtitle_input.value = "";
  subtitle_input.placeholder = "subtitle";
  subtitle_label.appendChild(subtitle_input);

  //content
  const table_row_3 = document.createElement("tr");
  table.appendChild(table_row_3);

  const table_cell_3 = document.createElement("td");
  table_row_3.appendChild(table_cell_3);

  const content_label = document.createElement("label");
  content_label.innerHTML = "Content &nbsp;"
  content_label.style = "display:block; margin: 0 10px;"
  table_cell_3.appendChild(content_label);

  const content_input = document.createElement("input");
  content_input.style = "display:block;";
  content_input.type = "text";
  content_input.name = "content_input";
  content_input.value = "";
  content_input.placeholder = "content";
  content_label.appendChild(content_input);

  const insert_post = document.createElement("input");
  insert_post.type = "button";
  insert_post.name = "insert_post";
  insert_post.value = "Post";
  insert_post.addEventListener("click", () => { send_xmlhttprequest('backoffice', 'POST', ''.concat('operation=new_post','&title_input=',title_input.value,'&subtitle_input=',subtitle_input.value,'&content_input=',content_input.value), () => { window.location.reload();}) }, false);
  table.appendChild(insert_post);
  
}


/*HEADER SERVER--------------------------------------------------------------*/
function create_server_header(target){
  const server_header_content = `<h2>This is an response page create by an Node app in the server.</h2>
    <h3>What follows is the script used to create this page.</h3>
    <br>
    <p>This Script relies heavily on the use of Async functions. Callback functions are mandatory to relay the data back once each function is finished. Due to this necessity the occurrence of nested Callback functions is an unfortunate byproduct. There are better ways to compose the same script with the use of Promisses and Async Await methods but even this have their setback. Promisses and Async Await rely heavily on abstraction and so they create a level of obfuscation that can confuse the newcomers.</p>
    <br>
    <p>GitHub project page: <a href="https://github.com/CrankyUnicorn/plain_node">https://github.com/CrankyUnicorn/plain_node</a></p>
    <br>`;
    const server_header_element  = document.createElement("div");

    server_header_element.innerHTML += server_header_content;
    target.appendChild(server_header_element);
}


/*FOOTER---------------------------------------------------------------------*/
function create_footer(target){
  const footer  = document.createElement("div");
  footer.classList= "";
  footer.style= "";
  footer.id= "footer";
  target.appendChild(footer);

  const line_break  = document.createElement("br");
  footer.appendChild(line_break);

  const footer_title  = document.createElement("h4");
  footer_title.classList = "";
  footer_title.style = "";
  footer_title.textContent = "CrankyUnicorn 2021";
  footer_title.id = "footer_title";
  footer.appendChild(footer_title);
}



/*EVENTS-----------------------------------------------------------------------*/



/*FUNCTIONS--------------------------------------------------------------------*/
function add_event_view_posts() {
  
  window.addEventListener('load',()=>{

    //HEADER CONTENT
    send_xmlhttprequest('backoffice','GET','operation=view_posts', (response)=>{
      console.log(JSON.parse(response));
      view_post_contents = JSON.parse(response);
      
      create_view_posts(view_post_parent_target);
      //create_view_posts('main_div');
      
    })
    
  },false);
 
}