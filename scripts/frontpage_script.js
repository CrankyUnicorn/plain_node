  /*VARIABLES----------------------------------------------------------------*/
  var main;

  /*ELEMENT BLOCKS-----------------------------------------------------------*/
  function create_frontpage_content() {
  }

  function create_frontpage_alert_bar() {
    //TOP MOST BAR - ALERT BAR
    const alert_bar = document.createElement("div");
    alert_bar.className = "cun_alert_bar";
    alert_bar.style = "";
    alert_bar.id = "alert_bar";
    body_tag.appendChild(alert_bar);

    const alert_bar_message = document.createElement("h4");
    alert_bar_message.className = "";
    alert_bar_message.style = "text-align:center";
    alert_bar_message.id = "alert_bar_message";
    alert_bar_message.textContent = "Resize the browser window to see the responsive effect";
    alert_bar.appendChild(alert_bar_message);
  }

  function create_frontpage_top_nav() {
    this.addEventListener('load', () => {
    
      send_xmlhttprequest('frontpage','get','navbar_anchor=all', (response)=>{
        //console.log(JSON.parse(response));
        navbar_anchors = JSON.parse(response);
        //recreates the top_nav menu since there may be new information relevant to ir
        create_frontpage_top_nav();
        //allow the menu to be turn visible after criation/recriation
        show_menu();
      })

      show_menu();
    },false);

    window.addEventListener('resize', () => {
    
      show_menu();
      
    },false);

    //TOP FIXED - NAV BAR
    var top_navbar;
    
    let element_navbar = document.getElementById('top_navbar');

    if (element_navbar) {
      while (element_navbar.firstChild) {
        element_navbar.removeChild(element_navbar.firstChild);
      }
      top_navbar = element_navbar;
      
    }else{

      top_navbar = document.createElement("div");
      top_navbar.className = "cun_top_navbar cun_navbar";
      top_navbar.style = "";
      top_navbar.id = "top_navbar";
      body_tag.appendChild(top_navbar);
    }

    const top_navbar_under = document.createElement("div");
    top_navbar_under.className = "cun_top_navbar_under";
    top_navbar_under.style = "";
    top_navbar_under.id = "top_navbar_under";
    body_tag.appendChild(top_navbar_under);

    const top_navbar_container = document.createElement("div");
    top_navbar_container.className = "cun_navbar_container";
    top_navbar_container.style = "";
    top_navbar_container.id = "top_navbar_container";
    top_navbar.appendChild(top_navbar_container);

    //logo div
    const navbar_logo_container = document.createElement("div");
    navbar_logo_container.className = "cun_navbar_logo_container cun_left";
    navbar_logo_container.style = "";
    navbar_logo_container.id = "navbar_logo_container";
    top_navbar_container.appendChild(navbar_logo_container);

    const top_navbar_message = document.createElement("a");
    top_navbar_message.className = "cun_navbar_logo_text cun_left";
    top_navbar_message.style = "text-align:left;";
    top_navbar_message.id = "top_navbar_message";
    top_navbar_message.textContent = "DevLog";
    navbar_logo_container.appendChild(top_navbar_message);

    //little 3 bar button to display menu items under 720px w
    const navbar_logo_container_button = document.createElement("button");
    navbar_logo_container_button.className = "cun_navbar_logo_container_button cun_right";
    navbar_logo_container_button.style = "";
    navbar_logo_container_button.id = "navbar_logo_container_button";
    navbar_logo_container_button.addEventListener("click", () => { show_hide_menu('navbar_buttons_container') });
    navbar_logo_container.appendChild(navbar_logo_container_button);

    const navbar_logo_container_button_icon = document.createElement("i");
    navbar_logo_container_button_icon.className = "fa fa-bars";
    navbar_logo_container_button_icon.style = "";
    navbar_logo_container_button_icon.id = "navbar_logo_container_button_icon";
    navbar_logo_container_button.appendChild(navbar_logo_container_button_icon);

    //nav buttons div
    const navbar_buttons_container = document.createElement("div");
    navbar_buttons_container.className = "cun_navbar_button_container cun_right_menu cun_hide collapse";
    navbar_buttons_container.style = "";
    navbar_buttons_container.id = "navbar_buttons_container";
    top_navbar_container.appendChild(navbar_buttons_container);

    //const topics = ['about', 'contacts', 'work', 'more'];
    var navbar_container_button = new Array();
    var navbar_container_button_anchor = new Array();

    var count_i = -1;

    for (let i = 0; i < navbar_anchors.length; i++) {

      navbar_container_button[i] = document.createElement("div");
      navbar_container_button[i].className = "cun_cursor_pointer";
      navbar_container_button[i].style = "display:inline-block";
      navbar_container_button[i].id = `navbar_container_button_${[i]}`;
      navbar_buttons_container.appendChild(navbar_container_button[i]);

      navbar_container_button_anchor[i] = document.createElement("a");
      navbar_container_button_anchor[i].className = "cun_navbar_container_button_anchor";
      navbar_container_button_anchor[i].style = "";
      navbar_container_button_anchor[i].id = `navbar_container_button_anchor${[i]}`;
      navbar_container_button_anchor[i].textContent = navbar_anchors[i][0];
      navbar_container_button_anchor[i].href = navbar_anchors[i][1];
      navbar_container_button[i].appendChild(navbar_container_button_anchor[i]);
    
      count_i = i;
    }

    //spacing
    if (count_i != -1) {
      navbar_container_button_anchor[count_i].style = "margin-right:40px";
    }

    const navbar_languages = [['EN','#'],['PT','#']];
    //languages
    for (let i = count_i; i < navbar_languages.length + count_i; i++) {

      navbar_container_button[i] = document.createElement("div");
      navbar_container_button[i].className = "cun_cursor_pointer";
      navbar_container_button[i].style = "display:inline-block";
      navbar_container_button[i].id = `navbar_container_button_${[i]}`;
      navbar_buttons_container.appendChild(navbar_container_button[i]);

      navbar_container_button_anchor[i] = document.createElement("a");
      navbar_container_button_anchor[i].className = "cun_navbar_container_button_anchor";
      navbar_container_button_anchor[i].style = "";
      navbar_container_button_anchor[i].id = `navbar_container_button_anchor${[i]}`;
      navbar_container_button_anchor[i].textContent = navbar_languages[i-count_i][0];
      navbar_container_button_anchor[i].href = navbar_languages[i-count_i][1];
      navbar_container_button[i].appendChild(navbar_container_button_anchor[i]);
    
    }

  }

  function create_frontpage_header() {
    const query_string = window.location.search;
    //console.log(query_string);
    const url_params = new URLSearchParams(query_string);
    const page_name = url_params.get('page');
    const blog_id = url_params.get('id');

    if(!blog_id){

      //get the required information about the selected blog by its id
      this.addEventListener('load', ()=>{
        //HEADER CONTENT
        send_xmlhttprequest('frontpage','get','header_content=all', (response)=>{
          //console.log(JSON.parse(response));
          header_contents = JSON.parse(response);
          create_frontpage_header();
          //show_menu();
          return;
        })
      }, false);

    }
    //HEADER TITLE BAR 
    var header_bar; //element
    var header_content_array = new Array();

    
    //populates array with currets selection of content
    if (blog_id || page_name === 'blog') {
      for (let i = 0; i < article_sections.length; i++) {
        //console.log(page_name ,"|", header_contents[i][1].toLowerCase());
        header_content_array = article_sections[0];
        break;
      }
    }else if (window.location.pathname.replace('/','') === 'frontpage' && !page_name) {
      if (header_contents.length>0) {
        header_content_array = header_contents[0];
      }

    }else{
      for (let i = 0; i < header_contents.length; i++) {
        let target_parameter = header_contents[i][5].substring(header_contents[i][5].indexOf('\?')+1);
        
        if (url_params.toString() === target_parameter) {
          //console.log(''.concat(url_params,' \| ', target_parameter));
          header_content_array = header_contents[i];
          break;
        }
      }
    }
    //console.log("header_a: ",article_sections);
    //console.log("header_b: ",header_content_array);
    //console.log("header_c: ",header_contents);
    

    let element_header = document.getElementById('header_bar');

    if (element_header) {
      while (element_header.firstChild) {
        element_header.removeChild(element_header.firstChild);
      }
      header_bar = element_header;
      
    }else{
      header_bar =  document.createElement("div");
      header_bar.className = "cun_header";
      header_bar.style = "";
      header_bar.id = "header_bar";
      body_tag.appendChild(header_bar);
    }
    
    if (header_content_array.length > 0) {
      
      const header_bar_image = document.createElement("img");
      header_bar_image.className = "cun_header_bar_image";
      header_bar_image.style = "";
      header_bar_image.id = "header_bar_image";
      header_bar_image.src = ''.concat("./resources/images/",header_content_array[4]);
      header_bar.appendChild(header_bar_image);

      const header_bar_title = document.createElement("h1");
      header_bar_title.className = "";
      header_bar_title.style = "";
      header_bar_title.id = "header_bar_title";
      header_bar_title.textContent = header_content_array[1];
      header_bar.appendChild(header_bar_title);
      
      const header_bar_subtitle = document.createElement("p");
      header_bar_subtitle.className = "";
      header_bar_subtitle.style = "";
      header_bar_subtitle.id = "header_bar_subtitle";
      header_bar_subtitle.textContent = header_content_array[2];
      header_bar.appendChild(header_bar_subtitle);
    }
    
  }

  function create_frontpage_main() {
     //MAIN
     if(!main){
      main = document.createElement("div");
      main.className = "cun_main";
      main.style = "";
      main.id = "main";
      body_tag.appendChild(main);
    }
  }

  function create_frontpage_home() {
    
    function get_search(target){
      send_xmlhttprequest('frontpage','get',`article_sections_search=${target}`, (response)=>{
        console.log(JSON.parse(response));
        article_sections = JSON.parse(response);
        call_frontpage_main();
        //show_menu();
      });
    }

    function get_all_posts(){
      send_xmlhttprequest('frontpage','get','article_sections=all', (response)=>{
        console.log(JSON.parse(response));
        article_sections = JSON.parse(response);
        call_frontpage_main();
        //show_menu();
      });
    }

    this.addEventListener('load', ()=>{
      //LOAD SECTIONS
      send_xmlhttprequest('frontpage','get','article_sections=top_three', (response)=>{
        console.log(JSON.parse(response));
        article_sections = JSON.parse(response);
        call_frontpage_main();
        //show_menu();
      });
    }, false);

    //article
    var article;
    
    let element_article = document.getElementById('article');

    if (element_article) {
      while (element_article.firstChild) {
        element_article.removeChild(element_article.firstChild);
      }
      article = element_article;
      
    }else{

      article = document.createElement("div");
      article.className = "cun_article";
      article.style = "";
      article.id = "article"
      main.appendChild(article);
    }

    //sidebar if needed

    //search bar
    const article_search_div = document.createElement("div");
    article_search_div.classList = "cun_article_search_div";
    article_search_div.style = "";
    article_search_div.id = "article_search_div";
    article.appendChild(article_search_div);
    
    const article_search_span = document.createElement("span");
    article_search_span.style = "font-family: initial !important;";
    article_search_div.appendChild(article_search_span);

    const article_search_icon = document.createElement("i");
    article_search_icon.classList = "cun_article_search_icon fas fa-search";
    article_search_icon.id = "article_search_icon";
    article_search_span.appendChild(article_search_icon);

    const article_search_input = document.createElement("input");
    article_search_input.classList = "cun_article_search_input";
    article_search_input.style = "";
    article_search_input.name = "";
    article_search_input.value = "";
    article_search_input.placeholder = "search";
    article_search_input.id = "article_search_input";
    article_search_div.appendChild(article_search_input);
    
    const article_search_button = document.createElement("button");
    article_search_button.classList = "button cun_article_search_button";
    article_search_button.style = "";
    article_search_button.textContent = "Search";
    article_search_button.id = "article_search_button";
    article_search_button.addEventListener('click', ()=>{ get_search(article_search_input.value); }, true);
    article_search_div.appendChild(article_search_button);

    //sections
    var section = new Array();
    var section_anchor = new Array();
    var section_title = new Array();
    var section_subtitle = new Array();
    var section_date_reg = new Array();
    var section_image_container = new Array();
    var section_image = new Array();
    var section_description = new Array();
    var section_link = new Array();

    for (let i = 0; i < article_sections.length; i++) {
      /*section start*/
      section[i] = document.createElement("div");
      section[i].className = "cun_section"; 
      section[i].style = "";
      section[i].id = `section${[i]}`
      article.appendChild(section[i]);

      section_anchor[i] = document.createElement("a");
      section_anchor[i].className = "cun_section_anchor";
      section_anchor[i].style = "";
      section_anchor[i].id = `section_anchor${[i]}`;
      section_anchor[i].addEventListener('click', () => {
        window.location.href = ''.concat("frontpage?page=blog",'&id=', article_sections[i][0]);
       }, false)
      section[i].appendChild(section_anchor[i]);

      section_title[i] = document.createElement("h1");
      section_title[i].className = "cun_section_title";
      section_title[i].style = "";
      section_title[i].id = `section_title${[i]}`;
      section_title[i].textContent = article_sections[i][1];
      section_anchor[i].appendChild(section_title[i]);

      section_subtitle[i] = document.createElement("h3");
      section_subtitle[i].className = "cun_section_subtitle";
      section_subtitle[i].style = "";
      section_subtitle[i].id = `section_subtitle${[i]}`;
      section_subtitle[i].textContent = article_sections[i][2];
      section_anchor[i].appendChild(section_subtitle[i]);

      section_date_reg[i] = document.createElement("h4");
      section_date_reg[i].className = "cun_section_date_reg";
      section_date_reg[i].style = "";
      section_date_reg[i].id = `section_date_reg${[i]}`;
      section_date_reg[i].textContent = article_sections[i][5];
      section_anchor[i].appendChild(section_date_reg[i]);

      var break_line = document.createElement("hr");
      break_line.classList = 'cun_section_hr';
      section[i].appendChild(break_line);
      
      /*
      section_image_container[i] = document.createElement("div");
      section_image_container[i].className = "cun_section_image_container";
      section_image_container[i].style = "";
      section_image_container[i].id = `section_image_container${[i]}`;
      section[i].appendChild(section_image_container[i]);
      
      section_image[i] = document.createElement("img");
      section_image[i].className = "cun_section_image";
      section_image[i].style = "";
      section_image[i].id = `section_image${[i]}`;
      section_image[i].src = ''.concat("./resources/images/",article_sections[i][4]);
      section_image_container[i].appendChild(section_image[i]);
      
      section_description[i] = document.createElement("p");
      section_description[i].className = "";
      section_description[i].style = "";
      section_description[i].id = `section_description${[i]}`;
      section_description[i].textContent = article_sections[i][3];
      section[i].appendChild(section_description[i]);

      section_link[i] = document.createElement("a");
      section_link[i].className = "cun_section_link";
      section_link[i].style = "";
      section_link[i].id = `section_link${[i]}`;
      section_link[i].textContent = "link";
      section_link[i].href = "./view/html/index";
      section[i].appendChild(section_link[i]);
      */
      /*section end*/
    }

    
    //see all posts button
    const section_show_all = document.createElement("div");
    section_show_all.className = "cun_section_show_all"; 
    section_show_all.id = `section_show_all`
    article.appendChild(section_show_all);    
    
    if (article_sections.length<4) {
      const section_show_all_button = document.createElement("button");
      section_show_all_button.className = "cun_section_show_all_button"; 
      section_show_all_button.id = `section_show_all_button`;
      section_show_all_button.type = 'button';
      section_show_all_button.innerText = 'All Posts';
      section_show_all_button.addEventListener('click',()=>{ get_all_posts();},false); 
      section_show_all.appendChild(section_show_all_button);  
    }

    //sidebar if needed
  }

  function create_frontpage_about(){
    const query_string = window.location.search;
    //console.log(query_string);
    const url_params = new URLSearchParams(query_string);
    const page_name = url_params.get('page');

    if(header_contents.length==0){

      //get the required information about the selected blog by its id
      this.addEventListener('load', ()=>{
        //HEADER CONTENT
        send_xmlhttprequest('frontpage','get','header_content=all', (response)=>{
          //console.log(JSON.parse(response));
          header_contents = JSON.parse(response);
          create_frontpage_about();
          //show_menu();
        })
      }, false);
      return;
    }

    var index = -1;
    for (let i = 0; i < header_contents.length; i++) {
      let target_parameter = header_contents[i][5].substring(header_contents[i][5].indexOf('\?')+1);
        
      if (url_params.toString() === target_parameter) {
        index = i;
        break;
      }
    }

    const element_about = document.getElementById("about_div");

    
    var about_div;

    if (!element_about) {
      
       about_div = document.createElement("div");
       about_div.className = "cun_about_div"; 
       about_div.style = "";
       about_div.id = `about_div`;
       main.appendChild(about_div);

    }else{
      while (element_about.firstChild) {
        element_about.removeChild(element_about.firstChild);
      }
      about_div = element_about;
    }

    //console.log(header_contents);
    const about_text = document.createElement("div");
    about_text.className = "cun_about_text"; 
    about_text.style = "";
    about_text.id = `about_title`;
    about_text.innerHTML = header_contents[index][3];
    about_div.appendChild(about_text);
  }

  function create_frontpage_contact(reply){
    
    function post_contact_message(name, email, message){
      send_xmlhttprequest('frontpage','post',`contact=all&name=${name}&email=${email}&message=${message}`, (response)=>{
        console.log(JSON.parse(response));
        let new_reply = JSON.parse(response);
        create_frontpage_contact(new_reply);
        //show_menu();
      })
    }


    const query_string = window.location.search;
    //console.log(query_string);
    const url_params = new URLSearchParams(query_string);
    const page_name = url_params.get('page');

    if(header_contents.length==0){

      //get the required information about the selected blog by its id
      this.addEventListener('load', ()=>{
        //HEADER CONTENT
        send_xmlhttprequest('frontpage','get','header_content=all', (response)=>{
          //console.log(JSON.parse(response));
          header_contents = JSON.parse(response);
          create_frontpage_contact();
          //show_menu();
        })
      }, false);
      return;
    }

    var index = -1;
    for (let i = 0; i < header_contents.length; i++) {
      let target_parameter = header_contents[i][5].substring(header_contents[i][5].indexOf('\?')+1);
        
      if (url_params.toString() === target_parameter) {
        index = i;
        break;
      }
    }

    const element_contact = document.getElementById("contact_div");

    var contact_div;

    if (!element_contact) {
      
      contact_div = document.createElement("div");
      contact_div.className = "cun_contact_div"; 
      contact_div.style = "";
      contact_div.id = `contact_div`;
      main.appendChild(contact_div);

    }else{
      while (element_contact.firstChild) {
        element_contact.removeChild(element_contact.firstChild);
      }
      contact_div = element_contact;
    }


    
    //if message is send with success
    if(reply){
      const contact_text = document.createElement("div");
      contact_text.className = "cun_about_text"; 
      contact_text.style = "";
      contact_text.id = `contact_text`;
      contact_text.innerHTML = `<br><br><h3>Message send with ${reply}!</h3><br><br>`;
      contact_div.appendChild(contact_text);

      const go_back_button_div = document.createElement("div");
      go_back_button_div.className = "cun_submit_button_div"; 
      go_back_button_div.id = `go_back_button_div`;
      contact_div.appendChild(go_back_button_div);  

      const go_back_button = document.createElement("button");
      go_back_button.className = "cun_section_show_all_button"; 
      go_back_button.id = `go_back_button`;
      go_back_button.type = 'button';
      go_back_button.innerText = 'Go Back';
      go_back_button.addEventListener('click',()=>{ window.location.href = "./frontpage" },false); 
      go_back_button_div.appendChild(go_back_button);
      return;
    }


    const contact_text = document.createElement("div");
    contact_text.className = "cun_about_text"; 
    contact_text.style = "";
    contact_text.id = `contact_text`;
    contact_text.innerHTML = header_contents[index][3];
    contact_div.appendChild(contact_text);
    
    const contact_div_form = document.createElement("div");
    contact_div_form.className = "cun_contact_div_form"; 
    contact_div_form.style = "";
    contact_div_form.id = `contact_div_form`;
    contact_div.appendChild(contact_div_form);

    const contact_form = document.createElement("form");
    contact_form.className = "cun_contact_form"; 
    contact_form.method = "";
    contact_form.action = "";
    contact_form.id = `contact_form`;
    contact_div_form.appendChild(contact_form);

    const contact_array = ["name","email","message"];
    const contact_array_names = ["Name","E-mail","Message"];
    const contact_array_element = ["input","input","textarea"];
    var contact_label = new Array();
    var contact_input = new Array();

    for (let i = 0; i < contact_array.length; i++) {
      contact_label[i] = document.createElement("label");
      contact_label[i].className = "cun_contact_label"; 
      contact_label[i].id = `contact_input_label${[i]}`;
      contact_label[i].innerText = contact_array_names[i];
      contact_form.appendChild(contact_label[i]);
      
      contact_input[i] = document.createElement(contact_array_element[i]);
      contact_input[i].className = "cun_contact_input"; 
      contact_input[i].type = "text";
      contact_input[i].name = contact_array;
      contact_input[i].value = "";
      contact_input[i].placeholder = contact_array_names[i].toLowerCase();
      contact_input[i].id = `contact_input_name${[i]}`;
      contact_label[i].appendChild(contact_input[i]);
    }

    //see all posts button
    const submit_button_div = document.createElement("div");
    submit_button_div.className = "cun_submit_button_div"; 
    submit_button_div.id = `submit_button_div`;
    contact_div_form.appendChild(submit_button_div);    
    
    const submit_button_div_button = document.createElement("button");
    submit_button_div_button.className = "cun_section_show_all_button"; 
    submit_button_div_button.id = `submit_button_div_button`;
    submit_button_div_button.type = 'button';
    submit_button_div_button.innerText = 'Send';
    submit_button_div_button.addEventListener('click',()=>{ post_contact_message(contact_input[1].value, contact_input[1].value, contact_input[2].value);},false); 
    submit_button_div.appendChild(submit_button_div_button);  
  
  }
  
  function create_frontpage_blog(index){
    
    var section_ids = new Array();

    send_xmlhttprequest('frontpage','get',`article_sections=all_ids`, (response)=>{
      //console.log(JSON.parse(response));
      section_ids = JSON.parse(response);
      console.log('section_ids: ',section_ids);
      blog_process();
    });
    
    function blog_process(){
      var blog_id;
      
      //check if there is a index reference passed for this function
      //check if there is a id reference passed thought the URL query
      if(index){
        blog_id = section_ids[index];
      }else{
        const query_string = window.location.search;
        //console.log(query_string);
        const url_params = new URLSearchParams(query_string);
        blog_id = url_params.get('id');
        
        if (!blog_id) {
          blog_id = section_ids[0]
          console.log("blog_id: ", blog_id);
        }
      }

      //functions to send this function to load/read other post
      //index [0] is the most recent chronologically
      function get_previous_post(){
        if(index < section_ids.length ){
          blog_id = section_ids[index+1];
        }else{
          blog_id = section_ids[index];
        }
        get_article_selection(blog_id);
      }
      function get_next_post(){
        
        if(index > 0){
          blog_id = section_ids[index-1];
        }else{
          blog_id = section_ids[index];
        }
        get_article_selection(blog_id);
      }

      //get the required information about the selected blog by its id
      function get_article_selection(inner_blog_id) {
        if(inner_blog_id){
          let new_index = find_index(blog_id)
          console.log("new_index: ",new_index);
          send_xmlhttprequest('frontpage','get',`article_sections=id&id=${inner_blog_id}`, (response)=>{
            //console.log(JSON.parse(response));
            article_sections = JSON.parse(response);
            create_frontpage_blog(new_index);
            console.log("blog: ",article_sections);
          });
        }
      }

      function find_index(blog_id_value){
        for (let i = 0; i < section_ids.length; i++) {
          if( section_ids[i] == parseInt(blog_id_value) ){
            return i;
          }
        };
      }
      
      //check if the blog article sections is already stored or not if not get it
      if (article_sections.length>0) {
        //console.log(parseInt(blog_id) ,'|', article_sections[0][0]);
        /*check if the single returned value in the article_sections 
        is the one passed by the URL query*/
        if (parseInt(blog_id) !== article_sections[0][0]) {
          //console.log(article_sections);
          get_article_selection( blog_id );
          return;
        }

        //console.log("recreate header");
        create_frontpage_header( );
        
      }else{
        get_article_selection( blog_id );
        return;
      }

      const element_blog = document.getElementById("blog_div");

      var blog_div;

      if (!element_blog) {
        
        blog_div = document.createElement("div");
        blog_div.className = "cun_blog_div"; 
        blog_div.style = "";
        blog_div.id = `blog_div`;
        main.appendChild(blog_div);

      }else{
        while (element_blog.firstChild) {
          element_blog.removeChild(element_blog.firstChild);
        }
        blog_div = element_blog;
      }

      
      //HTML ELEMENTS  
        const section = document.createElement("div");
        section.className = "cun_blog_section"; 
        section.style = "";
        section.id = `section`
        blog_div.appendChild(section);

        /*
        section_title = document.createElement("h2");
        section_title.className = "";
        section_title.style = "";
        section_title.id = `section_title`;
        section_title.textContent = article_sections[0][1];
        section.appendChild(section_title);

        section_subtitle = document.createElement("h5");
        section_subtitle.className = "";
        section_subtitle.style = "";
        section_subtitle.id = `section_subtitle`;
        section_subtitle.textContent = article_sections[0][2];
        section.appendChild(section_subtitle);

        section_image_container = document.createElement("div");
        section_image_container.className = "cun_section_image_container";
        section_image_container.style = "";
        section_image_container.id = `section_image_container`;
        section.appendChild(section_image_container);
        
        section_image = document.createElement("img");
        section_image.className = "cun_section_image";
        section_image.style = "";
        section_image.id = `section_image`;
        section_image.src = ''.concat("./resources/images/",article_sections[0][4]);
        section_image_container.appendChild(section_image);
        */

        const section_description_div = document.createElement("div");
        section.appendChild(section_description_div);

        function script_find_eval(content_html_reponse){
          const end_text_index = content_html_reponse.indexOf('<!--end_text-->');
          const start_script_index = content_html_reponse.indexOf('//script');
          const end_script_index = content_html_reponse.indexOf('//end_script');
          var text = '';
          text = content_html_reponse.substring(0, end_text_index);
          if(!text){
            text = content_html_reponse;
          }          
          const script =content_html_reponse.substring(start_script_index, end_script_index);
          //console.log("text: ",text);
          //console.log("script: ",script);
          if(script){
            eval(script);
          }
          return text;
        }

        const section_description = document.createElement("p");
        section_description.className = "";
        section_description.style = "";
        section_description.id = `section_description`;
        section_description.innerHTML = script_find_eval(article_sections[0][3]);
        section_description_div.appendChild(section_description);

        const section_link_div = document.createElement("div");
        section_link_div.classList = "cun_section_return";
        section.appendChild(section_link_div);

        const section_link = document.createElement("a");
        section_link.className = "cun_section_link  cun_blog_button_bottom";
        section_link.style = "text-decoration:underline";
        section_link.id = `section_link`;
        section_link.textContent = "Go back to Home";
        section_link.href = "./frontpage";
        section_link_div.appendChild(section_link);
        
      
      //see previous and next post button
      const blog_browser = document.createElement("div");
      blog_browser.className = "cun_blogs_browser"; 
      blog_browser.id = `section_show_all`
      section.appendChild(blog_browser);

      if( index < section_ids.length-1 ){
        const previous_post_button = document.createElement("button");
        previous_post_button.className = "cun_section_show_all_button"; 
        previous_post_button.id = `previous_post_button`;
        previous_post_button.type = 'button';
        previous_post_button.innerText = 'Previous';
        previous_post_button.addEventListener('click',()=>{ get_previous_post();},false); 
        blog_browser.appendChild(previous_post_button); 
      }

      if(index > 0 ){
        const next_post_button = document.createElement("button");
        next_post_button.className = "cun_section_show_all_button"; 
        next_post_button.style = "margin: 0; margin-left: 5px;"; 
        next_post_button.id = `next_post_button`;
        next_post_button.type = 'button';
        next_post_button.innerText = 'Next';
        next_post_button.addEventListener('click',()=>{ get_next_post();},false); 
        blog_browser.appendChild(next_post_button); 
      } 
    }
  }

  function create_frontpage_footer() {
    //FOOTER
    const footer = document.createElement("div");
    footer.className = "cun_footer";
    footer.style = "";
    footer.id = "footer";
    body_tag.appendChild(footer);

    const links = ['linkedin', 'github'];
    const links_style = ['fab fa-linkedin fa-2x', 'fab fa-github-square fa-2x'];
    const links_href = ['https://www.linkedin.com/in/pedro-costa-298755178/', 'https://github.com/CrankyUnicorn/'];
    var footer_links = new Array();
    var footer_links_icons = new Array();

    for (let i = 0; i < links.length; i++) {
      footer_links[i] = document.createElement("a");
      footer_links[i].className = "cun_right";
      footer_links[i].style = "";
      footer_links[i].id = `footer_links_${[i]}`;
      footer_links[i].textContent = "";
      footer_links[i].href = links_href[i];
      footer.appendChild(footer_links[i]);

      footer_links_icons[i] = document.createElement("i");
      footer_links_icons[i].className = links_style[i];
      footer_links_icons[i].style = "";
      footer_links_icons[i].id = `footer_links_icons_${[i]}`;
      footer_links_icons[i].textContent = "";
      footer_links[i].appendChild(footer_links_icons[i]);
    }

    const footer_title = document.createElement("h5");
    footer_title.className = "";
    footer_title.style = "";
    footer_title.id = "footer_title";
    footer_title.textContent = "Pedro Costa 2021";
    footer.appendChild(footer_title);
  }

  function create_frontpage_side_bar() {
    //RIGHT LEFT BAR
    const side_bar_right = document.createElement("div");
    side_bar_right.className = "cun_side_bar";
    side_bar_right.style = "";
    side_bar_right.id = "side_bar_right"
    main.appendChild(side_bar_right);
  }


  /*UTILITARIAN FUNCTIONS----------------------------------------------------*/

  function call_frontpage_main(){
    const query_string = window.location.search;
    //console.log(query_string);
    const url_params = new URLSearchParams(query_string);
    const page_name = url_params.get('page')

    create_frontpage_main();

    if (page_name === 'home') {
      create_frontpage_home();

    }else if (page_name === 'about') {
      
      create_frontpage_about();
      
    }else if (page_name === 'contact') {
      create_frontpage_contact();
      
    }else if (page_name === 'blog') {
      create_frontpage_blog();
      
    }else{
      create_frontpage_home();
    }
  }
  
  function show_menu(){

    let element_a = document.getElementById('navbar_buttons_container');

    if (element_a) {
      if (window.innerWidth > 720) {
        if (element_a.classList.contains('collapse')) {
          element_a.classList.remove('cun_hide', 'collapse')
        }
      } else {
        if (!element_a.classList.contains('collapse')) {
          element_a.classList.add('cun_hide', 'collapse')
        }
      }
    }

  }

  function show_hide_menu(menu_bar_id) {
    let element_a = document.getElementById(menu_bar_id);
    if (element_a) {
      if (element_a.classList.contains('collapse')) {
        element_a.classList.remove('cun_hide', 'collapse')
      } else {
        element_a.classList.add('cun_hide', 'collapse')
      }
    }
  }
  
  function navbar_scroll_event(navbar_id) {
    var previousTop = window.pageYOffset;

    window.addEventListener("scroll", (event) => {

      let element_a = document.getElementById(navbar_id);
      let element_b = document.getElementById(''.concat(navbar_id, '_under'));

      const MQL = 720; //window width in x pixels
      let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      //console.log(vw);
      let headerHeight = element_a.offsetHeight;

      if (element_a && vw > MQL) {
        let currentTop = window.pageYOffset;
        //check if user is scrolling up
        if (currentTop < previousTop) {
          //if scrolling up...
          if (currentTop > 0) {
            element_a.classList.remove('disolve');
            element_a.classList.add('is-fixed');
            element_a.classList.remove('is-none');
            element_b.classList.add('is-block');

          } else {
            element_a.classList.remove('disolve');
            element_a.classList.remove('is-fixed');
            element_a.classList.remove('is-none');
            element_b.classList.remove('is-block');
          }

          //if scrolling down...
        } else if (currentTop > previousTop) {
          element_a.classList.add('is-none');
          element_b.classList.add('is-block');

          if (currentTop > headerHeight || false) {
            element_a.classList.add('is-none');
            element_b.classList.add('is-block');
          }

        }
        previousTop = currentTop;
      } else {
        element_a.classList.remove('is-fixed');
        element_a.classList.remove('is-none');
        element_b.classList.remove('is-block');
      }

    });
  }
 