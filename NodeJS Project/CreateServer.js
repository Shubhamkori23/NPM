var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url); //by this we can access the request object
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('Hey, now listning to port 3000');

//check chrome with 127.0.0.1:3000 and if we type 127.0.0.1:3000/hey/hello the result will same
//and also check the inspect -> Network -> Hearder, preview and Response