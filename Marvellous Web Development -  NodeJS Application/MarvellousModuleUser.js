var http = require('http');
var dt = require('./MarvellousModule');

http.createServer(function (req, res)
                  {
                  res.writeHead(200, {'Content-Type': 'text/html'});
                  res.write("Addition is: " + dt.Addition(10,1));
                  
                  res.write("Substraction is: " + dt.Substraction(10,1));
                  
                  res.write("Division is: " + dt.Division(10,1));
                  
                  res.write("Multiplication is: " + dt.Multiplication(10,1));
                  
                  res.end();
                  
                  }).listen(1001);
