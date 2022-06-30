const fs = require("fs");

// Function to get current filenames in directory
let filenames = fs.readdirSync('./');

console.log("\nFilenames in directory:");
filenames.forEach((file) => {
    if( file.endsWith(".js")){
        console.log("File:",file)
    }
    else if(file.endsWith(".txt")){
        console.log("File:", file)
    }
    else if(file.endsWith(".json")){
    }
    else{
        console.log("DIR:",file)
    }
});


// //another way to write this code
// path = require("path");

// var p = "./"
// fs.readdir(p, function (err, files) {
//     if (err) throw err;

//     files.forEach(function (file) {
//         if (fs.statSync(file).isDirectory()) console.log ("DIR: " + file);
//         else console.log("FILE: " + file);
//     });
// });
