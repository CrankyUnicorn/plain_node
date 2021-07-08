const { query_database } = require('./connect_mysql_db');
const dateFormat = require('dateformat');

//gets navbar anchor data from db
function navbar_anchors(callback) {
  const sql = `SELECT * FROM navbar_anchor`;
  
  //could also have several parametersfunction(err, rows, fields)
  query_database(sql, function (results) {
    if (Object.keys(results)) {
      
      var results_array = new Array();

      for (var i = 0; i < results.length; i++) {
        //for (obj of results[i]) {

          //console.log(results[i].anchor_text);
          //console.log(results[i].anchor_href);
          
          results_array.push([results[i].anchor_text, results[i].anchor_href]);
          //}
        }
        //console.log(results_array);
        callback(results_array);

    } else {
      console.log('err: frontpage_module_navbar');
    }
  });

}

//gets header contents from db
function header_contents(callback) {
  const sql = `SELECT t2.anchor_href, t3.id, t3.image_src, t3.title, t3.subtitle, t3.content FROM navbar_header t1 JOIN navbar_anchor t2 JOIN header_content t3 ON t1.navbar_id = t2.id AND t1.header_id = t3.id`;
  
  //could also have several parametersfunction(err, rows, fields)
  query_database(sql, function (results) {
    if (Object.keys(results)) {
      
      var results_array = new Array();

      for (var i = 0; i < results.length; i++) {
          
        results_array.push([results[i].id, results[i].title, results[i].subtitle, results[i].content, results[i].image_src, results[i].anchor_href] );
          
      }
        //console.log(results_array);
        callback(results_array);

    } else {
      console.log('err: frontpage_module_header');
    }
  });
}

  //gets body-> articles -> sections content from db
  function articles_sections(callback, value) {
    var sql;
    if (value === 'top_three') {
      sql = `SELECT * FROM article_section JOIN (SELECT id as id_user, name as user_name FROM user) as t2 ON t2.id_user = article_section.user_id ORDER BY id DESC LIMIT 3`;
    }else if (value === 'all') {
      sql = `SELECT * FROM article_section JOIN (SELECT id as id_user, name as user_name FROM user) as t2 ON t2.id_user = article_section.user_id ORDER BY id DESC`;
    }else if (value === 'return_ids') {
      sql = `SELECT id FROM article_section ORDER BY id DESC`;
    }else{
      sql = `SELECT * FROM article_section JOIN (SELECT id as id_user, name as user_name FROM user) as t2 ON t2.id_user = article_section.user_id WHERE id=${value} ORDER BY id DESC LIMIT 1`;

      const visit_sql = `INSERT INTO section_statistic_visit (section_id) VALUES ('${value}')`;
      query_database(visit_sql, function () {});
    }

    //could also have several parametersfunction(err, rows, fields)
    query_database(sql, function (results) {
      if (Object.keys(results)) {
        var results_array = new Array();
        var registry = '';
        var date = new Date();

        for (var i = 0; i < results.length; i++) {
          if (value !== 'return_ids') {
          date = results[i].date_reg;
          registry = '';
          registry += 'Posted by'.concat(' ', results[i].user_name,', ');
          registry += dateFormat(date, "GMT:mmmm dd yyyy");
          results_array.push([results[i].id,results[i].title, results[i].subtitle, results[i].content,results[i].image, registry]);
        
          }else{
            results_array.push(results[i].id);
          }
        }
          //console.log(results_array);
          callback(results_array);
  
      } else {
        console.log('err: frontpage_module_article');
      }
    });

}

//SEARCH FOR THE MATCHING SECTION
function search_sections(callback, search_target){
  const sql = `SELECT * FROM article_section JOIN (SELECT id as id_user, name as user_name FROM user) as t2 ON t2.id_user = article_section.user_id WHERE title LIKE '%${search_target}%' OR subtitle LIKE '%${search_target}%' OR content LIKE '%${search_target}%' GROUP BY id ORDER BY id DESC`;
  //console.log("query: ", sql);
  query_database(sql, function (results) {
    if (Object.keys(results)) {
      var results_array = new Array();
        var registry = '';
        var date = new Date();

        for (var i = 0; i < results.length; i++) {
          
          date = results[i].date_reg;
          registry = '';
          registry += 'Posted by'.concat(' ', results[i].user_name,', ');
          registry += dateFormat(date, "GMT:mmmm dd yyyy");
          results_array.push([results[i].id,results[i].title, results[i].subtitle, results[i].content,results[i].image, registry]);
         
        }
      callback(results_array);
    } else {
      console.log('err: frontpage_module_home_search');
    }
  })
}

//INSERT CONTACT
function insert_contact(callback, name, email, message){
  const sql = `INSERT INTO contact_message (name, email, message) VALUES ('${name}','${email}','${message}')`;

  query_database(sql, function (results) {
    if (Object.keys(results)) {

      callback('success');

    } else {
      console.log('err: frontpage_module_contact');
    }
  });
}


module.exports = { navbar_anchors, header_contents, articles_sections, insert_contact, search_sections }
