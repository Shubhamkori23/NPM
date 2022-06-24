var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/ReadableStream/ReadMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk Received:');
    console.log(chunk);
});