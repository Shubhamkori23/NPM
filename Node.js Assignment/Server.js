var http = require('http');

// var server = http.createServer(function(req, res){
//     console.log('request was made: ' +req.url); //by this we can access the request object
//     res.writeHead(200,{'Content-Type': 'text/plain'});   //200 is status code
//     res.end("success i'm listening from port:3000");
// });

// server.listen(3000, '127.0.0.1');
// console.log("Listening on PORT:3000");

var server = http.createServer();
var PORT = process.env.PORT || 3000;            // Set default port to 3000 if port is not defined
 
server.on('request', function (req, res) {
    res.end("Success, i'm listening from port:" + PORT);
});
 
server.listen(3000, function () {
    console.log('Listening on PORT: ' + PORT);
});