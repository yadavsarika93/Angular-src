// import module http
/*
 Methos of http module
 
 Method         Description
 createClient()	Deprecated. Creates a HTTP client
 createServer()	Creates an HTTP server
 get()          Sets the method to GET, and returns an object containing the user's request
 globalAgent	Returns the HTTP Agent
 request()      Returns an object containing the user's request
 */

var http = require('http');

// Create server which will run when client request at port 8080
http.createServer(
                  // This function gets executed every time
                  //The requestListener function handles requests from the user, and also the response back to the user
                  function (req, res)
                  {
                  // Send the HTTP header
                  // HTTP Status: 200 : OK
                  // Content Type: text/plain
                    res.writeHead(200, {'Content-Type': 'text/html'});
                  
                   // Send the response body as
                    res.end('Marvellous Infosystems');
                  
                  }).listen(2100);

// We can run our server using below URL http:// localhost:2100
