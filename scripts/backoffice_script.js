/*VARIABLES------------------------------------------------------------------*/
var view_post_parent_target = '';
var view_contact_parent_target = '';
var view_statistic_parent_target = '';

/*MAIN DIV-------------------------------------------------------------------*/
function create_main_div(target){
  const main_div  = document.createElement("div");
  main_div.classList= "cun_codeblock cun_orange_glow";
  main_div.style= "min-height: 60vh; display: flex; flex-direction: column; flex-flow: wrap; align-content:space-between;";
  main_div.id= "main_div";
  target.appendChild(main_div);
}


/*LOGIN---------------------------------------------------------------------*/
function create_login_page_content() {
  const main_div = document.getElementById("main_div");

  const title = document.createElement("h1");
  title.style = "margin: 0 0 50px 0;";
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

  const login_bottom = document.createElement("div");
  login_bottom.style = "width:100%;";
  login_bottom.id = "login_bottom";
  main_div.appendChild(login_bottom); 
}


/*CONTENT-------------------------------------------------------------------*/
function create_cpanel_page_content() {
  create_navbar();
  create_view_posts("main_div");
  create_view_contacts("main_div");
  create_view_statistics("main_div");
}

/*NAV BAR--------------------------------------------------------------------*/
function create_navbar() {
  const main_div = document.getElementById("main_div");

  const title = document.createElement("h1");
  title.textContent = "DevLog Backoffice";
  main_div.appendChild(title);

  const navbar_div = document.createElement("div");
  navbar_div.style = "width:100% ;margin-top:40px";
  main_div.appendChild(navbar_div);

  const topic_title = document.createElement("h3");
  topic_title.style = "margin-bottom:10px";
  topic_title.textContent = "Welcome to the backoffice";
  navbar_div.appendChild(topic_title);

  //main navbar buttons
  const logout = document.createElement("input");
  logout.style = "margin-bottom: 10px;";
  logout.type = "button";
  logout.name = "logout";
  logout.value = "Logout";
  logout.addEventListener("click", () => { send_xmlhttprequest('backoffice', 'GET', ''.concat('logout=logout'), () => { window.location.reload();}) }, false);
  navbar_div.appendChild(logout);

  const ruler = document.createElement("hr");
  navbar_div.appendChild(ruler);

}

/*VIEW POSTS-----------------------------------------------------------------*/
function create_view_posts(target){

  window.addEventListener('load',()=>{

    view_post('none');
    
  },false);
 

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

  //DELETE POSTS
  function delete_post(id){
    
    //if ok is press then is true then delete
    if(confirm("Are you sure you want to delete this post?")){
      const op = ''.concat('operation=delete_post','&','id=',id);
      send_xmlhttprequest('backoffice','POST', op, (response)=>{
        console.log(''.concat("deleted_post: ",response));
        window.location.reload();
        //view_post();
      });
    }
  }


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
    post_view_div.style = "width:100%; margin-top:10px";
    post_view_div.id = "post_view_div";
    main_div_element.appendChild(post_view_div);
  }

  //div title
  const title = document.createElement("h3");
  title.textContent = "Blog Posts List";
  title.style = "";
  post_view_div.appendChild(title);

  //navbar buttons
  const posts_section = document.createElement("input");
  posts_section.style = "margin: 10px 0 15px 0;";
  posts_section.type = "button";
  posts_section.name = "post_section";
  posts_section.value = "New Post";
  posts_section.addEventListener("click", () => { create_new_panel( create_new_post ) }, false);
  post_view_div.appendChild(posts_section);
 
  //
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
      post_view_cell[i*3+i].textContent = view_post_contents[i][2].substring(0,50);
      post_view_row.appendChild(post_view_cell[i*3+i]);
      
      post_view_cell[i*3+i] = document.createElement("td");
      post_view_cell[i*3+i].textContent = view_post_contents[i][3].substring(0,75);
      post_view_row.appendChild(post_view_cell[i*3+i]);
      
      //EDIT
      post_view_cell[i*3+i] = document.createElement("td");
      post_view_cell[i*3+i].classList = "cun_td_button";
      post_view_cell[i*3+i].style = "cursor: pointer;";
      post_view_cell[i*3+i].textContent = view_post_contents_opertation[0];
      post_view_cell[i*3+i].addEventListener("click", () => { create_new_panel( create_edit_post,view_post_contents[i][0]) }, false);
      post_view_row.appendChild(post_view_cell[i*3+i]);
      
      //DELETE
      post_view_cell[i*3+i] = document.createElement("td");
      post_view_cell[i*3+i].classList = "cun_td_button";
      post_view_cell[i*3+i].style = "cursor: pointer;";
      post_view_cell[i*3+i].textContent = view_post_contents_opertation[1];
      post_view_cell[i*3+i].addEventListener("click", () => { create_new_panel( delete_post , view_post_contents[i][0]) }, false);
      post_view_row.appendChild(post_view_cell[i*3+i]);
    }
  }
  
  const previous_posts_button = document.createElement("input");
  previous_posts_button.style = "display:inline; margin:15px 0 10px 0";
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

  const ruler = document.createElement("hr");
  post_view_div.appendChild(ruler);
}

/*CREATING PANEL GENERIC-----------------------------------------------------*/
function create_new_panel(fuction_call, arguments){
  const main_div = document.getElementById("main_div");
  const new_panel_element = document.getElementById("new_panel");

  if (new_panel_element) {
    new_panel_element.remove();
  }

  const back_div = document.createElement("div");
  back_div.style = "position:fixed; left:0; right:0; top:0; bottom:0; background: #6666;";
  back_div.id = "back_div";
  back_div.addEventListener("click", () => {
    back_div.remove();
  }, false);
  main_div.appendChild(back_div);

  const new_panel_contianer = document.createElement("div");
  new_panel_contianer.style = "position:fixed; top:50%; left:50%;";
  new_panel_contianer.id = "edit_form_container";
  new_panel_contianer.addEventListener("click", (event) => {
    event.stopPropagation();
  }, false);
  back_div.appendChild(new_panel_contianer);

  const new_panel = document.createElement("div");
  new_panel.style = "position:absolute; left:-25vw; top:-25vh; width:50vw; min-height:50vh; background-color: var(--ultragrey); border-radius:10px; padding: 20px;";
  new_panel.id = "new_panel";
  new_panel_contianer.appendChild(new_panel);

  //set content into the element with id 'new_panel'
  if(!arguments){
    fuction_call();
  }else{
    fuction_call(arguments);
  }
  
  const cancel = document.createElement("input");
  cancel.style = "display:inline";
  cancel.type = "button";
  cancel.name = "cancel";
  cancel.value = "Cancel";
  cancel.addEventListener("click", () => {
    back_div.remove();
  }, false);
  new_panel.appendChild(cancel);
}

/*POST CREATING--------------------------------------------------------------*/
function create_new_post(){
  
  //INSERT POST
  function insert_post( title, subtitle, content){

    const op = ''.concat('operation=new_post','&','title=',title,'&','subtitle=',subtitle,'&','content=',content);
    send_xmlhttprequest('backoffice','POST', op, (response)=>{
      console.log(''.concat("inserted: ",response));
      window.location.reload();
      //view_post('none');
    });
  
  }

  const main_div_element = document.getElementById('new_panel');

  const post_div = document.createElement("div");
  post_div.classList = "";
  post_div.style = "margin-top:20px";
  post_div.id = "post_div";
  main_div_element.appendChild(post_div);
  
  //div title
  const title = document.createElement("h4");
  title.style = "margin-bottom:15px;";
  title.textContent = "Create New Post";
  post_div.appendChild(title);
  
  //table
  const table = document.createElement("table");
  table.style = "width:100%;border-collapse: collapse;";
  post_div.appendChild(table);
  
  //title
  const table_row_1 = document.createElement("tr");
  table.appendChild(table_row_1);

  const table_cell_1 = document.createElement("td");
  table_row_1.appendChild(table_cell_1);

  const title_label = document.createElement("label");
  title_label.innerHTML = "Title &nbsp;"
  title_label.style = "display:block;"
  table_cell_1.appendChild(title_label);

  const title_input = document.createElement("input");
  title_input.style = "display:block; margin:0; width:100%;";
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
  subtitle_label.style = "display:block;"
  table_cell_2.appendChild(subtitle_label);

  const subtitle_input = document.createElement("input");
  subtitle_input.style = "display:block; margin:0; width:100%;";
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
  content_label.style = "display:block;"
  table_cell_3.appendChild(content_label);

  const content_input = document.createElement("textarea");
  content_input.style = "display:block; margin:0; width:100%;  resize: vertical;";
  content_input.type = "text";
  content_input.name = "content_input";
  content_input.value = "";
  content_input.placeholder = "content";
  content_label.appendChild(content_input);

  const insert_post_button = document.createElement("input");
  insert_post_button.style = "margin-top:20px;";
  insert_post_button.type = "button";
  insert_post_button.name = "insert_post";
  insert_post_button.value = "Post";
  insert_post_button.addEventListener("click", () => { insert_post(title_input.value, subtitle_input.value, content_input.value); }, false);
  main_div_element.appendChild(insert_post_button);
  
}

/*POST EDITING---------------------------------------------------------------*/
function create_edit_post(id){
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
  
  var selected_index = -1;
  for (let i = 0; i < view_post_contents.length; i++) {
    if(i != 0 && view_post_contents[i][0] == id){
      selected_index = i;
      break;
    }
  }
  
  
  const main_div_element = document.getElementById('new_panel');

  const post_div = document.createElement("div");
  post_div.classList = "";
  post_div.style = "margin-top:20px";
  post_div.id = "post_div";
  main_div_element.appendChild(post_div);
  
  //div title
  const title = document.createElement("h4");
  title.style = "margin-bottom:15px;";
  title.textContent = "Create New Post";
  post_div.appendChild(title);
  
  //table
  const table = document.createElement("table");
  table.style = "width:100%; border-collapse: collapse;";
  post_div.appendChild(table);
  
  //title
  const table_row_1 = document.createElement("tr");
  table.appendChild(table_row_1);

  const table_cell_1 = document.createElement("td");
  table_row_1.appendChild(table_cell_1);

  const title_label = document.createElement("label");
  title_label.innerHTML = "Title &nbsp;"
  title_label.style = "display:block;"
  table_cell_1.appendChild(title_label);

  const title_input = document.createElement("input");
  title_input.style = "display:block; margin:0; width:100%;";
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
  subtitle_label.style = "display:block;"
  table_cell_2.appendChild(subtitle_label);

  const subtitle_input = document.createElement("input");
  subtitle_input.style = "display:block; margin:0; width:100%;";
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
  content_label.style = "display:block;"
  table_cell_3.appendChild(content_label);

  const content_input = document.createElement("textarea");
  content_input.style = "display:block; margin:0; width:100%;  resize: vertical;";
  content_input.type = "text";
  content_input.name = "content_input";
  content_input.value = view_post_contents[selected_index][3];
  content_input.placeholder = "content";
  content_label.appendChild(content_input);

  const insert_post_button = document.createElement("input");
  insert_post_button.style = "margin-top:20px;";
  insert_post_button.type = "button";
  insert_post_button.name = "insert_post";
  insert_post_button.value = "Edit";
  insert_post_button.addEventListener("click", () => { edit_post(id, title_input.value, subtitle_input.value, content_input.value) }, false);
  main_div_element.appendChild(insert_post_button);
  
}

/*CONTACT MESSAGES-----------------------------------------------------------*/
function create_view_contacts(target) {

  window.addEventListener('load',()=>{

    view_contact('none');
    
  },false);

  //VIEW MESSAGES
  function view_contact(action){
    var page = 1;
    var multiple = 10;
    var total = 1;

    if (view_contact_contents.length != 0) {
      page = parseInt(view_contact_contents[0][1]);
      multiple = parseInt(view_contact_contents[0][2]);
      total = view_contact_contents[0][3];
    }

    if (action === 'backward' && page>1) {
      page -= 1;
    }else if (action === 'forward' && page<total) {
      page += 1;
    }

    const op = ''.concat('operation=view_contacts','&','page=',page,'&','multiple=',multiple);
    send_xmlhttprequest('backoffice','GET',op, (response)=>{
      console.log(JSON.parse(response));
      view_contact_contents = JSON.parse(response);
      
      create_view_contacts(view_contact_parent_target);
    });
  }

   //DELETE MESSAGE
   function delete_message(id){
    
    //if ok is press then is true then delete
    if(confirm("Are you sure you want to delete this message?")){
      const op = ''.concat('operation=delete_message','&','id=',id);
      send_xmlhttprequest('backoffice','POST', op, (response)=>{
        console.log(''.concat("deleted_message: ",response));
        window.location.reload();
        //view_post();
      });
    }
  }

  view_contact_parent_target = target;
  let main_div_element = document.getElementById(view_contact_parent_target);
  
  var contact_view_div;
  let contact_view_element = document.getElementById('contact_view_div');

  if (contact_view_element) {
    while (contact_view_element.firstChild) {
      contact_view_element.removeChild(contact_view_element.firstChild);
    }
    contact_view_div = contact_view_element;
  }else{
    
    contact_view_div = document.createElement("div");
    contact_view_div.classList = "";
    contact_view_div.style = "width:100%; margin-top:10px";
    contact_view_div.id = "contact_view_div";
    main_div_element.appendChild(contact_view_div);
  }

  //div title
  const title = document.createElement("h3");
  title.textContent = "Contact Message List";
  title.style = "margin-bottom:10px";
  contact_view_div.appendChild(title);
 
  //
  const contact_view_table = document.createElement("table");
  contact_view_table.classList = "";
  contact_view_table.style = "width: 100%";
  contact_view_table.id = "";
  contact_view_div.appendChild(contact_view_table);

  const contact_view_header = document.createElement("tr");
  contact_view_table.appendChild(contact_view_header);
  
  const titles = ['Name','E-mail','Content','Date','Check','Delete'];
  var contact_view_header_title = new Array();

  for (let i = 0; i < titles.length; i++) {
    contact_view_header_title[i] = document.createElement("td");
    contact_view_header_title[i].textContent = titles[i];
    contact_view_header.appendChild(contact_view_header_title[i]);
  }

  var contact_view_row = new Array();
  var contact_view_cell = new Array();
  var view_contact_contents_opertation = ['check','delete'];

  if (view_contact_contents.length != 0) {
    
    for (let i = 1; i < view_contact_contents.length; i++) {
      contact_view_row = document.createElement("tr");
      contact_view_table.appendChild(contact_view_row);

      contact_view_cell[i*4+i] = document.createElement("td");
      contact_view_cell[i*4+i].textContent = view_contact_contents[i][1];
      contact_view_row.appendChild(contact_view_cell[i*4+i]);
      
      contact_view_cell[i*4+i] = document.createElement("td");
      contact_view_cell[i*4+i].textContent = view_contact_contents[i][2];
      contact_view_row.appendChild(contact_view_cell[i*4+i]);
      
      contact_view_cell[i*4+i] = document.createElement("td");
      contact_view_cell[i*4+i].textContent = view_contact_contents[i][3];
      contact_view_row.appendChild(contact_view_cell[i*4+i]);

      contact_view_cell[i*4+i] = document.createElement("td");
      contact_view_cell[i*4+i].textContent = view_contact_contents[i][4];
      contact_view_row.appendChild(contact_view_cell[i*4+i]);
      
      //CHECK
      contact_view_cell[i*4+i] = document.createElement("td");
      contact_view_cell[i*4+i].classList = "cun_td_button";
      contact_view_cell[i*4+i].style = "cursor: pointer;";
      if (view_contact_contents[i][5].toString() === '0') {
        contact_view_cell[i*4+i].textContent = "check";
      }else{
        contact_view_cell[i*4+i].textContent = "checked";
      }
      contact_view_cell[i*4+i].addEventListener("click", () => { create_new_panel( check_contact_message, view_contact_contents[i][0]) }, false);
      contact_view_row.appendChild(contact_view_cell[i*4+i]);
      
      //DELETE
      contact_view_cell[i*4+i] = document.createElement("td");
      contact_view_cell[i*4+i].classList = "cun_td_button";
      contact_view_cell[i*4+i].style = "cursor: pointer;";
      contact_view_cell[i*4+i].textContent = view_contact_contents_opertation[1];
      contact_view_cell[i*4+i].addEventListener("click", () => { delete_message(view_contact_contents[i][0]) }, false);
      contact_view_row.appendChild(contact_view_cell[i*4+i]);
    }
  }
  
  const previous_contacts_button = document.createElement("input");
  previous_contacts_button.style = "display:inline; margin:15px 0 10px 0";
  previous_contacts_button.type = "button";
  previous_contacts_button.name = "previous_contacts";
  previous_contacts_button.value = "Previous";
  previous_contacts_button.addEventListener("click", () => { view_contact('backward') }, false);
  contact_view_div.appendChild(previous_contacts_button);

  
  const position_contacts_button = document.createElement("p");
  position_contacts_button.classList = "";
  position_contacts_button.style = "display:inline; margin: 0 10px;";
  position_contacts_button.id = "";
  if(view_contact_contents.length != 0){
    position_contacts_button.textContent = view_contact_contents[0][0];
  }
  contact_view_div.appendChild(position_contacts_button);

  const next_contacts_button = document.createElement("input");
  next_contacts_button.style = "display:inline";
  next_contacts_button.type = "button";
  next_contacts_button.name = "next_contacts";
  next_contacts_button.value = "Next";
  next_contacts_button.addEventListener("click", () => { view_contact('forward') }, false);
  contact_view_div.appendChild(next_contacts_button);

  const ruler = document.createElement("hr");
  contact_view_div.appendChild(ruler);
}

/*MESSAGE CHECKING------------------------------------------------------------*/
function check_contact_message(id){
  
  //CHECK MESSAGE
  function check_message(id){
  
    //if ok is press then is true then delete
    if(confirm("Are you sure you want to check this message as read?")){
      const op = ''.concat('operation=check_message','&','id=',id);
      send_xmlhttprequest('backoffice','POST', op, (response)=>{
        console.log(''.concat("check_message: ",response));
        window.location.reload();
        //view_post();
      });
    }
  }

  var selected_index = -1;
  for (let i = 0; i < view_contact_contents.length; i++) {
    if(i != 0 && view_contact_contents[i][0] == id){
      selected_index = i;
      break;
    }
  }
  
  const main_div_element = document.getElementById('new_panel');

  const post_div = document.createElement("div");
  post_div.classList = "";
  post_div.style = "margin-top:20px";
  post_div.id = "post_div";
  main_div_element.appendChild(post_div);
  
  //div title
  const title = document.createElement("h4");
  title.style = "margin-bottom:15px;";
  title.textContent = "Check Message";
  post_div.appendChild(title);
  
  //table
  const table = document.createElement("table");
  table.style = "width:100%; border-collapse: collapse;";
  post_div.appendChild(table);
  
  //title
  const table_row_1 = document.createElement("tr");
  table.appendChild(table_row_1);

  const table_cell_1 = document.createElement("td");
  table_row_1.appendChild(table_cell_1);

  const name_label = document.createElement("label");
  name_label.innerHTML = "Title &nbsp;"
  name_label.style = "display:block;"
  table_cell_1.appendChild(name_label);

  const name_input = document.createElement("input");
  name_input.style = "display:block; margin:0; width:100%;";
  name_input.type = "text";
  name_input.name = "name_input";
  console.info(view_contact_contents)
  name_input.value = view_contact_contents[selected_index][1];
  name_input.placeholder = "name";
  name_input.disabled = true;
  name_label.appendChild(name_input);
  
  //subtitle
  const table_row_2 = document.createElement("tr");
  table.appendChild(table_row_2);

  const table_cell_2 = document.createElement("td");
  table_row_2.appendChild(table_cell_2);
  
  const email_label = document.createElement("label");
  email_label.innerHTML = "Subtitle &nbsp;"
  email_label.style = "display:block;"
  table_cell_2.appendChild(email_label);

  const email_input = document.createElement("input");
  email_input.style = "display:block; margin:0; width:100%;";
  email_input.type = "text";
  email_input.name = "email_input";
  email_input.value = view_contact_contents[selected_index][2];
  email_input.placeholder = "email";
  email_input.disabled = true;
  email_label.appendChild(email_input);

  //content
  const table_row_3 = document.createElement("tr");
  table.appendChild(table_row_3);

  const table_cell_3 = document.createElement("td");
  table_row_3.appendChild(table_cell_3);

  const message_label = document.createElement("label");
  message_label.innerHTML = "Content &nbsp;"
  message_label.style = "display:block;"
  table_cell_3.appendChild(message_label);

  const message_input = document.createElement("textarea");
  message_input.style = "display:block; margin:0; width:100%; resize:vertical;";
  message_input.type = "text";
  message_input.name = "content_input";
  message_input.value = view_contact_contents[selected_index][3];
  message_input.placeholder = "message";
  message_input.disabled = true;
  message_label.appendChild(message_input);

  const insert_post_button = document.createElement("input");
  insert_post_button.style = "margin-top:20px;";
  insert_post_button.type = "button";
  insert_post_button.name = "insert_post";
  insert_post_button.value = "Check";
  insert_post_button.addEventListener("click", () => { check_message(id) }, false);
  main_div_element.appendChild(insert_post_button);
  
}

/*STATISTICS-----------------------------------------------------------------*/
function create_view_statistics(target) {

  window.addEventListener('load',()=>{

    view_statistics('none');
    
  },false);

  //VIEW STATISTICS
  function view_statistics(action){
    var page = 1;
    var multiple = 10;
    var total = 1;

    if (view_statistics_contents.length != 0) {
      page = parseInt(view_statistics_contents[0][1]);
      multiple = parseInt(view_statistics_contents[0][2]);
      total = view_statistics_contents[0][3];
    }

    if (action === 'backward' && page>1) {
      page -= 1;
    }else if (action === 'forward' && page<total) {
      page += 1;
    }

    const op = ''.concat('operation=view_statistics','&','page=',page,'&','multiple=',multiple);
    send_xmlhttprequest('backoffice','GET',op, (response)=>{
      console.log(JSON.parse(response));
      view_statistics_contents = JSON.parse(response);
      
      create_view_statistics(view_statistic_parent_target);
    });
  }

  view_statistic_parent_target = target;
  let main_div_element = document.getElementById(view_statistic_parent_target);
  
  var statistic_view_div;
  let statistic_view_element = document.getElementById('statistic_view_div');

  if (statistic_view_element) {
    while (statistic_view_element.firstChild) {
      statistic_view_element.removeChild(statistic_view_element.firstChild);
    }
    statistic_view_div = statistic_view_element;
  }else{
    
    statistic_view_div = document.createElement("div");
    statistic_view_div.classList = "";
    statistic_view_div.style = "width:100%; margin-top:10px";
    statistic_view_div.id = "statistic_view_div";
    main_div_element.appendChild(statistic_view_div);
  }

  //div title
  const title = document.createElement("h3");
  title.style = "margin-bottom:10px";
  title.textContent = "Statistics List";
  statistic_view_div.appendChild(title);

 
  //
  const statistic_view_table = document.createElement("table");
  statistic_view_table.classList = "";
  statistic_view_table.style = "width: 100%";
  statistic_view_table.id = "";
  statistic_view_div.appendChild(statistic_view_table);

  const statistic_view_header = document.createElement("tr");
  statistic_view_table.appendChild(statistic_view_header);
  
  const titles = ['Title','Subtitle','Visits','Last Visit'];
  var statistic_view_header_title = new Array();

  for (let i = 0; i < titles.length; i++) {
    statistic_view_header_title[i] = document.createElement("td");
    statistic_view_header_title[i].textContent = titles[i];
    statistic_view_header.appendChild(statistic_view_header_title[i]);
  }

  var statistic_view_row = new Array();
  var statistic_view_cell = new Array();
  // var view_statistic_contents_opertation = ['check','delete'];

  if (view_statistics_contents.length != 0) {
    
    for (let i = 1; i < view_statistics_contents.length; i++) {
      statistic_view_row = document.createElement("tr");
      statistic_view_table.appendChild(statistic_view_row);

      statistic_view_cell[i*4+i] = document.createElement("td");
      statistic_view_cell[i*4+i].textContent = view_statistics_contents[i][0];
      statistic_view_row.appendChild(statistic_view_cell[i*4+i]);
      
      statistic_view_cell[i*4+i] = document.createElement("td");
      statistic_view_cell[i*4+i].textContent = view_statistics_contents[i][1];
      statistic_view_row.appendChild(statistic_view_cell[i*4+i]);
      
      statistic_view_cell[i*4+i] = document.createElement("td");
      statistic_view_cell[i*4+i].textContent = view_statistics_contents[i][2];
      statistic_view_row.appendChild(statistic_view_cell[i*4+i]);

      statistic_view_cell[i*4+i] = document.createElement("td");
      statistic_view_cell[i*4+i].textContent = view_statistics_contents[i][3];
      statistic_view_row.appendChild(statistic_view_cell[i*4+i]);

    }
  }
  
  const previous_statistics_button = document.createElement("input");
  previous_statistics_button.style = "display:inline; margin:15px 0 10px 0";
  previous_statistics_button.type = "button";
  previous_statistics_button.name = "previous_statistics";
  previous_statistics_button.value = "Previous";
  previous_statistics_button.addEventListener("click", () => { view_statistics('backward') }, false);
  statistic_view_div.appendChild(previous_statistics_button);

  
  const position_statistics_button = document.createElement("p");
  position_statistics_button.classList = "";
  position_statistics_button.style = "display:inline; margin: 0 10px;";
  position_statistics_button.id = "";
  if(view_statistics_contents.length != 0){
    position_statistics_button.textContent = view_statistics_contents[0][0];
  }
  statistic_view_div.appendChild(position_statistics_button);

  const next_statistics_button = document.createElement("input");
  next_statistics_button.style = "display:inline";
  next_statistics_button.type = "button";
  next_statistics_button.name = "next_statistics";
  next_statistics_button.value = "Next";
  next_statistics_button.addEventListener("click", () => { view_statistics('forward') }, false);
  statistic_view_div.appendChild(next_statistics_button);

  const ruler = document.createElement("hr");
  statistic_view_div.appendChild(ruler);
}

/*HEADER SERVER--------------------------------------------------------------*/
function create_link(target){
  const login_bottom_element = document.getElementById(target);
  const server_header_content = `</br><hr></br>
    <p>GitHub project page: <a href="https://github.com/CrankyUnicorn/plain_node">https://github.com/CrankyUnicorn/plain_node</a></p>
    <br>`;
    const server_header_element  = document.createElement("div");

    server_header_element.innerHTML += server_header_content;
    login_bottom_element.appendChild(server_header_element);
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
  footer_title.textContent = "Pedro Costa 2021";
  footer_title.id = "footer_title";
  footer.appendChild(footer_title);
}



/*EVENTS-----------------------------------------------------------------------*/



/*FUNCTIONS--------------------------------------------------------------------*/
function add_event_view_posts() {
  
}
 