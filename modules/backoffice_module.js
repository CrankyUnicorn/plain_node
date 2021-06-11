const { query_database } = require('./connect_mysql_db');
const sm = require('./Session_Manager');


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

module.exports = { login_user, logout_user}
