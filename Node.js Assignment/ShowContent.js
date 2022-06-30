var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/ShowContent/Read.txt', 'utf8'); 
//if we didn't use utf8 so it give random chunks

myReadStream.on('data', function(ReadFile){
    console.log('Reading the Files:');
    console.log(ReadFile);
});