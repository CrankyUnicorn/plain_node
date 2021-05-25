const mysql = require('mysql');

const connection_data = mysql.createConnection({
  host: 'localhost',
  port: '33063',
  user: 'root',
  password: 'Omega.000!',
  database: 'test'
});


function disconnect_database() {
  connection_data.end(function (err) {
    if (err) {
      return console.error('error: ', err.message);
    }

    console.log('Disconnected from MySql Database');
  });
}

function query_database(query_string, callback) {
  connection_data.connect(function (err) {
    if (err) {
      return console.error('error: ', err.message);
    }

    connection_data.query(query_string, function (err, result) {
      if (err) throw err;
      disconnect_database();
      callback(result);
    });

    console.log('Connected to MySql Database');
  });
}

module.exports = {query_database};
