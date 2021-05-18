const http = require('http');
const fs = require('fs');

function onRequest(request, response){

  response.writeHead(200,{'Content-Type':'text/html'});
  
  fs.readFile('./html_start.html',null, function(error, data_start){
    if(error){
 
      response.writeHead(404);
      response.write('File not Found!')

    }else{

      fs.readFile('./html_end.html',null, function(error, data_end){
        if(error){
     
          response.writeHead(404);
          response.write('File not Found!')
    
        }else{
          
          const path_node_script = './server.js'

          fs.readFile(path_node_script ,null, function(error, data_server){
            if(error){
         
              response.writeHead(404);
              response.write('File not Found!')
        
            }else{
    
    
              response.write(`${data_start}\<h2\>${path_node_script}\</h2\>\<br\><code>${data_server}</code>${data_end}`);
            }
            response.end();
          });



        }
      });


    }
  });
  
  //response.write('Hello!');
  
}

http.createServer(onRequest).listen(3000);