var fs = require('fs');

//Syncronous

// //for reading the files
// var readme = fs.readFileSync('./Reading and Writing Files/readMe.txt', 'utf8');
// console.log(readme);


// //for writing in files
// var readme = fs.readFileSync('./Reading and Writing Files/readMe.txt', 'utf8');
// fs.writeFileSync('./Reading and Writing Files/writeMe.txt', readme)



//asyncronous (using function with parameter)


//for reading files
fs.readFile('./Reading and Writing Files/readMe.txt', 'utf8', function(err, data){
    console.log(data);
});

// //for writing in files
// fs.readFile('./Reading and Writing Files/readMe.txt', 'utf8', function(err, data){
// fs.writeFile('./Reading and Writing Files/writeMe.txt', data);
// });
