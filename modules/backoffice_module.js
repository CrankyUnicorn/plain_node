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

//DELETE MESSAGE
function delete_message(id, callback) {
  const sql = `DELETE FROM contact_message WHERE id = '${id}' LIMIT 1`;
  query_database(sql, function (results) {
    if (Object.keys(results).length != 0) {

      //console.log("success: delete_message");
      callback();
      
    } else {
      console.log('err: backoffice_module_delete_message');
    }
  });
}

//CHECK MESSAGE
function check_message(id, callback) {
  const sql = `UPDATE contact_message SET checked = 1 WHERE id = '${id} ' LIMIT 1`;
  query_database(sql, function (results) {
    if (Object.keys(results).length != 0) {

      //console.log("success: delete_message");
      callback();
      
    } else {
      console.log('err: backoffice_module_delete_message');
    }
  });
}

//VIEW POST
function view_post(page,multiple,callback) {
  //const current = 0;
  //const multiple = 10;
  const start_position = (page-1)*multiple;
  const end_position = (page)*multiple;
  
  var sql = `SELECT count(*) as total FROM article_section`;
  query_database(sql, function (total_results) {

    const total_pages = Math.ceil(parseFloat(total_results[0].total / multiple));

    sql = `SELECT * FROM article_section ORDER BY id DESC LIMIT ${start_position},${end_position}`;
    query_database(sql, function (results) {
      if (Object.keys(results).length != 0) {
        var results_data = new Array();
        
        results_data.push([`page ${page} from ${total_pages}`, page, multiple, total_pages]);
        
        for (let i = 0; i < results.length; i++) {
          results_data.push([results[i].id, results[i].title, results[i].subtitle, results[i].content]);
          
        }
        //console.log("success: view_post");
        callback(results_data);
        
      } else {
        console.log('err: backoffice_module_view');
      }
    });
  });
}


//VIEW CONTACTS
function view_contacts(page, multiple, callback) {
  //const current = 0;
  //const multiple = 10;
  const start_position = (page-1)*multiple;
  const end_position = (page)*multiple;
  
  var sql = `SELECT count(*) as total FROM contact_message`;
  query_database(sql, function (total_results) {

    const total_pages = Math.ceil(parseFloat(total_results[0].total / multiple));

    sql = `SELECT * FROM contact_message ORDER BY id DESC LIMIT ${start_position},${end_position}`;
    query_database(sql, function (results) {
      if (Object.keys(results).length != 0) {
        var results_data = new Array();
        
        results_data.push([`page ${page} from ${total_pages}`, page, multiple, total_pages]);
        
        for (let i = 0; i < results.length; i++) {
          results_data.push([results[i].id, results[i].name, results[i].email, results[i].message, results[i].date_reg, results[i].checked]);
          
        }
        //console.log("success: view_post");
        callback(results_data);
        
      } else {
        console.log('err: backoffice_module_view');
      }
    });
  });
}

//VIEW STATISTICS view_statistics
function view_statistics(page, multiple, callback) {
  //const current = 0;
  //const multiple = 10;
  const start_position = (page-1)*multiple;
  const end_position = (page)*multiple;
  
  var sql = `SELECT COUNT(*) as total FROM (SELECT COUNT(section_id) as total FROM section_statistic_visit GROUP BY section_id) as t2`;
  query_database(sql, function (total_results) {
    const total_pages = Math.ceil(parseFloat(total_results[0].total / multiple));

    sql = `SELECT t1.title,t1.subtitle, t2.visits, t2.last_visit FROM article_section as t1 JOIN (SELECT section_id, COUNT(*) as visits, MAX(date_reg) as last_visit FROM section_statistic_visit GROUP BY section_id) as t2 ON t1.id = t2.section_id ORDER BY id DESC LIMIT ${start_position},${end_position}`;
    query_database(sql, function (results) {
      if (Object.keys(results).length != 0) {
        var results_data = new Array();
        
        results_data.push([`page ${page} from ${total_pages}`, page, multiple, total_pages]);
        
        for (let i = 0; i < results.length; i++) {
          results_data.push([results[i].title,results[i].subtitle, results[i].visits, results[i].last_visit]);
          
        }
        //console.log("success: view_post");
        callback(results_data);
        
      } else {
        console.log('err: backoffice_module_view');
      }
    });
  });
}

//USER LOGIN AND LOGOUT - AUTHENTICATION AND SHARED KEY----------------------*/
function login_user(email, password, callback) {
  const sql = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`
  query_database(sql, function (results) {
    if (Object.keys(results).length == 1) {

      //console.log(results[0].email);
      //console.log(results[0].password);
      sm.setUser(results[0].email, results[0].password)
      //console.info( "<KEY_REQUEST>: ", sm.getUserKey( results[0].email, results[0].password ) );
      callback( sm.getUserKey(results[0].email, results[0].password) );
      
    } else {
      console.log('err: backoffice_module');
    }
  });
}


function logout_user(session_key) {
  sm.deleteUser(session_key)

}

module.exports = { insert_post, update_post, delete_post, delete_message, check_message, view_post, login_user, logout_user, view_contacts, view_statistics}
