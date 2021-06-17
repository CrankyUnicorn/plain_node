const { query_database } = require('./connect_mysql_db');
const sm = require('./Session_Manager');


//INSERT POST
function insert_post(title, subtitle, content,callback) {
  const sql = `INSERT INTO article_section ( title, subtitle, content) VALUES ( '${title}', '${subtitle}', '${content}')`;
  query_database(sql, function (results) {
    if (Object.keys(results).length != 0) {

      //console.log("success: insert_post");
      callback();
      
    } else {
      console.log('err: backoffice_module_insert');
    }
  });
}


//UPDATE POST
function update_post(id, title, subtitle, content, callback) {
  const sql = `UPDATE article_section SET title = '${title}', subtitle = '${subtitle}', content = '${content}' WHERE id = '${id}' LIMIT 1`;
  query_database(sql, function (results) {
    if (Object.keys(results).length != 0) {

      //console.log("success: update_post");
      callback();
      
    } else {
      console.log('err: backoffice_module_update');
    }
  });
}


//DELETE POST
function delete_post(id, callback) {
  const sql = `DELETE FROM article_section WHERE id = '${id}' LIMIT 1`;
  query_database(sql, function (results) {
    if (Object.keys(results).length != 0) {

      //console.log("success: delete_post");
      callback();
      
    } else {
      console.log('err: backoffice_module_delete');
    }
  });
}


//VIEW POST
function view_post(callback) {
  const sql = `SELECT * FROM article_section`;
  query_database(sql, function (results) {
    if (Object.keys(results).length != 0) {
      var results_data = new Array();
      for (let i = 0; i < results.length; i++) {
        results_data.push([results[i].id, results[i].title, results[i].subtitle, results[i].content]);
        
      }
      //console.log("success: view_post");
      callback(results_data);
      
    } else {
      console.log('err: backoffice_module_view');
    }
  });
}


function login_user(email, password, callback) {
  const sql = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`
  query_database(sql, function (results) {
    if (Object.keys(results).length == 1) {

      //console.log(results[0].email);
      //console.log(results[0].password);
      sm.setUser(0,{email: results[0].email, password: results[0].password})

      callback();
      
    } else {
      console.log('err: backoffice_module');
    }
  });
}


function logout_user() {
  sm.deleteUser(0)

}

module.exports = { insert_post, update_post, delete_post, view_post, login_user, logout_user}
