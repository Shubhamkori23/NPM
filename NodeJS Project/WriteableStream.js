var http = require('http');
var fs = require('fs');

//if we didn't use utf8 so it give random chunks
var myReadStream = fs.createReadStream(__dirname + '/ReadableStream/ReadMe.txt', 'utf8');

//create new writeMe file and copy all the junk from ReadMe.txt file and paste in WriteMe file
var myWriteStream = fs.createWriteStream(__dirname + '/WriteableStream/writeMe.txt');


myReadStream.on('data', function(chunk){
    console.log('new chunk Received:');
    myWriteStream.write(chunk);
});