
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
    top_navbar_message.textContent = "CrankyUnicorn";
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
    //HEADER TITLE BAR 
    var header_bar;
    
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
    
    const header_bar_image = document.createElement("img");
    header_bar_image.className = "cun_header_bar_image";
    header_bar_image.style = "";
    header_bar_image.id = "header_bar_image";
    header_bar_image.src = "./resources/images/home_bg.jpg";
    header_bar.appendChild(header_bar_image);

    if (header_contents.length > 0) {
      
      const header_bar_title = document.createElement("h1");
      header_bar_title.className = "";
      header_bar_title.style = "";
      header_bar_title.id = "header_bar_title";
      header_bar_title.textContent = header_contents[0][1];
      header_bar.appendChild(header_bar_title);
      
      const header_bar_subtitle = document.createElement("p");
      header_bar_subtitle.className = "";
      header_bar_subtitle.style = "";
      header_bar_subtitle.id = "header_bar_subtitle";
      header_bar_subtitle.textContent = header_contents[0][2];
      header_bar.appendChild(header_bar_subtitle);
    }
    
  }

  //#region navbar
  function create_frontpage_navbar() {
    //NAVIGATION BAR 
    const navbar = document.createElement("div");
    navbar.className = "cun_navbar";
    navbar.style = "";
    navbar.id = "navbar";
    body_tag.appendChild(navbar);

    const navbar_container = document.createElement("div");
    navbar_container.className = "cun_navbar_container cun_right";
    navbar_container.style = "";
    navbar_container.id = "navbar_container";
    navbar.appendChild(navbar_container);

    const topics = ['about', 'contacts', 'work', 'more'];
    var navbar_container_button = new Array();
    var navbar_container_button_content = new Array();

    for (let i = 0; i < topics.length; i++) {

      navbar_container_button[i] = document.createElement("div");
      navbar_container_button[i].className = "cun_navbar_container_button";
      navbar_container_button[i].style = "";
      navbar_container_button[i].id = `navbar_container_button_${[i]}`;
      navbar_container.appendChild(navbar_container_button[i]);

      navbar_container_button_content[i] = document.createElement("p");
      navbar_container_button_content[i].className = "cun_navbar_container_button_content";
      navbar_container_button_content[i].style = "";
      navbar_container_button_content[i].id = `navbar_container_button_content_${[i]}`;
      navbar_container_button_content[i].textContent = topics[i];
      navbar_container_button[i].appendChild(navbar_container_button_content[i]);
    }
  }
  //#endregion

  function create_frontpage_main() {
    //MAIN
    const main = document.createElement("div");
    main.className = "cun_main";
    main.style = "";
    main.id = "main";
    body_tag.appendChild(main);

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

    var section = new Array();
    var section_title = new Array();
    var section_subtitle = new Array();
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

    section_title[i] = document.createElement("h2");
    section_title[i].className = "";
    section_title[i].style = "";
    section_title[i].id = `section_title${[i]}`;
    section_title[i].textContent = article_sections[i][0];
    section[i].appendChild(section_title[i]);

    section_subtitle[i] = document.createElement("h5");
    section_subtitle[i].className = "";
    section_subtitle[i].style = "";
    section_subtitle[i].id = `section_subtitle${[i]}`;
    section_subtitle[i].textContent = article_sections[i][1];
    section[i].appendChild(section_subtitle[i]);

    section_image_container[i] = document.createElement("div");
    section_image_container[i].className = "cun_section_image_container";
    section_image_container[i].style = "";
    section_image_container[i].id = `section_image_container${[i]}`;
    section[i].appendChild(section_image_container[i]);

    section_image[i] = document.createElement("img");
    section_image[i].className = "cun_section_image";
    section_image[i].style = "";
    section_image[i].id = `section_image${[i]}`;
    section_image[i].src = "./resources/images/post_bg_id_7.jpg";
    section_image_container[i].appendChild(section_image[i]);

    section_description[i] = document.createElement("p");
    section_description[i].className = "";
    section_description[i].style = "";
    section_description[i].id = `section_description${[i]}`;
    section_description[i].textContent = article_sections[i][2];
    section[i].appendChild(section_description[i]);

    section_link[i] = document.createElement("a");
    section_link[i].className = "cun_section_link";
    section_link[i].style = "";
    section_link[i].id = `section_link${[i]}`;
    section_link[i].textContent = "link";
    section_link[i].href = "./view/html/index";
    section[i].appendChild(section_link[i]);
    /*section end*/
    }

    //sidebar if needed
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

  /*EVENTS---------------------------------------------------------------------*/
 

  window.addEventListener('load', () => {
    //NAVBAR ANCHOR
    send_xmlhttprequest('db_request','get','navbar_anchor=all', (response)=>{
      //console.log(JSON.parse(response));
      navbar_anchors = JSON.parse(response);
      create_frontpage_top_nav();
      show_menu();
    })
    
    //HEADER CONTENT
    send_xmlhttprequest('db_request','get','header_content=all', (response)=>{
      //console.log(JSON.parse(response));
      header_contents = JSON.parse(response);
      create_frontpage_header();
      //show_menu();
    })

    //LOAD SECTIONS
    send_xmlhttprequest('db_request','get','article_sections=top_three', (response)=>{
      //console.log(JSON.parse(response));
      article_sections = JSON.parse(response);
      create_frontpage_main();
      //show_menu();
    })

  },false);


  //make navbar visible on load
  window.addEventListener('load', () => {
    
    show_menu();

  },false);

  //make navbar visible on resize
  window.addEventListener('resize', () => {
    
    show_menu();
    
  },false);

  /*FUNCTIONS----------------------------------------------------------------*/
  //#region FUNCTIONS(){}

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
  //#endregion