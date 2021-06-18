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

  const posts_section = document.createElement("input");
  posts_section.type = "button";
  posts_section.name = "post_section";
  posts_section.value = "New Posts";
  posts_section.addEventListener("click", () => { create_new_post_panel() }, false);
  form.appendChild(posts_section);


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
  post_view_table.style = "width: 100%";
  post_view_table.id = "";
  post_view_div.appendChild(post_view_table);

  const post_view_header = document.createElement("tr");
  post_view_table.appendChild(post_view_header);
  
  const titles = ['Title','Subtitle','Content','Edit','Delete'];
  var post_view_header_title = new Array();

  for (let i = 0; i < titles.length; i++) {
    post_view_header_title[i] = document.createElement("td");
    post_view_header_title[i].textContent = titles[i];
    post_view_header.appendChild(post_view_header_title[i]);
  }

  var post_view_row = new Array();
  var post_view_cell = new Array();
  var view_post_contents_opertation = ['edit','delete'];

  if (view_post_contents.length != 0) {
    
    for (let i = 1; i < view_post_contents.length; i++) {
      post_view_row = document.createElement("tr");
      post_view_table.appendChild(post_view_row);

      post_view_cell[i*3+i] = document.createElement("td");
      post_view_cell[i*3+i].textContent = view_post_contents[i][1];
      post_view_row.appendChild(post_view_cell[i*3+i]);
      
      post_view_cell[i*3+i] = document.createElement("td");
      post_view_cell[i*3+i].textContent = view_post_contents[i][2];
      post_view_row.appendChild(post_view_cell[i*3+i]);
      
      post_view_cell[i*3+i] = document.createElement("td");
      post_view_cell[i*3+i].textContent = view_post_contents[i][3];
      post_view_row.appendChild(post_view_cell[i*3+i]);
      
      //EDIT
      post_view_cell[i*3+i] = document.createElement("td");
      post_view_cell[i*3+i].classList = "cun_td_button";
      post_view_cell[i*3+i].style = "cursor: pointer;";
      post_view_cell[i*3+i].textContent = view_post_contents_opertation[0];
      post_view_cell[i*3+i].addEventListener("click", () => { create_edit_post_panel(view_post_contents[i][0]) }, false);
      post_view_row.appendChild(post_view_cell[i*3+i]);
      
      //DELETE
      post_view_cell[i*3+i] = document.createElement("td");
      post_view_cell[i*3+i].classList = "cun_td_button";
      post_view_cell[i*3+i].style = "cursor: pointer;";
      post_view_cell[i*3+i].textContent = view_post_contents_opertation[1];
      post_view_cell[i*3+i].addEventListener("click", () => { delete_post(view_post_contents[i][0]) }, false);
      post_view_row.appendChild(post_view_cell[i*3+i]);
    }
  }
  
  const previous_posts_button = document.createElement("input");
  previous_posts_button.style = "display:inline";
  previous_posts_button.type = "button";
  previous_posts_button.name = "previous_posts";
  previous_posts_button.value = "Previous";
  previous_posts_button.addEventListener("click", () => { view_post('backward') }, false);
  post_view_div.appendChild(previous_posts_button);

  
  const position_posts_button = document.createElement("p");
  position_posts_button.classList = "";
  position_posts_button.style = "display:inline; margin: 0 10px;";
  position_posts_button.id = "";
  if(view_post_contents.length != 0){
    position_posts_button.textContent = view_post_contents[0][0];
  }
  post_view_div.appendChild(position_posts_button);

  const next_posts_button = document.createElement("input");
  next_posts_button.style = "display:inline";
  next_posts_button.type = "button";
  next_posts_button.name = "next_posts";
  next_posts_button.value = "Next";
  next_posts_button.addEventListener("click", () => { view_post('forward') }, false);
  post_view_div.appendChild(next_posts_button);

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

  const insert_post_button = document.createElement("input");
  insert_post_button.type = "button";
  insert_post_button.name = "insert_post";
  insert_post_button.value = "Post";
  insert_post_button.addEventListener("click", () => { insert_post(title_input.value, subtitle_input.value, content_input.value); }, false);
  main_div_element.appendChild(insert_post_button);
  
}

/*POST CREATING PANEL--------------------------------------------------------*/
function create_new_post_panel(){
  const main_div = document.getElementById("main_div");
  const new_post_form_element = document.getElementById("new_post_form");

  if (new_post_form_element) {
    new_post_form_element.remove();
  }

  const back_div = document.createElement("div");
  back_div.style = "position:fixed; left:0; right:0; top:0; bottom:0; background: #3336;";
  back_div.id = "back_div";
  back_div.addEventListener("click", () => {
    back_div.remove();
  }, false);
  main_div.appendChild(back_div);

  const new_post_form_contianer = document.createElement("div");
  new_post_form_contianer.style = "position:fixed; top:50%; left:50%;";
  new_post_form_contianer.id = "edit_form_container";
  new_post_form_contianer.addEventListener("click", (event) => {
    event.stopPropagation();
  }, false);
  back_div.appendChild(new_post_form_contianer);

  const new_post_form = document.createElement("div");
  new_post_form.style = "position:absolute; left:-25vw; top:-25vh; width:50vw; height:50vh; background: grey; border: 5px solid #000; padding: 20px;";
  new_post_form.id = "new_post_form";
  new_post_form_contianer.appendChild(new_post_form);

  create_new_post('new_post_form');
  
  const cancel = document.createElement("input");
  cancel.style = "display:inline";
  cancel.type = "button";
  cancel.name = "cancel";
  cancel.value = "Cancel";
  cancel.addEventListener("click", () => {
    back_div.remove();
  }, false);
  new_post_form.appendChild(cancel);
}

/*POST EDITING---------------------------------------------------------------*/
function create_edit_post(target, id){
  var selected_index = -1;
  for (let i = 0; i < view_post_contents.length; i++) {
    if(i != 0 && view_post_contents[i][0] == id){
      selected_index = i;
      break;
    }
  }
  
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
  title_input.value = view_post_contents[selected_index][1];
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
  subtitle_input.value = view_post_contents[selected_index][2];
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
  content_input.value = view_post_contents[selected_index][3];
  content_input.placeholder = "content";
  content_label.appendChild(content_input);

  const insert_post_button = document.createElement("input");
  insert_post_button.type = "button";
  insert_post_button.name = "insert_post";
  insert_post_button.value = "Edit";
  insert_post_button.addEventListener("click", () => { edit_post(id, title_input.value, subtitle_input.value, content_input.value) }, false);
  main_div_element.appendChild(insert_post_button);
  
}

/*POST EDITING PANEL_--------------------------------------------------------*/
function create_edit_post_panel(id){
  const main_div = document.getElementById("main_div");
  const edit_form_element = document.getElementById("edit_form");

  if (edit_form_element) {
    edit_form_element.remove();
  }

  const back_div = document.createElement("div");
  back_div.style = "position:fixed; left:0; right:0; top:0; bottom:0; background: #3336;";
  back_div.id = "back_div";
  back_div.addEventListener("click", () => {
    back_div.remove();
  }, false);
  main_div.appendChild(back_div);

  const edit_form_contianer = document.createElement("div");
  edit_form_contianer.style = "position:fixed; top:50%; left:50%;";
  edit_form_contianer.id = "edit_form_container";
  edit_form_contianer.addEventListener("click", (event) => {
    event.stopPropagation();
  }, false);
  back_div.appendChild(edit_form_contianer);

  const edit_form = document.createElement("div");
  edit_form.style = "position:absolute; left:-25vw; top:-25vh; width:50vw; height:50vh; background: grey; border: 5px solid #000; padding: 20px;";
  edit_form.id = "edit_form";
  edit_form_contianer.appendChild(edit_form);

  create_edit_post('edit_form',id);
  
  const cancel = document.createElement("input");
  cancel.style = "display:inline";
  cancel.type = "button";
  cancel.name = "cancel";
  cancel.value = "Cancel";
  cancel.addEventListener("click", () => {
    edit_form.remove();
  }, false);
  edit_form.appendChild(cancel);
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

    view_post('none');
    
  },false);
 
}

//VIEW POSTS
function view_post(action){
  var page = 1;
  var multiple = 10;
  var total = 1;

  if (view_post_contents.length != 0) {
    page = parseInt(view_post_contents[0][1]);
    multiple = parseInt(view_post_contents[0][2]);
    total = view_post_contents[0][3];
  }

  if (action === 'backward' && page>1) {
    page -= 1;
  }else if (action === 'forward' && page<total) {
    page += 1;
  }

  const op = ''.concat('operation=view_posts','&','page=',page,'&','multiple=',multiple);
  send_xmlhttprequest('backoffice','GET',op, (response)=>{
    console.log(JSON.parse(response));
    view_post_contents = JSON.parse(response);
    
    create_view_posts(view_post_parent_target);
  });
}


//INSERT POST
function insert_post( title, subtitle, content){

    const op = ''.concat('operation=new_post','&','title=',title,'&','subtitle=',subtitle,'&','content=',content);
    send_xmlhttprequest('backoffice','POST', op, (response)=>{
      console.log(''.concat("inserted: ",response));
      window.location.reload();
      //view_post('none');
    });
  
}


//EDIT POST
function edit_post(id, title, subtitle, content){

    //if ok is press then is true then delete
    if(confirm("Are you sure you want to edit this post?")){
      
      const op = ''.concat('operation=edit_post','&','id=',id,'&','title=',title,'&','subtitle=',subtitle,'&','content=',content);
      send_xmlhttprequest('backoffice','POST', op, (response)=>{
        console.log(''.concat("edited: ",response));
        window.location.reload();
        //view_post('none');
      });
    }
}

//DELETE POSTS
function delete_post(id){
  
  //if ok is press then is true then delete
  if(confirm("Are you sure you want to delete this post?")){
    const op = ''.concat('operation=delete_post','&','id=',id);
    send_xmlhttprequest('backoffice','POST', op, (response)=>{
      console.log(''.concat("deleted: ",response));
      window.location.reload();
      //view_post();
    });
  }
}