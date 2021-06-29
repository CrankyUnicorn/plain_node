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
  const sql = `SELECT * FROM header_content`;
  
  //could also have several parametersfunction(err, rows, fields)
  query_database(sql, function (results) {
    if (Object.keys(results)) {
      
      var results_array = new Array();

      for (var i = 0; i < results.length; i++) {
          
        results_array.push([results[i].id, results[i].title, results[i].subtitle, results[i].content, results[i].image_src]);
          
      }
        //console.log(results_array);
        callback(results_array);

    } else {
      console.log('err: frontpage_module_header');
    }
  });
}

  //gets body-> articles -> sections content from db
  function articles_sections(callback, limit) {
    var sql;
    if (limit === 'top_three') {
      sql = `SELECT * FROM article_section JOIN (SELECT id as id_user, name as user_name FROM user) as t2 ON t2.id_user = article_section.user_id ORDER BY id DESC LIMIT 3`;
    }else if (limit === 'all') {
      sql = `SELECT * FROM article_section JOIN (SELECT id as id_user, name as user_name FROM user) as t2 ON t2.id_user = article_section.user_id ORDER BY id DESC`;
    }else{
      sql = `SELECT * FROM article_section JOIN (SELECT id as id_user, name as user_name FROM user) as t2 ON t2.id_user = article_section.user_id  WHERE id=${limit} ORDER BY id DESC LIMIT 1`;
    }

    //could also have several parametersfunction(err, rows, fields)
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
          //console.log(results_array);
          callback(results_array);
  
      } else {
        console.log('err: frontpage_module_article');
      }
    });

}


module.exports = { navbar_anchors, header_contents, articles_sections }
