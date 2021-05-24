const {query_database} = require('./connect_mysql_db'); 
  query_database("SELECT * FROM user WHERE email = 'abc@gmail.com' AND password = '123'", function(results){
    if(Object.keys(results).length == 1){
      console.log(results[0].email); 
    }else{
      console.log('err');
    }
  })
