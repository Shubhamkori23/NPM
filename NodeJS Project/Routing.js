var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' +req.url); //by this we can access the request object
    
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/ReadableStream/Read.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/ReadableStream/contact.html').pipe(res);
    }
    else if(req.url === '/api'){
        var myObj = {
            name : 'Shubham',
            age : 24,
            job : 'Software Engineer'
        };
        res.end(JSON.stringify(myObj));
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/ReadableStream/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('your page is ready, now listning to port 3000');