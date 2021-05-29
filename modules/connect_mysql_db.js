const mysql = require('mysql');


function query_database(query_string, callback) {

  /* creates a sql connection, got to be created 
  forcefully every time you connect because of nodejs */
  var connection_data = mysql.createConnection({
    host: 'localhost',
    port: '33063',
    user: 'root',
    password: 'Omega.000!',
    database: 'test'
  });

  //makes the actual connection
  connection_data.connect(function (err) {
    if (err) {
      return console.error('error: ', err.message);
    }

    connection_data.query(query_string, function (err, result) {
      if (err) throw err;

      //end and cleans mysql connection
      connection_data.end(function (err) {
        if (err) {
          return console.error('error: ', err.message);
        }
        console.log('Disconnected from MySql Database');
      });

      callback(result);
    });

    console.log('Connected to MySql Database');
  });
}

module.exports = {query_database};
