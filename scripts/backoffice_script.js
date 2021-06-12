

/*LOGIN---------------------------------------------------------------------*/
function create_login_page_content() {
  const main_div = document.getElementById("main_div");

  const title = document.createElement("h1");
  title.textContent = "Backoffice Login";
  main_div.appendChild(title);

  const form = document.createElement("form");
  form.setAttribute("method", "post");
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
  form.setAttribute("method", "post");
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



/*HEADER---------------------------------------------------------------------*/
function create_main_div(target){
  const main_div  = document.createElement("div");
  main_div.classList= "cranky_codeblock cranky_orange_glow";
  main_div.style= "";
  main_div.id= "main_div";
  target.appendChild(main_div);
}

/*HEADER SERVER--------------------------------------------------------------*/
const header_server = `<h2>This is an response page create by an Node app in the server.</h2>
    <h3>What follows is the script used to create this page.</h3>
    <br>
    <p>This Script relies heavily on the use of Async functions. Callback functions are mandatory to relly the data back once each function is finished. Due to this necessity the occurrence of nested Callback functions is an unfortunate byproduct. There are better ways to do compose the same script with the use of Promisses and Async Await methods but even this have their setback. Promisses and Async Await rely heavily on abstraction and so they create a level of obfuscation that can confuse the newcomers.</p>
    <br>
    <p>GitHub project page: <a href="https://github.com/CrankyUnicorn/plain_node">https://github.com/CrankyUnicorn/plain_node</a></p>
    <br>`

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
