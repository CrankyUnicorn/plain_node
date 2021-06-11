const { query_database } = require('./connect_mysql_db');

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


function header_contents(callback) {
  const sql = `SELECT * FROM header_content`;
  
  //could also have several parametersfunction(err, rows, fields)
  query_database(sql, function (results) {
    if (Object.keys(results)) {
      
      var results_array = new Array();

      for (var i = 0; i < results.length; i++) {
          
        results_array.push([results[i].image_src, results[i].title, results[i].subtitle]);
          
      }
        //console.log(results_array);
        callback(results_array);

    } else {
      console.log('err: frontpage_module_header');
    }
  });

}


module.exports = { navbar_anchors, header_contents }
