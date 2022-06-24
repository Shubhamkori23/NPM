var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' +req.url); //by this we can access the request object
    res.writeHead(200,{'Content-Type': 'text/html'});   //200 is status code

    var myReadStream = fs.createReadStream(__dirname + '/ReadableStream/Read.html', 'utf8');
    myReadStream.pipe(res);    //it will show Read.html file
});

server.listen(3000, '127.0.0.1');
console.log('hey, now listning to port 3000');